let div=document.createElement("div");
div.setAttribute("id","division");
let head=document.createElement("h1");
head.setAttribute("id","hd");
head.innerHTML="GLOBAL COVID19 DETAILS"
let nav=document.createElement("nav")
nav.setAttribute("id","nav")
nav.setAttribute("class","navbar navbar-light bg-info")
let ptag=document.createElement("p");
ptag.setAttribute("id","pta")
ptag.innerHTML="<br>(Wait for 30sec Display the details)"
nav.append(head);
nav.append(ptag);
div.append(nav);
document.body.append(div);
let divc=document.createElement("div");
divc.setAttribute("class","container");
let tab =document.createElement("table");
tab.setAttribute("class","table table-striped table-dark");
tab.innerHTML=`<thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Country Name</th>
                      <th scope="col">Conformed Cases</th>
                      <th scope="col">Death</th>
                      <th scope="col">Case_Fatality_Ratio</th>
                      <th scope="col">Incident_Rate</th>
                  </tr>
               </thead>`
const tbody=document.createElement("tbody")
tbody.setAttribute("class","tbod");
tab.append(tbody);
divc.append(tab);
document.body.append(divc);

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
  // tbody.innerHTML+=` <tr>
  //                     <td>${ele.Combined_Key}</td>
  //                     <td>${ele.Confirmed}</td>
  //                     <td>${ele.Deaths}</td>
  //                     <td>${ele.Case_Fatality_Ratio}</td>
  //                     <td>${ele.Incident_Rate}</td>
  //                   </tr>`
div.innerHTML+=`<p>Country Name :${ele.Combined_Key}, Conformed Cases :${ele.Confirmed}, Death :${ele.Deaths}, Case_Fatality_Ratio :${ele.Case_Fatality_Ratio}, Incident_Rate :${ele.Incident_Rate}.</p>`
    })
})
.catch((rej)=>{console.log(rej)});
 

