export const FROM_TITLE = 'У меня есть'
export const TO_TITLE = 'Хочу приобрести'

export const filtersTypes = {
    ALL: 'ALL', 
    CRYPTA: 'CRYPTA', 
    BANKS: 'BANKS', 
    CASH: 'CASH'
}

export const filtersLocalized = {
    ALL: 'Все',
    CRYPTA: 'Криптовалюты',
    BANKS:'Банки',
    CASH: 'Наличные'
}

export const groupItems = {
    CRYPTA: ['BTC', 'ETH', 'USDTTRC', 'TRX'],
    BANKS: ['ACRUB', 'SBERRUB', 'TCSBRUB', 'PMUSD', 'P24UAH', 'MONOBUAH', 'CARDUAH', 'QWRUB', 'WIREUAH', 'OSDBUAH', 'CNTRUB'],
    CASH: ['CASHUSD', 'CASHRUB', 'CASHAED']
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    FROM_TITLE,
    TO_TITLE,

    filtersTypes,
    filtersLocalized,

    groupItems
}