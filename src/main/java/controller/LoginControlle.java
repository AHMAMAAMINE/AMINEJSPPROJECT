package controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import beans.Machine;
import beans.User;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import service.LoginService;
import service.MachineService;

/**
 *
 * @author Lachgar
 */
@WebServlet(urlPatterns = {"/login"})
public class LoginControlle extends HttpServlet {

    private LoginService ms = new LoginService();

  

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            
        if (request.getParameter("op") != null) {
            if (request.getParameter("op").equals("login")) {
                String username=request.getParameter("email");
                String password = request.getParameter("password");
                response.setContentType("application/json");
               User user = ms.find(username,password);
                Gson json = new Gson();
                response.getWriter().write(json.toJson(user));
                
            }else if(request.getParameter("op").equals("registre")){
                String username=request.getParameter("email");
                String password = request.getParameter("password");
                response.setContentType("application/json");
               ms.create(new User(username,username,password));
                
            }
            
        } 
       
        
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
