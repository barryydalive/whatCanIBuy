// const longestDistinctPath = (root, pathSoFar={}) => {
//   if(root === null) return 0
//   if(pathSoFar[root.val]) return 0
//   pathSoFar[root.val] = true

//   const longestLeft = longestDistinctPath(root.left, {...pathSoFar}) + 1
//   const longestRight = longestDistinctPath(root.right, {...pathSoFar}) + 1
  
//   return Math.max(longestLeft, longestRight)
// }


const longestDistinctPath = (node, seen = new Set()) => {
  if(!node || seen.has(node.val)) return 0
  seen.add(node.val)

  const left = longestDistinctPath(node.left, new Set([...seen]))
  const right = longestDistinctPath(node.right, new Set([...seen]))

  return Math.max(left,right) + 1
}

class Node {
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}

const root = new Node(1)
const two = new Node(2)
root.left = {...two}
root.right = {...two}
const three = new Node(3)
root.right.right = {...three}
root.right.right.right = {...two}

console.log('longestDistinctPath(root):', longestDistinctPath(root));