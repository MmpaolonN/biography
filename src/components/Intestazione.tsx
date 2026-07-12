interface IntestazioneProps {
  letti: number;
  totale: number;
  onReimposta: () => void;
  mostraReimposta: boolean;
  onMostraLetti: () => void;
}

export function Intestazione({
  letti,
  totale,
  onReimposta,
  mostraReimposta,
  onMostraLetti,
}: IntestazioneProps) {
  return (
    <header className="intestazione">
      <div className="intestazione-titolo">
        <h1>Ritratti</h1>
        <p className="intestazione-sottotitolo">
          Pesca personaggi celebri e scopri la loro storia
        </p>
      </div>
      <div className="intestazione-azioni">
        <p className="contatore" aria-live="polite">
          Letti: <strong>{letti}</strong> / {totale}
        </p>
        <div className="intestazione-bottoni">
          {mostraReimposta && (
            <button
              type="button"
              className="bottone bottone-fantasma"
              onClick={onMostraLetti}
            >
              Le tue letture
            </button>
          )}
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
      </div>
    </header>
  );
}
