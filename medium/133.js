/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null

    const oldToNew = new Map()

    function dfs(curr){
        if(oldToNew.has(curr)){
            return oldToNew.get(curr)
        }

        const clone = new Node(curr.val)

        oldToNew.set(curr, clone)
        for(let neighbor of curr.neighbors){
            clone.neighbors.push(dfs(neighbor))
        }
        return clone
    }
    return dfs(node)
};