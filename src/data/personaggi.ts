export type Categoria =
  | "Scienziato"
  | "Filosofo"
  | "Attivista"
  | "Politico"
  | "Persona attuale"
  | "Azienda";

export interface Personaggio {
  id: string;
  nome: string;
  categoria: Categoria;
  /** Presente per le categorie storiche: link alla voce di Wikipedia in italiano */
  url?: string;
  /**
   * Presente per le categorie curate (Persona attuale, Azienda): il contenuto
   * viene mostrato dentro l'app invece di aprire un link esterno. Il file
   * corrispondente vive in src/data/contenuti/<categoria-cartella>/<id>.md
   */
  contenutoCurato?: boolean;
  /** 1 = più famoso, numeri crescenti = meno famoso */
  fama: number;
}

const WIKI = "https://it.wikipedia.org/wiki/";

export const personaggi: Personaggio[] = [
  // ===================== SCIENZIATI (80 · 40%) =====================
  { id: "albert-einstein", nome: "Albert Einstein", categoria: "Scienziato", url: WIKI + "Albert_Einstein", fama: 1 },
  { id: "isaac-newton", nome: "Isaac Newton", categoria: "Scienziato", url: WIKI + "Isaac_Newton", fama: 1 },
  { id: "galileo-galilei", nome: "Galileo Galilei", categoria: "Scienziato", url: WIKI + "Galileo_Galilei", fama: 1 },
  { id: "charles-darwin", nome: "Charles Darwin", categoria: "Scienziato", url: WIKI + "Charles_Darwin", fama: 1 },
  { id: "marie-curie", nome: "Marie Curie", categoria: "Scienziato", url: WIKI + "Marie_Curie", fama: 1 },
  { id: "leonardo-da-vinci", nome: "Leonardo da Vinci", categoria: "Scienziato", url: WIKI + "Leonardo_da_Vinci", fama: 1 },

  { id: "nikola-tesla", nome: "Nikola Tesla", categoria: "Scienziato", url: WIKI + "Nikola_Tesla", fama: 2 },
  { id: "alan-turing", nome: "Alan Turing", categoria: "Scienziato", url: WIKI + "Alan_Turing", fama: 2 },
  { id: "alessandro-volta", nome: "Alessandro Volta", categoria: "Scienziato", url: WIKI + "Alessandro_Volta", fama: 2 },
  { id: "louis-pasteur", nome: "Louis Pasteur", categoria: "Scienziato", url: WIKI + "Louis_Pasteur", fama: 2 },
  { id: "ada-lovelace", nome: "Ada Lovelace", categoria: "Scienziato", url: WIKI + "Ada_Lovelace", fama: 2 },

  { id: "enrico-fermi", nome: "Enrico Fermi", categoria: "Scienziato", url: WIKI + "Enrico_Fermi", fama: 3 },
  { id: "guglielmo-marconi", nome: "Guglielmo Marconi", categoria: "Scienziato", url: WIKI + "Guglielmo_Marconi", fama: 3 },
  { id: "niccolo-copernico", nome: "Niccolò Copernico", categoria: "Scienziato", url: WIKI + "Niccolò_Copernico", fama: 3 },
  { id: "rosalind-franklin", nome: "Rosalind Franklin", categoria: "Scienziato", url: WIKI + "Rosalind_Franklin", fama: 3 },

  { id: "michael-faraday", nome: "Michael Faraday", categoria: "Scienziato", url: WIKI + "Michael_Faraday", fama: 4 },
  { id: "james-clerk-maxwell", nome: "James Clerk Maxwell", categoria: "Scienziato", url: WIKI + "James_Clerk_Maxwell", fama: 4 },
  { id: "werner-heisenberg", nome: "Werner Heisenberg", categoria: "Scienziato", url: WIKI + "Werner_Heisenberg", fama: 4 },
  { id: "niels-bohr", nome: "Niels Bohr", categoria: "Scienziato", url: WIKI + "Niels_Bohr", fama: 4 },
  { id: "max-planck", nome: "Max Planck", categoria: "Scienziato", url: WIKI + "Max_Planck", fama: 4 },
  { id: "stephen-hawking", nome: "Stephen Hawking", categoria: "Scienziato", url: WIKI + "Stephen_Hawking", fama: 4 },
  { id: "gregor-mendel", nome: "Gregor Mendel", categoria: "Scienziato", url: WIKI + "Gregor_Mendel", fama: 4 },
  { id: "dmitrij-mendeleev", nome: "Dmitrij Mendeleev", categoria: "Scienziato", url: WIKI + "Dmitrij_Ivanovič_Mendeleev", fama: 4 },
  { id: "charles-babbage", nome: "Charles Babbage", categoria: "Scienziato", url: WIKI + "Charles_Babbage", fama: 4 },
  { id: "ernest-rutherford", nome: "Ernest Rutherford", categoria: "Scienziato", url: WIKI + "Ernest_Rutherford", fama: 4 },
  { id: "alexander-graham-bell", nome: "Alexander Graham Bell", categoria: "Scienziato", url: WIKI + "Alexander_Graham_Bell", fama: 4 },

  { id: "archimede", nome: "Archimede", categoria: "Scienziato", url: WIKI + "Archimede", fama: 5 },
  { id: "euclide", nome: "Euclide", categoria: "Scienziato", url: WIKI + "Euclide", fama: 5 },
  { id: "ipazia", nome: "Ipazia", categoria: "Scienziato", url: WIKI + "Ipazia", fama: 5 },
  { id: "leonhard-euler", nome: "Leonhard Euler", categoria: "Scienziato", url: WIKI + "Leonhard_Euler", fama: 5 },
  { id: "carl-friedrich-gauss", nome: "Carl Friedrich Gauss", categoria: "Scienziato", url: WIKI + "Carl_Friedrich_Gauss", fama: 5 },
  { id: "antoine-lavoisier", nome: "Antoine Lavoisier", categoria: "Scienziato", url: WIKI + "Antoine-Laurent_de_Lavoisier", fama: 5 },
  { id: "thomas-edison", nome: "Thomas Edison", categoria: "Scienziato", url: WIKI + "Thomas_Edison", fama: 5 },
  { id: "benjamin-franklin", nome: "Benjamin Franklin", categoria: "Scienziato", url: WIKI + "Benjamin_Franklin", fama: 5 },
  { id: "al-khwarizmi", nome: "Al-Khwarizmi", categoria: "Scienziato", url: WIKI + "Al-Khwarizmi", fama: 5 },
  { id: "francis-crick", nome: "Francis Crick", categoria: "Scienziato", url: WIKI + "Francis_Crick", fama: 5 },
  { id: "james-watson", nome: "James Watson", categoria: "Scienziato", url: WIKI + "James_Watson", fama: 5 },
  { id: "emmy-noether", nome: "Emmy Noether", categoria: "Scienziato", url: WIKI + "Emmy_Noether", fama: 5 },

  { id: "rita-levi-montalcini", nome: "Rita Levi-Montalcini", categoria: "Scienziato", url: WIKI + "Rita_Levi-Montalcini", fama: 6 },
  { id: "wernher-von-braun", nome: "Wernher von Braun", categoria: "Scienziato", url: WIKI + "Wernher_von_Braun", fama: 6 },
  { id: "robert-oppenheimer", nome: "Robert Oppenheimer", categoria: "Scienziato", url: WIKI + "Robert_Oppenheimer", fama: 6 },
  { id: "erwin-schrodinger", nome: "Erwin Schrödinger", categoria: "Scienziato", url: WIKI + "Erwin_Schrödinger", fama: 6 },
  { id: "paul-dirac", nome: "Paul Dirac", categoria: "Scienziato", url: WIKI + "Paul_Dirac", fama: 6 },
  { id: "richard-feynman", nome: "Richard Feynman", categoria: "Scienziato", url: WIKI + "Richard_Feynman", fama: 6 },
  { id: "john-von-neumann", nome: "John von Neumann", categoria: "Scienziato", url: WIKI + "John_von_Neumann", fama: 6 },
  { id: "alexander-fleming", nome: "Alexander Fleming", categoria: "Scienziato", url: WIKI + "Alexander_Fleming", fama: 6 },
  { id: "edward-jenner", nome: "Edward Jenner", categoria: "Scienziato", url: WIKI + "Edward_Jenner", fama: 6 },
  { id: "sigmund-freud", nome: "Sigmund Freud", categoria: "Scienziato", url: WIKI + "Sigmund_Freud", fama: 6 },
  { id: "claudio-tolomeo", nome: "Claudio Tolomeo", categoria: "Scienziato", url: WIKI + "Claudio_Tolomeo", fama: 6 },
  { id: "ippocrate", nome: "Ippocrate", categoria: "Scienziato", url: WIKI + "Ippocrate", fama: 6 },
  { id: "evangelista-torricelli", nome: "Evangelista Torricelli", categoria: "Scienziato", url: WIKI + "Evangelista_Torricelli", fama: 6 },
  { id: "luigi-galvani", nome: "Luigi Galvani", categoria: "Scienziato", url: WIKI + "Luigi_Galvani", fama: 6 },
  { id: "antonie-van-leeuwenhoek", nome: "Antonie van Leeuwenhoek", categoria: "Scienziato", url: WIKI + "Antonie_van_Leeuwenhoek", fama: 6 },
  { id: "johannes-kepler", nome: "Johannes Kepler", categoria: "Scienziato", url: WIKI + "Johannes_Kepler", fama: 6 },
  { id: "linus-pauling", nome: "Linus Pauling", categoria: "Scienziato", url: WIKI + "Linus_Pauling", fama: 6 },
  { id: "tycho-brahe", nome: "Tycho Brahe", categoria: "Scienziato", url: WIKI + "Tycho_Brahe", fama: 6 },
  { id: "christiaan-huygens", nome: "Christiaan Huygens", categoria: "Scienziato", url: WIKI + "Christiaan_Huygens", fama: 6 },
  { id: "robert-hooke", nome: "Robert Hooke", categoria: "Scienziato", url: WIKI + "Robert_Hooke", fama: 6 },
  { id: "henri-becquerel", nome: "Henri Becquerel", categoria: "Scienziato", url: WIKI + "Henri_Becquerel", fama: 6 },
  { id: "joseph-john-thomson", nome: "Joseph John Thomson", categoria: "Scienziato", url: WIKI + "Joseph_John_Thomson", fama: 6 },
  { id: "james-watt", nome: "James Watt", categoria: "Scienziato", url: WIKI + "James_Watt", fama: 6 },
  { id: "samuel-morse", nome: "Samuel Morse", categoria: "Scienziato", url: WIKI + "Samuel_Morse", fama: 6 },
  { id: "grace-hopper", nome: "Grace Hopper", categoria: "Scienziato", url: WIKI + "Grace_Hopper", fama: 6 },
  { id: "tim-berners-lee", nome: "Tim Berners-Lee", categoria: "Scienziato", url: WIKI + "Tim_Berners-Lee", fama: 6 },
  { id: "norman-borlaug", nome: "Norman Borlaug", categoria: "Scienziato", url: WIKI + "Norman_Borlaug", fama: 6 },
  { id: "jonas-salk", nome: "Jonas Salk", categoria: "Scienziato", url: WIKI + "Jonas_Salk", fama: 6 },
  { id: "barbara-mcclintock", nome: "Barbara McClintock", categoria: "Scienziato", url: WIKI + "Barbara_McClintock", fama: 6 },
  { id: "dorothy-hodgkin", nome: "Dorothy Hodgkin", categoria: "Scienziato", url: WIKI + "Dorothy_Hodgkin", fama: 6 },
  { id: "srinivasa-ramanujan", nome: "Srinivasa Ramanujan", categoria: "Scienziato", url: WIKI + "Srinivasa_Ramanujan", fama: 6 },
  { id: "william-harvey", nome: "William Harvey", categoria: "Scienziato", url: WIKI + "William_Harvey", fama: 6 },
  { id: "andrea-vesalio", nome: "Andrea Vesalio", categoria: "Scienziato", url: WIKI + "Andrea_Vesalio", fama: 6 },
  { id: "paracelso", nome: "Paracelso", categoria: "Scienziato", url: WIKI + "Paracelso", fama: 6 },
  { id: "robert-boyle", nome: "Robert Boyle", categoria: "Scienziato", url: WIKI + "Robert_Boyle", fama: 6 },
  { id: "john-dalton", nome: "John Dalton", categoria: "Scienziato", url: WIKI + "John_Dalton", fama: 6 },
  { id: "amedeo-avogadro", nome: "Amedeo Avogadro", categoria: "Scienziato", url: WIKI + "Amedeo_Avogadro", fama: 6 },
  { id: "joseph-priestley", nome: "Joseph Priestley", categoria: "Scienziato", url: WIKI + "Joseph_Priestley", fama: 6 },
  { id: "humphry-davy", nome: "Humphry Davy", categoria: "Scienziato", url: WIKI + "Humphry_Davy", fama: 6 },
  { id: "karl-landsteiner", nome: "Karl Landsteiner", categoria: "Scienziato", url: WIKI + "Karl_Landsteiner", fama: 6 },
  { id: "alexander-von-humboldt", nome: "Alexander von Humboldt", categoria: "Scienziato", url: WIKI + "Alexander_von_Humboldt", fama: 6 },
  { id: "georges-cuvier", nome: "Georges Cuvier", categoria: "Scienziato", url: WIKI + "Georges_Cuvier", fama: 6 },

  // ===================== FILOSOFI (40 · 20%) =====================
  { id: "socrate", nome: "Socrate", categoria: "Filosofo", url: WIKI + "Socrate", fama: 1 },
  { id: "platone", nome: "Platone", categoria: "Filosofo", url: WIKI + "Platone", fama: 1 },
  { id: "aristotele", nome: "Aristotele", categoria: "Filosofo", url: WIKI + "Aristotele", fama: 1 },
  { id: "immanuel-kant", nome: "Immanuel Kant", categoria: "Filosofo", url: WIKI + "Immanuel_Kant", fama: 1 },
  { id: "friedrich-nietzsche", nome: "Friedrich Nietzsche", categoria: "Filosofo", url: WIKI + "Friedrich_Nietzsche", fama: 1 },

  { id: "karl-marx", nome: "Karl Marx", categoria: "Filosofo", url: WIKI + "Karl_Marx", fama: 2 },
  { id: "cartesio", nome: "Cartesio", categoria: "Filosofo", url: WIKI + "Cartesio", fama: 2 },
  { id: "voltaire", nome: "Voltaire", categoria: "Filosofo", url: WIKI + "Voltaire", fama: 2 },
  { id: "jean-jacques-rousseau", nome: "Jean-Jacques Rousseau", categoria: "Filosofo", url: WIKI + "Jean-Jacques_Rousseau", fama: 2 },
  { id: "niccolo-machiavelli", nome: "Niccolò Machiavelli", categoria: "Filosofo", url: WIKI + "Niccolò_Machiavelli", fama: 2 },

  { id: "baruch-spinoza", nome: "Baruch Spinoza", categoria: "Filosofo", url: WIKI + "Baruch_Spinoza", fama: 3 },
  { id: "arthur-schopenhauer", nome: "Arthur Schopenhauer", categoria: "Filosofo", url: WIKI + "Arthur_Schopenhauer", fama: 3 },
  { id: "tommaso-d-aquino", nome: "Tommaso d'Aquino", categoria: "Filosofo", url: WIKI + "Tommaso_d'Aquino", fama: 3 },

  { id: "confucio", nome: "Confucio", categoria: "Filosofo", url: WIKI + "Confucio", fama: 4 },
  { id: "sant-agostino", nome: "Sant'Agostino", categoria: "Filosofo", url: WIKI + "Agostino_d'Ippona", fama: 4 },
  { id: "hegel", nome: "Georg Wilhelm Friedrich Hegel", categoria: "Filosofo", url: WIKI + "Georg_Wilhelm_Friedrich_Hegel", fama: 4 },
  { id: "john-locke", nome: "John Locke", categoria: "Filosofo", url: WIKI + "John_Locke", fama: 4 },
  { id: "david-hume", nome: "David Hume", categoria: "Filosofo", url: WIKI + "David_Hume", fama: 4 },
  { id: "thomas-hobbes", nome: "Thomas Hobbes", categoria: "Filosofo", url: WIKI + "Thomas_Hobbes", fama: 4 },
  { id: "blaise-pascal", nome: "Blaise Pascal", categoria: "Filosofo", url: WIKI + "Blaise_Pascal", fama: 4 },
  { id: "soren-kierkegaard", nome: "Søren Kierkegaard", categoria: "Filosofo", url: WIKI + "Søren_Kierkegaard", fama: 4 },

  { id: "epicuro", nome: "Epicuro", categoria: "Filosofo", url: WIKI + "Epicuro", fama: 5 },
  { id: "seneca", nome: "Seneca", categoria: "Filosofo", url: WIKI + "Lucio_Anneo_Seneca", fama: 5 },
  { id: "diogene-di-sinope", nome: "Diogene di Sinope", categoria: "Filosofo", url: WIKI + "Diogene_di_Sinope", fama: 5 },
  { id: "francesco-bacone", nome: "Francesco Bacone", categoria: "Filosofo", url: WIKI + "Francesco_Bacone", fama: 5 },
  { id: "leibniz", nome: "Gottfried Wilhelm von Leibniz", categoria: "Filosofo", url: WIKI + "Gottfried_Wilhelm_von_Leibniz", fama: 5 },
  { id: "michel-de-montaigne", nome: "Michel de Montaigne", categoria: "Filosofo", url: WIKI + "Michel_de_Montaigne", fama: 5 },
  { id: "simone-de-beauvoir", nome: "Simone de Beauvoir", categoria: "Filosofo", url: WIKI + "Simone_de_Beauvoir", fama: 5 },
  { id: "jean-paul-sartre", nome: "Jean-Paul Sartre", categoria: "Filosofo", url: WIKI + "Jean-Paul_Sartre", fama: 5 },

  { id: "eraclito", nome: "Eraclito", categoria: "Filosofo", url: WIKI + "Eraclito", fama: 6 },
  { id: "pitagora", nome: "Pitagora", categoria: "Filosofo", url: WIKI + "Pitagora", fama: 6 },
  { id: "zenone-di-elea", nome: "Zenone di Elea", categoria: "Filosofo", url: WIKI + "Zenone_di_Elea", fama: 6 },
  { id: "epitteto", nome: "Epitteto", categoria: "Filosofo", url: WIKI + "Epitteto", fama: 6 },
  { id: "plotino", nome: "Plotino", categoria: "Filosofo", url: WIKI + "Plotino", fama: 6 },
  { id: "averroe", nome: "Averroè", categoria: "Filosofo", url: WIKI + "Averroè", fama: 6 },
  { id: "avicenna", nome: "Avicenna", categoria: "Filosofo", url: WIKI + "Avicenna", fama: 6 },
  { id: "erasmo-da-rotterdam", nome: "Erasmo da Rotterdam", categoria: "Filosofo", url: WIKI + "Erasmo_da_Rotterdam", fama: 6 },
  { id: "giordano-bruno", nome: "Giordano Bruno", categoria: "Filosofo", url: WIKI + "Giordano_Bruno", fama: 6 },
  { id: "john-stuart-mill", nome: "John Stuart Mill", categoria: "Filosofo", url: WIKI + "John_Stuart_Mill", fama: 6 },
  { id: "auguste-comte", nome: "Auguste Comte", categoria: "Filosofo", url: WIKI + "Auguste_Comte", fama: 6 },

  // ===================== ATTIVISTI (40 · 20%) =====================
  { id: "mahatma-gandhi", nome: "Mahatma Gandhi", categoria: "Attivista", url: WIKI + "Mahatma_Gandhi", fama: 1 },
  { id: "nelson-mandela", nome: "Nelson Mandela", categoria: "Attivista", url: WIKI + "Nelson_Mandela", fama: 1 },
  { id: "martin-luther-king", nome: "Martin Luther King", categoria: "Attivista", url: WIKI + "Martin_Luther_King", fama: 1 },
  { id: "rosa-parks", nome: "Rosa Parks", categoria: "Attivista", url: WIKI + "Rosa_Parks", fama: 1 },

  { id: "che-guevara", nome: "Che Guevara", categoria: "Attivista", url: WIKI + "Che_Guevara", fama: 2 },
  { id: "malcolm-x", nome: "Malcolm X", categoria: "Attivista", url: WIKI + "Malcolm_X", fama: 2 },
  { id: "malala-yousafzai", nome: "Malala Yousafzai", categoria: "Attivista", url: WIKI + "Malala_Yousafzai", fama: 2 },
  { id: "greta-thunberg", nome: "Greta Thunberg", categoria: "Attivista", url: WIKI + "Greta_Thunberg", fama: 2 },

  { id: "emmeline-pankhurst", nome: "Emmeline Pankhurst", categoria: "Attivista", url: WIKI + "Emmeline_Pankhurst", fama: 3 },
  { id: "harriet-tubman", nome: "Harriet Tubman", categoria: "Attivista", url: WIKI + "Harriet_Tubman", fama: 3 },
  { id: "frederick-douglass", nome: "Frederick Douglass", categoria: "Attivista", url: WIKI + "Frederick_Douglass", fama: 3 },

  { id: "cesar-chavez", nome: "César Chávez", categoria: "Attivista", url: WIKI + "César_Chávez", fama: 4 },
  { id: "desmond-tutu", nome: "Desmond Tutu", categoria: "Attivista", url: WIKI + "Desmond_Tutu", fama: 4 },
  { id: "aung-san-suu-kyi", nome: "Aung San Suu Kyi", categoria: "Attivista", url: WIKI + "Aung_San_Suu_Kyi", fama: 4 },
  { id: "wangari-maathai", nome: "Wangari Maathai", categoria: "Attivista", url: WIKI + "Wangari_Maathai", fama: 4 },
  { id: "rigoberta-menchu", nome: "Rigoberta Menchú", categoria: "Attivista", url: WIKI + "Rigoberta_Menchú", fama: 4 },
  { id: "sophie-scholl", nome: "Sophie Scholl", categoria: "Attivista", url: WIKI + "Sophie_Scholl", fama: 4 },
  { id: "vaclav-havel", nome: "Václav Havel", categoria: "Attivista", url: WIKI + "Václav_Havel", fama: 4 },
  { id: "rosa-luxemburg", nome: "Rosa Luxemburg", categoria: "Attivista", url: WIKI + "Rosa_Luxemburg", fama: 4 },

  { id: "susan-b-anthony", nome: "Susan B. Anthony", categoria: "Attivista", url: WIKI + "Susan_B._Anthony", fama: 5 },
  { id: "dietrich-bonhoeffer", nome: "Dietrich Bonhoeffer", categoria: "Attivista", url: WIKI + "Dietrich_Bonhoeffer", fama: 5 },
  { id: "raoul-wallenberg", nome: "Raoul Wallenberg", categoria: "Attivista", url: WIKI + "Raoul_Wallenberg", fama: 5 },
  { id: "dolores-huerta", nome: "Dolores Huerta", categoria: "Attivista", url: WIKI + "Dolores_Huerta", fama: 5 },
  { id: "harvey-milk", nome: "Harvey Milk", categoria: "Attivista", url: WIKI + "Harvey_Milk", fama: 5 },
  { id: "andrej-sacharov", nome: "Andrej Sacharov", categoria: "Attivista", url: WIKI + "Andrej_Sacharov", fama: 5 },
  { id: "lech-walesa", nome: "Lech Wałęsa", categoria: "Attivista", url: WIKI + "Lech_Wałęsa", fama: 5 },
  { id: "liu-xiaobo", nome: "Liu Xiaobo", categoria: "Attivista", url: WIKI + "Liu_Xiaobo", fama: 5 },

  { id: "ai-weiwei", nome: "Ai Weiwei", categoria: "Attivista", url: WIKI + "Ai_Weiwei", fama: 6 },
  { id: "william-wilberforce", nome: "William Wilberforce", categoria: "Attivista", url: WIKI + "William_Wilberforce", fama: 6 },
  { id: "mary-wollstonecraft", nome: "Mary Wollstonecraft", categoria: "Attivista", url: WIKI + "Mary_Wollstonecraft", fama: 6 },
  { id: "emma-goldman", nome: "Emma Goldman", categoria: "Attivista", url: WIKI + "Emma_Goldman", fama: 6 },
  { id: "angela-davis", nome: "Angela Davis", categoria: "Attivista", url: WIKI + "Angela_Davis", fama: 6 },
  { id: "bartolome-de-las-casas", nome: "Bartolomé de las Casas", categoria: "Attivista", url: WIKI + "Bartolomé_de_las_Casas", fama: 6 },
  { id: "jane-addams", nome: "Jane Addams", categoria: "Attivista", url: WIKI + "Jane_Addams", fama: 6 },
  { id: "toro-seduto", nome: "Toro Seduto", categoria: "Attivista", url: WIKI + "Toro_Seduto", fama: 6 },
  { id: "geronimo", nome: "Geronimo", categoria: "Attivista", url: WIKI + "Geronimo", fama: 6 },
  { id: "steve-biko", nome: "Steve Biko", categoria: "Attivista", url: WIKI + "Steve_Biko", fama: 6 },
  { id: "thomas-sankara", nome: "Thomas Sankara", categoria: "Attivista", url: WIKI + "Thomas_Sankara", fama: 6 },
  { id: "oscar-romero", nome: "Óscar Romero", categoria: "Attivista", url: WIKI + "Óscar_Romero", fama: 6 },
  { id: "vandana-shiva", nome: "Vandana Shiva", categoria: "Attivista", url: WIKI + "Vandana_Shiva", fama: 6 },

  // ===================== POLITICI (40 · 20%) =====================
  { id: "winston-churchill", nome: "Winston Churchill", categoria: "Politico", url: WIKI + "Winston_Churchill", fama: 1 },
  { id: "abraham-lincoln", nome: "Abraham Lincoln", categoria: "Politico", url: WIKI + "Abraham_Lincoln", fama: 1 },
  { id: "napoleone-bonaparte", nome: "Napoleone Bonaparte", categoria: "Politico", url: WIKI + "Napoleone_Bonaparte", fama: 1 },

  { id: "giuseppe-garibaldi", nome: "Giuseppe Garibaldi", categoria: "Politico", url: WIKI + "Giuseppe_Garibaldi", fama: 2 },
  { id: "george-washington", nome: "George Washington", categoria: "Politico", url: WIKI + "George_Washington", fama: 2 },
  { id: "lenin", nome: "Vladimir Lenin", categoria: "Politico", url: WIKI + "Lenin", fama: 2 },

  { id: "otto-von-bismarck", nome: "Otto von Bismarck", categoria: "Politico", url: WIKI + "Otto_von_Bismarck", fama: 3 },
  { id: "camillo-cavour", nome: "Camillo Benso, conte di Cavour", categoria: "Politico", url: WIKI + "Camillo_Benso,_conte_di_Cavour", fama: 3 },

  { id: "franklin-delano-roosevelt", nome: "Franklin Delano Roosevelt", categoria: "Politico", url: WIKI + "Franklin_Delano_Roosevelt", fama: 4 },
  { id: "john-fitzgerald-kennedy", nome: "John Fitzgerald Kennedy", categoria: "Politico", url: WIKI + "John_Fitzgerald_Kennedy", fama: 4 },
  { id: "margaret-thatcher", nome: "Margaret Thatcher", categoria: "Politico", url: WIKI + "Margaret_Thatcher", fama: 4 },
  { id: "charles-de-gaulle", nome: "Charles de Gaulle", categoria: "Politico", url: WIKI + "Charles_de_Gaulle", fama: 4 },
  { id: "mao-zedong", nome: "Mao Zedong", categoria: "Politico", url: WIKI + "Mao_Zedong", fama: 4 },
  { id: "josip-broz-tito", nome: "Josip Broz Tito", categoria: "Politico", url: WIKI + "Josip_Broz_Tito", fama: 4 },
  { id: "simon-bolivar", nome: "Simón Bolívar", categoria: "Politico", url: WIKI + "Simón_Bolívar", fama: 4 },
  { id: "thomas-jefferson", nome: "Thomas Jefferson", categoria: "Politico", url: WIKI + "Thomas_Jefferson", fama: 4 },

  { id: "robespierre", nome: "Maximilien de Robespierre", categoria: "Politico", url: WIKI + "Maximilien_de_Robespierre", fama: 5 },
  { id: "jean-jaures", nome: "Jean Jaurès", categoria: "Politico", url: WIKI + "Jean_Jaurès", fama: 5 },
  { id: "willy-brandt", nome: "Willy Brandt", categoria: "Politico", url: WIKI + "Willy_Brandt", fama: 5 },
  { id: "golda-meir", nome: "Golda Meir", categoria: "Politico", url: WIKI + "Golda_Meir", fama: 5 },
  { id: "indira-gandhi", nome: "Indira Gandhi", categoria: "Politico", url: WIKI + "Indira_Gandhi", fama: 5 },
  { id: "deng-xiaoping", nome: "Deng Xiaoping", categoria: "Politico", url: WIKI + "Deng_Xiaoping", fama: 5 },
  { id: "aldo-moro", nome: "Aldo Moro", categoria: "Politico", url: WIKI + "Aldo_Moro", fama: 5 },
  { id: "alcide-de-gasperi", nome: "Alcide De Gasperi", categoria: "Politico", url: WIKI + "Alcide_De_Gasperi", fama: 5 },

  { id: "palmiro-togliatti", nome: "Palmiro Togliatti", categoria: "Politico", url: WIKI + "Palmiro_Togliatti", fama: 6 },
  { id: "sandro-pertini", nome: "Sandro Pertini", categoria: "Politico", url: WIKI + "Sandro_Pertini", fama: 6 },
  { id: "giovanni-giolitti", nome: "Giovanni Giolitti", categoria: "Politico", url: WIKI + "Giovanni_Giolitti", fama: 6 },
  { id: "benito-mussolini", nome: "Benito Mussolini", categoria: "Politico", url: WIKI + "Benito_Mussolini", fama: 6 },
  { id: "francisco-franco", nome: "Francisco Franco", categoria: "Politico", url: WIKI + "Francisco_Franco", fama: 6 },
  { id: "fidel-castro", nome: "Fidel Castro", categoria: "Politico", url: WIKI + "Fidel_Castro", fama: 6 },
  { id: "ho-chi-minh", nome: "Ho Chi Minh", categoria: "Politico", url: WIKI + "Ho_Chi_Minh", fama: 6 },
  { id: "konrad-adenauer", nome: "Konrad Adenauer", categoria: "Politico", url: WIKI + "Konrad_Adenauer", fama: 6 },
  { id: "helmut-kohl", nome: "Helmut Kohl", categoria: "Politico", url: WIKI + "Helmut_Kohl", fama: 6 },
  { id: "angela-merkel", nome: "Angela Merkel", categoria: "Politico", url: WIKI + "Angela_Merkel", fama: 6 },
  { id: "barack-obama", nome: "Barack Obama", categoria: "Politico", url: WIKI + "Barack_Obama", fama: 6 },
  { id: "ronald-reagan", nome: "Ronald Reagan", categoria: "Politico", url: WIKI + "Ronald_Reagan", fama: 6 },
  { id: "bill-clinton", nome: "Bill Clinton", categoria: "Politico", url: WIKI + "Bill_Clinton", fama: 6 },
  { id: "talleyrand", nome: "Talleyrand", categoria: "Politico", url: WIKI + "Talleyrand", fama: 6 },
  { id: "metternich", nome: "Klemens von Metternich", categoria: "Politico", url: WIKI + "Klemens_von_Metternich", fama: 6 },
  { id: "anwar-al-sadat", nome: "Anwar al-Sadat", categoria: "Politico", url: WIKI + "Anwar_al-Sadat", fama: 6 },

  // ===================== PERSONE ATTUALI (30 · contenuto curato) =====================
  // Big data applicato a intelligenza artificiale, psicologia, genomica e
  // longevità, elaborazione del linguaggio naturale, neuroscienze.
  { id: "demis-hassabis", nome: "Demis Hassabis", categoria: "Persona attuale", contenutoCurato: true, fama: 1 },
  { id: "elon-musk", nome: "Elon Musk", categoria: "Persona attuale", contenutoCurato: true, fama: 1 },
  { id: "sam-altman", nome: "Sam Altman", categoria: "Persona attuale", contenutoCurato: true, fama: 1 },
  { id: "geoffrey-hinton", nome: "Geoffrey Hinton", categoria: "Persona attuale", contenutoCurato: true, fama: 1 },
  { id: "jennifer-doudna", nome: "Jennifer Doudna", categoria: "Persona attuale", contenutoCurato: true, fama: 1 },

  { id: "yann-lecun", nome: "Yann LeCun", categoria: "Persona attuale", contenutoCurato: true, fama: 2 },
  { id: "yoshua-bengio", nome: "Yoshua Bengio", categoria: "Persona attuale", contenutoCurato: true, fama: 2 },
  { id: "dario-amodei", nome: "Dario Amodei", categoria: "Persona attuale", contenutoCurato: true, fama: 2 },
  { id: "ilya-sutskever", nome: "Ilya Sutskever", categoria: "Persona attuale", contenutoCurato: true, fama: 2 },
  { id: "emmanuelle-charpentier", nome: "Emmanuelle Charpentier", categoria: "Persona attuale", contenutoCurato: true, fama: 2 },

  { id: "fei-fei-li", nome: "Fei-Fei Li", categoria: "Persona attuale", contenutoCurato: true, fama: 3 },
  { id: "andrew-ng", nome: "Andrew Ng", categoria: "Persona attuale", contenutoCurato: true, fama: 3 },
  { id: "david-sinclair", nome: "David Sinclair", categoria: "Persona attuale", contenutoCurato: true, fama: 3 },
  { id: "craig-venter", nome: "Craig Venter", categoria: "Persona attuale", contenutoCurato: true, fama: 3 },
  { id: "mustafa-suleyman", nome: "Mustafa Suleyman", categoria: "Persona attuale", contenutoCurato: true, fama: 3 },

  { id: "george-church", nome: "George Church", categoria: "Persona attuale", contenutoCurato: true, fama: 4 },
  { id: "feng-zhang", nome: "Feng Zhang", categoria: "Persona attuale", contenutoCurato: true, fama: 4 },
  { id: "anne-wojcicki", nome: "Anne Wojcicki", categoria: "Persona attuale", contenutoCurato: true, fama: 4 },
  { id: "jeff-dean", nome: "Jeff Dean", categoria: "Persona attuale", contenutoCurato: true, fama: 4 },
  { id: "timnit-gebru", nome: "Timnit Gebru", categoria: "Persona attuale", contenutoCurato: true, fama: 4 },

  { id: "cynthia-kenyon", nome: "Cynthia Kenyon", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },
  { id: "daphne-koller", nome: "Daphne Koller", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },
  { id: "karl-deisseroth", nome: "Karl Deisseroth", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },
  { id: "miguel-nicolelis", nome: "Miguel Nicolelis", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },
  { id: "christof-koch", nome: "Christof Koch", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },
  { id: "robert-plomin", nome: "Robert Plomin", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },
  { id: "lisa-feldman-barrett", nome: "Lisa Feldman Barrett", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },
  { id: "eric-topol", nome: "Eric Topol", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },
  { id: "christopher-manning", nome: "Christopher Manning", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },
  { id: "percy-liang", nome: "Percy Liang", categoria: "Persona attuale", contenutoCurato: true, fama: 5 },

  // ===================== AZIENDE (40 · contenuto curato) =====================
  { id: "openai", nome: "OpenAI", categoria: "Azienda", contenutoCurato: true, fama: 1 },
  { id: "google-deepmind", nome: "Google DeepMind", categoria: "Azienda", contenutoCurato: true, fama: 1 },
  { id: "anthropic", nome: "Anthropic", categoria: "Azienda", contenutoCurato: true, fama: 1 },
  { id: "neuralink", nome: "Neuralink", categoria: "Azienda", contenutoCurato: true, fama: 1 },
  { id: "23andme", nome: "23andMe", categoria: "Azienda", contenutoCurato: true, fama: 1 },

  { id: "meta-ai", nome: "Meta AI (FAIR)", categoria: "Azienda", contenutoCurato: true, fama: 2 },
  { id: "microsoft-research", nome: "Microsoft Research", categoria: "Azienda", contenutoCurato: true, fama: 2 },
  { id: "illumina", nome: "Illumina", categoria: "Azienda", contenutoCurato: true, fama: 2 },
  { id: "broad-institute", nome: "Broad Institute", categoria: "Azienda", contenutoCurato: true, fama: 2 },
  { id: "hugging-face", nome: "Hugging Face", categoria: "Azienda", contenutoCurato: true, fama: 2 },

  { id: "xai", nome: "xAI", categoria: "Azienda", contenutoCurato: true, fama: 3 },
  { id: "mistral-ai", nome: "Mistral AI", categoria: "Azienda", contenutoCurato: true, fama: 3 },
  { id: "calico", nome: "Calico", categoria: "Azienda", contenutoCurato: true, fama: 3 },
  { id: "altos-labs", nome: "Altos Labs", categoria: "Azienda", contenutoCurato: true, fama: 3 },
  { id: "human-longevity", nome: "Human Longevity Inc.", categoria: "Azienda", contenutoCurato: true, fama: 3 },
  { id: "cambridge-analytica", nome: "Cambridge Analytica", categoria: "Azienda", contenutoCurato: true, fama: 3 },

  { id: "cohere", nome: "Cohere", categoria: "Azienda", contenutoCurato: true, fama: 4 },
  { id: "stability-ai", nome: "Stability AI", categoria: "Azienda", contenutoCurato: true, fama: 4 },
  { id: "character-ai", nome: "Character.AI", categoria: "Azienda", contenutoCurato: true, fama: 4 },
  { id: "perplexity-ai", nome: "Perplexity AI", categoria: "Azienda", contenutoCurato: true, fama: 4 },
  { id: "editas-medicine", nome: "Editas Medicine", categoria: "Azienda", contenutoCurato: true, fama: 4 },
  { id: "intellia-therapeutics", nome: "Intellia Therapeutics", categoria: "Azienda", contenutoCurato: true, fama: 4 },
  { id: "ginkgo-bioworks", nome: "Ginkgo Bioworks", categoria: "Azienda", contenutoCurato: true, fama: 4 },
  { id: "insitro", nome: "Insitro", categoria: "Azienda", contenutoCurato: true, fama: 4 },

  { id: "allen-institute-ai", nome: "Allen Institute for AI (AI2)", categoria: "Azienda", contenutoCurato: true, fama: 5 },
  { id: "allen-institute-brain-science", nome: "Allen Institute for Brain Science", categoria: "Azienda", contenutoCurato: true, fama: 5 },
  { id: "synchron", nome: "Synchron", categoria: "Azienda", contenutoCurato: true, fama: 5 },
  { id: "kernel", nome: "Kernel", categoria: "Azienda", contenutoCurato: true, fama: 5 },
  { id: "blackrock-neurotech", nome: "Blackrock Neurotech", categoria: "Azienda", contenutoCurato: true, fama: 5 },
  { id: "decode-genetics", nome: "deCODE genetics", categoria: "Azienda", contenutoCurato: true, fama: 5 },
  { id: "regeneron-genetics-center", nome: "Regeneron Genetics Center", categoria: "Azienda", contenutoCurato: true, fama: 5 },
  { id: "ancestry", nome: "Ancestry.com", categoria: "Azienda", contenutoCurato: true, fama: 5 },

  { id: "inflection-ai", nome: "Inflection AI", categoria: "Azienda", contenutoCurato: true, fama: 6 },
  { id: "stanford-hai", nome: "Stanford HAI", categoria: "Azienda", contenutoCurato: true, fama: 6 },
  { id: "mit-csail", nome: "MIT CSAIL", categoria: "Azienda", contenutoCurato: true, fama: 6 },
  { id: "braingate", nome: "BrainGate", categoria: "Azienda", contenutoCurato: true, fama: 6 },
  { id: "qualtrics", nome: "Qualtrics", categoria: "Azienda", contenutoCurato: true, fama: 6 },
  { id: "verily", nome: "Verily Life Sciences", categoria: "Azienda", contenutoCurato: true, fama: 6 },
  { id: "recursion-pharmaceuticals", nome: "Recursion Pharmaceuticals", categoria: "Azienda", contenutoCurato: true, fama: 6 },
  { id: "ebrains", nome: "EBRAINS (Human Brain Project)", categoria: "Azienda", contenutoCurato: true, fama: 6 },
];

export const categorie: Categoria[] = [
  "Scienziato",
  "Filosofo",
  "Attivista",
  "Politico",
  "Persona attuale",
  "Azienda",
];
