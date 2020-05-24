function ajaxRequest(type, url, callback1, callback2) {
    let var1 = new XMLHttpRequest();
    var1.open(type,url);

    var1.onload = () => {
        switch(var1.status){
            case 200 :
            case 201 :  console.log(var1.responseText);
                        callback1(var1.responseText);
                        break;
            default :   console.log('HTTP error' + var1.status);//callback xhr.status
                        callback2(var1.status);
                        break;

        }
    };
    var1.send();
}

function httpErrors(errorCode){
    document.getElementById('errors').innerHTML = "errorCode";
}

function affichage(text){
    document.getElementById('timestamp').innerHTML = "<i class='material-icons'>watch_later</i>"+"<strong>"+text+"</strong>";
}

let time = setInterval(timer, 1000);

function timer() {
  ajaxRequest("GET","/PHP/CommWeb/tp3ex1Input/php/timestamp.php", affichage, httpErrors);
}

