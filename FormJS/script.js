"use strict";

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // const formprops = Object.fromEntries(formData);
  let firstName = document.getElementsByName("FirstName")[0].value;
  let lastName = document.getElementsByName("LastName")[0].value;
  let email = document.getElementsByName("Email")[0].value;
  let address = document.getElementsByName("Address")[0].value;
  let pincode = document.getElementsByName("Pincode")[0].value;
  let choice = document.getElementsByName("Choice")[0].value;
  let state = document.getElementsByName("State")[0].value;
  let country = document.getElementsByName("Country")[0].value;
  let row = document.querySelector(".tableRow");

  const html = `
  <tr>         
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${email}</td>
  <td>${address}</td>
  <td>${pincode}</td>
  <td>${choice}</td>
  <td>${state}</td>
  <td>${country}</td> 
</tr>`;

  row.insertAdjacentHTML("afterend", html);

  firstName = "";
  lastName = "";
  email = "";
  address = "";
  pincode = "";
  choice = "Idly";
  state = "";
  country = "";

  document.getElementsByName("FirstName")[0].value = "";
  document.getElementsByName("LastName")[0].value = "";
  document.getElementsByName("Email")[0].value = "";
  document.getElementsByName("Address")[0].value = "";
  document.getElementsByName("Pincode")[0].value = "";
  document.getElementsByName("Choice")[0].value = "";
  document.getElementsByName("State")[0].value = "";
  document.getElementsByName("Country")[0].value = "";
});
