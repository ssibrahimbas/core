export interface QueueType<ElementType>{

    /**
     * @description size of current queue
     * */
    size: number;

    /**
     * @description add element to this queue
     * */
    enqueue(element: ElementType) : void;

    /**
     * @description remove first element from this queue
     * */
    dequeue() : ElementType | undefined;

    /**
     * @returns this queue is empty?
     * */
    isEmpty() : boolean;

    /**
     * @returns first element from this queue
     * */
    peek() : ElementType | undefined;

    /**
     * @returns size of current queue - similar to size field
     * */
    length() : number;

    /**
     * @description converts queue to array
     * */
    toArray() : Array<ElementType>;

    /**
     * @description converts queue to string
     * */
    toString() : string;

    /**
     * @description clone this queue
     * */
    clone(): Queue<ElementType>;
};

export class Queue<ElementType> implements QueueType<ElementType> {
    readonly $queue : Array<ElementType>;

    constructor(array : Array<ElementType> = []) {
        this.$queue = array;
    };

    get size(): number {
        return this.$queue.length;
    }

    enqueue(element: ElementType) : void {
        this.$queue.push(element);
    };

    dequeue() : ElementType | undefined {
        return this.$queue.shift();
    };

    isEmpty() : boolean {
        return this.$queue.length === 0;
    };

    peek() : ElementType | undefined {
        return !this.isEmpty() ? this.$queue[0] : undefined;
    }

    length(): number {
        return this.$queue.length;
    };

    toArray() : Array<ElementType> {
        return [...this.$queue];
    }

    clone() : Queue<ElementType> {
        return new Queue(this.toArray());
    }

    toString() : string {
        return JSON.stringify(this.$queue);
    };
}