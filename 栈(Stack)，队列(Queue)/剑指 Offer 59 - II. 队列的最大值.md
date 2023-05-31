## [剑指 Offer 59 - II. 队列的最大值](https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/)

1. 时间复杂度o(n) 空间复杂度o(n)
```ts
class MaxQueue {
    number: number[] = [];
    queue: number[] = [];
    constructor() {

    }

    max_value(): number {
        return this.queue.length ? this.queue[0] : -1
    }

    push_back(value: number): void {
        while(this.queue.length && this.queue[this.queue.length - 1] < value) {
            this.queue.pop();
        }
        this.queue.push(value);
        this.number.push(value);
    }

    pop_front(): number {
        if (!this.number.length) return -1;
        const number = this.number.shift();
        if (number === this.max_value()) {
            this.queue.shift();
        }
        return number;
    }
}
```