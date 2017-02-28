export const CHANGE_COLOR =  'CHANGE_COLOR'

export default (ring, color, clickedColor) => {
  return {
    type: CHANGE_COLOR,
    ring,
    color,
    clickedColor
  }
}
