// function for check data
function checkData()

{
  let arrayRej=JSON.parse(localStorage.getItem("infoUser"))||[];
  let objRej={};
  let checkErr=0;

  let checkName =document.getElementById("username").value;
  let checkEmail =document.getElementById("email").value;
  let checkPassword =document.getElementById("pass").value;
   
  
      
      try{
          if(!checkName.match(/^[a-z ,.'-]+$/i) ) throw "name for information"
          if(!checkPassword.match( /^((?=.[a-z])(?=.[A-Z])(?=.*[0-9]))/)  ) throw "pas for information"
          if(!checkEmail.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) throw "email for information"
      }
      catch(error){
      checkErr++;
       let err=document.getElementById("validp");
       err.innerHTML=error;
      }
   
      if(checkErr==0)
      {  
      objRej={
      Name:checkName,
      Email:checkEmail,
      Password:checkPassword
    }
    arrayRej.push(objRej);
    console.log(arrayRej);
    localStorage.setItem("infoUser",JSON.stringify(arrayRej));

} 

}
// function for compare  

function compareData()
{
  let arrayCombare=JSON.parse(localStorage.getItem("infoUser"))|| [];
  let email2=document.getElementById("email2");
  let pass2=document.getElementById("pass2");
  localStorage.setItem("NewEmail",email2.value );
  localStorage.setItem("NewPass",pass2.value );
  
  
  arrayCombare.map (e =>{ 
      console.log(e.Email);

      if(e.Email==email2.value && e.Password==pass2.value)
      {

      window.location=("LandingPage/home.html");
          
      }
              
      else  {
          console.log("sorry");
          
      }
      event.preventDefault();
  })
  
}
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
