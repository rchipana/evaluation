package pe.com.equifax.evaluacion.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.com.equifax.evaluacion.bean.UserBean;
import pe.com.equifax.evaluacion.dao.DaoUser;


@Service
public class ServiceUserImpl implements ServiceUser {

	@Autowired
	DaoUser daoUser;
	
	@Override
	public List<UserBean> findAll() {
		return daoUser.findAll();
	}

	@Override
	public void save(UserBean user) {
		 daoUser.save(user);
		
	}

	@Override
	public List<UserBean> finlogin(String nombre ,String email) {
		return daoUser.finlogin(nombre, email);
	}

	public void update (UserBean  user){
		daoUser.update(user);
	}
	
	public void delete (Integer  id){
		daoUser.delete(id);
	}
}
