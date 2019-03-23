const assert = require("assert");
const Graph = require("../libs/graph");

describe("Wrong Path Case", () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
  });
  it("Goal not exist Case", () => {
    // arrange
    graph.addNode("A", new Map([["B", 2], ["C", 5]]));
    graph.addNode("B", new Map([["C", 2], ["A", 3]]));
    // act
    try {
      const total = graph.path("A", "D");
    } catch (err) {
      // assert
      assert.equal(err.message, "Start Node or Goal Node does not exist.");
    }
  });
  it("Path not found Case", () => {
    // arrange
    graph.addNode("A", new Map([["B", 2], ["C", 5]]));
    graph.addNode("B", new Map([["C", 2], ["A", 3]]));
    graph.addNode("E", new Map([["D", 2]]));
    // act
    try {
      const total = graph.path("A", "D");
    } catch (err) {
      // assert
      assert.equal(err.message, "No path to destination.");
    }
  });
});
