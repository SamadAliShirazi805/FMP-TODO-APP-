
  const firebaseConfig = {
    apiKey: "AIzaSyBSwwqdXQv7nHk_TEPqDXT2LNAPnkTmc1E",
    authDomain: "todo-samad.firebaseapp.com",
    databaseURL: "https://todo-samad-default-rtdb.firebaseio.com",
    projectId: "todo-samad",
    storageBucket: "todo-samad.appspot.com",
    messagingSenderId: "107013497632",
    appId: "1:107013497632:web:d5e781c0fa90c531d7ad45"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  ////////////////////////////// todoapp ///////////////////////////////////
  
  function addTodo() {
    var inp = document.getElementById('todoInp').value.trim();
    console.log(inp);
  
    if (inp) {
      var list = document.getElementById('list');
      list.innerHTML += `
        <div class="items">
          ${inp}
          <div>
            <button class="editbtn" onclick="editItem(this)">Edit</button>
            <button onclick="del(this)" class="delBtn">Delete</button>
          </div>
        </div>
      `;
      document.getElementById('todoInp').value = "";
    } else {
      alert("Please enter a valid todo item.");
    }
  }
  
  function delAll() {
    var list = document.getElementById('list');
    list.innerHTML = "";
  }
  
  function editItem(e) {
    var input = prompt("Enter updated value...");
    if (input) {
      e.parentNode.parentNode.firstChild.nodeValue = input.trim();
      console.log("new value: " + input);
    }
  }
  
  function del(e) {
    e.parentNode.parentNode.remove();
  }
  
  //////////////////////////////////////// logout /////////////////////////////
  
  function logOut() {
    window.location = "login.html";
  }
  