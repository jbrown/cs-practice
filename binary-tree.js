function Node(data) {
  this.data = data;
  this.leftNode = null;
  this.rightNode = null;
}

Node.prototype.printInOrder = function () {
  if (this.leftNode !== null) {
    this.leftNode.printInOrder();
  }
  console.log(this.data);
  if (this.rightNode !== null) {
    this.rightNode.printInOrder();
  }
}

Node.prototype.contains = function (value) {
  if (this.data == value) {
    return true;
  } else if (value < this.data) {
    if (this.leftNode === null) {
      return false;
    } else {
      return this.leftNode.contains(value);
    }
  } else {
    if (this.rightNode === null) {
      return false;
    } else {
      return this.rightNode.contains(value);
    }
  }
}

Node.prototype.insert = function (value) {
  if (value <= this.data) {
    if (this.leftNode === null) {
      this.leftNode = new Node(value);
    } else {
      this.leftNode.insert(value);
    }
  } else {
    if (this.rightNode === null) {
      this.rightNode = new Node(value);
    } else {
      this.rightNode.insert(value);
    }
  }
}

let root = new Node(10);

root.insert(4);
root.insert(2);
root.insert(14);
root.insert(9);
root.insert(11);

console.log(root.printInOrder());
console.log('contains 1', root.contains(1));
console.log('contains 9', root.contains(9));
console.log('contains 14', root.contains(14));