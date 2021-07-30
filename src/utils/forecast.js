const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=f18b32cc887d5abfc8adc0523a77b236&query=' + latitude + ',' + longitude + '&units=f'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!')
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      console.log(body.current)
      callback(undefined,
        body.current.weather_descriptions[0] + '. ' +
        'It is currently ' + body.current.temperature + ' degrees out. ' +
        'It feels like ' + body.current.feelslike + ' degrees out. ' +
        'The humidity is ' + body.current.humidity + ' precent.'
      )
    }
  })
}

module.exports = forecast