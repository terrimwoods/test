const person={
    name: "Shay",
    lastName: "Cerny",
    age: 21,
    
    music: ["Coldplay", "Oasis", "Rolling Stones", "Beatles"],
    address:{
        city: "Vegas",
        country: "USA"// last attribute doesn't need a comma.
    }
}
    console.log(person.music[2]);//to display one band select the position (first position is 0)
    
  //two examples to get the same result, 1st one using the powerful '.'
    console.log(person.address.country); 
    console.log(person["address"]["country"]);



    const name ="Briun", job="Web developer";

   //console.log("Name:" + name + "Job:" + job); old way
   
    //template string
    
    console.log(`Name: ${name}, Job: ${job}`);//new way

    const divHTML = document.getElementById("msg");

    let html ="<ul>" +
    "<li> Name:" + name + "</li>"
    "<li> Job:" + job + "</li>"+
    "</ul>";

    //template String

    let html2 = ` <ul>
        <li> Name: ${name} </li>
        <li> Job: ${job} </li>
        </ul>`;
        
    divHTML.innerHTML=html2