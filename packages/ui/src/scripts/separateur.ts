// Tracé du fil séparateur ondulé partagé entre les sites : la ligne décorative
// (stroke) et la découpe des fonds (mask) doivent utiliser LA MÊME courbe pour que
// la frontière suive le fil.
// ATTENTION : ../assets/separateur-divider.svg (rempli sous la courbe, pour découper
// un HAUT de section) et ../assets/separateur-divider-inverse.svg (rempli au-dessus,
// pour découper un BAS de section) contiennent ce même tracé fermé — toute
// modification de la courbe doit être reportée dans les deux.
export const VIEWBOX_SEPARATEUR = '0 0 1600 240';

export const CHEMIN_SEPARATEUR =
  'M0 150 C90 60 200 45 330 105 C420 148 470 190 590 175 C700 162 760 70 880 60 C990 52 1060 120 1170 160 C1270 195 1360 170 1450 110 C1510 72 1560 70 1600 95';
