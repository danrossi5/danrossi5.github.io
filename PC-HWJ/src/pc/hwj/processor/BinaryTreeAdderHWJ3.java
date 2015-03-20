package pc.hwj.processor;

import java.util.concurrent.ForkJoinPool;

import pc.hwj.domain.Node;

public class BinaryTreeAdderHWJ3 implements BinaryTreeAdder{
	final ForkJoinPool fjPool;
	int max;
	
	public BinaryTreeAdderHWJ3(int max, int numCpu) {
		this.max = max;
		fjPool = new ForkJoinPool(numCpu);
	}

	@Override
	public int computeOnerousSum(Node root) {
		if (root == null)
			return 0;
		return fjPool.invoke(new BinaryTreeAdderRecursive(root, max));
	}

}
