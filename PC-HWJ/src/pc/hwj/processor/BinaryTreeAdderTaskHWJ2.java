package pc.hwj.processor;

import java.util.List;
import java.util.Map;
import java.util.concurrent.BlockingDeque;
import java.util.concurrent.Callable;
import java.util.concurrent.locks.Lock;

import pc.hwj.domain.Node;
import pc.hwj.domain.Referee;

public class BinaryTreeAdderTaskHWJ2 implements Callable<Integer> {
	private Map<Integer,BlockingDeque<Node>> buffers;
	private int myId;
	private int numCpu;
	private OnerousProcessor processor;
	private Referee referee;
	private Lock stealLock;
	private List<Lock> buffersLock;
	
	public BinaryTreeAdderTaskHWJ2(Map<Integer,BlockingDeque<Node>> buffers, int myId, int max, int numCpu, Referee referee, Lock lock, List<Lock> buffersLock) {
		this.buffers = buffers;
		this.myId = myId;
		this.processor = new FakeProcessor(max);
		this.numCpu = numCpu;
		this.referee = referee;
		this.stealLock = lock;
		this.buffersLock = buffersLock;
	}

	@Override
	public Integer call() throws Exception {
		BlockingDeque<Node> myBuffer = this.buffers.get(myId);
		int result = 0;
		while (!referee.isFinished()) {
			Node current = null;
			this.buffersLock.get(myId).lock();
			try {
				current = myBuffer.pollLast();
				if (current!=null) {
					if (current.getDx()!= null) {
						myBuffer.offerLast(current.getDx());
					}
					if (current.getSx()!= null) {
						myBuffer.offerLast(current.getSx());
					}
				}
			} finally {
				this.buffersLock.get(myId).unlock();
			}
			if (current == null) {
				this.stealLock.lock();
				try {
					current = stealsWork();
				} finally {
					this.stealLock.unlock();
				}
			}
			if (current == null) {
				referee.finished();
			} 
			if (current != null)
				result+= processor.onerousFunction(current.getValue());
		}
		return result;
	}
	
	private Node stealsWork() {
		Node stolen = null;
		int i;
		for (i=0; i<numCpu; i++) {
			if (i!=myId) {
				this.buffersLock.get(i).lock();
				this.buffersLock.get(myId).lock();
				stolen = buffers.get(i).pollFirst();
				if (stolen!=null) {
					if (stolen.getDx()!= null) {
						this.buffers.get(myId).offerLast(stolen.getDx());
					}
					if (stolen.getSx()!= null) {
						this.buffers.get(myId).offerLast(stolen.getSx());
					}
				}
				this.buffersLock.get(i).unlock();
				this.buffersLock.get(myId).unlock();
				if (stolen!=null)
					break;
			}
		}
		return stolen;
	}

}
