class UnionFind {
    constructor(n) {
        this.parents = [];
        this.size = [];
        this.count = 0;
        this.init(n);
    }
    init(n) {
        for (let i = 0; i < n; i++) {
            this.parents[i] = i;
            this.size[i] = 1;
        }
        this.count = n;
    }
    find(x) {
        if (x !== this.parents[x]) {
            this.parents[x] = this.find(this.parents[x]);
        }
        return this.parents[x];
    }
    union(left, right) {
        let leftRoot = this.find(left);
        let rightRoot = this.find(right);
        if (leftRoot === rightRoot) {
            return;
        }
        if (this.size[leftRoot] < this.size[rightRoot]) {
            this.parents[leftRoot] = rightRoot;
            this.size[rightRoot] += this.size[leftRoot];
        } else {
            this.parents[rightRoot] = leftRoot;
            this.size[leftRoot] += this.size[rightRoot];
        }
        this.count--;
    }
}
