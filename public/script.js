const form= document.querySelector("form");
form.addEventListener('submit', e=> {
    if(!form.checkValidity){
        e.preventDefault();

    }
    form.classList.add('was-validated')
})
var button = document.getElementById("size-btn")[0];
function changeColor() {
    button.classList.add("clicked");
  }