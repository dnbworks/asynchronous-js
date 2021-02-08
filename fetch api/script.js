
// using fetch api
fetch("https://api.github.com/users/dnbworks/followers").then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("couldn't fetch data");
})