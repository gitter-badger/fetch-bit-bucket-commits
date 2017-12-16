/**
 * @author Semih Onay
 * @email semionay@gmail.com
 * @create date 2017-12-16 05:50:16
 * @modify date 2017-12-16 05:50:16
 * @desc consumer.js
*/

module.exports = function () {
  const open = require('amqplib').connect(process.env.AMQP_URL)
  const queue = 'test'

  open.then(function (conn) {
    return conn.createChannel()
  }).then(function (ch) {
    return ch.assertQueue(queue).then(function (ok) {
      if (ok.messageCount === 0) {
        console.log('No messages to consume. Waiting for messages...')
      }
      return ch.consume(queue, function (msg) {
        if (msg !== null) {
          console.log(`Consuming message from Queue: ${queue}`)
          ch.ack(msg)
        }
      })
    })
  }).catch(console.warn)
}
