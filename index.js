class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(val) {
      //create new node
      var newNode = new Node(val);
      //if there is no root, assing new Node to root
      if(this.root === null){
          this.root = newNode;
          return this;
          //if there IS a current node, we iterate through tree, finding the correct insertion point
      } else {
          var current = this.root;
          while(true){
              if(val < current.value){
                  if(current.left === null){
                      current.left = newNode;
                      return this;
                  } else {
                      current = current.left;
                  }
              } else if(val > current.value){
                  if(current.right === null){
                      current.right = newNode;
                      return this;
                  } else {
                      current = current.right;
                  }
              }
          }
      }
  }
  find(val){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
          while(current && !found){
              if(val < current.value){
                  current = current.left;
              } else if(val > current.value){
                  current = current.right;
              } else {
                  found = true;
              }
          }
          return current;
      }
  }

