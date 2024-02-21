let petID=0;
// constructor
function Pet(n,a,g,s,b,d,petID){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.service=s;
    this.breed=b;
    this.discount=d;
    this.id=petID++;//internal id
}

function getE(id){
    return document.getElementById(id);
}

    // get elements from HTML
    let inputName= getE("txtName");
    let inputAge= getE("txtAge");
    let inputGender= getE("txtGender");
    let inputService= getE("txtService");
    let inputBreed= getE("txtBreed");
    let inputStatus= getE("txtStatus");
    let inputPaymentmethod=getE("txtPaymentmethod");
    let inputDiscount=getE("txtDiscount");

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

    function displayPetNames(){
    for(let i=0; i<salon.pets.length;i++){
        document.getElementById('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
        }
        document.getElementById('totalPets').innerHTML=`Total=${salon.pets.length}`
    }

    function displayFooterInfo(){
        document.getElementById("Info").innerHTML=`<p> Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>`;
    }


    function isValid(aPet){
        let validation=true;
        //clear the style
        //document.queryelectorAll(inputs);
        getE("txtName").classList.remove("alert-error");
        getE("txtAge").classList.remove("alert-error");
        if(aPet.name==""){
            //the pet is not valid
            validation=false;
            getE("txtName").classList.add("alert-error");
        }
        if(aPet.age==""){
            validation=false;
            getE("txtAge").classList.add("alert-error");
        }
        return validation;

        if(aPet.gender==""){
            validation=false;
            getE("txtGender").classList.add("alert-error");
        }
        if(aPet.service==""){
            validation=false;
            getE("txtService").classList.add("alert-error");
        }
        if(aPet.breed==""){
            validation=false;
            getE("txtBreed").classList.add("alert-error");
        }
        if(aPet.discount==){
            validation=false;
            getE("txtDiscount").classList.add("alert-error");
        }
        return validation;
    }

        function showNotifications(msg,type){
            getE("notifications").classList.remove("hidden");
            getE("notifications").innerHTML=`<p class="${type}">${msg} </p>`;

            setTimeoutfunction(){
                getE("notifications").classList.add("hidden");
    }

        function register(){
            //1) getting value
            //2) create the newPet using the constructor
            let newPet = new Pet (inputName.value,inputAge.value,inputGender.value);

            if(isValid (newPet)==true){
                salon.pets.push(newPet);
                displayPetCards();
                inputName.value="";
                inputAge.value="";
                inputGender.value="";
                inputService.value="";
                inputBreed.value="";
                inputStatus.value="";
                inputPaymentmethod.value="";
                inputDiscount.value="";
                
                showNotifications("Successful registration")
            }else{
                showNotifications("Please fill out all the required fields","alert-error");
                }
            }
    function deletePet(petId){
        let deleteIndex;// to get the index of the array (position of the object)
        for(let i=0;i<salon.pets.length;i++){
            let pet =  salon.pets[i];
            if(pet.id==petID){
                deleteIndex=i;
                break;
            }
        }
            getE(id).remove();//remove from the html
            salon.pets.splice(deleteIndex,1);//remove the pet from the array
        }
        function init(){
            // creating predefined objects
            let pet1=new Pet ("Kona",4,"female","french bulldog","Veterans");
            let pet2=new Pet ("Kailua",2,"female","Norwegian Elkhound","Veterans");
            let pet3=new Pet ("Koko",4,"male","American Short Hair","Veterans");
            salon.pets.push(pet1,pet2,pet3)
            //executing function
            displayPetCards();
        }
        window.onload=init;//wait to render the html
    
        function getE(id){
            return document.getElementById(id);
        
            }
            //3) push the newPet to the array
            salon.pets.push(newPet);
            //4) call display function
            displayPetNames();
                //5) clear the input
                inputName.value="";
                inputAge.value="";
                inputGender.value="";
                inputService.value="";
        }
