/**
 * @author Semih Onay
 * @email semionay@gmail.com
 * @create date 2017-12-16 05:50:07
 * @modify date 2017-12-16 05:50:07
 * @desc publisher.js
*/

module.exports = function (data) {
  const open = require('amqplib').connect(process.env.AMQP_URL)
  const queue = 'test'

  open.then(function (conn) {
    return conn.createChannel()
  }).then(function (ch) {
    return ch.assertQueue(queue).then(function (ok) {
      console.log(`Message sent to Queue: ${queue}`)
      return ch.sendToQueue(queue, Buffer.from(data))
    })
  }).catch(console.warn)
}
