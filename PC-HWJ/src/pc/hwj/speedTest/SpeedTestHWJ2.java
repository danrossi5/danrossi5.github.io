package pc.hwj.speedTest;

import pc.hwj.domain.Node;
import pc.hwj.domain.TreeGenerator;
import pc.hwj.processor.BinaryTreeAdder;
import pc.hwj.processor.BinaryTreeAdderHWJ2;

public class SpeedTestHWJ2 {
public SpeedTestHWJ2() {}
	
	public static void makeTest(Node root, int depth) {
		int numCpu = Runtime.getRuntime().availableProcessors();
		BinaryTreeAdder btaSerial = new BinaryTreeAdderHWJ2(depth,1,2000);
		BinaryTreeAdder btaConcurrent = new BinaryTreeAdderHWJ2(depth,numCpu,2000);
		StopWatch stopWatch = new StopWatch();
		double result = stopWatch.getTime(root, btaSerial, btaConcurrent);
		System.out.println("SpeedUp = "+result);
	}
	
	public static Node makeTree(int type, int depthSx, int depthDx) {
		Node root;
		TreeGenerator tg = new TreeGenerator();
		if (type == 1) {
			root = tg.createTree(depthSx);
		} else if (type == 2) {
			root = tg.createSemiBalancedTree(depthSx, depthDx);
		} else {
			root = tg.createNotBalancedTree(depthSx, depthDx);
		}
		return root;
	}
	
	public static void main(String[] args) {
		int type = 1;
		int depthSx = 15;
		int depthDx = 6;
		Node root = makeTree(type, depthSx,depthDx);
		int maxDepth = Math.max(depthSx, depthDx);
		makeTest(root, maxDepth);
	}
}
