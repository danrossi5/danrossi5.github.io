package pc.hwj.speedTest;

import pc.hwj.domain.Node;
import pc.hwj.domain.TreeGenerator;
import pc.hwj.processor.BinaryTreeAdder;
import pc.hwj.processor.BinaryTreeAdderHWJ3;

public class SpeedTestHWJ3 {
public SpeedTestHWJ3() {}
	
	public static void makeTest(Node root) {
		int numCpu = Runtime.getRuntime().availableProcessors();
		BinaryTreeAdder btaSerial = new BinaryTreeAdderHWJ3(2000,1);
		BinaryTreeAdder btaConcurrent = new BinaryTreeAdderHWJ3(2000,numCpu);
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
		int depthSx = 17;
		int depthDx = 12;
		Node root = makeTree(type, depthSx,depthDx);
		makeTest(root);
	}
}
