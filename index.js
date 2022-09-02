let error=false;
//==============================validation for first name=============================
function check_first_name(){

let first_Name=document.getElementById("first-name").value
    if(first_Name.length<3){
         document.getElementById("first-name-invalid").style.display="block";
         document.getElementById("first-name-valid").style.display="none";
          error=true;
    }
    else if(first_Name.includes(0)||first_Name.includes(1)||first_Name.includes(2)||first_Name.includes(3)||first_Name.includes(4)||
    first_Name.includes(5)||first_Name.includes(6)||first_Name.includes(7)||first_Name.includes(8)||first_Name.includes(9)){
        document.getElementById("first-name-invalid").style.display="block";
        document.getElementById("first-name-valid").style.display="none";
         error=true;
    }
    else if(parseInt(first_Name)){
        document.getElementById("first-name-invalid").style.display="block";
        document.getElementById("first-name-valid").style.display="none";
         error=true;
    }
    else{
        document.getElementById("first-name-invalid").style.display="none"; 
        document.getElementById("first-name-valid").style.display="block";  
    }
}

//==================================validation for last name==============================

function check_last_name(){

    let last_Name = document.getElementById("last-name").value

    if(last_Name.length<3){
        document.getElementById("last-name-invalid").style.display="block";
        document.getElementById("last-name-valid").style.display="none";
        // error=true;
    }
    else if(parseInt(last_Name)){
        document.getElementById("last-name-invalid").style.display="block";
        document.getElementById("last-name-valid").style.display="none";
        // error=true;
    }
    else{
        document.getElementById("last-name-invalid").style.display="none"; 
        document.getElementById("last-name-valid").style.display="block";  
    }
}    

//===================================validation for email=====================================
function check_email(){

let email_Input=document.getElementById("email").value
    if(email_Input.includes("@")&&
    email_Input.includes(".")&&
    email_Input.lastIndexOf(".")<email_Input.length-2&&
    email_Input.lastIndexOf("@")!=0){
        document.getElementById("email-invalid").style.display="none";
        document.getElementById("email-valid").style.display="block";
    }
    else{
        document.getElementById("email-invalid").style.display="block"; 
        document.getElementById("email-valid").style.display="none";
        // error=true;  
    }
}

//=====================================validation for phone====================================

function check_phone_number(){

let phone_Number_Input=document.getElementById("phone-number").value

  if(phone_Number_Input.length!=10){
    document.getElementById("invalid-phone-number").style.display="block";
    document.getElementById("valid-phone-number").style.display="none";
    // error=true;
}
else if((parseInt(phone_Number_Input)).toString().length==10){
    document.getElementById("invalid-phone-number").style.display="none"; 
    document.getElementById("valid-phone-number").style.display="block";
}
else{
    document.getElementById("invalid-phone-number").style.display="block";
    document.getElementById("valid-phone-number").style.display="none";
    // error=true;
}
}

//==================================validation for city==============================

function check_city(){
    let city_name=document.getElementById("city").value

    if(city_name.length<2&&city_name.includes(0)||city_name.includes(1)||city_name.includes(2)||city_name.includes(3)||city_name.includes(4)||
    city_name.includes(5)||city_name.includes(6)||city_name.includes(7)||city_name.includes(8)||city_name.includes(9)){
        document.getElementById("city-invalid").style.display="block";
        document.getElementById("city-valid").style.display="none";
        // error=true;  
    }
    else if(city_name.length>=2){
        document.getElementById("city-valid").style.display="block";
        document.getElementById("city-invalid").style.display="none";
    }
    else{
        document.getElementById("city-invalid").style.display="block";
        document.getElementById("city-valid").style.display="none";
        // error=true;  
    }
}

//==================================validation for state==============================
function check_state(){
    let state_name=document.getElementById("state").value

    
    if(state_name==="Choose..."){
        document.getElementById("state-invalid").style.display="block";
        document.getElementById("state-valid").style.display="none";
        // error=true;  
    }
    else{
        document.getElementById("state-valid").style.display="block";
        document.getElementById("state-invalid").style.display="none";
    }
}

//==================================validation for zip==============================

function check_zip(){

    let zip_name=document.getElementById("zip").value

    if(zip_name.length<6){
        document.getElementById("zip-invalid").style.display="block";
        document.getElementById("zip-valid").style.display="none";
        // error=true;  
    }else if(zip_name.length==6&&parseInt(zip_name).toString().length==6){
        document.getElementById("zip-valid").style.display="block";
        document.getElementById("zip-invalid").style.display="none";
    }
    else{
        document.getElementById("zip-invalid").style.display="block";
        document.getElementById("zip-valid").style.display="none";
    }
}

//==================================validation for terms&condition==============================

function check_tnc(){
    let tnc_Input=document.getElementById("tnc").checked
    
        if (tnc_Input != true) {
            document.getElementById("tnc-invalid").style.display = "block";
            document.getElementById("tnc-valid").style.display = "none";
            // error = true;
        }
        else {
            document.getElementById("tnc-invalid").style.display = "none";
            document.getElementById("tnc-valid").style.display = "block";
            
        }
}

//==================================validation on submit==============================

function validate(){
    let error=false;

    let first_Name=document.getElementById("first-name").value

    if(first_Name.length<3){
         document.getElementById("first-name-invalid").style.display="block";
         document.getElementById("first-name-valid").style.display="none";
         error=true;
    }
    else if(first_Name.includes(0)||first_Name.includes(1)||first_Name.includes(2)||first_Name.includes(3)||first_Name.includes(4)||
    first_Name.includes(5)||first_Name.includes(6)||first_Name.includes(7)||first_Name.includes(8)||first_Name.includes(9)){
        document.getElementById("first-name-invalid").style.display="block";
        document.getElementById("first-name-valid").style.display="none";
        error=true;
    }
    else if(parseInt(first_Name)){
        document.getElementById("first-name-invalid").style.display="block";
        document.getElementById("first-name-valid").style.display="none";
        error=true;
    }
    else{
        document.getElementById("first-name-invalid").style.display="none"; 
        document.getElementById("first-name-valid").style.display="block";  
    }

    let last_Name = document.getElementById("last-name").value

    if(last_Name.length<3){
        document.getElementById("last-name-invalid").style.display="block";
        document.getElementById("last-name-valid").style.display="none";
        error=true;
    }
    else if(parseInt(last_Name)){
        document.getElementById("last-name-invalid").style.display="block";
        document.getElementById("last-name-valid").style.display="none";
        error=true;
    }
    else{
        document.getElementById("last-name-invalid").style.display="none"; 
        document.getElementById("last-name-valid").style.display="block";  
    }

    let email_Input=document.getElementById("email").value
    if(email_Input.includes("@")&&
    email_Input.includes(".")&&
    email_Input.lastIndexOf(".")<email_Input.length-2&&
    email_Input.lastIndexOf("@")!=0){
        document.getElementById("email-invalid").style.display="none";
        document.getElementById("email-valid").style.display="block";
    }
    else{
        document.getElementById("email-invalid").style.display="block"; 
        document.getElementById("email-valid").style.display="none";
        error=true;  
    }

    let phone_Number_Input=document.getElementById("phone-number").value

    if(phone_Number_Input.length!=10){
      document.getElementById("invalid-phone-number").style.display="block";
      document.getElementById("valid-phone-number").style.display="none";
      error=true;
  }
  else if((parseInt(phone_Number_Input)).toString().length==10){
      document.getElementById("invalid-phone-number").style.display="none"; 
      document.getElementById("valid-phone-number").style.display="block";
  }
  else{
      document.getElementById("invalid-phone-number").style.display="block";
      document.getElementById("valid-phone-number").style.display="none";
      error=true;
  }

  let city_name=document.getElementById("city").value

    if(city_name.length<2&&city_name.includes(0)||city_name.includes(1)||city_name.includes(2)||city_name.includes(3)||city_name.includes(4)||
    city_name.includes(5)||city_name.includes(6)||city_name.includes(7)||city_name.includes(8)||city_name.includes(9)){
        document.getElementById("city-invalid").style.display="block";
        document.getElementById("city-valid").style.display="none";
        error=true;  
    }
    else if(city_name.length>=2){
        document.getElementById("city-valid").style.display="block";
        document.getElementById("city-invalid").style.display="none";
    }
    else{
        document.getElementById("city-invalid").style.display="block";
        document.getElementById("city-valid").style.display="none";
        error=true;  
    }

    let state_name=document.getElementById("state").value

    // console.log(state_name.value)
    if(state_name==="Choose..."){
        document.getElementById("state-invalid").style.display="block";
        document.getElementById("state-valid").style.display="none";
        error=true;  
    }
    else{
        document.getElementById("state-valid").style.display="block";
        document.getElementById("state-invalid").style.display="none";
    }


 let zip_name=document.getElementById("zip").value

    if(zip_name.length<6){
        document.getElementById("zip-invalid").style.display="block";
        document.getElementById("zip-valid").style.display="none";
        error=true;  
    }
    else{
        document.getElementById("zip-valid").style.display="block";
        document.getElementById("zip-invalid").style.display="none";
    }

        let tnc_Input=document.getElementById("tnc").checked
    
        if (tnc_Input != true) {
            document.getElementById("tnc-invalid").style.display = "block";
            document.getElementById("tnc-valid").style.display = "none";
            error = true;
        }
        else {
            document.getElementById("tnc-invalid").style.display = "none";
            document.getElementById("tnc-valid").style.display = "block";
            
        }
    
        console.log(error);
if(error==false){
alert("Your details have been saved successfully")
document.getElementById("first-name").value="";
document.getElementById("last-name").value="";
document.getElementById("email").value="";
document.getElementById("phone-number").value="";
document.getElementById("city").value="";
document.getElementById("state").value="";
document.getElementById("zip").value="";
document.getElementById("tnc").checked=""
// alert("Your details have been saved successfully")

document.getElementById("first-name-valid").style.display = "none";
document.getElementById("last-name-valid").style.display = "none";
document.getElementById("email-valid").style.display = "none";
document.getElementById("valid-phone-number").style.display = "none";
document.getElementById("city-valid").style.display = "none";
document.getElementById("state-valid").style.display = "none";
document.getElementById("zip-valid").style.display = "none";
document.getElementById("tnc-valid").style.display = "none";

// alert("Your details have been saved successfully")
}

}
