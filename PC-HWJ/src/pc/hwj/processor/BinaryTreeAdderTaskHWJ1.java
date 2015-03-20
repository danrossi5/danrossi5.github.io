package pc.hwj.processor;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.Callable;
import java.util.concurrent.locks.Lock;

import pc.hwj.domain.Referee;
import pc.hwj.domain.Node;

public class BinaryTreeAdderTaskHWJ1 implements Callable<Integer> {
	private BlockingQueue<Node> buffer;
	private OnerousProcessor processor;
	private Referee referee;
	private Lock lock;
	
	public BinaryTreeAdderTaskHWJ1(BlockingQueue<Node> buffer, int max, Referee finished, Lock lock) {
		this.buffer = buffer;
		this.processor = new FakeProcessor(max);
		this.referee = finished;
		this.lock = lock;
	}

	@Override
	public Integer call() throws Exception {
		
		Integer result = 0;
		while (!referee.isFinished()) {
			Node current = null;
			lock.lock();
			try {
				if (this.buffer.isEmpty()) {
					referee.finished();
				} else {
					current = this.buffer.take();
					if (current.getSx()!=null) {
						this.buffer.put(current.getSx());
					}
					if (current.getDx()!=null) {
						this.buffer.put(current.getDx());
					}
				}
			} finally {
				lock.unlock();
			}
			if (current!=null) 
				result+=this.processor.onerousFunction(current.getValue());
		}
		return result;
	}

}
