var monformulaire = document.getElementById('form');
monformulaire.addEventListener('submit', function(){
    var messageAenvoyer = document.getElementById("message").value;
    var numeroDETelephone = document.getElementById("contact").value;

    var message = encodeURI(messageAenvoyer);
    var numeroTel = encodeURI(numeroDETelephone);

    const url = "https://api.twilio.com/2010-04-01/Accounts/ACa39d69fc5c81c8ede71e2b582e0fcee5/Messages.json";

    var monEntete = new Headers({
        "content-type" : "application/x-www-form-urlencoded",
        "authorization":  "Basic "+btoa("ACa39d69fc5c81c8ede71e2b582e0fcee5:d3d3cf041d3feee71dec37c5d4dffb77"),

    })


    var monCorps = "To="+numeroTel+"&From=+12819424218&Body="+message;


    var mesDonnees = {
        method : "POST",
        headers : monEntete,
        body : monCorps
    }
    fetch(url,mesDonnees)

    // const url = "https://clicksend.p.rapidapi.com/sms/send";
    // const url = "https://dashboard.clicksend.com/#/account/amFja2ZyYW52QGdtYWlsLmNvbTpBbm9sZGV5dmVzQDE5OTM=/Messages.json";
   
    // const auth = "amFja2ZyYW52QGdtYWlsLmNvbTpBbm9sZGV5dmVzQDE5OTM=";
    

    // var myHeader = new Headers({
    //     "content-type": "application/json",
	// 	"authorization": "Basic " + btoa(auth),
	// 	"x-rapidapi-key": "b568119bbamsh3cc7a37f7194aeap1727e6jsn459e195d4fb6",
	// 	"x-rapidapi-host": "clicksend.p.rapidapi.com"
    // });

    // const mybody = {
    //     "messages": [
    //         {
    //             "source": "mashape",
    //             "from": numeroTel,
    //             "body": message,
    //             "to": "+61411111111",
    //             "schedule": "1452244637",
    //             "custom_string": "this is a test"
    //         }
    //     ]
    // }
    // var mybody = "To=+61411111111&From=%"+numeroTel+"&Body="+message;
    //  const init = {
    //      method : "POST",
    //      headers : myHeader,
    //      body : mybody
    //  }
   
    // fetch(url,mesDonnees)
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // });
    
})