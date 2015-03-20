package pc.hwj.processor;

import java.util.Deque;
import java.util.LinkedList;
import java.util.concurrent.RecursiveTask;

import pc.hwj.domain.Node;

@SuppressWarnings("serial")
public class BinaryTreeAdderRecursive extends RecursiveTask<Integer> {
	private Deque<Node> buffer;
	Node root;
	int max;
	OnerousProcessor processor;
	static final int SEQUENTIAL_THRESHOLD = 100;
	
	
	public BinaryTreeAdderRecursive(Node root, int max) {
		this.root = root;
		this.max = max;
		this.processor = new FakeProcessor(max);
		this.buffer = new LinkedList<Node>();
		this.buffer.offerFirst(root);
	}

	@Override
	protected Integer compute() {
		Node n = this.buffer.pollFirst();
		if (splittingTest(n,0)<SEQUENTIAL_THRESHOLD) {
			int result = 0;
			while (true) {
				if (n==null)
					n = this.buffer.pollFirst();
				if (n==null) {
					break;
				}
				if (n.getSx()!=null) {
					this.buffer.offerLast(n.getSx());
				}
				if (n.getDx()!=null) {
					this.buffer.offerLast(n.getDx());
				}
				result+=processor.onerousFunction(n.getValue());
				n=null;
			}
			return result;
		}
		else {
			BinaryTreeAdderRecursive left = new BinaryTreeAdderRecursive(n.getSx(), max);
			BinaryTreeAdderRecursive right = new BinaryTreeAdderRecursive(n.getDx(), max);
			left.fork();
			int resDx = right.compute();
			int resSx = left.join();
			return processor.onerousFunction(n.getValue()) + resSx + resDx;
		}
	}
	
	private int splittingTest(Node n, int count) {
		if (count+1 > SEQUENTIAL_THRESHOLD) {
			return count+1;
		} 
		if (n.getSx()!=null) {
			count = splittingTest(n.getSx(),count+1);
			if (count > SEQUENTIAL_THRESHOLD)
				return count;
		}
		if (n.getDx()!=null) {
			count = splittingTest(n.getDx(),count+1);
			if (count > SEQUENTIAL_THRESHOLD)
				return count;
		}
		return count;
	}
	
}
