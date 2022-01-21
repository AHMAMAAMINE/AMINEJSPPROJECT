import java.util.List;

import beans.Salle;
import service.SalleService;

public class test {

	public static void main(String[] args) {
		SalleService s=new SalleService();
		List<Salle>salle=s.findAll();
		for(Salle a:salle) {
			System.out.println(a.getId());
		}

	}

}
