package pe.com.equifax.evaluacion.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import ch.qos.logback.core.net.SyslogOutputStream;
import pe.com.equifax.evaluacion.bean.UserBean;
import pe.com.equifax.evaluacion.service.ServiceUser;

@Controller
public class RestController {

	@Autowired
	private ServiceUser serviceUser;
	/*
	 * @RequestMapping(value = "/evaluacion", method = RequestMethod.GET) public
	 * String evaluacion(HttpServletRequest request) {
	 * request.getSession().setAttribute("fecha", parsearFecha(new Date())); return
	 * "welcome";
	 * 
	 * }
	 */

	@GetMapping(value = "/listar", produces = { "application/json" })
	public @ResponseBody List<UserBean> listar() {
		List<UserBean> lt = serviceUser.findAll();
		System.out.println(serviceUser.findAll().size() + "--------->>>>>>controlador");
		for (UserBean userBean : lt) {
			System.out.println(userBean.getName());
		}

		return lt;
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView evaluacion() {
		ModelAndView model;
		String page = "";
		page = "welcome";
		model = new ModelAndView(page);
		model.addObject("fecha", parsearFecha(new Date()));
		return model;

	}

	public String parsearFecha(Date date) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
		return dateFormat.format(date);
	}

	@RequestMapping(value = "/evaluacion", method = RequestMethod.POST)
	public ModelAndView validarUser(@RequestParam("inputUser") String inputUser) {
		ModelAndView model;
		String page = "evaluation";
		model = new ModelAndView(page);
		model.addObject("user", inputUser);
		return model;
	}

	@PostMapping(value = "/save")
	@ResponseBody
	public String save(@ModelAttribute UserBean user) {
		String rpta = "1";
		if(user.getAccion().equals("NUEVO")){
			serviceUser.save(user);
		} else if( user.getAccion().equals("EDITAR")){
			serviceUser.update(user);
		} else if( user.getAccion().equals("ELIMINAR")){
			serviceUser.delete(user.getId());
		} else {
			rpta = "-1";
		}
		return rpta;
	}

	@GetMapping(value = "/buscar", produces = { "application/json" })
	public @ResponseBody List<UserBean> buscar(@RequestParam("name") String name , @RequestParam("email") String email) {				
		List<UserBean> lt = serviceUser.finlogin(name, email);
		return lt;
	}

}
