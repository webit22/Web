package kr.ac.kopo.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// servlet 폴더 > method.html 파일 참고
// http://localhost:9999/Lecture-Web/method?id=hong
public class MethodServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		String method = request.getMethod();
		String uri = request.getRequestURI();
		StringBuffer url = request.getRequestURL();
		String id = request.getParameter("id");
		
//		client에게 응답을 할 때는 I/O 객체를 활용. 여기서는 문자를 넘길거니까 PrintWriter()
		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter(); // = PrintWriter (출력 기능을 포함)
		out.println("<html> ");
		out.println("	<head> ");
		out.println("		<title>메소드 요청방식</title>");
		out.println("	</head> ");
		out.println("	<body> ");
		out.println("		====================================<br>");
		out.println(" 		파라미터(id) : " + id + "<br>");
		out.println(" 		요청방식 : " + method + "<br>");
		out.println("		URI : " + uri + "<br>");
		out.println(" 		====================================<br>");
		out.println(" 		====================================<br>");
		out.println("	</body> ");
		out.println("</html> ");
		
	}

}
