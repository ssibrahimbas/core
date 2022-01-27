export interface StackType<ElementType> {
    /**
     * @description add element to this stack
     * */
    push(element : ElementType) : void;

    /**
     * @returns stack size
     * */
    length() : number;

    /**
     * @returns get top element
     * */
    peek() : ElementType | undefined;

    /**
     * @returns stack is empty
     * */
    isEmpty(): boolean;

    /**
     * @description remove top element
     * */
    pop() : ElementType | undefined;

    /**
     * @description reverse stack
     * */
    reverse(): void;

    /**
     * @description converts stack to array
     * */
    toArray() : Array<ElementType>;

    /**
    * @description converts stack to string
    * */
    toString() : string;
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

    private _reverse(index : number) : void {
        if(index !== 0) {
            this._reverse(index - 1);
        };
    }
}