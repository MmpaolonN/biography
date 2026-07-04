// Genera le icone PWA (PNG) senza dipendenze esterne: costruisce i byte PNG a mano
// (IHDR + IDAT deflate + IEND) disegnando pixel per pixel un semplice logo "schedario".
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function hexToRgb(hex) {
  const v = hex.replace("#", "");
  return [
    parseInt(v.slice(0, 2), 16),
    parseInt(v.slice(2, 4), 16),
    parseInt(v.slice(4, 6), 16),
  ];
}

const BG = hexToRgb("#1f2a24"); // verde inchiostro scuro
const CARD = hexToRgb("#f2e8d5"); // carta/pergamena
const LINE = hexToRgb("#8d7a55"); // riga testo
const ACCENT = hexToRgb("#c1553d"); // terracotta

function drawIcon(size) {
  const px = new Uint8ClampedArray(size * size * 4);

  const cardW = size * 0.64;
  const cardH = size * 0.46;
  const cardX = (size - cardW) / 2;
  const cardY = (size - cardH) / 2 + size * 0.03;
  const cardOffset = size * 0.045; // seconda scheda dietro, effetto "schedario"

  const accentCx = cardX + cardW - size * 0.03;
  const accentCy = cardY + size * 0.02;
  const accentR = size * 0.075;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = BG[0];
      let g = BG[1];
      let b = BG[2];
      let a = 255;

      // scheda posteriore (leggermente spostata), stesso tono ma più scuro
      const back2X = cardX + cardOffset * 2;
      const back2Y = cardY - cardOffset * 2;
      if (
        x >= back2X &&
        x <= back2X + cardW &&
        y >= back2Y &&
        y <= back2Y + cardH
      ) {
        r = 0xcf; g = 0xc2; b = 0xa2;
      }

      const backX = cardX + cardOffset;
      const backY = cardY - cardOffset;
      if (x >= backX && x <= backX + cardW && y >= backY && y <= backY + cardH) {
        r = 0xe2; g = 0xd6; b = 0xb8;
      }

      // scheda principale
      if (x >= cardX && x <= cardX + cardW && y >= cardY && y <= cardY + cardH) {
        r = CARD[0]; g = CARD[1]; b = CARD[2];

        const lineH = Math.max(1, size * 0.022);
        const lineInsetX = cardW * 0.14;
        const lines = [0.32, 0.52, 0.72];
        for (const lf of lines) {
          const ly = cardY + cardH * lf;
          if (
            y >= ly &&
            y <= ly + lineH &&
            x >= cardX + lineInsetX &&
            x <= cardX + cardW - lineInsetX * (lf === 0.32 ? 1.6 : 1)
          ) {
            r = LINE[0]; g = LINE[1]; b = LINE[2];
          }
        }
      }

      // pallino accento (timbro/tab)
      const dx = x - accentCx;
      const dy = y - accentCy;
      if (dx * dx + dy * dy <= accentR * accentR) {
        r = ACCENT[0]; g = ACCENT[1]; b = ACCENT[2];
      }

      const i = (y * size + x) * 4;
      px[i] = r;
      px[i + 1] = g;
      px[i + 2] = b;
      px[i + 3] = a;
    }
  }
  return px;
}

function encodePng(size) {
  const px = drawIcon(size);
  const stride = size * 4;
  const raw = Buffer.alloc((stride + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (stride + 1)] = 0; // filtro: nessuno
    for (let x = 0; x < stride; x++) {
      raw[y * (stride + 1) + 1 + x] = px[y * stride + x];
    }
  }
  const idatData = zlib.deflateSync(raw, { level: 9 });

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idatData),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const outDir = path.join(__dirname, "..", "public", "icons");
fs.mkdirSync(outDir, { recursive: true });

const sizes = [64, 180, 192, 512];
for (const size of sizes) {
  const buf = encodePng(size);
  const file = path.join(outDir, `icon-${size}.png`);
  fs.writeFileSync(file, buf);
  console.log(`Creata ${file} (${buf.length} byte)`);
}
