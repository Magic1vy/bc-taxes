const btn = document.querySelector("#btn");
btn.addEventListener("click", calculateTax);

function calculateTax(e){
e.preventDefault();

const amountBeforeTax = document.querySelector("#amountBeforeTax").value;
const tax = document.querySelector("#tax").value;

if( amountBeforeTax === '')
     {

        
        
        Swal.fire({
            title: 'Error!',
            text: 'Please enter your information!',
            imageUrl: '2.gif',
            timer: 2000,
            imageWidth: 280,
            imageHeight: 280,
            imageAlt: 'Custom image via GIPHY',
          })
        }



let amountTax = amountBeforeTax * tax;


let amountAfterTax = Number(amountBeforeTax) + amountTax;


amountTax = amountTax.toFixed(2);
amountAfterTax = amountAfterTax.toFixed(2);

document.querySelector("#amountAfterTax").textContent = amountAfterTax;
document.querySelector("#amountTax").textContent = amountTax;
}

const acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}