function bfs(graph, root) {
    var nodesLen = {};
  
    for (var i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;
  
    var queue = [root];
    var current;
  
    while (queue.length != 0) {
      current = queue.shift();
  
      var curConnected = graph[current];
      var neighborIdx = [];
      var idx = curConnected.indexOf(1);
      while (idx != -1) {
        neighborIdx.push(idx);
        idx = curConnected.indexOf(1, idx + 1);
      }
  
      for (var j = 0; j < neighborIdx.length; j++) {
        if (nodesLen[neighborIdx[j]] == Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          queue.push(neighborIdx[j]);
        }
      }
    }
    return nodesLen;
  };
  
  function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
      var v = queue.shift(); // remove from front of queue
      if (v == undefined) {
        print("Visited vertex: " + v);
      }
      for (var w of this.adj[v]) {
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      }
    }
  }
  
  var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];
  console.log(bfs(exBFSGraph, 1));

  function bfs(graph, root) {
    var nodesLen = {};
  
    for (var i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;
  
    var queue = [root];
    var current;
  
    while (queue.length != 0) {
      current = queue.shift();
  
      var curConnected = graph[current];
      var neighborIdx = [];
      var idx = curConnected.indexOf(1);
      while (idx != -1) {
        neighborIdx.push(idx);
        idx = curConnected.indexOf(1, idx + 1);
      }
  
      for (var j = 0; j < neighborIdx.length; j++) {
        if (nodesLen[neighborIdx[j]] == Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          queue.push(neighborIdx[j]);
        }
      }
    }
    return nodesLen;
  };
  
  function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
      var v = queue.shift(); // remove from front of queue
      if (v == undefined) {
        print("Visited vertex: " + v);
      }
      for (var w of this.adj[v]) {
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      }
    }
  }
  
  var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];
  console.log(bfs(exBFSGraph, 1));