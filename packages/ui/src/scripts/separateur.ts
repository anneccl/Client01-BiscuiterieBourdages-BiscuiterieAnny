// Tracé du fil séparateur ondulé partagé entre les sites : la ligne décorative
// (stroke) et la découpe des fonds (mask) doivent utiliser LA MÊME courbe pour que
// la frontière suive le fil.
// ATTENTION : ../assets/separateur-divider.svg (rempli sous la courbe, pour découper
// un HAUT de section) et ../assets/separateur-divider-inverse.svg (rempli au-dessus,
// pour découper un BAS de section) contiennent ce même tracé fermé — toute
// modification de la courbe doit être reportée dans les deux.
export const VIEWBOX_SEPARATEUR = '0 0 1600 240';

export const CHEMIN_SEPARATEUR =
  'M0 135 C90 90 200 82.5 330 112.5 C420 134 470 155 590 147.5 C700 141 760 95 880 90 C990 86 1060 120 1170 140 C1270 157.5 1360 145 1450 115 C1510 96 1560 90 1600 107.5';
