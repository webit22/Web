<%@page import="kr.ac.kopo.util.JDBCClose"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="javax.naming.spi.DirStateFactory.Result"%>
<%@page import="java.sql.PreparedStatement"%>
<%@ page import="kr.ac.kopo.util.ConnectionFactory"%>
<%@ page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%-- 
	작업 순서
	1. t_board 테이블에서 전체 게시글 조회
	2. 조회된 게시물을 하나씩 웹브라우저 출력
--%>

<%-- Java 코드 : DB connection (util 패키지의 .java 파일을 import) --%>
<%
	/* 1단계 : DB 연결에 사용할 객체 생성*/
	Connection conn = new ConnectionFactory().getConnection();

	/* 2단계 : 필요한 값들을 조회(쿼리문 작성) */
	StringBuilder sql = new StringBuilder();
	sql.append("select no, title, writer, to_char(reg_date, 'yyyy-mm-dd') ");
	sql.append("  from t_board ");
	sql.append(" order by no desc ");
	
	/* 3단계 : 여긴 ? 로 정해주지 않아서 바로 실행시킬 수 있음. executeQuery() 사용 */
	PreparedStatement pstmt = conn.prepareStatement(sql.toString());
	
	/* 4단계 : 결과 가져오기 */
	ResultSet rs = pstmt.executeQuery();
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시물 목록</title>
<script src="/Mission-Web/resource/js/jquery-3.6.0.min.js"></script>
<script>
	/* 새글작성 버튼 클릭 시 writeForm.jsp 로 이동 */
	$(document).ready(function () {
		$('#addBtn').click(function () {
			/* url - 불필요한 directory명 없애고, 맨 끝에 writeForm.jsp 가 뜨도록 수정 */
			location.href = 'writeForm.jsp';
		});
	});
</script>
</head>
<body>
	<div align="center">
		<hr>
		<h2>전체 게시글 조회</h2>
		<hr>
		<br>
		<!-- table 크기의 80%만 나오도록. -->
		<table border="1" style="width: 80%;">
			<tr>
				<th width="7%"></th>
				<th>제목</th>
				<th width="16%">작성자</th>
				<th width="20%">등록일</th>
			</tr>
			
			<%
				/* rs.next가 더이상 값 조회할게 없을때까지 table row (tr) 생성 -> (rs.next == false) */
				while(rs.next()){
					int no = rs.getInt("no");
					String title = rs.getString("title");
					String writer = rs.getString("writer");
					String regDate = rs.getString("reg_date");
			%>
			
					<tr>
						<td><%= no %></td>
						<td><%= title %></td>
						<td><%= writer %></td>
						<td><%= regDate %></td>
					</tr>
			
			<%
				}
			%>
		</table>
		<br>
		
		<!-- button 클릭 시 writeForm.jsp 로 이동 -->
		<button id="addBtn">새글등록</button>
	</div>
</body>
</html>

<%-- Java 코드 : 모든 작업이 완료된 후 DB connection 해제 (util 패키지의 .java 파일을 import) --%>
<%
	/* 5단계 : 데이터베이스 접속 해제 */
	JDBCClose.close(pstmt, conn);
%>