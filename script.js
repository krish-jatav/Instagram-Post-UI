 var img = document.querySelector('.img')
 var icon = document.querySelector('#heart')
 var btn = document.querySelector('button')
 var like = document.querySelector('#like')

 img.addEventListener('dblclick', function() {
     icon.style.transform = 'translate(-50%,-50%)scale(1)'
     icon.style.color = 'white'
     like.style.color = 'red'
     setTimeout(function() {
         icon.style.transform = 'translate(-50%,-50%)scale(0)'

     }, 1000)
 })
 var flag = false;
 btn.addEventListener('click', function() {

     btn.innerHTML = `Following`
     btn.style.backgroundColor = 'black'
     btn.style.color = 'white'
     setTimeout(function() {

         if (flag == false) {
             btn.innerHTML = `Following`
             btn.style.color = 'white'
             flag = true
         } else {
             btn.innerHTML = `Follow`
             btn.style.color = 'white'
             flag = false;



         }
     }, 1000)


 })