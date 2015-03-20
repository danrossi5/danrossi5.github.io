package pc.hwj.processor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.BlockingDeque;
import java.util.concurrent.CompletionService;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorCompletionService;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import pc.hwj.domain.Node;
import pc.hwj.domain.Referee;

public class BinaryTreeAdderHWJ2 implements BinaryTreeAdder{
	private Map<Integer,BlockingDeque<Node>> buffers;
	private int size;
	private int numCpu;
	private int max;
	private Lock stealLock;
	private List<Lock> buffersLock;
	
	public BinaryTreeAdderHWJ2(int size, int numCpu, int max) {
		this.size = size;
		buffers = new HashMap<Integer,BlockingDeque<Node>>();
		this.numCpu = numCpu;
		this.max = max;
		this.stealLock = new ReentrantLock();
		this.buffersLock = new ArrayList<Lock>();
	}

	@Override
	public int computeOnerousSum(Node root) {
		if (root == null)
			return 0;
		int result = 0;
		int i;
		Referee referee = new Referee();
		ExecutorService executor = Executors.newFixedThreadPool(numCpu);
		CompletionService<Integer> ecs = new ExecutorCompletionService<Integer>(executor);
		for (i=0; i<numCpu; i++) {
			BlockingDeque<Node> buffer = new LinkedBlockingDeque<Node>((size+1)*numCpu);
			buffers.put(i,buffer);
			Lock bufferLock = new ReentrantLock();
			this.buffersLock.add(bufferLock);
		}
		buffers.get(0).offerFirst(root);
		for (i=0; i<numCpu; i++) {
			ecs.submit(new BinaryTreeAdderTaskHWJ2(buffers,i,max,numCpu,referee,stealLock,buffersLock));
		}
		for (i=0; i<numCpu; i++) {
			try {
				result+=ecs.take().get();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ExecutionException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		executor.shutdown();
		return result;
	}
}
