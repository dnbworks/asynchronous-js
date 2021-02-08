

// using promises

const promises = new Promise((resolve, reject) => {
    //resolve("done");
    reject("canceled")
});

promises.then(answer => {
    console.log(answer);
}).catch(answer => {
    console.log(answer);
});


const init = (urlLink) => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        var url = urlLink;

        
        request.addEventListener("readystatechange", function(){
            if(request.readyState === 4 && request.status === 200){
                const datas = JSON.parse(request.responseText);
                resolve(datas);
            } else if(request.readyState === 4){
                reject("couldn't the fetch data");
            }
        });
        
        
        request.open("GET", url);
        request.send(null);
        });
}



init("http://127.0.0.1:5500/customers.json").then(data => {
    console.log(data);
    return init("http://127.0.0.1:5500/customer1.json");
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

