import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations  from './mutaions'


const myCustomModule = {
  namespace: true,
  actions,
  getters,
  mutations,
  state
}

export default myCustomModule
