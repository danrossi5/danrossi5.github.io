package pc.hwj.processor;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.CompletionService;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorCompletionService;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import pc.hwj.domain.Referee;
import pc.hwj.domain.Node;

public class BinaryTreeAdderHWJ1 implements BinaryTreeAdder {
		private BlockingQueue<Node> buffer;
		private int max;
		private int numCpu;
		
		
		public BinaryTreeAdderHWJ1(int numCpu, int max) {
			this.numCpu = numCpu;
			this.buffer = new LinkedBlockingQueue<Node>();
			this.max = max;
		}

		@Override
		public int computeOnerousSum(Node root) {
			if (root == null) 
				return 0;
			Referee referee = new Referee();
			ExecutorService executor = Executors.newFixedThreadPool(numCpu);
			CompletionService<Integer> ecs = new ExecutorCompletionService<Integer>(executor);
			Lock lock = new ReentrantLock();
			try {
				this.buffer.put(root);
			} catch (InterruptedException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			int i;
			for (i=0; i<numCpu; i++) {
				ecs.submit(new BinaryTreeAdderTaskHWJ1(buffer, max, referee,lock));
			}
			int result = 0;
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
