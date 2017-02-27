export const CHANGE_COLOR =  'CHANGE_COLOR'

export default (ring, color) => {
  return {
    type: CHANGE_COLOR,
    ring,
    color
  }
}
