<div id="layoutSidenav">
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Pages</div>


                    <a class="nav-link" onclick="goTo()">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                        Recherche Multi
                    </a>
                    <script type="text/javascript">
                        function goTo(){
                            window.location="<%= request.getContextPath()%>/MachineParSalle.jsp";
                        }
                    </script>
                        <a class="nav-link" onclick="goTo2()">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                       Salle
                    </a>
                    <script type="text/javascript">
                        function goTo2(){
                            window.location="<%= request.getContextPath()%>/salleJSP.jsp";
                        }
                    </script>
                    
                    <a class="nav-link" onclick="goTo3()">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Machine
                    </a>
                    <script type="text/javascript">
                        function goTo3(){
                            window.location="<%= request.getContextPath()%>/machine.jsp";
                        }
                    </script>
                    <a class="nav-link" onclick="goTo4()">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Charte
                    </a>
                    <script type="text/javascript">
                        function goTo4(){
                            window.location="<%= request.getContextPath()%>/charte.jsp";
                        }
                    </script>
            
        </nav>
    </div>