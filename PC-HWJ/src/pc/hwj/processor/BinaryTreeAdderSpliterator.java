package pc.hwj.processor;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Spliterator;
import java.util.function.Consumer;

import pc.hwj.domain.Node;
import pc.hwj.domain.NodeImpl;

public class BinaryTreeAdderSpliterator implements Spliterator<Node> {
	private static final int SEQUENTIAL_THRESHOLD = 10;
	private Deque<Node> buffer;
	
	
	public BinaryTreeAdderSpliterator(Deque<Node> buffer) {
		this.buffer = buffer;
	}

	@Override
	public boolean tryAdvance(Consumer<? super Node> action) {
		if (action == null)
            throw new NullPointerException();
		
        if (!this.buffer.isEmpty()) {
        	Node current = this.buffer.removeLast();
            action.accept(current);
            if (current.getSx()!=null)
            	this.buffer.addFirst(current.getSx());
            if (current.getDx()!=null)
            	this.buffer.addFirst(current.getDx());
            return true;
        }
        return false;
	}

	@Override
	public Spliterator<Node> trySplit() {
		if (!this.buffer.isEmpty()) {
			if (splittingTest(this.buffer.getLast(),0)>SEQUENTIAL_THRESHOLD) {
				Node current = this.buffer.removeLast();
				this.buffer.addLast(new NodeImpl(current.getValue(),null,null));
				if (current.getSx()!=null)
					this.buffer.addLast(current.getSx());
				Deque<Node> newBuffer = new LinkedList<Node>();
				if (current.getDx()!=null) {
					newBuffer.addLast(current.getDx());
				}
				return new BinaryTreeAdderSpliterator(newBuffer);
			}
		}
		return null;
	}

	@Override
	public long estimateSize() {
		if (this.buffer.isEmpty())
			return 0;
		return splittingTest(this.buffer.getLast(),0);
	}

	@Override
	public int characteristics() {
		// TODO Auto-generated method stub
		return 0;
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
