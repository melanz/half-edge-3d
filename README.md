region-quadtree-2d
==========
Creates a region quadtree in two dimensions. The region quadtree represents a partition of space in two dimensions by decomposing the region into four equal quadrants, subquadrants, and so on with each leaf node containing data corresponding to a specific subregion.

## Example

```javascript
var Quadtree = require("../quadtree.js");
var AABB = require("../aabb.js");

var bounds = new AABB([0,0], 100, 100);

var quadtree = new Quadtree(0,bounds);
var aabb1 = new AABB([1,1],1,1);
quadtree.insert(aabb1);
var aabb2 = new AABB([10,10],1,1);
quadtree.insert(aabb2);

var potentialCollisions = [];
potentialCollisions = quadtree.detectPotentialCollisions(potentialCollisions, aabb1);

console.log(potentialCollisions);
//Prints out potential collisions
```

## Install

    npm install region-quadtree-2d

## Credits
(c) 2013 Daniel Melanz. MIT License
