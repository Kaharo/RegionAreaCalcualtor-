$(document).foundation();

if (window.File && window.FileReader && window.FileList && window.Blob) {
	// Great success! All the File APIs are supported.
	function handleFileSelect(evt) {
    	var files = evt.target.files; // FileList object
    	
    	if (typeof window.DOMParser != "undefined") {
		    parseXml = function(xmlStr) {
		        return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
		    };
		} else if (typeof window.ActiveXObject != "undefined" &&
		       new window.ActiveXObject("Microsoft.XMLDOM")) {
		    parseXml = function(xmlStr) {
		        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
		        xmlDoc.async = "false";
		        xmlDoc.loadXML(xmlStr);
		        return xmlDoc;
		    };
		} else {
		    throw new Error("No XML parser found");
		}
		
        // Loop through the FileList
	    var output = [];

    	for (var i = 0, f; f = files[i]; i++) {
			try {
				//some information regarding the file
				// output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
	   //     	f.size, ' bytes, last modified: ',
	   //     	f.lastModifiedDate.toLocaleDateString(), '</li>');
	   //     	document.getElementById('properties').innerHTML = '<ul>' + output.join('') + '</ul>';
	        	
	        	var fileReq = f.name; // + "<small>(created" + f.lastModifiedDate.toLocaleDateString() +")</small>";

				var reader = new FileReader();
		        // Closure to capture the file information.
	    	    reader.onload = (function(theFile) {
            		return function(e) {
            			// Print the contents of the file
            			try {
	            			
				            var xml = parseXml(e.target.result);

				            var dataStripId = xml.getElementsByTagName("coordinates");

				           					            
				            var tableForDifference ="";
			            	tableForDifference += 
			            		dataStripId[0].textContent;
						  
						  document.getElementById("one").value = tableForDifference;
						//    SaveToFile(dataStripId, debuggingString);
						
						 
  

						
						
						
				          
            			} catch (e) {
            				document.getElementById("errMsg").innerHTML = e.message;
            			}
            		};
        		})(f);
        		reader.readAsText(f);
        		// document.getElementById('preview').innerHTML = reader.result;	
			} catch (e) {
				document.getElementById("errMsg").innerHTML = e.message;
			}
    	}
    	
	}
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
	
/* Latest compiled and minified JavaScript included as External Resource */


	
} else {
	alert('The File APIs are not fully supported in this browser.');
}



function Calculating_angle(a,count)
{
	var x = a;
    var Angle = [];
    var Difference = taking_difference(x,count);
		for(var i=0; i<count; i++)
		{
			Angle[i] = myFunction(Difference[2*i],Difference[2*i+1]); 
		}
    var New_Coords = [];
    var Angle1 = [];
		Angle1 = Angle;
    return Angle1;
}

function Sorting_coordinates(Old_coords,Old_angles,Sorted_angles,count)
{
	var x = [];
	var New_Coords = [];
		for(var i = 0; i<count; i++)
		{
			x[i] = Old_angles.indexOf(Sorted_angles[i]);
		}
		for(var i = 0; i<count; i++)
		{
			New_Coords[2*i] = Old_coords[2*x[i]];
			New_Coords[2*i+1] = Old_coords[2*x[i]+1];
		}
		
	New_Coords[2*(count)] = New_Coords[0];
	New_Coords[2*(count)+1] = New_Coords[1];
		
	return New_Coords;
}

function taking_difference(a,count) 
{
 	
	var Coordinates = a;
	var Average = average(Coordinates,count);

	var Difference = []; 
	  for(var i = 0; i<count; i++)
		{
			Difference[2*i]=Coordinates[2*i]-Average[0];
			Difference[2*i+1]=Coordinates[2*i+1]-Average[1];
		}
	return Difference;
}   
   
function myFunction(b,a) 
{
  var y = Math.atan2(a,b)*180/Math.PI;
	   if (y < 0) 
	   {
		y = y*(-1)+90;
	   }
	   else if (y >= 0 && y < 90)
	   {
		y = 90-y;
	   }
	   else if (y>= 0 && y >90)
	   {
		y = 450 - y;
	   }
	   return y;
}
function average(a,count) 
{
    var x = a; 
    var sum_long = 0; 
    var sum_lat = 0;
    
    for (var i = 0; i<count; i++)
    {
    	sum_long = sum_long + x[2*i];
        sum_lat = sum_lat + x[2*i+1];
    }
    var av = [sum_long/count,sum_lat/count];
	
    return av;
    
}
//var Unsorted_angles = Calculating_angle(X,4);
//var op = Calculating_angle(X,4);
//var Coords_sorted = Unsorted_angles.sort(function(a, b){return a-b});

//document.getElementById("demo").innerHTML = average(X,4);
//document.getElementById("demo").innerHTML = Coords_sorted;

//document.getElementById("demo").innerHTML = Sorting_coordinates(X,op,Coords_sorted,4);

//document.getElementById("demo").innerHTML = Sorting_coordinates(X,UnSorted,SortedAngles, 5);


function Perenesti()
{
	var textElement = document.getElementById("one");
	var Content = textElement.value;
	
	var count = count_number_of_coordinates(Content,',0 ');
	var Wable = document.getElementById("Table")
	
	var arr = Content.split(",0");
	var text = "";
		for (var i = 0; i < arr.length; i++) 
		{
			if (i == arr.length -1)
			{text = text}
			else
			{text += arr[i] + "<br>"}
		}
	var arr2 = text.split(",");
	var text2 = "";
	
		for (var i2 = 0; i2 < arr2.length; i2++) 
		{
			if (i2 == arr2.length -1)
			{text2 += arr2[i2]}
			else
			{text2 += arr2[i2] + "<br>"}
			
		}
	var arr3 = text2.split("<br>");
	var arr5 = arr3.map(Number);
		arr5.pop();
	var arr6 = arr3.map(Number);
		arr6.pop();
		
	var unsorted_angles = Calculating_angle(arr6,arr6.length/2-1);	
	 
	
	var angles = Calculating_angle(arr5,arr5.length/2-1);
	var Angles_sorted = angles.sort(function(a, b){return a-b});
	
	
	
		Sorted_Coords = Sorting_coordinates(arr5,unsorted_angles,Angles_sorted,arr5.length/2-1);
	var Average = average(Sorted_Coords,Sorted_Coords.length/2-1);
	
	

		document.getElementById("one").value = Sorted_Coords;
	
	
	
	var arr4 = [];
		for (var i3 = 0; i3 < Sorted_Coords.length; i3++) 
		{

		 if (i3%2==0)
			{
			arr4[i3]= toDMS(Sorted_Coords[i3],0);
			}
		else
			{
			arr4[i3]= toDMS(Sorted_Coords[i3],1);
			}
			
		}
		
		for(var n = 0; n<count; n++)
		{
			var row = Wable.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			cell1.innerHTML = arr4[2*n+1];
			cell2.innerHTML = arr4[2*n];
		}
		
	return Sorted_Coords;
					}
function count_number_of_coordinates(string,char) 
{
	var re = new RegExp(char,"gi");
	return string.match(re).length;
}
					
			
function toDMS(coordinate,sign)
{
	var absolute = Math.abs(coordinate);
	var degrees = Math.floor(absolute);
	var minutesNotTruncated = (absolute - degrees) * 60;
	var minutes = Math.floor(minutesNotTruncated);
	var seconds = Math.round((minutesNotTruncated - minutes) * 6000)/(100).toFixed(2);
	if (degrees < 10)
	{
		degrees = "0"+ degrees;
	}
	if (minutes < 10)
	{
		minutes = "0"+minutes;
	}
							
	if (coordinate<0 && sign==1)
	{
		if (seconds < 10)
		{
			return degrees + "&deg" + minutes + "\'" + "0" + seconds.toFixed(0)+"\" S";
		}
		else
		{
			return degrees + "&deg" + minutes + "\'" + seconds.toFixed(0)+"\" S";
		}
	}
	if (coordinate>=0 && sign==1)
	{
		if (seconds < 10)
		{
			return degrees + "&deg" + minutes + "\'" + "0" + seconds.toFixed(0)+"\" N";
		}
		else
		{
			return degrees + "&deg" + minutes + "\'" + seconds.toFixed(0)+"\" N";
		}
		
	}
	if (coordinate>=0 && sign==0)
	{
		if (seconds<10)
		{return degrees + "&deg" + minutes + "\'" + "0" + seconds.toFixed(0)+"\" E";}
		else
		{return degrees + "&deg" + minutes + "\'" + seconds.toFixed(0)+"\" E";}
	} 
	if (coordinate<0 && sign==0)
	{
		if (seconds<10)
		{return degrees + "&deg" + minutes + "\'" + "0" + seconds.toFixed(0)+"\" W";}
		else
		{return degrees + "&deg" + minutes + "\'" + seconds.toFixed(0)+"\" W";}
	} 
	
	
}
