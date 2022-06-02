package kr.ac.kopo.servlet;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// WEB-INF > web.xml 파일 참고
public class HelloServlet extends HttpServlet {

	@Override
	public void init(ServletConfig config) throws ServletException{
		System.out.println("init() : 최초 한번만 실행되는 메소드");
	}
	
//	request : 요청 처리, response : 응답 처리
	public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		System.out.println("service() : 실제 작업이 수행되는 메소드. 요청이 들어올 때마다 호출됨.");
	}
	
	@Override
	public void destroy() {
		System.out.println("\t\t\t\t\t\tdestroy()...");
	}
}
