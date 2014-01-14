$(document).ready(function(){
    $('#buttonMyName').bind('click', function(){
        var myName = $('#myName').val();
        var myLastName = $('#myLastName').val();
        var myPhone = $('#myPhone').val();
        var myAddress = $('#myAddress').val();
        
        window.localStorage.setItem("name", myName);
        $('#buttonMyName').append('<h2>' + myName + '</h2>');
        
        window.localStorage.setItem("lastname", myLastName);
        $('#buttonMyLastName').append('<h2>' + myLastName + '</h2>');
        
        window.localStorage.setItem("phone", myPhone);
        $('#buttonMyPhone').append('<h2>' + myPhone + '</h2>');
        
        window.localStorage.setItem("address", myAddress);       
        $('#buttonMyAddress').append('<h2>' + myAddress + '</h2>');
    });
});