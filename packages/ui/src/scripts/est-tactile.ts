// Détecte un appareil à pointage tactile primaire (téléphone/tablette) via ses
// capacités réelles de pointage, pas via la largeur d'écran (un iPad en paysage peut
// dépasser 768px tout en restant tactile).
export function estTactile(): boolean {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}
