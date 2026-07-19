// Génère un chemin SVG (attribut "d") pour un rectangle dont le bord du bas est en
// festons (creux arrondis réguliers) et dont les coins du haut sont arrondis.
export function cheminFestons(
  largeur: number,
  hauteur: number,
  tailleFeston = 30,
  profondeur = 10,
  rayonCoin = 16
): string {
  const nombreFestons = Math.max(2, Math.round(largeur / tailleFeston));
  const pas = largeur / nombreFestons;

  // Haut : ligne droite avec coins arrondis.
  let d = `M${rayonCoin},0`;
  d += ` L${largeur - rayonCoin},0`;
  d += ` Q${largeur},0 ${largeur},${rayonCoin}`;
  d += ` L${largeur},${hauteur - profondeur}`;

  // Festons : une courbe quadratique (Q) par creux, tracée de droite à gauche.
  for (let i = nombreFestons; i > 0; i--) {
    const xFin = (i - 1) * pas;
    const xMilieu = xFin + pas / 2;
    d += ` Q${xMilieu},${hauteur} ${xFin},${hauteur - profondeur}`;
  }

  // Remonte le côté gauche jusqu'au coin haut-gauche arrondi.
  d += ` L0,${rayonCoin}`;
  d += ` Q0,0 ${rayonCoin},0`;
  d += ` Z`;

  return d;
}
