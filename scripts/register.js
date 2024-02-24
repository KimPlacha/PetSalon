let salon={
    name:"Pet Salon",
    address:{
        steet:"Oceanside St",
        ZipCode:"22222",
        number:"345",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]

}

//ASSIGNMENT 1
function displayPetNames(){

salon.pets.forEach((element)=> {
    console.log(element.name);
});
    
alert(`They are ${salon.pets.length} on the line`)
}



//Create the constructor
class Pets{
    
    constructor(name,age,breed,service,gender,date,ownerName,ownerPhone,ownerAddress){

        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.date=date;
        this.service=service;
        this.paymentmethod=paymentmethod;
        this.discount=discount;
        this.ownerInfo={
            name:ownerName,
            phone:ownerPhone,
            address:ownerAddress,
    }
}

}

const removeRegister = (index) => { 

    if(index<salon.pets.length){
        salon.pets.splice(index,1);


    }

     //reset the card so they cant be duplicated
    document.getElementById("petList").innerHTML="";
    document.getElementById("rowTarget").innerHTML="";

    printPetCard();
    printTable();
}



const register = () => {

    //reset the card so they cant be duplicated
    document.getElementById("petList").innerHTML="";
    document.getElementById("rowTarget").innerHTML="";

        //Capture the values from the form

    let form=document.getElementById("petForm");
    let name=document.getElementById("txtpetName").value;
    let age=document.getElementById("txtAge").value;
    let breed=document.getElementById("txtBreed").value;
    let service=document.getElementById("selService").value;
    let gender=document.getElementById("rdbMale").checked;
    let date=document.getElementById("txtDate").value; 
    let ownerName=document.getElementById("txtownerName").value;  
    let ownerPhone=document.getElementById("txtownerPhone").value;
    let ownerAddress=document.getElementById("txtownerAddress").value;
    
   //check if the gender 
    if(gender==true){
        gender="Male"
    }else
    {
        gender="Female"
    }

    //Create new pet
    let newPet=new Pets(name,age,breed,service,gender,date,ownerName,ownerPhone,ownerAddress)

    //Push the pet to the pets array
    salon.pets.push(newPet);

    //log the pet info
    // console.log(newPet);
    // console.log(salon.pets);
    alert("Pet Registered");

    //clear form
    form.reset();

    //Display added cards
    printPetCard();
    printTable();
    

}


//Displays the registered pet on the table
const printPetCard = () => {

    document.getElementById("petList").innerHTML="";
    document.getElementById("rowTarget").innerHTML="";
    //tarvel the array

    for (let i = 0; i < salon.pets.length; i++) {
        //create the card
    
    //append the tmp into the HTML
    document.getElementById("petList").innerHTML+=createCard(salon.pets[i],i);


}};

const printTable = () => { 
    for (let i = 0; i < salon.pets.length; i++) {
    
    //append the tmp table in HTML
    document.getElementById("rowTarget").innerHTML+=createRow(salon.pets[i]);

}};

//Search an specific name on the array
const searchPet = () => {

    document.querySelector(".go-back").style.display="inline";
    let name=document.getElementById("txtSearch").value;

for (let i = 0; i < salon.pets.length; i++) {

        if(name.toLowerCase()==salon.pets[i].name.toLowerCase()){
          //append the tmp into the HTML
        console.log("found");

            //reset the card so they cant be duplicated
            document.getElementById("petList").innerHTML="";
            document.getElementById("rowTarget").innerHTML="";

             //get the exact element of the array
        document.getElementById("petList").innerHTML+=createCard(salon.pets[i],i);
        document.getElementById("rowTarget").innerHTML+=createRow(salon.pets[i]);

        }
    
    }

    document.getElementById("headerList").innerHTML="Search Result";
} 

const goBack = () => {

    document.querySelector(".go-back").style.display="none";

    printPetCard();
    printTable();
}


const createCard = (pet,index) => {
    //create the card with all the data
    return `<div class="pet-card">
        <h3>Name:${pet.name}</h3>
        <p>Age:${pet.age}</p>
        <p>Breed:${pet.breed}</p>
        <p>Gender:${pet.gender}</p>
        <p>Appointment:${pet.date}</p>
        <p>Service:${pet.service}</p>
        <p>Service:${pet.paymentmethod}</p>
        <p>Service:${pet.discount}</p>

        <h3>Owner Information</h3>
        <p>${pet.ownerInfo.name}</p>
        <p>${pet.ownerInfo.phone}</p>
        <p>${pet.ownerInfo.address}</p>
        <button onclick="removeRegister(${index});" class="btn-remove">Remove</button>
    </div> `;

};


const createRow=(pet)=>{
//return the row
    return ` <tr>
    <th scope="row"></th>
    <td>${pet.name}</td>
    <td>${pet.age}</td>
    <td>${pet.breed}</td>
    <td>${pet.gender}</td>
    <td >${pet.date}</td>
    <td>${pet.service}</td>
    <td>${pet.paymentmethod}</td>
    <td >${pet.discount}</td>
    </tr>`;

}

//initial load on the webpage
const init = () => {

    let Kona =new Pets("Kona", "4","french bulldog","female","nail trim","cash","veterans");
    let Koko=new Pets("Koko", "4","american short hair","male","flea bath","credit card","student");
    let Kailua=new Pets("Kailua", "2","norwegian elkhound","female","de-shedding","debit","teacher");
    let Koa=new Pets("Koa", "5","husky","male","full-styling","klarna","senior");
    let Nala=new Pets("nala", "6","pitbull","female","bath & brush","afterpay","veterans");
    let Matcha=new Pets("matcha",3,"pug","male","vaccines","cash","student");
    salon.pets.push(Kona,Koko,Kailua,Koa,Nala,Matcha);
    displayPetNames();
    printPetCard();
    printTable();
};

window.onload=init;




//Controls the hover color on the select-dropdown-menu 
function select_option(){
    var selectBox = document.getElementById("selService");
    $size = selectBox.size;
        $set_size = 4;
    if ($size == $set_size) {
    selectBox.size = 1;
    selectBox.style.overflow = 'hidden';
    } else {
    selectBox.size = $set_size;
    selectBox.style.height = 'auto';
    selectBox.style.overflow = 'auto';
    }
    var selectedOptionTop = selectBox.options[selectBox.selectedIndex].offsetTop;
    selectBox.scrollTop = selectedOptionTop;
}