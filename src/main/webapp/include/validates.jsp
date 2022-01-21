<script type="text/javascript">
                     function logout(){
                     <%
                        
               HttpSession sessions = request.getSession();
                sessions.invalidate();
                response.sendRedirect(request.getContextPath()+"/login.jsp");
               %>
                   }
                </script>
