const handler = async () => {
    return {
  statusCode: 200,
  Headers: {"Content-Type": "text/plain"},
  body: "brad".toUpperCase()
    }
}

module.exports = {handler}
