// Catégories de produits (carrousel de la section "Nos gourmandises") et, pour
// chacune, la liste des produits présentés sur sa page dédiée (/produits/[slug]).
// TODO : produits placeholder (nom + photo de catégorie réutilisée) en attendant le
// catalogue réel et des photos par produit.
import type { ImageMetadata } from 'astro';
import bonbon from '../assets/produits/bonbons.jpg';
import chocolat from '../assets/produits/chocolat.jpg';
import noix from '../assets/produits/noix.jpg';
import snack from '../assets/produits/snacks.jpg';
import vin from '../assets/produits/vins.jpg';

export interface Produit {
  nom: string;
  image: ImageMetadata;
}

export interface Categorie {
  slug: string;
  nom: string;
  image: ImageMetadata;
  produits: Produit[];
}

const produitsPlaceholder = (nomCategorie: string, image: ImageMetadata): Produit[] =>
  [1, 2, 3, 4].map((n) => ({ nom: `${nomCategorie} — à venir ${n}`, image }));

export const categories: Categorie[] = [
  { slug: 'bonbons', nom: 'Bonbons', image: bonbon, produits: produitsPlaceholder('Bonbons', bonbon) },
  { slug: 'chocolat', nom: 'Chocolat', image: chocolat, produits: produitsPlaceholder('Chocolat', chocolat) },
  { slug: 'biscuits-aux-noix', nom: 'Biscuits aux noix', image: noix, produits: produitsPlaceholder('Biscuits aux noix', noix) },
  { slug: 'snacks', nom: 'Snacks', image: snack, produits: produitsPlaceholder('Snacks', snack) },
  { slug: 'confiture-au-vin', nom: 'Confiture au vin', image: vin, produits: produitsPlaceholder('Confiture au vin', vin) },
];
