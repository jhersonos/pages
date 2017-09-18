$('.example').click(function(c_name,a_name){
	$.ajax({
	    url: "/city/"+c_name+"?isJson=true&want="+a_name,
	    success: function(response) {
    		console.log(response)
    	}
});	
})
