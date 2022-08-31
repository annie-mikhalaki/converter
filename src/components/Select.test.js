import { getReceiveOptions } from './Select'

describe('getReceiveOptions', () => {
    let filter
    beforeEach(() => {
        filter = [
            {
                from: {
                    code: 'BTC',
                    name: 'Bitcoin BTC ',
                },
                to: [
                    {
                        code: 'CASHUSD',
                        name: ' Наличные USD',
                    },
                    {
                        code: 'USDTTRC',
                        name: ' Tether TRC-20 USDTTRC',
                    },
                    {
                        code: 'ACRUB',
                        name: ' Альфа-банк RUB',
                    },
                ],
            },
            {
                from: {
                    code: 'CASHUSD',
                    name: 'Наличные USD ',
                },
                to: [
                    {
                        code: 'BTC',
                        name: ' Bitcoin BTC',
                    },
                    {
                        code: 'ETH',
                        name: ' Ethereum ETH',
                    },
                ],
            },
        ]
    })

    it('should return directions for BTC if acquirementFilter === ALL', () => {
        expect(
            getReceiveOptions({ filter, directionSelected: 'BTC', directionGroupFilters: { acquirementFilter: 'ALL' } })
        ).toEqual([
            {
                code: 'CASHUSD',
                name: ' Наличные USD',
            },
            {
                code: 'USDTTRC',
                name: ' Tether TRC-20 USDTTRC',
            },
            {
                code: 'ACRUB',
                name: ' Альфа-банк RUB',
            },
        ])
    })

    it('should return directions for BTC if acquirementFilter === CRYPTA', () => {
        expect(
            getReceiveOptions({
                filter,
                directionSelected: 'BTC',
                directionGroupFilters: { acquirementFilter: 'CRYPTA' },
            })
        ).toEqual([
            {
                code: 'USDTTRC',
                name: ' Tether TRC-20 USDTTRC',
            },
        ])
    })

    it('should return directions for BTC if acquirementFilter === BANKS', () => {
        expect(
            getReceiveOptions({
                filter,
                directionSelected: 'BTC',
                directionGroupFilters: { acquirementFilter: 'BANKS' },
            })
        ).toEqual([
            {
                code: 'ACRUB',
                name: ' Альфа-банк RUB',
            },
        ])
    })

    it('should return directions for BTC if acquirementFilter === CASH', () => {
        expect(
            getReceiveOptions({
                filter,
                directionSelected: 'BTC',
                directionGroupFilters: { acquirementFilter: 'CASH' },
            })
        ).toEqual([
            {
                code: 'CASHUSD',
                name: ' Наличные USD',
            },
        ])
    })

    it('should return directions for CASHUSD if acquirementFilter === ALL', () => {
        expect(
            getReceiveOptions({
                filter,
                directionSelected: 'CASHUSD',
                directionGroupFilters: { acquirementFilter: 'ALL' },
            })
        ).toEqual([
            {
                code: 'BTC',
                name: ' Bitcoin BTC',
            },
            {
                code: 'ETH',
                name: ' Ethereum ETH',
            },
        ])
    })

    it('should return directions for CASHUSD if acquirementFilter === CRYPTA', () => {
        expect(
            getReceiveOptions({
                filter,
                directionSelected: 'CASHUSD',
                directionGroupFilters: { acquirementFilter: 'CRYPTA' },
            })
        ).toEqual([
            {
                code: 'BTC',
                name: ' Bitcoin BTC',
            },
            {
                code: 'ETH',
                name: ' Ethereum ETH',
            },
        ])
    })

    it('should return empty array CASHUSD if acquirementFilter === BANKS', () => {
        expect(
            getReceiveOptions({
                filter,
                directionSelected: 'CASHUSD',
                directionGroupFilters: { acquirementFilter: 'BANKS' },
            })
        ).toEqual([])
    })

    it('should return empty array CASHUSD if acquirementFilter === CASH', () => {
        expect(
            getReceiveOptions({
                filter,
                directionSelected: 'CASHUSD',
                directionGroupFilters: { acquirementFilter: 'CASH' },
            })
        ).toEqual([])
    })

    it('should return empty array for SBERRUB if acquirementFilter === ALL', () => {
        expect(
            getReceiveOptions({
                filter,
                directionSelected: 'SBERRUB',
                directionGroupFilters: { acquirementFilter: 'ALL' },
            })
        ).toEqual([])
    })
})
