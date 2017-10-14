const KEY = 'Z3EB92dPayJF6G2bau';
const SECRET = 'RURP7xcfu2K4PVAzMv8TrhVHXa798w6R';

const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const { repo } = req.query;
  const { len } = req.query;
  fetch(
    `https://bitbucket.org/api/2.0/repositories/setrow/${repo}/commits?pagelen=${len}`,
    {
      method: 'post',
      compress: true,
      credentials: true,
      headers: {
        Authorization: `Basic ${
          Buffer.from('sys@setrow.com:Pz0149**SS3').toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  ).then(response => response.json()).then((json) => {
    const data = {
      repoName: json.values[0].repository.full_name,
      author: json.values[0].author.user.display_name,
      message: json.values[0].message,
    };
    res.render('index', { title: 'Test', d: data });
  });
});

module.exports = router;
