package kr.ac.kopo.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// service 메소드 작성
// @WebServlet : 가상 uri랑 매핑해주는 어노테이션. () 안에는 문자열 형태의 uri만 올 수 있음.
// @WebServlet("/servlet/exam")
public class ExamServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String method = request.getMethod();
		String uri = request.getRequestURI();
		String name = request.getParameter("name");
		String hobby = request.getParameter("hobby");
		
		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter();
		
		out.println("<html>");
		out.println("	<head>");
		out.println("		<title>서블릿 연습</title>");
		out.println("	</head>");
		out.println("	<body>");
		out.println("		이름 : " + name + "<br>");
		out.println("		취미 : " + hobby + "<br>");
		out.println("	</body>");
		out.println("</html>");
	}

}
