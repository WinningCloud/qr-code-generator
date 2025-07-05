const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
const qrImage = document.querySelector(".imageClass img");
const btn = document.querySelector(".btnClass button");

btn.addEventListener("click", async ()=>{
    console.log("clicked!");
    
    const inputText = document.querySelector(".inputClass input").value;
    console.log(inputText);
    qrURL = URL+inputText;

    const response = await fetch(qrURL);
    console.log(response);
    console.log(response.url);
    qrImage.src = response.url;
    qrImage.style.display = "block";
});

