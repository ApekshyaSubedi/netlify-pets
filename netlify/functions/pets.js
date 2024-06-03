const handler = async () => {
    return {
  statuscode: 200,
  Headers: {"content-Type": "text/plain"},
  body: 2 + 2
    }
}

module.exports = {handler}