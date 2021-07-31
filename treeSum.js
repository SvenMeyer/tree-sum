// TreeSum
// Numbers are stored in a tree. Each node in this tree stores a single digit (from 0 to 9),
// and each path from root to leaf encodes a non-negative integer.
// Given a binary tree T, find the sum of all the numbers "encoded" in it

const t1 = {
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

// the output should be
// treeSum(t) = 218.
//
// There are 3 numbers encoded in this tree:
//
// Path 1->0->3 encodes 103
// Path 1->0->1 encodes 101
// Path 1->4 encodes 14
//
// and their sum is 103 + 101 + 14 = 218

const t2 = {
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

// the output should be
// treeSum(t) = 193.
// Because 09 + 091 + 093 = 193


const t3 = {
    "value": 1,
    "left" : {
        "value": 2,
        "left": {
            "value": 3,
            "left":  null,
            "right": null
        },
        "right": {
            "value": 4,
            "left":  null,
            "right": null
        }
    },
    "right": null
}

//  unbalanced tree, one leaf with subtree, the other is null
//  123 + 124 = 247


const t4 = {
    "value": 1,
    "left" : {
        "value": 2,
        "left": {
            "value": 3,
            "left":  null,
            "right": null
        },
        "right": null
    },
    "right": null
}

// (mis)using the tree to represent a linear list
// 123



function treeSum(t, sum=0) {
	if (t==null) return 0;
	if (t.left==null && t.right==null) return 10*sum+t.value;
	return treeSum(t.left, 10*sum+t.value) + treeSum(t.right, 10*sum+t.value);
}

console.log("treeSum(t1) should be 103 + 101 +  14 = 218 : ", treeSum(t1));
console.log("treeSum(t2) should be  09 + 091 + 093 = 193 : ", treeSum(t2));
console.log("treeSum(t3) should be 123 + 124       = 247 : ", treeSum(t3));
console.log("treeSum(t4) should be 123             = 123 : ", treeSum(t4));
