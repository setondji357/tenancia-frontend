export default {
  getProfilesList: (state) => {
    state.profilesList = JSON.parse(localStorage.getItem('profilesList'))
    return state.profilesList
  },
  getProfiles: (state) => {
    state.profiles = JSON.parse(localStorage.getItem('profiles'))
    return state.profiles
  },
  tenantProfile: (state) => {
    return state.profiles.tenant
  },
  haveTenantProfile: (state) => {
    return state.profiles !== undefined &&
      state.profiles.tenant !== undefined &&
      !Object.values(state.profiles.tenant).some(x => (x === null))
  },
  lessorProfile: (state) => {
    return state.profiles.lessor
  },
  haveLessorProfile: (state) => {
    return state.profiles !== undefined &&
      state.profiles.lessor !== undefined
  },
  realEstateProfile: (state) => {
    return state.profiles.real_estate
  },
  haveRealEstateProfile: (state) => {
    return state.profiles !== undefined &&
      state.profiles.real_estate !== undefined
  },
  haveOneProfile: (state) => {
    return state.profiles !== undefined && Object.keys(state.profiles).length > 0
  }
}
