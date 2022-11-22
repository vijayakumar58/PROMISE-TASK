let div=document.createElement("div");
div.setAttribute("id","division");
let head=document.createElement("h1");
head.setAttribute("id","hd");
head.innerHTML="GLOBAL COVID19 DETAILS"
let nav=document.createElement("nav")
nav.setAttribute("id","nav")
nav.setAttribute("class","navbar navbar-light bg-info")
let ptag=document.createElement("p");
ptag.innerHTML="Wait for 30sec Display the details"
nav.append(ptag);
nav.append(head);
div.append(nav);
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
covid.then((res)=>{console.log(res.rawData)
res.rawData.map((ele)=>{
div.innerHTML+=`<p>Country Name :${ele.Combined_Key}, Conformed Cases :${ele.Confirmed}, Death :${ele.Deaths}, Case_Fatality_Ratio :${ele.Case_Fatality_Ratio}, Incident_Rate :${ele.Incident_Rate}.</p>`
    })


})
.catch((rej)=>{console.log(rej)});
 

