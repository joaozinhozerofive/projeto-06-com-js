//variáveis 
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector ("#btnReset")
 const screen1 = document.querySelector(".screen1")
 const screen2 = document.querySelector(".screen2")
 let randomNumber = Math.round(Math.random() * 10)
 let xAttempts = 1
 
 //eventos 
   btnTry.addEventListener('click', handleTryClick)
   btnReset.addEventListener('click', handleResetClick) 
   //funções callback
   function handleTryClick(event) {
      event.preventDefault()
      
      const inputNumber = document.querySelector ("#inputNumber")
      
      if(Number(inputNumber.value) == randomNumber) {
         screen1.classList.add("hide")
         screen2.classList.remove("hide")
         
         document
         .querySelector(".screen2 h2")
         .innerText = `Acertou em ${xAttempts} tentativas`
      }
      inputNumber.value = ""
      xAttempts++
   }
   
   document.addEventListener('keydown', function(e){
      
      if (e.key == 'Enter' && screen1.classList.contains('hide')) {
         handleResetClick()
      }
   })
   
   function handleResetClick(){
    xAttempts = 1
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
   }

   
   
function toggleScreen() {
      screen1.classList.toggle("hide")
      screen2.classList.toggle("hide")
}


