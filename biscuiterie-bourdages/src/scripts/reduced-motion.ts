// Centralise le check prefers-reduced-motion, utilisé par chaque section qui propose
// une version allégée/statique de son animation.
export function prefereMoinsAnimation(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
