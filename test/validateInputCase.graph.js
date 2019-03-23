const assert = require('assert');
const Graph = require('../libs/graph');

describe('Error when input not correct', () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
  });
  it('Node name should be string.', () => {
    try {
      // act
      graph.addNode(123, new Map([['B', 2], ['C', 2]]));
    } catch (err) {
      // assert
      assert.equal(err.message, 'Node name should be string.');
    }
  });
  it('Input node should not appear in neighbors.', () => {
    try {
      // act
      graph.addNode('A', new Map([['A', 2], ['C', 2]]));
    } catch (err) {
      // assert
      assert.equal(err.message, 'Input node should not appear in neighbors.');
    }
  });
});
