const paratest = require('paratest')
const tag = require('../src/xmltag')

const div = tag('div')

const tests = [
  {
    subject: div,
    cases: [
      {
        name: 'without attrs or children',
        args: [],
        result: '<div />'
      }, {
        name: 'works with attrs and no children',
        args: [{ one: 'two' }],
        result: '<div one="two" />'
      }, {
        name: 'works with attrs and children',
        args: [{ one: 'two' }, 3],
        result: '<div one="two">3</div>'
      }, {
        name: 'nested',
        args: [
          { one: 'two', three: 'four' },
          div({ five: 'six' }, 'hello')
        ],
        result: '<div one="two" three="four"><div five="six">hello</div></div>'
      }, {
        name: 'works without attrs',
        args: ['hello'],
        result: '<div>hello</div>'
      }, {
        name: 'nested without attrs or children',
        args: [div()],
        result: '<div><div /></div>'
      }, {
        name: 'nested with children no attrs',
        args: [div('hello')],
        result: '<div><div>hello</div></div>'
      }, {
        name: 'without children',
        args: [{ one: 'two' }],
        result: '<div one="two" />'
      }
    ]
  }
]

paratest('xmltest', tests)
