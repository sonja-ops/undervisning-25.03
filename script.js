async function getData() {
    return "Data er hentet";
}

async function dataRecived() {
    const data = await getData();
    console.log(data);
}

dataRecived();
setTimeout(dataRecived, 3000);

async function hentData() {
    return "Data er mottat";
}

async function dataMottat() {
    const data = await hentData();
    console.log(data);
}

setTimeout(dataMottat, 5000);

async function displayUser() {
    try {
        const user = await new Promise((resolve) => {
    
            setTimeout(function () {
                resolve("Brukerdata er lastet inn")
            }, 3000);
        });
        console.log(user);

        const viewUser = document.createElement("h1");
        viewUser.textContent = user;
        document.body.prepend(viewUser);
    } catch(error) {
        console.error("Error lasting av brukerdata:" + error);
    }
}

displayUser();

async function visBruker() {
    try{
        const bruker = await new Promise((utfore) => {
            brukernavn = "sonja"
            setTimeout(function() {
                utfore("Data er lastet inn")
            }, 5000);
        });
    } catch(error) {
        console.error("Error lasting av data:" + error);
    }
}

visBruker();