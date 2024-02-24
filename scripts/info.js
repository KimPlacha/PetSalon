function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>`;
}