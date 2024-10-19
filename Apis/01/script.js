
// let myPromis =  new Promise ((resolve,reject)=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resData)=>resData.json())
//     .then((jsonData)=>resolve(jsonData))
//     .catch((err)=>reject(err))
// })
// let userdata =document.getElementById("profiles")
 

// async function user() {
//     try{
//         let usetDetails = await myPromis
//         console.log(usetDetails)

//         usetDetails.map((obj)=>{
//         //    console.log(obj)
//             let name = document.createElement("h1")
//             let username = document.createElement("h2")
//             let phone = document.createElement("h4")
//             let website = document.createElement("p")
//             let address = document.createElement("li")
//             let zipcode = document.createElement("h6")
           
//             // titlename.innerHTML=element.title;
//             // paraname.innerHTML=element.body;
//             // container.appendChild(titlename)
//             // container.appendChild(paraname)

//             name.innerHTML=obj.name
//             name.innerHTML=obj.username
//             name.innerHTML=obj.phone
//             name.innerHTML=obj.website
//             name.innerHTML=obj.address
//             name.innerHTML=obj.zipcode

//             userdata.appendChild(name)
//             userdata.appendChild(username)
//             userdata.appendChild(phone)
//             userdata.appendChild(website)
//             userdata.appendChild(address)
//             userdata.appendChild(zipcode)
           

//         })
//     }
//     catch(err){
//         console.log(err)
//     }
    
    
// }
// user()



// =========================================================================================>


    let myPromise = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((resData) => resData.json())
          .then((jsonData) => resolve(jsonData))
          .catch((err) => reject(err));
      });
      
      let userdata = document.getElementById('profiles'); // Ensure this is the correct ID for your container
      
      async function user() {
        try {
          let userDetails = await myPromise;
          console.log(userDetails);
      
          userDetails.map((obj) => {
            // Create elements for each user property
            let name = document.createElement('h1');
            let username = document.createElement('h2');
            let phone = document.createElement('h4');
            let website = document.createElement('p');
            let address = document.createElement('li');
            let zipcode = document.createElement('h6');
      
            // Set content for elements
            name.innerHTML = `Name: ${obj.name}`;
            username.innerHTML = `Username: ${obj.username}`;
            phone.innerHTML = `Phone: ${obj.phone}`;
            website.innerHTML = `Website: ${obj.website}`;
            
            // Access individual address properties
            address.innerHTML = `Address: ${obj.address.street}, ${obj.address.city}`;
            zipcode.innerHTML = `Zipcode: ${obj.address.zipcode}`;
      
            // Append elements to the main container
            userdata.appendChild(name);
            userdata.appendChild(username);
            userdata.appendChild(phone);
            userdata.appendChild(website);
            userdata.appendChild(address);
            userdata.appendChild(zipcode);
          });
        } catch (err) {
          console.log(err);
        }
      }
      
      user();
      