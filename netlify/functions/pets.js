const handler = async () => {
    return {
  statusCode: 200,
  Headers: {"Content-Type": "text/plain"},
  body: "HELLO".toUpperCase()
    }
}

module.exports = {handler}
