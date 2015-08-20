'use strict';

describe('js-array-predicates', function(){
  var arr;
  var p = require('../');
  var byProp = require('../byProp');
  var byPropVal = require('../byPropVal');
  var byPropValue = require('../byPropValue');

  beforeEach(function() {
    arr = [{foo: 5}, {boo: 6}];
  });

  it('should include all predicates', function(){
    p.byProp.should.equal(byProp);
    p.byPropVal.should.equal(byPropVal);
    p.byPropValue.should.equal(byPropValue);
  });

  describe('.byProp()', function() {
    it('should consider the property', function() {
      var matches = arr.filter(byProp('foo'));
      matches.length.should.equal(1);
      matches[0].foo.should.equal(arr[0].foo);
    });
  });

  describe('.byPropVal', function() {
    it('should loosely match', function() {
      var matches = arr.filter(byPropVal('foo', '5'));
      matches.length.should.equal(1);
      matches[0].foo.should.eql(arr[0].foo);
    });
  });

  describe('.byPropValue', function() {
    it('should exactly match', function() {
      var matches = arr.filter(byPropValue('foo', '5'));
      matches.length.should.equal(0);
      matches = arr.filter(byPropValue('foo', 5));
      matches[0].foo.should.eql(arr[0].foo);
    });
  });
});
