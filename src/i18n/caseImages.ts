import type { ProjectImage } from './types'

const GESTION_STOCK_DIR = '/projets/gestion-stock'

export type GestionStockImage =
  | 'imbrication-sur-chute'
  | 'chutes-a-prendre'
  | 'plan-entrepot'
  | 'appli-terrain-mobile'
  | 'fiche-piece-etiquette-qr'
  | 'stats-valeur-stock'
  | 'tableau-de-bord'
  | 'stock'

/**
 * Chemins (identiques dans toutes les langues) d'une capture du logiciel de
 * gestion de stock : version complète et version réduite, servies par `public/`.
 */
export function gestionStockImage(name: GestionStockImage): Pick<ProjectImage, 'src' | 'srcSm'> {
  return {
    src: `${GESTION_STOCK_DIR}/${name}.webp`,
    srcSm: `${GESTION_STOCK_DIR}/${name}-sm.webp`,
  }
}
