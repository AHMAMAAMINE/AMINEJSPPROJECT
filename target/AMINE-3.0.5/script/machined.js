$(document).ready(function () {
    $.ajax({
        url : "MachineController",
        data:{op:"load"},
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            remplir(data);
        },error: function (jqXHR, textStatus, errorThrown) {
                console.log(data);
            }
    });
    $("#add").click(function () {
        var reference = $("#reference").val();
        var dateAchat = $("#dateAchat").val();
        var marque = $("#marque").val();
        var salle=$("#inlineFormCustomSelectPref").val();
        
        console.log(salle);



        $.ajax({
            url: "MachineController",
            
            data: {reference: reference, dateAchat: dateAchat, marque: marque,salle:salle},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                remplir(data);
               $("#reference").val("");
                $("#marque").val("");
               $("#dateAchat").val(new Date());
               $("#inlineFormCustomSelectPref").val("0");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                
            }
        });

   });
$("#update").click(function (){
    var reference = $("#reference").val();
        var dateAchat = $("#dateAchat").val();
        var marque = $("#marque").val();
        var salle=$("#inlineFormCustomSelectPref").val();
        var id=$("#id").val();
        
        $.ajax({
            url: "MachineController",
            data: {op:"update",id:id,reference: reference, dateAchat: dateAchat, marque: marque,salle:salle},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                remplir(data);
                $("id").val("");
               $("#reference").val("");
                $("#marque").val("");
               $("#dateAchat").val(new Date());
               $("#inlineFormCustomSelectPref").val("0");
               document.getElementById("update").disabled = true;
               document.getElementById("add").disabled = false;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                
            }
        });
    });



    function remplir(data) {
        $("#content tr").remove(); 
       var tbody = document.getElementById("content");
        
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
         tr.appendChild(td = document.createElement("td"));
            var btn = document.createElement('input');
            btn.type = "button";
            btn.className = "btn btn-danger";
            
            btn.style.marginRight="5px";

           btn.value = "delete";
           btn.onclick = (function(dat) {return function() {
           var row=document.getElementById("row"+dat.id);
                     console.log(dat.id);
             $.ajax({
        url : "MachineController",
        data:{op:dat.id},
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
                row.parentNode.removeChild(row);
        },error: function (jqXHR, textStatus, errorThrown) {
                console.log(dat.id);
            }
    });
                }})(entry);
            td.appendChild(btn);    
           
            var btn = document.createElement('input');
            btn.type = "button";
            btn.className = "btn btn-danger ";
           btn.value = "Update";
           btn.onclick = (function(dat) {return function() {
           var row=document.getElementById("row"+dat.id);
           document.getElementById("add").disabled = true;
           document.getElementById("update").disabled = false;
                     $("#reference").val(dat.reference);
                $("#marque").val(dat.marque);
                $("#id").val(dat.id);
                console.log(dat.id);
                 var d = new Date(dat.dateAchat),
                   month = '' + (d.getMonth() + 1),
                 day = '' + d.getDate(),
                   year = d.getFullYear();

                 if (month.length < 2) 
                 month = '0' + month;
                if (day.length < 2) 
                 day = '0' + day;

             $("#dateAchat").val([year, month, day].join('-'));
             $("#inlineFormCustomSelectPref").val(dat.salle);
           };})(entry);
            td.appendChild(btn); 
    }
    
}
});


  