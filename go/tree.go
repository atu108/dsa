package tree

type TreeNode struct {
	left  *TreeNode
	right *TreeNode
	value int
}

func tree() TreeNode {
	rootNode := TreeNode{value: 10}
	node1 := TreeNode{value: 20}
	node2 := TreeNode{value: 30}
	rootNode.left = &node1
	rootNode.right = &node2
	return rootNode
}
