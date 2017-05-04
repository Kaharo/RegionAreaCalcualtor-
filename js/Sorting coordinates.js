<!DOCTYPE html>
<html>
<body>

<p>JavaScript has an built-in function constructor.</p>
<p id="demo"></p>

<script>
X = [7.757812812924385,46.3853383306318, 9.911133125424385,48.17390080128455,7.757812812924385,49.24677133696936];
X1 = [12.635742500424385,49.275450610656364,12.328125312924385,47.19767549203772,10.965820625424385,47.108021165709964,7.757812812924385,46.3853383306318,9.911133125424385,48.17390080128455,7.757812812924385,49.24677133696936,9.691406562924385,50.128091152170704,12.635742500424385,49.275450610656364];
X2=[12.328125312924385,47.19767549203772,10.965820625424385,47.108021165709964,7.757812812924385,46.3853383306318];
function getting_rid_of_inner_coordinates(X,count)
{	
	var Coords = X;
    var difference_1 = [];
    difference_1 = taking_difference_1(X,count);//next coords
    var difference_2 = [];
    difference_2 = taking_difference_2(X,count);//coords after next
    var angle_1 = [];
    angle_1 = Calculating_angle_from_concavetoconvex(difference_1,count);
    var angle_2 = [];
    angle_2 = Calculating_angle_from_concavetoconvex(difference_2,count);
    for(var i = 0;i<count;i++)
    {
    	if (angle_1[i]>=angle_2[i])
    	{
    		Coords.splice(2*i+2,2);
            angle_1.splice(i,1);
            angle_2.splice(i,1);
            i = 0;
    	}
	}
    return Coords;
}
function Calculating_angle_from_concavetoconvex(difference,count)
{
	var x = difference;
    var Angle = [];
    for(var i=0; i<count; i++)
    {
    	Angle[i] = myFunction(x[2*i],x[2*i+1]); 
    }
    
    return Angle;
}
function myFunction(b,a) 
{
  var y = Math.atan2(a,b)*180/Math.PI;
   if (y < 0) 
   {
   	y = y*(-1)+90;
   }
   else if (y >= 0 && y <= 90)
   {
   	y = 90-y;
   }
   else if (y> 0 && y >90)
   {
   	y = 450 - y;
   }
   return y;
}
function taking_difference_1_concave_to_convex(a,count) 
{
 	
    var Coordinates = a;
    var Difference = []; 
                    
    	for(var i = 0; i<count; i++)
    	{
			Difference[2*i]=Coordinates[2*i+2]-Coordinates[2*i];
            Difference[2*i+1]=Coordinates[2*i+3]-Coordinates[2*i+1];
    	}
      return Difference;
}
function taking_difference_2_concave_to_convex(a,count) 
{
 	
    var Coordinates = a;
    var Difference = []; 
                    
    	for(var i = 0; i<count; i++)
    	{
			Difference[2*i]=Coordinates[2*i+4]-Coordinates[2*i];
            Difference[2*i+1]=Coordinates[2*i+5]-Coordinates[2*i+1];
    	}
      return Difference;
}   
document.getElementById("demo").innerHTML = getting_rid_of_inner_coordinates(X1, 6);
</script>

</body>
</html>
