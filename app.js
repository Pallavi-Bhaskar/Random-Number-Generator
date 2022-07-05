const generateNo = document.querySelector(".generateNo");

generateNo.addEventListener("click", generateRandomNum);

function generateRandomNum() {
    const fromNum = document.querySelector(".fromNum").value;
    const toNum = document.querySelector(".toNum").value;
    
    randomNumber = Math.floor(Math.random() * parseInt(toNum));
    if(randomNumber >= parseInt(fromNum))
    {
        const randomNumberEl = document.querySelector('.randomNumberEl');
        randomNumberEl.innerHTML = randomNumber;
    }
    
}