//using async and await
const getData = async () => {
    const response = await fetch("https://api.github.com/users/PilgrimMemoirs/followers");
    // const response = await fetch("http://127.0.0.1:5500/customers.json");
    // const response1 = await fetch("http://127.0.0.1:5500/customer1.json");

    if(response.status !== 200 && response1.status !== 200){
        throw new Error("Couldn't fetch data");
    }

    const data = await response.json();
  
    
    return (data);

    

};

getData()
    .then( (data) => { 
        console.log(data);
    })
    .catch( err => {
        console.log(err.message);
    });