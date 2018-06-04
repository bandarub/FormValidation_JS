const name=document.getElementById("full-name");
const email=document.getElementById('email');
const email1=document.getElementById('email1');
const phone=document.getElementById('phone');
const zipCode=document.getElementById('zipcode');
const adsress=document.getElementById('adderess');
const link=document.getElementById('link');
const city=document.getElementById('city');
const state=document.getElementById('state');
const country=document.getElementById('country');
const submit_btn=document.getElementById("submit-btn");

name.addEventListener('blur', (e) => {
  document.getElementById("name-warning").innerHTML="";
  const regex=/[a-zA-Z]+[\s|.][a-zA-Z]+/;
  if(regex.test(e.target.value)){
    e.target.classList.remove('invalid');    
  }  
  else
  {
    e.target.classList.add('invalid'); 
    document.getElementById("name-warning").innerHTML="please enter valid name format(surname givenname)";
  }  
      
});

email.addEventListener('input',(e)=>{
let value=e.target.value;
document.getElementById("email-warning").innerHTML="";
const regex1=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
if(regex1.test(e.target.value))
e.target.classList.remove('invalid');
else
{
  e.target.classList.add('invalid'); 
  document.getElementById("email-warning").innerHTML="please enter valid email"; 
}


});

email1.addEventListener('blur',(e)=>{
  document.getElementById("email1-warning").innerHTML="";
    if(email.value===e.target.value)
    {
        e.target.setCustomValidity("");
        e.target.classList.remove('invalid');
    }
    else{
        document.getElementById("email1-warning").innerHTML="Email is not matching";
        e.target.classList.add('invalid');
        }
     
});
phone.addEventListener('blur', (e) => {
  document.getElementById("phone-warning").innerHTML="";

    const regex2=/^(0{2}|\+)[0-9]{3}[0-9]{9}/;
    if(regex2.test(e.target.value))
    e.target.classList.remove('invalid');
    else
    {
      document.getElementById("phone-warning").innerHTML="please enter phone number in international format";
      e.target.classList.add('invalid');  
    }
        
  });
  zipCode.addEventListener('blur', (e) => {
    document.getElementById("zipcode-error").innerHTML="";

    const regex3=/^[0-9]{3,6}$/;
    if(regex3.test(e.target.value))
    e.target.classList.remove('invalid');
    else
    {
      document.getElementById("zipcode-error").innerHTML="please enter valid-zipcode";
      e.target.classList.add('invalid');  
    }
        
  });
  link.addEventListener('blur', (e) => {
    document.getElementById("link-error").innerHTML="";

    const regex4=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if(regex4.test(e.target.value))
    e.target.classList.remove('invalid');
    else
    {
      document.getElementById("link-error").innerHTML="please enter valid link";
      e.target.classList.add('invalid');  

    }        
  });
  adderess.addEventListener('blur', (e) => {
    document.getElementById("adderess-warning").innerHTML="";

    const regex4=/[\w|[a-zA-Z.:]+[\s|\W|\d]+[\w+|\s\d]+/;
    if(regex4.test(e.target.value))
    e.target.classList.remove('invalid');
    else
    {
      document.getElementById("adderess-warning").innerHTML="please enter valid adderess";
      e.target.classList.add('invalid');

    }        
  });
city.addEventListener('blur', city_state_country);
state.addEventListener('blur', city_state_country);
country.addEventListener('blur', city_state_country);

function city_state_country(e){
  document.querySelector(".city-state-country").innerHTML="";
    const regex5=/[a-zA-Z]+/;
    if(regex5.test(e.target.value))
    e.target.classList.remove('invalid');
    else
    {
      document.querySelector(".city-state-country").innerHTML="please enter valid information";
      e.target.classList.add('invalid');  
    } 
}
submit_btn.addEventListener("click",()=>{
 
  const deciplines_value= checkbox_deciplines();
  const location_value=checkbox_location();

});

function checkbox_deciplines(){
  let option=document.getElementsByClassName("checkbox-deciplines");
  let ary=Array.from(option);
  let count=0;
  for(let i=0;i<ary.length;i++){
    if(ary[i].checked == true){
      count++;
    }
  }
  if(count!=0){
    return true;
  }
  else{
    alert("please select atleast one deciplines");
    return false;
  }
}
function checkbox_location(){
  let option=document.getElementsByClassName("checkbox-location");
  let ary1=Array.from(option);
  let count=0;
  for(let i=0;i<ary1.length;i++){
    if(ary1[i].checked == true){
      count++;
    }
  }
  if(count!=0){
    return true;
  }
  else{
    alert("please select atleast one location")
    return false;
  }
 
}