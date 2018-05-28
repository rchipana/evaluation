package pe.com.equifax.evaluacion.bean;

import java.io.Serializable;
import java.util.List;

public class DataTableBean implements Serializable {

	/**
	 * Default serial version UID
	 */
	private static final long serialVersionUID = 1L;
	private List<UserBean> data;

	public List<UserBean> getData() {
		return data;
	}

	public void setData(List<UserBean> data) {
		this.data = data;
	}
}

