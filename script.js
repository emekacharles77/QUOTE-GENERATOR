const  quote=document.querySelector(".quote")
const name=document.querySelector(".name")
const newquote=document.getElementById("new-quote")


const quotes=[
    {
        quote:"That farewell kiss which resembles greeting, that last glance of  love which becomes the sharpest pang of sorrow.",
        name:" George Ellot"
    },
    {
        quote:"Jesus is your Redeemer! He is turning your mistakes around. You dont have to live in regret another day of your life. Your past is over! Your great future begins NOW!",
        name:"John Moan"
    },
    {
        quote:"Family and friendships are two of the greatest facilitators of happiness.",
        name:"John C Maxwell"
    },
    {
        quote:"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
        name:"Mariam West"
    },
    {
        quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
        name:"Charles Lewis"
    },
    {
        quote:"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        name:"Micheal Joel"
    },
    {
        quote:"The road to success and the road to failure are almost exactly the same.",
        name:"Williams Smith"
    },
];

let quotesIndex=0;

newquote.addEventListener("click", ()=>{
    if(quotesIndex < quotes.length-1){

        quotesIndex++;
        quote.innerHTML=quotes[quotesIndex].quote;
        name.innerHTML=quotes[quotesIndex].name 
    }
    else{
        quotesIndex=0;
    }
    
})

// setInterval(()=>{
//     let random=Math.floor(Math.random()*quotes.length)
//     quote.innerHTML=quotes[random].quote;
//     name.innerHTML=quotes[random].name;
// }, 5000)