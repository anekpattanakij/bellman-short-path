const assert = require('assert');
const Graph = require('../libs/graph');

describe('Pass Case', () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
  });
  it('Pass Case', () => {
    // arrange
    graph.addNode('A', new Map([['B', 2], ['C', 5]]));
    graph.addNode('B', new Map([['A', 1], ['C', 2]]));
    graph.addNode('C', new Map([['D', 1]]));
    graph.addNode('D', new Map([['A', -1]]));
    // act
    const total = graph.path('A', 'D');
    // assert
    assert.equal(total.distance, 5);
    assert.deepEqual(total.path, ['A', 'B', 'C', 'D']);
  });
  it('Pass Case', () => {
    // arrange
    graph.addNode('A', new Map([['B', 2], ['C', 5], ['D', 6]]));
    graph.addNode('B', new Map([['C', 2], ['A', 3]]));
    graph.addNode('C', new Map([['D', 1], ['A', 3]]));
    // act
    const total = graph.path('A', 'D');
    // assert
    assert.equal(total.distance, 5);
    assert.deepEqual(total.path, ['A', 'B', 'C', 'D']);
  });
  it('Pass Case with Minus edge', () => {
    // arrange
    graph.addNode('S', new Map([['A', 10], ['E', 8]]));
    graph.addNode('A', new Map([['C', 2]]));
    graph.addNode('B', new Map([['A', 1]]));
    graph.addNode('C', new Map([['B', -2]]));
    graph.addNode('D', new Map([['C', -1], ['A', -4]]));
    graph.addNode('E', new Map([['D', 1]]));
    // act
    const total = graph.path('S', 'D');
    // assert
    assert.equal(total.distance, 9);
    assert.deepEqual(total.path, ['S', 'E', 'D']);
  });
});
