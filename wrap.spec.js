const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  // it('throws an error if no column number is provided', () => {
  //   expect(wrap("string").to.throw('must provide column number'))
  // });


  it('Returns original string if column number is longer than string length', () => {
    expect(wrap("test string", 50)).to.equal("test string");
  });



  it("Inserts line breaks at or before column index.", () => {
    expect(wrap("This is short", 8)).to.equal("This is\nshort")
  })

  it("Doesn't insert a line break inside a word", () => {
    expect(wrap("This is a test string.", 9)).to.equal(`This is a\ntest\nstring.`)
  });
});

