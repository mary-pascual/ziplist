/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('ZipList', function () {
  const numberTest = [1, 2, 3];
  const letterTest = ['a', 'b', 'c'];
  describe('ZipList two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipList(numberTest, letterTest)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipList(letterTest, numberTest)).to.eql(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});

describe('ZipListTheSimpleWay', function () {
  const numberTest = [1, 2, 3];
  const letterTest = ['a', 'b', 'c'];
  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipListTheSimpleWay(numberTest, letterTest)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipListTheSimpleWay(letterTest, numberTest)).to.eql(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
