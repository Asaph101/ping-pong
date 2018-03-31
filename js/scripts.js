//back-end

function pingPong(ansWer){
   var thePingPongArray=[];
   for (var i=0; i<ansWer; i+=1){


if (i%15===0){
    thePingPongArray.push("pingpong");
}
else if(i%3===0){
    thePingPongArray.push("ping");
}

else if(i%5===0){
    thePingPongArray.push("pong");
}

else {
    thePingPongArray.push(i);
    }
}
return thePingPongArray
}
//user-interface

$(document).ready(function(){
  $("form#pingpongz").submit (function(event){
    event.preventDefault();
    var ansWer=parseInt($("input#number").val());
    var PingPongArray=pingPong(ansWer);
    $("ul.ping").empty();
    PingPongArray.forEach(function(item){
        $("ul.ping").append("<li>"+item+"</li>");
     });
    });
  });