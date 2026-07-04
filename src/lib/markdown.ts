function escapeHtml(testo: string): string {
  return testo
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formattaInline(testo: string): string {
  let risultato = escapeHtml(testo);
  risultato = risultato.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  risultato = risultato.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");
  return risultato.replace(/\n/g, "<br />");
}

/**
 * Converte un sottoinsieme minimale di Markdown (paragrafi, ## titoli,
 * > citazioni, **grassetto**, *corsivo*) in HTML. Pensato per contenuti
 * statici scritti internamente, non per input arbitrario dell'utente.
 */
export function renderizzaMarkdown(markdown: string): string {
  const blocchi = markdown.trim().split(/\n\s*\n/);

  return blocchi
    .map((blocco) => {
      const testo = blocco.trim();
      if (testo.startsWith("## ")) {
        return `<h3>${formattaInline(testo.slice(3))}</h3>`;
      }
      if (testo.startsWith("> ")) {
        return `<blockquote>${formattaInline(
          testo
            .split("\n")
            .map((riga) => riga.replace(/^>\s?/, ""))
            .join("\n"),
        )}</blockquote>`;
      }
      return `<p>${formattaInline(testo)}</p>`;
    })
    .join("\n");
}
