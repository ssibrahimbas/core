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
};

export abstract class BaseQueue<ElementType> implements QueueType<ElementType> {
    protected readonly $queue : Array<ElementType>;

    protected constructor(array : Array<ElementType> = []) {
        this.$queue = array;
        Object.setPrototypeOf(this, BaseQueue.prototype);
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
        return this.$queue;
    }

    toString() : string {
        return JSON.stringify(this.$queue);
    }
}

export class Queue<ElementType = any> extends BaseQueue<ElementType> {
    constructor(array: Array<ElementType> = []) {
        super(array);
    }
};