

const verClave=document.getElementById("viewPassword")
const inputPass=document.getElementById("pass")
const inputUser=document.getElementById("user")
const loginButon=document.getElementById("logBoton")

//con esto podemos ver la clave que se a puesto
verClave.addEventListener('click',()=>{
    const actualType=inputPass.getAttribute('type')
    if(actualType=='password'){
        inputPass.setAttribute('type','text')
    }else{
        inputPass.setAttribute('type','password') 
    }
})

const users=[
    {
        userName:"adm1",
        password:"Clave123"
    },
    {
        userName:"adm2",
        password:"Clave12345"  
    }
]


loginButon.addEventListener('click',(e)=>{
    //al dar click en el boton no envía el formulario
    e.preventDefault()

    //validacion del usurio y password
    const userValue=inputUser.value
    const passValue=inputPass.value
    const user= users.find((user)=>user.userName==userValue && user.password==passValue)
    if(user){
        alert("Has iniciado sesión.. Bienvenido...!!")
        localStorage.setItem('isLogged', true)
        window.location.href="../HTML/buscador.html"
    }else{
        document.getElementById('respuesta').innerHTML="Datos no coinciden volver a intentar";
        inputUser.value = ''
        inputPass.value = ''
    }
})
if(localStorage.getItem('isLogged')){
    const formlogin=document.getElementById('loginForm')
    formlogin.innerHTML=`<button id="logout" style="font-weight: bold; font-size: 1rem;">Logout<button>
    <a href="../HTML/buscador.html" style="text-decoration: none; color:rgb(0, 0, 255); font-size: 1rem; font-weight: bold;">
    <i class="bi bi-arrow-left" ></i> Back</a> `
  const botonlogout=document.getElementById('logout')
  botonlogout.addEventListener('click',()=>{
    localStorage.removeItem('isLogged')
    window.location.href="../HTML/login.html"
  })
}