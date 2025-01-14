let newBtn = document.querySelector(".new-quote-btn");
let genrateBtn = document.querySelector(".generate-quote-btn");
let quoteContainer = document.querySelector(".quote-container");
let generateContainer = document.querySelector(".generate-container");
let addBtn = document.querySelector(".add-quote-btn");
let inputQuote = document.querySelector(".input-quote");
let inputName = document.querySelector(".input-name");
let backBtn = document.querySelector(".back-btn");



const randomQuotes = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
};

randomQuotes();


const renderQuote = () => {
    currentQuote = randomQuotes();
    if(!currentQuote) return;
    
    document.querySelector(".quote").textContent = currentQuote;
    
};

renderQuote();


newBtn.addEventListener("click",renderQuote);

genrateBtn.addEventListener("click", () => {
    quoteContainer.classList.add("hide");
    generateContainer.classList.remove("hide")
});


addBtn.addEventListener("click",() => {
    if(inputName.value !="" || inputQuote.value != ""){
        alert("New Quote Added");
        localStorage.setItem("userName",inputName.value);
        localStorage.setItem('quote',inputQuote.value);
        quoteContainer.classList.remove("hide");
        generateContainer.classList.add("hide");
    }
    else{
        alert("Please fill in the required fields");
    };


});


backBtn.addEventListener("click",() => {
    quoteContainer.classList.remove("hide");
    generateContainer.classList.add("hide");
});