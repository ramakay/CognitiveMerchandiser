// input, process, result

/**
 * GET /input
 */
export function input (req, res, next) {
  res.send({'hell3o': 'he3llo'})
}
export function process (req, res, next) {
  res.send({'Watson': 'Worked'})
}
export function result (req, res, next) {
  res.send('input')
}

export default {
  input,
  process,
result}
