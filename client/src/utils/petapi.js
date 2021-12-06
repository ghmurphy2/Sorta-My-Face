// query pet api for location and available pets
// display breed, name, location, photo if available, full pet history if possible
// form for breed, location, size? information quailty

import { Formik, Field, Form, useFormik } from "formik";
// document.addEventListener("DOMContentLoaded", formHandler);
const apiKey = "5lxmipzTjAo8PkmJwYYBpqT7OMJ46Os5Fbn4Wer8aDN83QBx88";
const secret = "spzjkthhuaI4tp1ChWV15hQHYgbTW4bHyxSuZbbL";
let token;

const formHandler = (values) => {
  console.log(values);
  // var url = 'https://api.https://api.petfinder.com/v2/.com/pet.getRandom';
  // placeholder query search params, type ie cat dog, breed, proximity require user zip,
  return fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      apiKey +
      "&client_secret=" +
      secret,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return fetch(
        `https://api.petfinder.com/v2/animals?type=dog`,
        //   determined url plus params, 2 to start
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            //  include bearer token for fetch request

            Authorization: "Bearer " + data.access_token,
          },
        }
      ).then((res) => res.json());
    });
};

// on success

function renderPets(res) {
  console.log(res);
  //   //
  //   var petName = res.petfinder.pet.name.$t;
  //   var img = res.petfinder.pet.media.photos.photo[0].$t;
  //   var id = res.petfinder.pet.id.$t;
  //   var breed = res.petfinder.pet.breed.primary$t;
  //   var email = res.petfinder.pet.contact.email.$t;
  //   var phoneNum = res.petfinder.pet.contact.phone.$t;
  //   var distanceAway = res.petfinder.pet.distance.$t;
  //   var available = res.petfinder.pet.status.$t;
  //   // additional pet info
  //   // var petName = res.petfinder.pet.name.$t;
  //   // var petName = res.petfinder.pet.name.$t;
  //   var newName = document.createElement("a");
  //   var newDiv = document.createElement("div");
  //   newName.textContent = petName;
  //   newName.href = "https://www.petfinder.com/petdetail/" + id;
}
export default formHandler;
