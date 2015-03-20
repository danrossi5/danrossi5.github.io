package pc.hwj.domain;

public class TreeGenerator {
	public TreeGenerator(){}
	
	// la somma e' uguale a 2^(depth+1) -1	
	public Node createTree(int depth) {
		if (depth>=0)
			return new NodeImpl(1,createTree(depth-1), createTree(depth-1));
		else
			return null;
	}
	
	// somma uguale a 2^(min+1)-1+2^(min)(max-min)
	public Node createNotBalancedTree(int depthSx, int depthDx) {
		if (depthSx>=0)
			return new NodeImpl(1, createNotBalancedTree(depthSx-1, depthDx-1),
					createNotBalancedTree(depthDx-1, depthSx-1));
		else
			return null;
	}
	
	// somma uguale a 1+2^(depthSx)+2(depthDx)-2
	public Node createSemiBalancedTree(int depthSx, int depthDx) {
		if (depthSx>=0) {
			return new NodeImpl(1, createTree(depthSx-1), createTree(depthDx-1));
		} else
			return null;
	}
}
