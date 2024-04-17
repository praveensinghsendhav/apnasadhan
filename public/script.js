const menu = document.getElementById("menus"); 
let eye= true;
function menubox() { 
   if(eye==true){ 
    menu.style.visibility="visible"; 
    menu.style.right="15px"; 
    menu.style.animation = "fadeIn 0.5s ease forwards"; 
    menu.style.animation = "slideDown 0.5s ease"
    eye=false;
   } 
   else if(eye==false){
    menu.style.visibility="hidden"; 
    menu.style.animation = "fadeout 1s ease-out ";
    menu.style.animation = "slideUp 0.5s ease forwards"
    eye=true;
   }

} 


function addCard() { 
// Select the form element
var form = document.getElementById('alldetails');
var childTags = form.querySelectorAll('.fdetail');
var numberOfChildTags = childTags.length -2;
console.log(numberOfChildTags);

   const cardContainer = document.getElementById('alldetails');
   const card = document.createElement('div');
   card.className = 'fdetail data2 data2b'; 
   card.innerHTML = `<label for="Dcity">Destinaation City</label> 
       <input type="text" placeholder="Enter Your City" name="Dcity${numberOfChildTags}" id="Dcity"> 
       <ion-icon class="adddesti" onclick="addCard()" name="add-circle-outline"></ion-icon>
   <span class="delete-icon" onclick="deleteCard(this)">❌</span>
   `;
   cardContainer.appendChild(card);
 }

 function deleteCard(element) {
   const card = element.closest('.data2');
   card.remove();
 } 
 
 

 let dtl1 = true;
 function detailbox1() { 
  if(dtl1){
  const detail_btn = document.getElementById("ralldetails1"); 
  detail_btn.style.display = "block"; dtl1=false
} 
  else {
  const detail_btn = document.getElementById("ralldetails1"); 
  detail_btn.style.display = "none"; dtl1=true} 
}  
let dtl1_1 = true;
function detailbox1_1() { 
 if(dtl1_1){
 const detail_btn = document.getElementById("ralldetails1_1"); 
 detail_btn.style.display = "block"; dtl1_1=false
} 
 else {
 const detail_btn = document.getElementById("ralldetails1_1"); 
 detail_btn.style.display = "none"; dtl1_1=true} 
} 

let dtl2=true;
function detailbox2() { 
  if(dtl2){
  const detail_btn = document.getElementById("ralldetails2"); 
  detail_btn.style.display = "block"; dtl2=false
} 
  else {
  const detail_btn = document.getElementById("ralldetails2"); 
  detail_btn.style.display = "none"; dtl2=true} 
} 
let dtl3=true;
function detailbox3() { 
  if(dtl3){
  const detail_btn = document.getElementById("ralldetails3"); 
  detail_btn.style.display = "block"; dtl3=false
} 
  else {
  const detail_btn = document.getElementById("ralldetails3"); 
  detail_btn.style.display = "none"; dtl3=true} 
} 
let dtl4=true;
function detailbox4() { 
  if(dtl4){
  const detail_btn = document.getElementById("ralldetails4"); 
  detail_btn.style.display = "block"; dtl4=false
} 
  else {
  const detail_btn = document.getElementById("ralldetails4"); 
  detail_btn.style.display = "none"; dtl4=true} 
} 
let dtl5=true;
function detailbox5() { 
  if(dtl5){
  const detail_btn = document.getElementById("ralldetails5"); 
  detail_btn.style.display = "block"; dtl5=false
} 
  else {
  const detail_btn = document.getElementById("ralldetails5"); 
  detail_btn.style.display = "none"; dtl5=true} 
} 

function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phone").value;
  var regex = /^\d{10}$/; // 10 digit number validation, you can modify this as per your requirement

  if (!regex.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
  }
  return true;
} 

function finaly (){
 if(validateForm())
 {
  setTimeout(()=>{
    alert('Thank you for choosing our service!'); 
    alert("Booking confirmed! You will receive an email"); 
    return true;
   },1000);
 }else {
  return false;
 }
} 

function validateForm() {
  // Get form fields
  const bname = document.getElementById('fullname').value;
  const bemail = document.getElementById('bemail').value;
  const bphone = document.getElementById('bphone').value;
  const bpickuploc = document.getElementById('pickuploc').value; 
  const checkbox1 = document.getElementById('bcheck1').checked;
  const checkbox2 = document.getElementById('bcheck2').checked;

  // Validate each field
  if (bname.trim() === '') {
      alert('Please enter your name');
      return false;
  }
  if (bemail.trim() === '') {
      alert('Please enter your email');
      return false;
  }
  if (!isValidEmail(bemail)) {
      alert('Please enter a valid email address');
      return false;
  }
  if (bphone.trim() === '') {
      alert('Please enter your phone number');
      return false;
  }
  if (!isValidPhone(bphone)) {
      alert('Please enter a valid phone number');
      return false;
  }
  if (bpickuploc.trim() === '') {
      alert('Please enter your Pickup Location');
      return false;
  }
  if (!checkbox1 || !checkbox2) {
    alert('Please check both checkboxes');
    return false;
}
  // All validations passed
  return true;
}

function isValidEmail(bemail) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(bemail);
}

function isValidPhone(bphone) {
  // Basic phone number validation regex (10 digits)
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(bphone);
}