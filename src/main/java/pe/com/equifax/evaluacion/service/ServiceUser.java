package pe.com.equifax.evaluacion.service;

import java.util.List;

import pe.com.equifax.evaluacion.bean.UserBean;

public interface ServiceUser {
	public List<UserBean> findAll(); 
	public void save (UserBean  user); 
	public List<UserBean> finlogin (String mombre , String email); 
	
	public void update (UserBean  user);
	public void delete (Integer  id);
}
