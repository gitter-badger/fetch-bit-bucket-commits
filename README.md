# BitBucket Commits Dashboard
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Maintainability](https://api.codeclimate.com/v1/badges/4556ea5c3f2315e53f5f/maintainability)](https://codeclimate.com/github/Semyonic/fetch-bit-bucket-commits/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d675d5c4b04c411cb1345f69eeba0722)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Semyonic/fetchBitBucketCommits&amp;utm_campaign=Badge_Grade)
[![bitHound Overall Score](https://www.bithound.io/projects/badges/29c5f990-e279-11e7-8e01-5f4701a19498/score.svg)](https://www.bithound.io/github/Semyonic/fetchBitBucketCommits)
[![Inline docs](http://inch-ci.org/github/Semyonic/fetchBitBucketCommits.svg?branch=master)](http://inch-ci.org/github/Semyonic/fetchBitBucketCommits)
[![CircleCI](https://circleci.com/gh/Semyonic/fetchBitBucketCommits.svg?style=svg&circle-token=5ae38f8347a672d68540bec55a46e751aaeafdf0)](https://circleci.com/gh/Semyonic/fetchBitBucketCommits)


> Fetch BitBucket commits via BitBucket API by projects.
It was built to see real-time coding activity to visualize git and project activity. Used inside the company. I'll try to generalize in my free times.

Latest version works with BitBucket WebHooks. After each push event on repo, it'll trigger a POST request to nodeJS endpoint then nodeJS app streams data via socket.io to Commits Dashboard Screen.

#### This is a public version of that project. Not completed and generalized yet.

## Usage

```bash
$ npm install
$ npm start
```

* Go to localhost:3000
* **repo:** Setrow Project Repo Name (string)
* **lenn :** Depth of commit tree (int)
* Go to URL : localhost:3000/?repo=**{your_repo_name}**&len=**{int}**
* You'll see the JSON data in prettified and highlighted

## License

Apache License 2.0 © [Semih Onay](https://semyonic.github.io/)
