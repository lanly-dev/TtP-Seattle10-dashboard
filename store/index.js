export const state = () => {
  return {
    markerPicked: null
  }
}

export const mutations = {
  PICK(state, markerPicked) {
    state.markerPicked = markerPicked
  }
}

export const actions = {
  PICK(state, markerPicked) {
    state.commit('PICK', markerPicked)
  }
}

export const getters = {
  getMarkerPicked(state) {
    return state.markerPicked
  }
}
