$(document).ready(function () {
    $.ajax({
        url : "SalleController",
        data:{machine:"Load"},
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            remplir(data);
        },error: function (jqXHR, textStatus, errorThrown) {
                console.log(data);
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
       var tbody = document.getElementById("content");
        console.log(data)
    var thead, tr, td;
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


  