package controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import beans.Machine;
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
import service.MachineService;

/**
 *
 * @author Lachgar
 */
@WebServlet(urlPatterns = {"/MachineController"})
public class MachineControlle extends HttpServlet {

    private MachineService ms = new MachineService();

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
                List<Machine> machines = ms.findAll();
                Gson json = new Gson();
                response.getWriter().write(json.toJson(machines));
                
            }else if(request.getParameter("op").equals("update")){
                int id=Integer.parseInt(request.getParameter("id"));
                String reference = request.getParameter("reference");
            String marque = request.getParameter("marque");
            Date dateAchat = new Date(request.getParameter("dateAchat").replace("-", "/"));
            int salle=Integer.parseInt(request.getParameter("salle"));
            ms.update(new Machine(id,reference, dateAchat, marque,salle));
            response.setContentType("application/json");
            List<Machine> machines = ms.findAll();
            Gson json = new Gson();
            response.getWriter().write(json.toJson(machines));
            }else if(request.getParameter("op").equals("search")){
                String dateDebut=request.getParameter("dateDebut");
                String dateFin=request.getParameter("dateFin");
                String salle=request.getParameter("salle");
                response.setContentType("application/json");
                List<Machine> machines = ms.findByCritere(dateDebut,dateFin,salle);
                Gson json = new Gson();
                response.getWriter().write(json.toJson(machines));
            }
            
            else{
                ms.delete(ms.findById(Integer.parseInt(request.getParameter("op"))));
            }
            
        } 
        else {
            
            String reference = request.getParameter("reference");
            String marque = request.getParameter("marque");
            Date dateAchat = new Date(request.getParameter("dateAchat").replace("-", "/"));
            int salle=Integer.parseInt(request.getParameter("salle"));
            ms.create(new Machine(reference, dateAchat, marque,salle));
            response.setContentType("application/json");
            List<Machine> machines = ms.findAll();
            Gson json = new Gson();
            response.getWriter().write(json.toJson(machines));
           
//            else{
//                String reference = request.getParameter("reference");
//            double marque = Double.parseDouble(request.getParameter("marque"));
//            Date dateAchat = new Date(request.getParameter("dateAchat").replace("-", "/"));
//            int id=Integer.parseInt(request.getParameter("id"));
//            ms.update(new Machine(id,reference, dateAchat, marque));
//            response.setContentType("application/json");
//            List<Machine> machines = ms.findAll();
//            Gson json = new Gson();
//            response.getWriter().write(json.toJson(machines));
//            } 
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
