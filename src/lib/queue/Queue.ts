export interface QueueType<ElementType>{

    /**
     * @description size of current queue
     * @since 0.0.1
     * */
    size: number;

    /**
     * @description add element to this queue
     * @since 0.0.1
     * */
    enqueue(element: ElementType) : void;

    /**
     * @description remove first element from this queue
     * @since 0.0.1
     * @returns {ElementType | undefined} is element there, return element. Is not, return undefined
     * */
    dequeue() : ElementType | undefined;

    /**
     * @description remove element at specific index from this queue
     * @returns {boolean} is deleted
     * @since 0.0.9
     * */
    dequeueByIndex(index : number) : boolean;

    /**
     * @returns this queue is empty?
     * @since 0.0.1
     * */
    isEmpty() : boolean;

    /**
     * @returns first element from this queue
     * @since 0.0.1
     * */
    peek() : ElementType | undefined;

    /**
     * @returns size of current queue - similar to size field
     * @since 0.0.1
     * */
    length() : number;

    /**
     * @description converts queue to array
     * @since 0.0.1
     * */
    toArray() : Array<ElementType>;

    /**
     * @description converts queue to string
     * @since 0.0.1
     * */
    toString() : string;

    /**
     * @description clone this queue
     * @since 0.0.8
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

    dequeueByIndex(index : number) : boolean {
        if(index > this.size - 1) return false;
        this.$queue.splice(index, 1);
        return true;
    }

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