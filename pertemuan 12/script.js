//let soyuz= document.getElementsByClassName("soyuz")
//let key = document.getElementById('key');
//let nama = document.getElementById('nama');
let form = document.getElementById('form');

//function hello(){
  //  alert('helloworld')
//}

//soyuz.addEventListener("click" function(){
//    alert('hello soyuz')
//})

menu.addEventListener('change', function(e){
    e.preventDefault();
    const data = new FormData(e.target)
    feedback.innerHTML `login dengan username <code>${data.get("username")}</code> dikirim`
});















