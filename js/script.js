const searchForm = document.getElementById("search-advice");
searchForm.onsubmit = async (e) => {
    e.preventDefault();

try {
        
    const input = document.getElementById("search-input");
    const url = `https://api.adviceslip.com/advice/search/${input.value}`
    const response = await fetch(url);
    const data = await response.json();
    input.value = "";
    document.getElementById("advice").innerHTML = `
                <h2 class="card-title">Advice #${data.slips[0].id}</h2>
                <p>${data?.slips[0]?.advice}</p>
        `
    } catch(err) {
        alert("please enter valid text")
    }

}

// get advice by random id 
const getAdvice = document.getElementById("get-advice");
const randomAdvice = async () => {
        let randomId = Math.floor(Math.random() * 224);
        const url = `https://api.adviceslip.com/advice/${randomId}`
        const response = await fetch(url);
        const advice = await response.json();

        document.getElementById("advice").innerHTML = `
                <h2 class="card-title">Advice #${advice.slip.id}</h2>
                <p>${advice.slip.advice}</p>
        `    
}

window.addEventListener("load", randomAdvice);
getAdvice.addEventListener("click", randomAdvice)