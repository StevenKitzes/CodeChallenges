// from https://leetcode.com/problems/merge-two-binary-trees/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(!t1 || t1.length == 0) return t2;
    if(!t2 || t2.length == 0) return t1;
    
    t1.val += t2.val;
    
    // now that we're merged, recurse if possible
    if(t1.left && t2.left) {
        mergeTrees(t1.left, t2.left);
    }
    else if(t2.left && !t1.left) {
        t1.left = t2.left;
    }
    
    if(t1.right && t2.right) {
        mergeTrees(t1.right, t2.right);
    }
    else if(t2.right && !t1.right) {
        t1.right = t2.right;
    }
    // if t1 right and left both null, don't recurse!
    
    return t1;
};
