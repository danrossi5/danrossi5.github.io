package pc.hwj.speedTest;

import pc.hwj.domain.Node;
import pc.hwj.processor.BinaryTreeAdder;

public class StopWatch {
	public StopWatch() {}
	
	public double getTime(Node root, BinaryTreeAdder serial, BinaryTreeAdder concurrent) {
		int i;
		
		// serial time
		for (i=0; i<10; i++) {
			serial.computeOnerousSum(root);
		}
		double start = System.currentTimeMillis();
		serial.computeOnerousSum(root);
		double stop = System.currentTimeMillis();
		double serialExecution = stop-start;
		
		// councurrent time
		for (i=0; i<10; i++) {
			concurrent.computeOnerousSum(root);
		}
		start = System.currentTimeMillis();
		concurrent.computeOnerousSum(root);
		stop = System.currentTimeMillis();
		double concurrentExecution = stop-start;
		System.out.println("Serial : "+serialExecution);
		System.out.println("Concurrent : "+concurrentExecution);
		
		// speed-up
		double result = serialExecution/concurrentExecution;
		return result;
	}
}
