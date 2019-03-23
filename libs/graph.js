class Graph {
  constructor() {
    this.graph = new Map();
  }

  // name as string
  // neighbors as map {B:5,C:5}
  addNode(name, neighbors) {
    if (typeof name !== 'string') {
      throw Error('Node name should be string.');
    }

    if (neighbors instanceof Map) {
      for (const nextNode in neighbors.keys) {
        if (nextNode === name) {
          throw Error('Input node should not appear in neighbors.');
        }
      }
      this.graph.set(name, neighbors);
    } else {
      throw Error('Node neighbors should be Map.');
    }
  }

  path(start, goal) {
    let startInList = false;
    let goalInList = false;
    const nodeList = [start];

    this.graph.forEach((value, key) => {
      if (key === start) {
        startInList = true;
      }
      value.forEach((distance, neighbor) => {
        if (neighbor === goal) {
          goalInList = true;
        }
        if(nodeList.indexOf(neighbor) < 0 ) {
          nodeList.push(neighbor);
        }
      });
      if(nodeList.indexOf(key) < 0 ) {
        nodeList.push(key);
      }
    });

    if (!(startInList && goalInList)) {
      throw Error('Start Node or Goal Node does not exist.');
    }
    const trackedCost = {};
    nodeList.forEach(node => {
      trackedCost[node] = (node === start)?0:Infinity;  
    });
    const trackedPath = {};
    trackedPath[goal] = null;
    // running vertex count - 1 times
    for( let i = 0; i< nodeList.length -1; i++) {
      let trackChange = false;
      for( let nodeRunning = 0; nodeRunning< nodeList.length; nodeRunning++) {
        if(this.graph.get(nodeList[nodeRunning])) {
          this.graph.get(nodeList[nodeRunning]).forEach((distance, nextNode) => {
            if (
              trackedCost[nodeList[nodeRunning]] + distance < trackedCost[nextNode]
            ) {
              trackedCost[nextNode] = trackedCost[nodeList[nodeRunning]] + distance;
              trackedPath[nextNode] = nodeList[nodeRunning];
              trackChange = true;
            }
          });
        }
      }
      if(!trackChange) {
        break;
      }
    }
    if (trackedCost[goal] === Infinity ) {
      throw Error('No path to destination.');
    }
    // track path back
    let rootNode = goal;
    const resultPath = [goal];
    while (rootNode !== start) {
      rootNode = trackedPath[rootNode];
      resultPath.push(rootNode);
    }
    return { distance: trackedCost[goal], path: resultPath.reverse() };
  }
}

module.exports = Graph;
