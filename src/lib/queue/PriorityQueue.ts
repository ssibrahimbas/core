import {BaseQueue, QueueType} from "./Queue";

export interface PriorityQueueType<ElementType> extends QueueType<ElementType> {
}

type ComparatorType = (a: any, b: any) => number;

type BubbleSortHelperType = {
    getParentIndex: (index: number) => number,
    getLeftIndex: (index: number) => number,
    getRightIndex: (index: number) => number,
}

const BubbleSortHelper: BubbleSortHelperType = {
    getParentIndex: (index: number): number => Math.ceil((index / 2) - 1),
    getLeftIndex: (index: number): number => 2 * index + 1,
    getRightIndex: (index: number): number => 2 * index + 2,

}

export class PriorityQueue<ElementType = any> extends BaseQueue<ElementType> implements PriorityQueueType<ElementType> {
    private readonly $comparator: ComparatorType;
    private readonly $bubbleHelper: BubbleSortHelperType;

    constructor(comparator: ComparatorType, array?: Array<ElementType>) {
        super(array);
        this.$comparator = comparator;
        this.$bubbleHelper = BubbleSortHelper;
    };

    /**
     * @description add element to this queue and sort by priority
     * */
    enqueue(element: ElementType) {
        this.$queue.push(element);
        this.bubbleUp();
    };

    /**
     * @description remove element from this queue and sort by priority
     * */
    dequeue(index: number = 0): ElementType | undefined {
        this.swap(index, this.size - 1);
        const element = this.$queue.pop();
        this.bubbleDown(index);
        return element;
    }

    private getTopChild(index: number) {
        const leftIndex: number = this.$bubbleHelper.getLeftIndex(index),
            rightIndex: number = this.$bubbleHelper.getRightIndex(index);
        return (rightIndex < this.size && this.$comparator(leftIndex, rightIndex) > 0) ? rightIndex : leftIndex;
    }

    private bubbleUp() {
        let index: number = this.size - 1, parentIndex: number = this.$bubbleHelper.getParentIndex(index);
        while (parentIndex >= 0 && this.$comparator(parentIndex, index) > 0) {
            this.swap(parentIndex, index);
            index = this.$bubbleHelper.getParentIndex(index);
            parentIndex = this.$bubbleHelper.getParentIndex(index);
        }
    }

    private bubbleDown(current: number = 0) {
        let index: number = current;
        while (this.$bubbleHelper.getLeftIndex(index) < this.size && this.$comparator(index, this.getTopChild(index)) > 0) {
            const next: number = this.getTopChild(index);
            this.swap(index, next);
            index = next;
        }
    }

    private swap(indexOne: number, indexTwo: number): void {
        [this.$queue[indexOne], this.$queue[indexTwo]] = [this.$queue[indexTwo], this.$queue[indexOne]];
    }
}