const result = document.getElementById("result");

window.addEventListener("load", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data = JSON.parse(xhr.responseText);
                console.log(data);
            output = "";

            for(var i in data){

                output += `
                    <div class="user">
                        <h1> ${data[i].name}</h1>
                        <h2> ${data[i].username}</h2>
                        <h3> ${data[i].id}</h3>
                        <h4> ${data[i].email}</h4>
                        <h5> Address: ${data[i].address.zipcode}, ${data[i].address.city}, ${data[i].address.street}, ${data[i].address.suite}</h5>
                    </div>
                `;
            }

            result.innerHTML = output;
        }
    }

    xhr.send();
})