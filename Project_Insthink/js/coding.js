window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light2", "dark1", "dark2"
        animationEnabled: true, // change to true		
        title:{
            text: "Active"
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "bar",
            dataPoints: [
                { label: "Jan",  y: 30  },
                { label: "Feb", y: 13  },
                { label: "Mar", y: 23 },
                { label: "Apr",  y: 10  },
                { label: "May",  y: 13 },
                { label: "June",  y: 20 },
                { label: "July",  y: 3  },
            ]
        }
        ]
    });
    chart.render();
    var chart = new CanvasJS.Chart("chartContainer2",
    {
        animationEnabled: true,
        data: [
        {
            type: "pie",
            showInLegend: true,
            dataPoints: [
                { y: 90, legendText: "html", indexLabel: "HTML" },
                { y: 10, legendText: "C", indexLabel: "C" },
                { y: 40, legendText: "c++", indexLabel: "C++" },
                { y: 30, legendText: "js", indexLabel: "JAVASCRIPT" },
                { y: 30, legendText: "vb", indexLabel: "VB" },
                { y: 20, legendText: "c#", indexLabel: "C#" },
                { y: 40, legendText: "JAVA", indexLabel: "JAVA" }
            ]
        },
        ]
    });
    chart.render();
    setTimeout(function(){
    },2000);
    

    
    }