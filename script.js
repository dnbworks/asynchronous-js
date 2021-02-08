

const test = (text) => {
     function data() {
        console.log(text);
    }
    return data();
}

test("how are you");


window.addEventListener("beforeunload", function(){
    localStorage.setItem("user", "john");
});
















