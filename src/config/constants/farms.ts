import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'MOFI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcC611d622e55D40732BB508Ef4A0483D63317E84',
    },
    tokenSymbol: 'MOFI',
    tokenAddresses: {
      97: '',
      56: '0x984d3e9906ef5f3e44576140cd0cf649ba1befa8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'MOFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3156B469819F852F82E6DA679539Bab59D2B2Cf7',
    },
    tokenSymbol: 'MOFI',
    tokenAddresses: {
      97: '',
      56: '0x984d3e9906ef5f3e44576140cd0cf649ba1befa8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

