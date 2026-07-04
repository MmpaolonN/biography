interface IntestazioneProps {
  letti: number;
  totale: number;
  onReimposta: () => void;
  mostraReimposta: boolean;
}

export function Intestazione({
  letti,
  totale,
  onReimposta,
  mostraReimposta,
}: IntestazioneProps) {
  return (
    <header className="intestazione">
      <div className="intestazione-titolo">
        <h1>Ritratti</h1>
        <p className="intestazione-sottotitolo">
          Pesca personaggi celebri e scopri la loro storia su Wikipedia
        </p>
      </div>
      <div className="intestazione-azioni">
        <p className="contatore" aria-live="polite">
          Letti: <strong>{letti}</strong> / {totale}
        </p>
        {mostraReimposta && (
          <button
            type="button"
            className="bottone bottone-fantasma"
            onClick={onReimposta}
          >
            Reimposta cronologia
          </button>
        )}
      </div>
    </header>
  );
}
