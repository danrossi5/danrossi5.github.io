package pc.hwj.domain;



public class NodeImpl implements Node {
	int value;
	Node dx,sx;
	
	public NodeImpl(int value, Node dx, Node sx) {
		this.value = value;
		this.dx = dx;
		this.sx = sx;
	}

	@Override
	public Node getSx() {
		return this.sx;
	}

	@Override
	public Node getDx() {
		return this.dx;
	}

	@Override
	public int getValue() {
		return this.value;
	}

}
