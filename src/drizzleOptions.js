import GBAttendance from '../build/contracts/GBAttendance.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    GBAttendance
  ],
  events: {
    SimpleStorage: ['StorageSet']
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions