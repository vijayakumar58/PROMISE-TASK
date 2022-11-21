let div=document.createElement("div");
div.setAttribute("id","division");
let input=document.createElement("input");
input.setAttribute("type","text")
input.setAttribute("id","in");
let but=document.createElement("button");
but.setAttribute("type","button");
but.innerText="search";
div.append(input);
div.append(but);
document.body.append(div);

const covid= new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET","https://coronavirus.m.pipedream.net/");
    request.send();
    request.onload=function(){
       if (request.status==200){
        let data= JSON.parse(request.response)
        resolve(data)
       }else{
        reject("some error not found")
       }
    }
})
covid.then((res)=>{console.log(res.rawData)}).catch((rej)=>{console.log(rej)});

