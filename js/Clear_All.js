$('#clear').on('click', function clear_all()
{
	try {		
		//clearing text
		document.getElementById("one").value ='';
		
		//clearing table
		var tableHeaderRowCount = 1;
		var table = document.getElementById('Table');
		var rowCount = table.rows.length;
		for (var i = tableHeaderRowCount; i < rowCount; i++) {
			table.deleteRow(tableHeaderRowCount);
		}
			
		//clearing map	
		vectorSource.clear();
	} catch (e) {
		console.log(e);
	}
});