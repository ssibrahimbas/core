import {Queue, QueueType} from "./Queue";

export interface PriorityQueueType<ElementType> extends QueueType<ElementType> {
    dequeue(index?: number) : ElementType | undefined;
    clone(): PriorityQueue<ElementType>;
}

type ComparatorType<T> = (a: T, b: T) => number;

export class PriorityQueue<ElementType = any> extends Queue<ElementType> implements PriorityQueueType<ElementType> {
    private readonly $comparator: ComparatorType<ElementType>;

    constructor(comparator: ComparatorType<ElementType>, array?: Array<ElementType>) {
        super(array);
        this.$comparator = comparator;
    };

    /**
     * @description add element to this queue and sort by priority
     * */
    enqueue(element: ElementType) {
        super.enqueue(element);
        this.bubbleSort();
    };

    /**
     * @description remove element from this queue and sort by priority
     * */
    dequeue(index: number = 0): ElementType | undefined {
        this.swap(index, this.size - 1);
        const element = this.$queue.pop();
        this.bubbleSort();
        return element;
    }

    /**
     * @description clone this priority queue
     * */
    clone() : PriorityQueue<ElementType> {
        return new PriorityQueue<ElementType>(this.$comparator, this.toArray());
    }

    private bubbleSort() {
        for(let i = 0; i < this.size; i++) {
            for(let j = 0; j < this.size - i - 1; j++) {
                if(this.$comparator(this.$queue[j], this.$queue[j + 1]) > 0) {
                    this.swap(j, j+ 1);
                }
            }
        }
    }

    private swap(indexOne: number, indexTwo: number): void {
        [this.$queue[indexOne], this.$queue[indexTwo]] = [this.$queue[indexTwo], this.$queue[indexOne]];
    }
}