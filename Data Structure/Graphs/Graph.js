class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

const graph = new Graph();
graph.addVertex("Seoul");
graph.addVertex("Brisbane");
graph.addVertex("New York");
graph.addEdge("Seoul", "Brisbane");
console.log(graph);