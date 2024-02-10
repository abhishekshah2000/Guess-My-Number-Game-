const randnum = parseInt(Math.random()*10+1); //use parseint for getting integer value not in decimal 
console.log(randnum)
const btn = document.getElementsByClassName('btn')[0];
const form =document.getElementsByClassName("border")[0]
const notice = document.getElementById('notice');
const score = document.getElementsByClassName('score')[0];
var count =0;

btn.addEventListener('click', function(e){
    const num = document.getElementById('num').value;
    e.preventDefault();
    // console.log(num)
    if(randnum > num){
        // console.log("try bigger number")
        notice.innerText= "Try Bigger Number"
        form.style.borderColor= "red"
        count++
        score.innerText=count;
    }else if(randnum == num){
        // console.log("congrats")
        notice.innerText= "Congrats 🎉"
        form.style.borderColor= "green"
        score.innerText=count;
    }else{
        // console.log("try smaller number")
        notice.innerText= "Try Smaller Number"
        form.style.borderColor= "red"
        count++
        score.innerText=count;
    }
    form.reset()
    
})