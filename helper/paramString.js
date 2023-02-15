
function paramString (reqQuery) {
  return Object
      .keys(reqQuery)
      .map((prop) =>${reqQuery}=${reqQuery[prop]}&)
      .join('')
}

module.exports = {
  
}