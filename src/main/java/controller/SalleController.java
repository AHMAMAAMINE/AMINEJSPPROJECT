package controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import beans.Salle;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import service.SalleService;

/**
 *
 * @author Lachgar
 */
@WebServlet(urlPatterns = {"/SalleController"})
public class SalleController extends HttpServlet {

    private SalleService ss = new SalleService();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            
        if (request.getParameter("op") != null) {
            if (request.getParameter("op").equals("load")) {
                
                response.setContentType("application/json");
                List<Salle> salles = ss.findAll();
                Gson json = new Gson();
                response.getWriter().write(json.toJson(salles));
                
            }else if(request.getParameter("op").equals("update")){
                int id=Integer.parseInt(request.getParameter("id"));
                String code = request.getParameter("code");
            String type = request.getParameter("type");
            ss.update(new Salle(id,code, type));
            response.setContentType("application/json");
            List<Salle> machines = ss.findAll();
            Gson json = new Gson();
            response.getWriter().write(json.toJson(machines));
            }
            else if(request.getParameter("op").equals("create")){
                String code = request.getParameter("code");
            String type = request.getParameter("type");
            ss.create(new Salle(code, type));
            response.setContentType("application/json");
            List<Salle> machines = ss.findAll();
            Gson json = new Gson();
            response.getWriter().write(json.toJson(machines));
            }
            else{
                ss.delete(ss.findById(Integer.parseInt(request.getParameter("op"))));
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
