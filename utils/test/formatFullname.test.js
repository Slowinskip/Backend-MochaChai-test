const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return an error if "fullname" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');

    });  
    it('should return an error if "fullname" in empty', () => {
        expect(formatFullname(null)).to.equal('Error');
        expect(formatFullname('')).to.equal('Error');
        expect(formatFullname()).to.equal('Error');
    });  
    it('should return an error if "fullname.split" in not only first and lastName', () => {
        expect(formatFullname('John Don pass')).to.equal('Error');
        expect(formatFullname('John Don te')).to.equal('Error');
    });  
    it('should return good formatted "formatFullName" if proper args', () => {
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('jOhN doE')).to.equal('John Doe');
      });

});