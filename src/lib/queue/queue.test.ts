import {Queue} from "./Queue";
import {PriorityQueue} from "./PriorityQueue";

class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

test("create a users queue and enqueue this user", () => {
    const queue = new Queue<User>();
    const user = new User("Sami Salih", 20);
    queue.enqueue(user);
    expect(queue.peek()?.name).toEqual(user.name);
    expect(queue.length()).toEqual(1);
});

test("create three users and dequeue first user", () => {
    const queue = new Queue<User>();
    const userOne = new User("Sami", 20);
    const userTwo = new User("John", 33);
    const userThree = new User("Henry", 22);
    queue.enqueue(userOne);
    queue.enqueue(userTwo);
    queue.enqueue(userThree);
    expect(queue.peek()?.name).toEqual(userOne.name);
    queue.dequeue();
    expect(queue.peek()?.name).toEqual(userTwo.name);
});

test("create a age priority queue and add six users to this queue", () => {
    const queuePriority = new PriorityQueue<User>((u1, u2) => u1.age - u2.age);
    const userOne = new User("Mehmet", 20);
    const userTwo = new User("John", 33);
    const userThree = new User("Henry", 22);
    const userFour = new User("Merve", 24);
    const userFive = new User("Zeynep", 27);
    const userSix = new User("Mehmet", 74);
    queuePriority.enqueue(userOne);
    queuePriority.enqueue(userTwo);
    queuePriority.enqueue(userThree);
    queuePriority.enqueue(userFour);
    queuePriority.enqueue(userFive);
    queuePriority.enqueue(userSix);
    expect(queuePriority.peek()?.name).toEqual(userSix.name);
    expect(queuePriority.length()).toEqual(6);
    queuePriority.dequeue(); // remove userSix - Mehmet
    expect(queuePriority.peek()?.name).toEqual(userTwo.name);

})