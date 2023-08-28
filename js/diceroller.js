function diceRoller()
{
    const diceImg = document.getElementById('diceRoll');
  
  diceImg.classList.add("roller-img")
  setTimeout(function addclass(){
    diceImg.classList.remove("roller-img")
  },500)
   setTimeout(function runjs(){
    const randomNumber = Math.floor((Math.random())*(6-1)+1);
    const diceImg = document.getElementById('diceRoll');
    switch(randomNumber)
    {
        case 1:
        {
            diceImg.src = "./Images/dice1.png";
            break
        }
    
        case 2:
        {
            diceImg.src = "./Images/dice2.png";
            break
        }
        case 3:
        {
            diceImg.src = "./Images/dice3.png";
            break
        }
        case 4:
        {
            diceImg.src = "./Images/dice4.png";
            break
        }
        case 5:
        {
            diceImg.src = "./Images/dice5.png";
            break
        }
            case 6:
        {
            diceImg.src = "./Images/dice6.png";
            break
        }
    }
   },500)

   
}