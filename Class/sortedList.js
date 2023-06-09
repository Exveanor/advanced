class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    //helper methods
    updateSize() {
        this.size = this.list.length;
    }

    orderlist() {
        return this.list.sort((a, b) => a - b);
    }

    //main functionalities
    add(e) {
        this.list.push(e);
        this.updateSize();
        this.orderlist();
    }

    remove(i) {
        if (this.list[i] === undefined) {
            return;
        }

        this.list.splice(i, 1);
        this.updateSize();
        this.orderlist();
    }
    get(i) { 
        if (this.list[i] === undefined) {
            return;
        }

        return this.list[i];
    }
}



// Input
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
