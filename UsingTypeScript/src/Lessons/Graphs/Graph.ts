export class Graph<T> {
    private numberOfNodes: number = 0;
    private nodeItems: Set<T> = new Set<T>()
    private adjacentList: any = {};

    public addVertex = (node: T): void => {
        if (this.nodeItems.has(node)) {
            return;
        } else {
            this.adjacentList[node] = null;
            this.nodeItems.add(node);
            this.numberOfNodes++;
        }
    }

    public addEdge = (nodeOne: T, nodeTwo: T): void => {
        console.log(this.nodeItems);
        if (!this.nodeItems.has(nodeOne) || !this.nodeItems.has(nodeTwo)) {
            throw new Error("Either nodeOne or nodeTwo is not already present in the Graph");
        }
        this.linkEdge(nodeOne, nodeTwo);
        this.linkEdge(nodeTwo, nodeOne);

    }
    private linkEdge = (propertyNode: T, valueNode: T) => {
        console.log( this.adjacentList[propertyNode]);
        let edges: null | Set<T> = this.adjacentList[propertyNode];
        if (edges === null) edges = new Set<T>();
        console.log(edges);
        edges.add(valueNode);
        this.adjacentList[propertyNode] = edges;
    }

    public showConnections = () => {
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
    }
}