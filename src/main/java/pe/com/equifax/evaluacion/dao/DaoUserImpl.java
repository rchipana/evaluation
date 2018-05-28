package pe.com.equifax.evaluacion.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import pe.com.equifax.evaluacion.bean.UserBean;

@Repository
public class DaoUserImpl implements DaoUser {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<UserBean> findAll() {
		String sql = "SELECT * FROM USER";
		List<UserBean> users = jdbcTemplate.query(sql, new BeanPropertyRowMapper(UserBean.class));
		return users;
	}

	private static final class UserMapper implements RowMapper<UserBean> {

		@Override
		public UserBean mapRow(ResultSet resultSet, int arg1) throws SQLException {
			UserBean u = new UserBean();
			u.setName(resultSet.getString("name"));
			u.setAge(resultSet.getInt("age"));
			u.setEmail(resultSet.getString("email"));
			u.setPhone(resultSet.getString("phone"));

			return u;
		}
	}

	@Override
	public void save(UserBean user) {
		
		jdbcTemplate.update("INSERT INTO USER (name, email, age, phone) VALUES(?,?,?,?)",
				new Object[] { user.getName(), user.getEmail(), user.getAge(), user.getPhone() });

	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public List<UserBean> finlogin(String nombre, String email) {
		
		List<UserBean> users = null;
		String sql = "SELECT * FROM USER WHERE name LIKE ? and email LIKE ? ";
		
		if( nombre == null ) {
			nombre = "%";
		} else {
			nombre = "%" + nombre  + "%";
		}
		
		if( email == null ) {
			email = "%";
		} else {
			email = "%" + email  + "%";
		}
		
		try {
			users = jdbcTemplate.query(sql, new BeanPropertyRowMapper(UserBean.class), nombre, email);
		} catch (NullPointerException e) {
		}
		
		return users;
	}
	
	public void update (UserBean  user){
		
		String sql = "update user set name = ?, email = ?, age = ?, phone = ?  where id = ?";
		jdbcTemplate.update(sql,
				new Object[] { user.getName(), user.getEmail(), user.getAge(), user.getPhone(), user.getId() });
		
	}
	
	public void delete (Integer  id){
		
		String sql = "delete from user where id = ?";
		jdbcTemplate.update(sql, id);
		
	}

}
