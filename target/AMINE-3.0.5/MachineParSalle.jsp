<%-- 
    Document   : indexe
    Created on : Jan 2, 2022, 1:39:34 PM
    Author     : Lenovo X1
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <%@include  file="/include/css.jsp"%>
                <%@include  file="/include/jses.jsp"%>

    </head>
    <body class="sb-nav-fixed">
           <%
		//HERE WE GETTING THE ATTRIBUTE DECLARED IN VALIDATE.JSP AND CHECKING IF IT IS NULL, THE USER WILL BE REDIRECTED TO LOGIN PAGE
				String uid = (String)session.getAttribute("user");
				if (uid == null)
				{
		%><!-- NOT A VALID USER, IF THE USER TRIES TO EXECUTE LOGGED IN PAGE DIRECTLY, ACCESS IS RESTRICTED -->
					 <jsp:forward page="login.jsp"/>
                                         <%	
				}
				else
				{ %>
       <%@include file="/include/header.jsp" %>
        <%@include file="/include/sidebar.jsp" %>
        <%@include file="/include/MachineSalle.jsp" %>
       
					
				<%}
		%> 
        
        
    </body>
</html>
