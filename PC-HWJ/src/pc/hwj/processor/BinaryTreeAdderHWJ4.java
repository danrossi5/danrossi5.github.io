package pc.hwj.processor;

import java.util.Deque;
import java.util.LinkedList;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import pc.hwj.domain.Node;

public class BinaryTreeAdderHWJ4 implements BinaryTreeAdder {
	private Deque<Node> buffer;
	private static int max;
	private int numCpu;
	
	
	public BinaryTreeAdderHWJ4(int numCpu, int maxVal) {
		this.numCpu = numCpu;
		this.buffer = new LinkedList<Node>();
		max = maxVal;
	}
	
	
	private Stream<Node> stream() {
        return StreamSupport.stream(new BinaryTreeAdderSpliterator(buffer), false);
    }

    private Stream<Node> parallelStream() {
        return StreamSupport.stream(new BinaryTreeAdderSpliterator(buffer), true);
    }

	@Override
	public int computeOnerousSum(Node root) {
		if (root==null)
			return 0;
		this.buffer.add(root);

		Stream<Node> stream;
		if (numCpu==1)
			stream = stream();
		else
			stream = parallelStream();
		return stream
				.map(BinaryTreeAdderHWJ4::onerousComputation)
				.reduce(0, (a,b) -> a+b);
	}

	private static int onerousComputation(Node n) {
		OnerousProcessor processor = new FakeProcessor(max);
		return processor.onerousFunction(n.getValue());
	}
}
