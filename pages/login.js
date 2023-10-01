const container=document.getElementById('container')
const signIn=document.getElementById('signIn-updated')
const signUp=document.getElementById('signup-updated')

signUp.addEventListener('click',function () {
    container.classList.add("right-active")
    console.log("added");
})

signIn.addEventListener('click',function () {
    container.classList.remove("right-active")
    console.log("removed");
})