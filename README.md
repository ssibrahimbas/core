
<p align="center"><br><img src="https://avatars.githubusercontent.com/u/76786120?v=4" width="128" height="128" style="border-radius: 50px;" /></p>
<h3 align="center">Ssibrahimbas Core</h3>
<p align="center"><strong><code>@ssibrahimbas/core</code></strong></p>
<p align="center">
  Contains helpful Type-Java-Script constructs.
</p>

## Maintainers

| Maintainer            | GitHub                                          | Web                                                     |
|-----------------------|-------------------------------------------------|---------------------------------------------------------|
| Sami Salih İbrahimbaş | [ssibrahimbas](https://github.com/ssibrahimbas) | [@ssibrahimbas](https://www.samisalihibrahimbas.com.tr) |

## Installation

### With npm

```bash
$ npm install @ssibrahimbas/core
```

### Or with yarn: 

```bash
$ yarn add @ssibrahimbas/core
```

### Usage

#### For TypeScript

```typescript

import {Queue, PriorityQueue, Stack} from "@ssibrahimbas/core";

interface IQueueType {
    name: string;
}
const myQueue = new Queue<IQueueType>();

interface IPriorityQueueType {
    priority: number;
    name: string;
}
const myPriorityQueue = new PriorityQueue<IPriorityQueue>((a, b) => a.priority - b.priority);

interface IstackType {
    url: string;
}
const pageHistoryStack = new Stack<IstackType>();

```

#### for JavaScript

```javascript

// import {Queue, PriorityQueue, Stack} from "@ssibrahimbas/core"; // for module
const {Queue, PriorityQueue, Stack} = require("@ssibrahimbas/core"); // for commonjs

const myQueue = new Queue();
const myPriorityQueue = new PriorityQueue((a,b) => a - b);
const myStack = new Stack();

```

## API

<docgen-index>

* [`Queue`](#Queue)
* [`PriorityQueue`](#PriorityQueue)
* [`Stack`](#Stack)

</docgen-index>

<docgen-api>

## Queue

### Description:

The feature of queue is FIFO. That is, fist in, first out.

Type-Java-Script itself has no queue structure. However, we may want to queue some transactions for various reasons. We can even process according to the importance of these queses, see: PriorityQueue.

That's why this post and you are here. @ssibrahimbas/core It, gives the queue structure to Type-Java-Script.

<docgen-index>

* [`size`](#QueueSize)
* [`enqueue(...)`](#QueueEnqueue)
* [`dequeue()`](#QueueDequeue)
* [`dequeueByIndex(...)`]("#QueueDequeueByIndex")
* [`isEmpty()`](#QueueIsEmpty)
* [`peek()`](#QueuePeek)
* [`length()`](#QueueLength)
* [`toArray()`](#QueueToArray)
* [`toString()`](#QueueToString)
* [`clone()`]("#QueueClone")

</docgen-index>

## PriorityQueue

### Description

FIFO is a very nice rule, but you may not need it. Instead, the priority may need to be delisted first.

We can compare this to the fact that in any queue (for example, the hospital queue), the elderly and children get ahead of other people first.

While this is a very nice feature, it requires more performance than the Queue itself. Because the list must be reordered every time an element is added. You may have some peace of mind about this. We do the sorting on the insertion with BubbleSort, and it has a total O(logn) performance complexity. If we had used the ``sort``` method instead, this complexity would have increased to O(n log n).

Its usage is exactly the same as Queue except for deletion and cloning. The structure running in the background changes.

<docgen-index>

* [`dequeue(...)`](#QueuePriorityDequeue)
* [`clone()`](#QueuePriorityClone)

</docgen-index>

## Stack

### Description:

Another data type not in JavaScript itself is Stack. The feature of stacks is LIFO. That is, last in, first out.

Thanks to this package, you can use the Stack data type on JavaScript.

<docgen-index>

* [`push(...)`](#StackPush)
* [`length()`](#StackLength)
* [`peek()`](#StackPeek)
* [`isEmpty()`](#StackIsEmpty)
* [`pop()`](#StackPop)
* [`reverse()`](#StackReverse)
* [`toArray()`](#StackToArray)
* [`toString()`](#StackToString)
* [`clone()`](#StackClone)

</docgen-index>

</docgen-api>

<docgen-api>

### QueueSize

```typescript

type User = {
    name: string;
}
const userQueue = new Queue<User>();
userQueue.size; // return 0
userQueue.enqueue({name: "sami"}); // enqueue sami
userQueue.size // return 1

```

Returns the size of the queue

**Returns:** <code>number</code>

### QueueEnqueue

```typescript

type User = {
    name: string;
}
const userQueue = new Queue<User>();
userQueue.enqueue({name: "sami"}); // enqueue sami

```

Add element to queue


| Param         | Type          |
|---------------|---------------|
| **`element`** | T - your type |

**Returns:** <code>void</code>

### QueueDequeue

```typescript

type User = {
    name: string;
}
const userQueue = new Queue<User>();
userQueue.enqueue({name: "sami"}); // enqueue sami
userQueue.dequeue(); // remove first element

```

Remove first element this queue - cf. FIFO

**Returns:** <code>void</code>

### QueueDequeueByIndex

```typescript

type User = {
    name: string;
}
const userQueue = new Queue<User>();
userQueue.enqueue({name: "sami"});
userQueue.enqueue({name: "john"});
userQueue.enqueue({name: "evan"});
userQueue.enqueue({name: "salih"});
userQueue.dequeueByIndex(2); // remove evan

```

remove element at specific index from this queue

**Returns:** <code>boolean</code>

### QueueIsEmpty

```typescript

const userQueue = new Queue<any>();
console.log(userQueue.isEmpty())

```

Is the queue empty?

**Returns:** <code>boolean</code>

### QueuePeek

```typescript

type User = {
    name: string;
}
const userQueue = new Queue<User>();
userQueue.enqueue({name: "sami"}); // enqueue sami
console.log(userQueue.peek())

// result -> {name: 'sami'}

```

Return first element from this queue

**Returns:** <code>T</code>

### QueueLength

```typescript

type User = {
    name: string;
}
const userQueue = new Queue<User>();
userQueue.enqueue({name: "sami"});
console.log(userQueue.length())

```

Returns the size of the queue - similar to size

**Returns:** <code>number</code>

### QueueToArray

```typescript

type User = {
    name: string;
}
const userQueue = new Queue<User>();
userQueue.enqueue({name: "sami"});
console.log(userQueue.toArray()) // [{name: 'sami'}]

```

Converts queue to array

**Returns:** <code>Array&lt;T&gt;</code>

### QueueToString

```typescript

type User = {
    name: string;
}
const userQueue = new Queue<User>();
userQueue.enqueue({name: "sami"});
console.log(userQueue.toString()) // "[{name: 'sami'}]"

```

### QueueClone

```typescript

type User = {
    name: string;
}
const userQueue = new Queue<User>();
userQueue.enqueue({name: "sami"});
const employeeQueue = userQueue.clone();
console.log(employeeQueue.toString()) // "[{name: 'sami'}]"

```

Clones the queue

**Returns:** <code>QueueType&lt;T&gt;</code>

### QueuePriorityDequeue

```typescript

type User = {
    name: string;
}
const userQueue = new PriorityQueue<User>((a,b) => a.priority - b.priority);
userQueue.enqueue({name: "sami", priority: 2});
userQueue.enqueue({name: "salih", priority: 3});
userQueue.enqueue({name: "mehmet", priority: 1});
userQueue.dequeue(); // remove salih
userQueue.dequeue(1); // remove mehmet

```

Remove first element or your index this queue - cf. FIFO

| Param       | Type   |
|-------------|--------|
| **`index`** | number |

**Returns:** <code>void</code>

### QueuePriorityClone

```typescript

type User = {
    name: string;
}
const userQueue = new PriorityQueue<User>((a,b) => a.priority - b.priority);
userQueue.enqueue({name: "sami", priority: 2});
userQueue.enqueue({name: "salih", priority: 3});
const employeeQueue = userQueue.clone();
console.log(employeeQueue.toString()) // "[{name: "salih", priority: 3}, {name: "sami", priority: 2}]"

```

Clones the queue

**Returns:** <code>PriorityQueueType&lt;T&gt;</code>

### StackPush

```typescript

type Page = {
    url: string;
}
const pageStack = new Stack<Page>();
pageStack.push({url: "www.itemsatis.com"});

```

Add element to stack


| Param         | Type          |
|---------------|---------------|
| **`element`** | T - your type |

**Returns:** <code>void</code>

### StackLength

```typescript

type Page = {
    url: string;
}
const pageStack = new Stack<Page>();
pageStack.push({url: "www.itemsatis.com"});
console.log(pageStack.length())

```

Returns the size of the stack

**Returns:** <code>number</code>

### StackPeek

```typescript

type Page = {
    url: string;
}
const pageStack = new Stack<Page>();
pageStack.push({url: "www.itemsatis.com"});
console.log(pageStack.peek())

// result -> {url: 'www.itemsatis.com'}

```

Return first element from this stack

**Returns:** <code>T</code>

### StackIsEmpty

```typescript
const pageStack = new Stack<any>();
console.log(pageStack.isEmpty())

```

Is the stack empty?

**Returns:** <code>boolean</code>

### StackPop

```typescript

type Page = {
    url: string;
}
const pageStack = new Stack<Page>();
pageStack.push({url: "www.itemsatis.com"});
pageStack.push({url: "www.itempazar.com"});
const last = pageStack.pop(); // return last element and remove

```

Remove last element this stack - cf. LIFO

**Returns:** <code>T</code>

### StackReverse

```typescript

type Page = {
    url: string;
}
const pageStack = new Stack<Page>();
pageStack.push({url: "www.itemsatis.com"});
pageStack.push({url: "www.itempazar.com"});
const last = pageStack.pop(); // return last element and remove

```

reverses the stack.

For the above example: the first element declared 'www.itemsatis.com' will be the last element and will appear first in a possible `pop` call.

**Returns:** <code>void</code>

### StackToArray

```typescript

type Page = {
    url: string;
}
const pageStack = new Stack<Page>();
pageStack.push({url: "www.itemsatis.com"});
console.log(pageStack.toArray()) // [{url: 'www.itemsatis.com'}]

```

Converts queue to stack

**Returns:** <code>Array&lt;T&gt;</code>

### StackToString

```typescript

type Page = {
    url: string;
}
const pageStack = new Stack<Page>();
pageStack.push({url: "www.itemsatis.com"});
console.log(pageStack.toString()) // "[{url: "www.itemsatis.com"}]"

```

Converts queue to string

**Returns:** <code>string</code>

### StackClone

```typescript

type Page = {
    url: string;
}
const pageStack = new Stack<Page>();
pageStack.push({url: "www.itemsatis.com"});
const pageStackClone = pageStack.clone();
console.log(pageStackClone.toString()) // "[{url: "www.itemsatis.com"}]"

```

Clones the queue

**Returns:** <code>StackType&lt;T&gt;</code>

</docgen-api>
