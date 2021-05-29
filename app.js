
// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyBTVZn4GRmwX2JhpVgKiJ9m_otnpceLmEM",
   authDomain: "unidad4dbd.firebaseapp.com",
   databaseURL: "https://unidad4dbd-default-rtdb.firebaseio.com",
   projectId: "unidad4dbd",
  storageBucket: "unidad4dbd.appspot.com",
 messagingSenderId: "701280075179",
  appId: "1:701280075179:web:58d31966ed1c413029e6ee"
  };
  
 //import 'boxicons'
  

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  var txtUsuario = document.getElementById("Usuario");
  var txtMensaje = document.getElementById("Mensaje");
  var btnEnviar = document.getElementById("btnenviar");
  var chatlista = document.getElementById("chatlista");

  btnEnviar.addEventListener("click", function(){
      var usuario = txtUsuario.value;
      var mensaje = txtMensaje.value;
      var html = "<li>" + usuario + " dice: " + mensaje + "</li>";

      chatlista.innerHTML += html; 

      firebase.database().ref('chat').push({
          user: usuario,
          message: mensaje
      })
  });

  firebase.database().ref('chat').on('value', (snapshot) =>{
      var html1 = '';

      snapshot.forEach(function (e) {
          var elemento = e.val();
          var usuario1 = elemento.user;
          var mensaje1 = elemento.message;
          html1 += "<li>" + usuario1 + " dice: " + mensaje1 + "</li>";
      });

      chatlista.innerHTML = html1;
     
  })

 

