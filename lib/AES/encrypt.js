function encrypt(){
    let type = document.getElementById("method").value;

    switch(type){
        case "aes":
            aes();
        default:
            return "";
    }
}