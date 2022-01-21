$(document).ready(function () {
    $.ajax({
        url : "MachineControlle",
        data:{op:"load"},
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            remplir(data);
        },error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
    });
    $("#search").click(function () {
        
        var dateDebut = $("#dateDebut").val();
        var dateFin = $("#dateFin").val();
        var salle=$("#inlineFormCustomSelectPref").val();
        console.log(dateDebut)
                console.log(dateFin)
        console.log(salle)

           console.log("ss");
        $.ajax({
            url: "MachineController",
            
            data: {op:"search",dateDebut: dateDebut, dateFin: dateFin,salle:salle},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                remplir(data);
                console.log(data);
               $("#dateDebut").val(new Date());
                $("#dateFin").val(new Date());
                $("#inlineFormCustomSelectPref").val("0");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                
            }
        });

    });

    function remplir(data) {
        $("#content tr").remove(); 
        var table=document.getElementById("datatablesSimple");
        table.className="table";
        table.appendChild(thead=document.createElement("thead"));
        thead.className="thead-dark";
        thead.appendChild(tr=document.createElement("tr"));
        tr.appendChild(th=document.createElement("th"));
        th.innerHTML="id";
        tr.appendChild(th=document.createElement("th"));
        th.innerHTML="reference";
        tr.appendChild(th=document.createElement("th"));
        th.innerHTML="Date d achat";
        tr.appendChild(th=document.createElement("th"));
        th.innerHTML="marque";
        tr.appendChild(th=document.createElement("th"));
        th.innerHTML="salle";
        table.appendChild(tbody=document.createElement("tbody"));
        
    var thead, tr, td;
//    tbody.appendChild(thead = document.createElement("thead"));
   
   
//    tr.appendChild(td = document.createElement("td"));
//    td.innerHTML = "id";
//    tr.appendChild(td = document.createElement("td"));
//    td.innerHTML = "Reference";
//    tr.appendChild(td = document.createElement("td"));
//    td.innerHTML = "Date Achat";
//    tr.appendChild(td = document.createElement("td"));
//    td.innerHTML = "marque";
//    tr.appendChild(td = document.createElement("td"));
//    td.innerHTML = "Delete";
    var indexe;
    for (var i in data)
    {
        tbody.appendChild(tr = document.createElement("tr"));
        tr.setAttribute("id", "row" + data[i].id);
        var entry = data[i];
        tbody.appendChild(tr);
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = entry.id;
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = entry.reference;
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = entry.dateAchat;
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = entry.marque;
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = entry.salle;
         
    }
    
    
}
});


  