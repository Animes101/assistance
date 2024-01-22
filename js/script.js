
//FAQ
const question=document.querySelector('#questions');
const sendBtn=document.querySelector('#send');
const answer=document.querySelector('#answer')

//QUESTIONS1
var q1=document.querySelector('#qui1');
q1.addEventListener('click',function(e){
    e.preventDefault();

    console.log(q1.value);

    if(q1.value==='What is your name ?'){
        q1M='my name is animika barman what your name';
    }

    var aksMessage= new SpeechSynthesisUtterance(q1M);
    window.speechSynthesis.speak(aksMessage);
})




//ask-message area

var askmessage=document.querySelector('#askmessage');
askmessage.addEventListener('mouseover',function(){

       // var welComeMessage='Hello ! I am assistant of Animesh Barman My name is Anamika Burman How can I help you? Feel free to ask me if you have any questions about Animesh ,I will always try to answer questions correctly'

        var aksMessage= new SpeechSynthesisUtterance(welComeMessage);
        window.speechSynthesis.speak(aksMessage);

})




sendBtn.addEventListener('click',function(e){
    e.preventDefault();
    let qus=question.value.toLowerCase();
    let ans='';

    if(qus==='hello'){
        ans='hi my name is animika barman,whats your name ? how can I help you'
        question.value='';
    }else if(qus==='hi'){
        ans='hello how are you ?';
        question.value=''

    }else if(qus==='i love you'){
        ans='i love you too , thank you';
        question.value='';
    }else if(qus===''){
        ans='plase enter your  qustions'
    }
    else{
        ans='I am not understand please ask again';
        question.value='';
    }
    answer.innerHTML=ans;

    var speekAnswer= new SpeechSynthesisUtterance(ans);
    window.speechSynthesis.speak(speekAnswer);


})




