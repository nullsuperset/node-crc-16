'use strict';


var chai = require('chai');
var mocha = require('mocha');
var crc16 = require('../lib/crc-16');

var expect = chai.expect;


// mocha and chai need to be installed
describe('Mocha & Chai', function () {
  it('should have been installed and running for fluent testing', function () {
    expect(true).to.deep.equal(true);
  });
});

// simple 2 byte CRC calculation test
describe('CRC-16', function () {
  it('should have returned [ 0x47 , 0x0f ] given the input [ 0x00 , 0x00 ]', function () {
    var crc = new Buffer(crc16(new Buffer([0x00, 0x00])));
    expect(crc.compare(new Buffer([0x47, 0x0f]))).to.deep.equal(0);
  });
});
