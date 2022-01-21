<%@page import="beans.Salle"%>
<%@page import="service.SalleService"%>
<div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4"> 
<!--                        <div class="row">
                            <div class="col-xl-6">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-chart-area me-1"></i>
                                        Area Chart Example
                                    </div>
                                    <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-chart-bar me-1"></i>
                                        Bar Chart Example
                                    </div>
                                    <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                        </div>-->
<div>
     <fieldset>
               <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                Information Machine
                            </div>
               <div id="formulaire">
                   <div class="form-group row" hidden="">
    <label for="inputEmail3" class="col-sm-2 col-form-label" value="ahmama">id</label>
    <div class="col-sm-2">
      <input id="id" class="form-control"  type="text" name="reference" value=""  required=""/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Référence</label>
    <div class="col-sm-2">
      <input id="reference" class="form-control"  type="text" name="reference" value=""  required=""/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Date Achat</label>
    <div class="col-sm-2">
      <input id="dateAchat" type="date" class="form-control" name="dateAchat" value="" required="" />
    </div>
  </div>
                   <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">marque</label>
    <div class="col-sm-2">
      <input id="marque" type="text" class="form-control"  name="marque" value="" required="" />
    </div>
    
      
    
  </div>
    <div class="form-group row">          

     <label for="inputPassword3" class="col-sm-2 col-form-label" >Salle</label>
      <div class="col-sm-2">
        <select class="form-control" id="inlineFormCustomSelectPref">
    <option selected value="0">Choose...</option>
    <%
        SalleService ss=new SalleService();
        for(Salle salle:ss.findAll()){
            
        %>
        <option id="salle" value="<%= salle.getId() %>"><%= salle.getId() %></option>
   <% }
    %>
    </select>
        </div>
    </div>
  
      <div class="col-sm-10" style=" margin-top: 20px;padding-left: 250px;position: relative;top: -5px;">
       <input id="add" type="submit" value="Envoyer"  class="btn btn-primary"/>
       <input id="update" type="submit" value="Update" disabled class="btn btn-primary"/>
    </div>
   
  
</div>
            </fieldset>
</div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                Machine Table
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                             <th>Id</th>
                                            <th>Référence </th>
                                            <th>Date Achat</th>
                                             <th>marque</th>
                                             <th>salle</th>
                                             <th>modifier</th>
                                        </tr>
                                    </thead><!--
-->                                    <tfoot>
                                        <tr>
                                          <th>Id</th>
                                            <th>Référence <br>
                                            <th>Date Achat</th>
                                             <th>marque</th>
                                             <th>salle</th>
                                             <th></th>
                                        </tr>
                                    </tfoot><!--
-->                                     
                                    <tbody id="content">
                                       
                                      </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        