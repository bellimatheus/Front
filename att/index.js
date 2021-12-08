var botao = document.getElementById("bot");


botao.addEventListener("click", () => {
    let tipo = document.getElementById("opt").value; 

    let card = document.querySelector(".card");
    let link = document.getElementById("liink").value;
    let msg = document.getElementById("desc").value; 
    let div = document.querySelector(".normal").cloneNode(true);





    console.log()

    if (tipo === "normal"){
        div.style.border = "1px solid blue";

    } else if (tipo === "importante"){

        div.style.border = "1px solid green";
    }else{

        div.style.border = "1px solid red";
    }

    div.querySelector("button").addEventListener("click", () => {
        div.remove()
    })


    div.classList.remove("modal");
    div.querySelector("p").innerHTML = msg;
    div.querySelector("a").innerHTML = link;
    div.querySelector("a").style = "margin-bottom: 10px;"

    card.appendChild(div);



})

