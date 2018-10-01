const { expect } = require('chai');
const Twosum = require('./twoSum');

describe('twoSum', () => {
    it('twoSum should return an array', () =>{
        expect(Twosum([1],5)).to.be.an('array');
    })

    it('It returns an empty array if input array is less than 2', () =>{
        expect(Twosum([1],5)).to.deep.equal([]);
    })

    it('If no numbers add up to target return empty array', () => {
        expect(Twosum([1,3,4],2)).to.deep.equal([]);
    })

    it('return indecies of numbers in array  that sum to target', () => {
        expect(Twosum([1,2,3],5)).to.deep.equal([1,2]);
    })

    it('it does not use the same indicies twice', () => {
        expect(Twosum([1,3], 6)).to.deep.equal([]);
    })

    it('it takes the first succesful pair', () => {
        expect(Twosum([1,2,2,3], 4)).to.deep.equal([1,2]);
    })

})