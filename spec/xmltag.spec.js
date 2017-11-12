const paratest = require('paratest');
const tag = require('../src/xmltag');

const svg = tag('svg');

const tests = [
  {
    subject: svg,
    cases: [
      {
        name: "works",
        args: [{one: "two"}, 3],
        result: '<svg one="two">3</svg>'
      }, {
        name: "without attrs",
        args: [{}, "hello"],
        result: '<svg >hello</svg>'
      }
    ]
  }
];

paratest("xmltest", tests);
