const REGION_CODE = {
    AND: 'and',
    ARN: 'arn',
    AST: 'ast',
    BAL: 'bal',
    COO: 'coo',
    CAN: 'can',
    CLE: 'cle',
    CLM: 'clm',
    CAT: 'cat',
    VAL: 'val',
    EXT: 'ext',
    GAL: 'gal',
    MAD: 'mad',
    MUR: 'mur',
    NAV: 'nav',
    PVA: 'pva',
    RIO: 'rio',
}
const REGION_NAME = {
    [REGION_CODE.AND]: 'Andalucía',
    [REGION_CODE.ARN]: 'Aragón',
    [REGION_CODE.AST]: 'Asturias',
    [REGION_CODE.BAL]: 'Ballears, Illes',
    [REGION_CODE.COO]: 'Canarias',
    [REGION_CODE.CAN]: 'Cantabria',
    [REGION_CODE.CLE]: 'Castilla y León',
    [REGION_CODE.CLM]: 'Castilla - La Mancha',
    [REGION_CODE.CAT]: 'Cataluña',
    [REGION_CODE.VAL]: 'Comunitat Valenciana',
    [REGION_CODE.EXT]: 'Extremadura',
    [REGION_CODE.GAL]: 'Galicia',
    [REGION_CODE.MAD]: 'Madrid, Comunidad de',
    [REGION_CODE.MUR]: 'Murcia, Región de',
    [REGION_CODE.NAV]: 'Navarra, Comunidad Foral de',
    [REGION_CODE.PVA]: 'País Vasco',
    [REGION_CODE.RIO]: 'Rioja, La',
}

const REGION_CONSTANTS = {
    REGION_CODE,
    REGION_NAME,
}

export { REGION_CONSTANTS };