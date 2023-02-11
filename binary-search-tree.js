class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

	insert(val) {
		let current = this.root;
		if (!current) {
			this.root = new Node(val);
			return this;
		}
		while (true) {
			if (val < current.val) {
				if (current.left) {
					current = current.left;
				} else {
					current.left = new Node(val);
					return this;
				}
			}
			if (val > current.val) {
				if (current.right) {
					current = current.right;
				} else {
					current.right = new Node(val);
					return this;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

	insertRecursively(val, current = this.root) {
		if (!this.root) {
			this.root = new Node(val);
			return this;
		}
		if (val < current.val) {
			if (!current.left) {
				current.left = new Node(val);
				return this;
			}
			return this.insertRecursively(val, current.left);
		} else {
			if (!current.right) {
				current.right = new Node(val);
				return this;
			}
			return this.insertRecursively(val, current.right);
		}
	}

	/** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let currentNode = this.root;
		while (currentNode) {
			if (currentNode.val === val) return currentNode;
			currentNode = val < currentNode.val ? currentNode.left : currentNode.right;
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val) {
		let nodeArray = [];
		const helper = (node = this.root) => {
			if (node.left) helper(node.left);
			nodeArray.push(node);
			if (node.right) helper(node.right);
		};
		helper();
		return nodeArray.find((n) => {
			if (n.val === val) {
				return n;
			}
		});
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	dfsPreOrder() {
		let nodeArray = [];
		const traverse = (node = this.root) => {
			nodeArray.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse();
		return nodeArray;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	dfsInOrder() {
		let nodeArray = [];
		const traverse = (node = this.root) => {
			if (node.left) traverse(node.left);
			nodeArray.push(node.val);
			if (node.right) traverse(node.right);
		};
		traverse();
		return nodeArray;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	dfsPostOrder() {
		let nodeArray = [];
		const traverse = (node = this.root) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			nodeArray.push(node.val);
		};
		traverse();
		return nodeArray;
	}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	bfs() {
		let node = this.root;
		let queue = [];
		let data = [];

		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}

		return data;
	}

	/** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

	remove(val) {}

	/** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
