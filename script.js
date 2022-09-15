let dogImageDiv = document.getElementById('dogImage');


function onclickApi() {
fetch('https://dog.ceo/api/breeds/image/random')
.then(Response => Response.json())
.then(json=> 
dogImageDiv.innerHTML = `<img src='${json.message}'/>`)
}
