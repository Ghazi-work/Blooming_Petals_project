var form = document.forms[0];
var phone_number = document.querySelector("[name='phoneNumber']");
var email = document.querySelector("[name='email']");
var note= document.querySelector("[name='notes']");
var btn = form.querySelector("button");

var phone_error1 = phone_number.parentElement.querySelectorAll('p')[0];
var phone_error2 = phone_number.parentElement.querySelectorAll('p')[1];
var email_error = email.parentElement.querySelector('p');

form.addEventListener('submit', function(event)
{
    event.preventDefault();

    let is_valid = true;
    let vaild_email=/^[A-Za-z0-9_]+@(gmail|yahoo)\.com$/;

    phone_error1.style.display='none';
    phone_error2.style.display='none';
    email_error.style.display='none';
    note.setAttribute("rows", "4");

    if(isNaN(phone_number.value))
    {   
        phone_error2.style.display='block';
        is_valid = false;
        note.setAttribute("rows", "5");
    }
    else if(phone_number.value.length !== 11)
    {   
        phone_error1.style.display='block';
        is_valid = false;
        // note.setAttribute("rows", "5");
    }

    if(!vaild_email.test(email.value))
    {   
        email_error.style.display='block';
        is_valid = false;

    }
    if(is_valid)
    {
        form.submit();
    }
});
    