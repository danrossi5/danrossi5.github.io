package pc.hwj.test;

import static org.junit.Assert.*;

import org.junit.Test;

import pc.hwj.domain.Node;
import pc.hwj.domain.ResultGenerator;
import pc.hwj.domain.TreeGenerator;
import pc.hwj.processor.BinaryTreeAdder;
import pc.hwj.processor.BinaryTreeAdderHWJ4;

public class TestHWJ4 {
	TreeGenerator treeGenerator;
	int numCpu;
	ResultGenerator resGenerator;
	
	
	public TestHWJ4() {
		this.treeGenerator = new TreeGenerator();
		this.numCpu = Runtime.getRuntime().availableProcessors();
		this.resGenerator = new ResultGenerator();
	}

//	@Test
//	public void test_EmptyTree_nCpu() {
//		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
//		int result = bta.computeOnerousSum(null);
//		assertEquals(0,result);
//	}

	@Test
	public void test_balanced_depth0_nCpu() {
		int depth = 0;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createTree(0);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultBalanced(depth);
		assertEquals(expectedResult,result);
	}
	
	@Test
	public void test_balanced_depth1_nCpu() {
		int depth = 2;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createTree(depth);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultBalanced(depth);
		assertEquals(expectedResult,result);
	}
	
	@Test
	public void test_balanced_depth10_nCpu() {
		int depth = 10;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createTree(depth);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultBalanced(depth);
		assertEquals(expectedResult,result);
	}
	
	@Test
	public void test_balanced_depth20_nCpu() {
		int depth = 20;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createTree(depth);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultBalanced(depth);
		assertEquals(expectedResult,result);
	}
	
	@Test
	public void test_semi_balanced_depth_1_2_nCpu() {
		int depthSx = 1;
		int depthDx = 1;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createSemiBalancedTree(depthSx, depthDx);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultSemiBalanced(depthSx, depthDx);
		assertEquals(expectedResult,result);
	}

	@Test
	public void test_semi_balanced_depth_5_10_nCpu() {
		int depthSx = 5;
		int depthDx = 10;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createSemiBalancedTree(depthSx, depthDx);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultSemiBalanced(depthSx, depthDx);
		assertEquals(expectedResult,result);
	}
	
	@Test
	public void test_semi_balanced_depth_20_15_nCpu() {
		int depthSx = 20;
		int depthDx = 15;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createSemiBalancedTree(depthSx, depthDx);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultSemiBalanced(depthSx, depthDx);
		assertEquals(expectedResult,result);
	}
	
	@Test
	public void test_not_balanced_depth_1_2_nCpu() {
		int depthSx = 1;
		int depthDx = 2;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createNotBalancedTree(depthSx, depthDx);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultNotBalanced(depthSx, depthDx);
		assertEquals(expectedResult,result);
	}

	@Test
	public void test_not_balanced_depth_0_10_nCpu() {
		int depthSx = 0;
		int depthDx = 10;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createNotBalancedTree(depthSx, depthDx);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultNotBalanced(depthSx, depthDx);
		assertEquals(expectedResult,result);
	}
	
	@Test
	public void test_not_balanced_depth_10_0_nCpu() {
		int depthSx = 10;
		int depthDx = 0;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createNotBalancedTree(depthSx, depthDx);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultNotBalanced(depthSx, depthDx);
		assertEquals(expectedResult,result);
	}
	
	@Test
	public void test_not_balanced_depth_11_7_nCpu() {
		int depthSx = 11;
		int depthDx = 7;
		BinaryTreeAdder bta = new BinaryTreeAdderHWJ4(numCpu, 2000);
		Node root = this.treeGenerator.createNotBalancedTree(depthSx, depthDx);
		int result = bta.computeOnerousSum(root);
		int expectedResult = this.resGenerator.makeResultNotBalanced(depthSx, depthDx);
		assertEquals(expectedResult,result);
	}

}
