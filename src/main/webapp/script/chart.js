window.onload = function() { 
 
if(dataPoints != null) { 
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	title: {
		text: "Nombre De Salle par machine id"
	},
	data: [{
		type: "column", //change type to bar, line, area, pie, etc
		dataPoints: out.print(dataPoints);
	}]
});
chart.render();
 } 
 
}