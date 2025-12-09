const apiUrl = "https://api.jsonbin.io/v3/b/693868e6d0ea881f401db03e/latest";
let carsData = [];
let role = ""; // 'user' ose 'admin'

function setRole(selectedRole){
    role = selectedRole;
    document.getElementById("roleSelect").style.display = "none"; // fsheh modal zgjedhjeje
    if(role === "admin"){
        document.getElementById("adminPanel").style.display = "block";
    } else {
        document.getElementById("adminPanel").style.display = "none";
    }
    loadCars(); // ngarko makinat pasi zgjidhet roli
}

async function loadCars() {
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        carsData = data.record; // array me vetura nga bin-i
        showCars(carsData);
    } catch(e) {
        console.error("Gabim ne ngarkimin e makinave:", e);
        alert("Nuk mund te ngarkohen makinat. Kontrollo console.");
    }
}

function showCars(list){
    const table = document.getElementById("carTable");
    table.innerHTML = "";
    list.forEach(c=>{
        table.innerHTML+=`<tr>
            <td>${c.Id}</td>
            <td>${c.Marka}</td>
            <td>${c.Modeli}</td>
            <td>${c.Viti}</td>
            <td>${c.Targa}</td>
        </tr>`;
    });
}

function filterCars(){
    const term = document.getElementById("filterInput").value.toLowerCase();
    const filtered = carsData.filter(c=>
        c.Marka.toLowerCase().includes(term) ||
        c.Modeli.toLowerCase().includes(term) ||
        c.Viti.toString().includes(term)
    );
    showCars(filtered);
}

async function addCar(){
    alert("Shtohet vetem nese ke akses ne API qe lejon POST/PUT");
}

async function deleteCar(){
    alert("Fshirja vetem ne server qe lejon DELETE");
}
