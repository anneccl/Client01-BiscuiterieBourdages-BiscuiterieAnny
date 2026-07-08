// Genere un chemin SVG (attribut "d") pour une forme rectangulaire dont le bord DU BAS
// est en festons (des creux arrondis reguliers), et dont les coins du haut sont arrondis
// (le haut reste une ligne droite). Reutilisable pour n'importe quel element mesure en
// pixels (navbar, separateurs de section...).
export function cheminFestons(
  largeur: number,
  hauteur: number,
  tailleFeston = 30,
  profondeur = 10,
  rayonCoin = 16
): string {
  const nombreFestons = Math.max(2, Math.round(largeur / tailleFeston));
  const pas = largeur / nombreFestons;

  // haut : ligne droite avec coins arrondis
  let d = `M${rayonCoin},0`;
  d += ` L${largeur - rayonCoin},0`;
  d += ` Q${largeur},0 ${largeur},${rayonCoin}`;
  d += ` L${largeur},${hauteur - profondeur}`;

  // les festons : une courbe quadratique (Q) par creux, de droite a gauche
  for (let i = nombreFestons; i > 0; i--) {
    const xFin = (i - 1) * pas;
    const xMilieu = xFin + pas / 2;
    d += ` Q${xMilieu},${hauteur} ${xFin},${hauteur - profondeur}`;
  }

  // remonte le cote gauche jusqu'au coin haut-gauche arrondi
  d += ` L0,${rayonCoin}`;
  d += ` Q0,0 ${rayonCoin},0`;
  d += ` Z`;

  return d;
}
