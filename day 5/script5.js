//      1.Local
//      2.global
//      3.block---->const and let

// console.log("This is JavaScript");
// var name="GMIT";

// function f1(){
//     console.log("f1"+"name");
// }

// function f2(){
//     console.log("f1"+"name");
// }
// -----------------------------------------------------------------------------------------------------

// Data types 
// 1.number   ex: 1, 3, 5, 20
// 2.string   ex: 'madhu',"harish
// 3.float    ex: 1.2, 4.6
// 4.Boolean  ex: true or false.
// 5.Null
// ----------------------------------------------------------------------------------------------

// function fnName(){
//     console.log("Hello, I am a function");
// }
// fnName(); //function call
// -------------------------------------------------------------------------------------------------
// function fnAdd(param1,param2){
//     console.log(param1+param2);
//     console.log(param1 + parseInt(param2));    
// }
// fnAdd(1,2); //function call
// fnAdd(4,"10"); //function call  ( parsing to int)

// --------------------------------------------------------------------------------------------------
// parameter concept,initilazing beside variable or passing in the function
// function fnAdd2(param1=1,param2=5){
//     console.log(param1+param2);
// }
// fnAdd2();
// ----------------------------------------------------------------------------------------------

// Block Variable
// {
// var a=10;
// let b=20;   //block type 
// const c=30; //block type
// }

// console.log(a);
// console.log(b); //no print bcz block type-print inside the block
// console.log(c); //no print bcz block type-print inside the block


// ================================================================================
// 1st task
// js code for singup form

// var username="gmit";
// var password="gmit123";

// function fnValidation(){
//     let inputUsername=document.getElementById("Username").value;
//     let inputPasssword=document.getElementById("password").value;
// }
// var c=1;
// var a="1";
// var b=2;

// if(a===c && b===c){                       //(===) value and type
//     console.log("success");
// }else{
//     console.log("failure");
    
// }
// =====================================================================================
// 2nd task code

// 1.document.getElementsByClassName
// 2.document.getElementById
// 3.document.getElementsByName


function fnValidateSignupForm(){
    let fname=document.getElementById("firstname").value;
    let lname=document.getElementById("lastname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("Confirmpassword").value;
    console.log(fname,lname,email,password,confirmPassword);

    let validateFname=validateFields(fname);
    console.log(validateFname);
    
    
}

function validateFname(inputValue){
if(inputValue.length>=5){
    return "valid";
}    else{
    return "Invalid";    
}
}


// interview questions
// 1. global and local variable