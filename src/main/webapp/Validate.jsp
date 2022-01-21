<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Validate</title>
	</head>
	<body><!-- values given at login page are taken here and checks if the valid details are not -->
		<%
		String username=request.getParameter("username");
		String password=request.getParameter("password");
                String path= request.getContextPath()+"/login.jsp";
		if(username.equals("amine") && password.equals("amine")){
			//if the user is valid, then this block executes and WE ARE KEEPING THE USER IN A SESSION
			session.setAttribute("user", username);//THIS IS HOW WE DECLARE THE USER IN A SESSION
			response.sendRedirect("machine.jsp"); //AND WE REDIRECTED TO LOGIN PAGE
                        
			
		}else{
			
			//IF THE USER IS NOT AUTHORISED THEN AGAIN HE WILL BE REDIRECTED TO THE SAME LOGIN PAGE
			response.sendRedirect(path);
		}
		%>
	</body>
</html>