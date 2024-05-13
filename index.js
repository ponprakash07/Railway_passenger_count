let count=0;
let countId = document.getElementById("count");
let saveId = document.getElementById("enteries");

function addPassenger()
{
    count++;
    countId.textContent=count;
}

function save()
{
    saveId.textContent+= "-"+count;
    count=0;
    countId.innerText=count;
}