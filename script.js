const darkbtn = document.getElementsByClassName('dark')[0];
darkbtn.addEventListener('click',darkfn);
function darkfn(){
    console.log("clicked dark btn");
    document.body.classList.add('bg-dark')
}
const lightbtn = document.getElementsByClassName('light')[0];
lightbtn.addEventListener('click',lightfn); /** dont put darkfn() */
function lightfn(){
    console.log("clicked light btn");
    document.body.classList.remove('bg-dark')
}