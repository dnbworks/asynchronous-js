// using callbacks

const getTodos = (resource, callback) => {
    var request = new XMLHttpRequest();
    var url = resource;
 
    request.addEventListener("readystatechange", function(){
        if(request.readyState === 4 && request.status === 200){
            const datas = JSON.parse(request.responseText);
            callback(undefined, datas);
        } else if(request.readyState === 4){
            callback("couldn't fetch data", undefined);
        }
    });
    
    
    request.open("GET", url);
    request.send(null);
    
}


getTodos("followers.json", (err, data) => {
    console.log("callback is fired");
    if(err){
        console.log(err);
    } else {
        console.log(data);
        getTodos("https://api.github.com/users/dnbworks/followers", (err, data) => {
            console.log("callback is fired");
            if(err){
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});