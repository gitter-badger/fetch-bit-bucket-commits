/**
 * @author Semih Onay
 * @email semionay@gmail.coö
 * @create date 2017-12-16 05:48:24
 * @modify date 2017-12-16 05:48:24
 * @desc index.js
*/

import express from 'express'
import fetch from 'node-fetch'
import publisher from '../rabbitMQ/publisher'

const router = express.Router()
/* GET home page. */
router.get('/', (req, res) => {
  const { repo } = req.query
  const { len } = req.query

  /* Get BitBucket repo info */
  fetch(
    `https://bitbucket.org/api/2.0/repositories/setrow/${repo}/commits?pagelen=${len}`,
    {
      method: 'post',
      compress: true,
      credentials: true,
      headers: {
        Authorization: `Basic ${
          Buffer.from(process.env.AUTH).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  ).then(response => response.json()).then((json) => {
    /* Send to RabbitMQ */
    publisher(JSON.stringify(json))
    res.render('index', { title: json.values[0].repository.full_name, d: json })
  })
})

module.exports = router
