export class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.nodeItems = new Set();
        this.adjacentList = {};
        this.addVertex = (node) => {
            if (this.nodeItems.has(node)) {
                return;
            }
            else {
                this.adjacentList[node] = null;
                this.nodeItems.add(node);
                this.numberOfNodes++;
            }
        };
        this.addEdge = (nodeOne, nodeTwo) => {
            console.log(this.nodeItems);
            if (!this.nodeItems.has(nodeOne) || !this.nodeItems.has(nodeTwo)) {
                throw new Error("Either nodeOne or nodeTwo is not already present in the Graph");
            }
            this.linkEdge(nodeOne, nodeTwo);
            this.linkEdge(nodeTwo, nodeOne);
        };
        this.linkEdge = (propertyNode, valueNode) => {
            console.log(this.adjacentList[propertyNode]);
            let edges = this.adjacentList[propertyNode];
            if (edges === null)
                edges = new Set();
            console.log(edges);
            edges.add(valueNode);
            this.adjacentList[propertyNode] = edges;
        };
        this.showConnections = () => {
            const allNodes = Object.keys(this.adjacentList);
            for (let node of allNodes) {
                let nodeConnections = this.adjacentList[node];
                let connections = "";
                let vertex;
                for (vertex of nodeConnections) {
                    connections += vertex + " ";
                }
                console.log(node + "-->" + connections);
            }
        };
    }
}
