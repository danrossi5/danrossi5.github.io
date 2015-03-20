package pc.hwj.domain;

public class ResultGenerator {
	public ResultGenerator() {}
	
	public int makeResultBalanced(int depth) {
		return (int)Math.pow(2, depth+1)-1;
	}
	
	public int makeResultSemiBalanced(int depthSx, int depthDx) {
		return (int) ((int)Math.pow(2, depthSx)+ Math.pow(2, depthDx)-1);
	}
	
	public int makeResultNotBalanced(int depthSx, int depthDx) {
		int minDepth = Math.min(depthSx, depthDx);
		int maxDepth = Math.max(depthSx, depthDx);
		return ((int) Math.pow(2, minDepth+1))-1+((int)Math.pow(2, minDepth))*(maxDepth-minDepth);
	}

}
