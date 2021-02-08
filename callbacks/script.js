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


getTodos("https://api.github.com/users/PilgrimMemoirs/following", (err, data) => {
    console.log("callback is fired");
    if(err){
        console.log(err);
    } else {
        console.log(data);
        insertToDom(data);

        // getTodos("https://api.github.com/users/dnbworks/followers", (err, data) => {
        //     console.log("callback is fired");
        //     if(err){
        //         console.log(err);
        //     } else {
        //         console.log(data);
        //     }
        // });
    }
});

function insertToDom(data){
    var wrapper = document.querySelector(".wrapper");
    var person = '<div class="individual"><img src="" alt="" srcset=""><h2></h2></div>';
    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        person += '<div class="individual"><img src="' + element.avatar_url + '" alt="" srcset=""><h2>' + element.html_url + '</h2></div>';

        wrapper.insertAdjacentHTML("afterbegin", person);
        
    }

}