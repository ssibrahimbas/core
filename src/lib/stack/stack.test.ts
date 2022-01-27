import {Stack} from "./Stack";

class Page {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
}

test("create a page history stack and add three page to this stack", () => {
    const pageStack = new Stack<Page>();
    const pageOne = new Page("www.itemsatis.com");
    const pageTwo = new Page("www.itempazar.com");
    const pageThree = new Page("www.samisalihibrahimbas.com.tr");
    pageStack.push(pageOne);
    pageStack.push(pageTwo);
    pageStack.push(pageThree);
    expect(pageStack.peek()?.url).toEqual(pageThree.url) // current page
});

test("create a page history stack and three page to this stack, then exit the last page you entered", () => {
    const pageStack = new Stack<Page>();
    const pageOne = new Page("www.itemsatis.com");
    const pageTwo = new Page("www.itempazar.com");
    const pageThree = new Page("www.samisalihibrahimbas.com.tr");
    pageStack.push(pageOne);
    pageStack.push(pageTwo);
    pageStack.push(pageThree);
    expect(pageStack.peek()?.url).toEqual(pageThree.url) // current page
    pageStack.pop();
    expect(pageStack.peek()?.url).toEqual(pageTwo.url);
});

test("create a page history stack and reverse this stack", () => {
    const pageStack = new Stack<Page>();
    const pageOne = new Page("www.itemsatis.com");
    const pageTwo = new Page("www.itempazar.com");
    const pageThree = new Page("www.samisalihibrahimbas.com.tr");
    pageStack.push(pageOne);
    pageStack.push(pageTwo);
    pageStack.push(pageThree);
    pageStack.reverse();
    expect(pageStack.peek()?.url).toEqual(pageThree.url);
})