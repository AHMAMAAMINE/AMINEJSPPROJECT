$(document).ready(function () {
    $.ajax({
        url : "SalleController",
        data:{op:"load"},
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            remplir(data);
        },error: function (jqXHR, textStatus, errorThrown) {
                console.log(data);
            }
    });
    $("#add").click(function () {
        var type = $("#type").val();
        var code = $("#code").val();
        

//        if(id.toString()!==""){
//           
//            op="update";
//        }else{
//             console.log(id);
//            op="create";
//        }
        $.ajax({
            url: "SalleController",
            
            data: {op:"create",code: code, type: type},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                remplir(data);
              id="";
               $("#type").val("");
                $("#code").val("");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                
            }
        });
});
     $("#update").click(function () {
         var type = $("#type").val();
        var code = $("#code").val();
        var id=$("#id").val();
        $.ajax({
            url: "SalleController",
            
            data: {op:"update",id:id,code: code, type: type},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                remplir(data);
                id="";
               $("#type").val("");
                $("#code").val("");
                document.getElementById("update").disabled = true;
               document.getElementById("add").disabled = false;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                
            }
        });
    }
);


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
        td.innerHTML = entry.code;
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = entry.type;
         tr.appendChild(td = document.createElement("td"));
            var btn = document.createElement('input');
            btn.type = "button";
            btn.className = "btn btn-danger";
            btn.style.marginLeft="50px";
            btn.style.marginRight="5px";

           btn.value = "delete";
           btn.onclick = (function(dat) {return function() {
           var row=document.getElementById("row"+dat.id);
                     console.log(dat.id);
             $.ajax({
        url : "SalleController",
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
                     $("#code").val(dat.code);
                $("#type").val(dat.type);
                $("#id").val(dat.id);
                console.log(dat.id);
           };})(entry);
            td.appendChild(btn); 
    }
    
}
});


  