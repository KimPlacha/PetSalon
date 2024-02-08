
let salon={ //object
    name:"Fur-riendly Spaw",
    phone:"555-555-5555",
    address:{
        street:"Oceanside",
        number:"1010",
        zip:"22222"               
    },
    pets: [] //array
    }
// constructor
    function Pet(n,a,g,s,b){
        this.name=n;
        this.age=a;
        this.gender=g;
        this.service=s;
        this.breed=b;
    }

    function displayPetNames(){
    for(let i=0; i<salon.pets.length;i++){
        document.getElementById('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
        }
        document.getElementById('totalPets').innerHTML=`Total=${salon.pets.length}`
    }

    function displayFooterInfo(){
        document.getElementById("Info").innerHTML=`<p> Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>`;
    }
    // get elements from HTML
    let inputName= getE("txtName");
    let inputAge= getE("txtAge");
    let inputGender= getE("txtGender");
    let inputService= getE("txtService");
    let inputBreed= getE("txtBreed");
    

    function register(){
        //1) getting value
        //2) create the newPet using the constructor
        let newPet = new Pet (inputName.value,inputAge.value,inputGender.value);
        console.log(newPet);
        //3) push the newPet to the array
        salon.pets.push(newPet);
        //4) call display function
        displayPetNames();
            //5) clear the input
            inputName.value="";
            inputAge.value="";
            inputGender.value="";
            inputService.value="";
            inputBreed.value="";
    }

    function init(){
        // creating predefined objects
        let pet1=new Pet ("Kona",4,"female");
        let pet2=new Pet ("Kailua",2,"female");
        let pet3=new Pet ("Koko",4,"male");
        salon.pets.push(pet1,pet2,pet3)
        //executing function
        displayPetNames();
        displayFooterInfo();
    }
    window.onload=init;


    function getE(id){
        return document.getElementById(id);
    }
