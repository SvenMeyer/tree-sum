# treeSum

Numbers are stored in a tree. Each node in this tree stores a single digit (from 0 to 9), and each path from root to leaf encodes a non-negative integer.

Given a binary tree T, find the sum of all the numbers "encoded" in it.

### EXAMPLE 1:

```javascript
t = {
    "value": 1,
    "left": {
        "value": 0,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 1,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": null,
        "right": null
    }
}
```

the output should be
treeSum(t) = 218.

There are 3 numbers encoded in this tree:

Path 1->0->3 encodes 103

Path 1->0->1 encodes 101

Path 1->4 encodes 14

and their sum is 103 + 101 + 14 = 218.



### EXAMPLE 2:

```javascript
t = {
    "value": 0,
    "left": {
        "value": 9,
        "left": null,
        "right": null
    },
    "right": {
        "value": 9,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
```

the output should be

treeSum(t) = 193.

Because 09 + 091 + 093 = 193

Just as a reference, this is a Binary Tree definition in different languages:

**Definition for binary tree in JAVA:**

```java
class Tree<T> {
    Tree(T x) {
        value = x;
    }
    T value;
    Tree<T> left;
    Tree<T> right;
 }
```

**Definition for binary tree in JAVASCRIPT:**

```javascript
function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
}
```

**Definition for binary tree in PYTHON:**

```python

class Tree(object):
    def __init__(self, x):
        self.value = x
        self.left = None
        self.right = None
```
