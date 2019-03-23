# bellman-short-path

```shell
npm install bellman-short-path --save
```

## Usage

Basic example:

```js
const Graph = require('bellman-short-path');

const route = new Graph();

route.addNode('A', new Map([['B', 2], ['C', 5]])); // Distance list should be Map
route.addNode('B', new Map([['A', 2], ['C', 2]])); // Distance from  B->A can be different from A->B.
route.addNode('C', new Map([['D', 1]]));
route.addNode('D', new Map([['A', -1]]);

route.path('A', 'D'); // return => { cost:5 , path : [ 'A', 'B', 'C', 'D' ]}
```
