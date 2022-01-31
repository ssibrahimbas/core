export interface StackType<ElementType> {
    /**
     * @description add element to this stack
     * @since 0.0.1
     * */
    push(element : ElementType) : void;

    /**
     * @returns stack size
     * @since 0.0.1
     * */
    length() : number;

    /**
     * @returns get top element
     * @since 0.0.1
     * */
    peek() : ElementType | undefined;

    /**
     * @returns stack is empty
     * @since 0.0.1
     * */
    isEmpty(): boolean;

    /**
     * @description remove top element
     * @since 0.0.1
     * */
    pop() : ElementType | undefined;

    /**
     * @description reverse stack
     * @since 0.0.1
     * */
    reverse(): void;

    /**
     * @description converts stack to array
     * @since 0.0.1
     * */
    toArray() : Array<ElementType>;

    /**
    * @description converts stack to string
     * @since 0.0.1
    * */
    toString() : string;

    /**
     * @description clone this stack
     * @since 0.0.8
     * */
    clone(): Stack<ElementType>;
};

export class Stack<ElementType> implements StackType<ElementType> {
    private readonly $stack : Array<ElementType>;
    private $top: number;

    constructor() {
        this.$stack = [];
        this.$top = 0;
        Object.setPrototypeOf(this, Stack.prototype);
    };

    push(element : ElementType) : void {
        this.$stack[this.$top] = element;
        this.$top = this.$top + 1;
    };

    length() : number {
        return this.$top;
    };

    peek() : ElementType | undefined {
        return this.$stack[this.$top - 1];
    }

    isEmpty() : boolean {
        return this.$top === 0;
    };

    pop() : ElementType | undefined {
        if(!this.isEmpty()) {
            this.$top = this.$top - 1;
            return this.$stack.pop();
        }
    };

    toArray() : Array<ElementType> {
        return this.$stack;
    };

    toString() : string {
        return JSON.stringify(this.$stack);
    }

    reverse() : void {
        this._reverse(this.$top - 1);
    };

    clone(): Stack<ElementType> {
        return new Stack<ElementType>();
    }

    private _reverse(index : number) : void {
        if(index !== 0) {
            this._reverse(index - 1);
        };
    }
}