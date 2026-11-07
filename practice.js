const url = "https://freeapihub.com/apis/api-football"
const getDate = async ()=>{
    let response = await fetch(url);
    console.log(response);
    let data = response.json();
console.log(data);
}