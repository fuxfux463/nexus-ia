// public/js/app.js
addMessage("🤖 Nexus está digitando...","bot");

fetch(API_URL,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({message:text,history:getHistory()})
})
.then(r=>r.json())
.then(data=>{
messages.lastChild.remove();
addMessage(data.reply,"bot");
saveHistory(text,data.reply);
});
}

function addMessage(text,type){
const div=document.createElement("div");
div.className="msg "+type;
div.innerText=text;
messages.appendChild(div);
messages.scrollTop=messages.scrollHeight;
}

function getHistory(){
return JSON.parse(localStorage.getItem("history")||"[]");
}

function saveHistory(user,bot){
let h=getHistory();
h.push({user,bot});
localStorage.setItem("history",JSON.stringify(h));
}
