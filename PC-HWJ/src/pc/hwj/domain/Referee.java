package pc.hwj.domain;

public class Referee {
	private boolean finish;
	
	public Referee() {
		this.finish = false;
	}
	
	public boolean isFinished() {
		return this.finish;
	}
	
	public void finished() {
		this.finish = true;
	}
}
