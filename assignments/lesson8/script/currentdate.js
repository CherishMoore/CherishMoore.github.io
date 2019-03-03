var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var n = new Date();
        var y = n.getFullYear();
        var m = n.getMonth();
        var d = n.getDate();
        var t = n.getDay();
        document.getElementById("date").innerHTML = days[t] + "," + " " + d + " " + months[m] + " " + y;
