# sls-aws-nodejs-boilerplate
> Boilerplate for building small serverless functions on AWS

[![Travis](https://img.shields.io/travis/ecrmnn/sls-aws-nodejs-boilerplate/master.svg?style=flat-square)](https://travis-ci.org/ecrmnn/sls-aws-nodejs-boilerplate/builds)
[![prs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![eslint](https://img.shields.io/badge/code_style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

### Installation
```bash
git clone https://github.com/ecrmnn/sls-aws-nodejs-boilerplate.git

cd sls-aws-nodejs-boilerplate

npm install
```

### Usage
Build your function in ``src/app.js``.

### Testing
Use the provided ``invoke()`` helper to run your function with all env variables injected.
```js
npm test
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)