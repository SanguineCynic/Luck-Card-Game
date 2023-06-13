window.onload = function(){

  var drawbtn = document.getElementsByTagName("input")[0]
  var reset = document.getElementsByTagName("input")[1]
  var handarea1 = document.getElementById("hand1")
  var handarea2 = document.getElementById("hand2")
  var score1 = document.getElementById("score1")
  var score2 = document.getElementById("score2")
  var current1 = document.getElementById("current1")
  var current2 = document.getElementById("current2")

  var points1 = 0
  var points2 = 0

  var card_template = ['2_of_clubs', '2_of_diamonds', '2_of_hearts', '2_of_spades', '3_of_clubs', '3_of_diamonds', '3_of_hearts', '3_of_spades', '4_of_clubs', '4_of_diamonds', '4_of_hearts', '4_of_spades', '5_of_clubs', '5_of_diamonds', '5_of_hearts', '5_of_spades', '6_of_clubs', '6_of_diamonds', '6_of_hearts', '6_of_spades', '7_of_clubs', '7_of_diamonds', '7_of_hearts', '7_of_spades', '8_of_clubs', '8_of_diamonds', '8_of_hearts', '8_of_spades', '9_of_clubs', '9_of_diamonds', '9_of_hearts', '9_of_spades', '10_of_clubs', '10_of_diamonds', '10_of_hearts', '10_of_spades', 'king_of_clubs', 'king_of_diamonds', 'king_of_hearts', 'king_of_spades', 'queen_of_clubs', 'queen_of_diamonds', 'queen_of_hearts', 'queen_of_spades', 'jack_of_clubs', 'jack_of_diamonds', 'jack_of_hearts', 'jack_of_spades', 'ace_of_clubs', 'ace_of_diamonds', 'ace_of_hearts', 'ace_of_spades']

  var hand1 = []
  var hand2 = []
  var current_deck = []

  // This is so the deck starts off as full, but is capable of being reset back to a default
  for (let i = 0; i < card_template.length; i++) {
  	current_deck.push(card_template[i])
  }

  drawbtn.addEventListener("click",function(){

    if (current_deck.length > 0){
      //Generate number between 1 and 52
      let randN = Math.random()
      let drawIndex = Math.floor(randN * current_deck.length)

      //Add card to hand1
      hand1.push(current_deck[drawIndex])
      let addCard = document.createElement("img")
      addCard.src = "cards/PNG-cards-1.3/" + current_deck[drawIndex] +".png"
      handarea1.appendChild(addCard)
      current1.innerHTML = "<img src='" + addCard.src + "'>"

      //Points system
      let cardval1 = current_deck[drawIndex].split("_")[0]
      switch(cardval1){
        case "king":
            cardval1 = 13
            break
        case "queen":
            cardval1 = 12
            break
        case "jack":
            cardval1 = 11
            break
        case "ace":
            cardval1 = 14
            break
      }


      //Prevent duplicates once drawn
      current_deck.splice(current_deck.indexOf(current_deck[drawIndex]),1)

      //Generate number between 1 and 52
      randN = Math.random()
      drawIndex = Math.floor(randN * current_deck.length)

      //Add current card to hand2
      hand2.push(current_deck[drawIndex])
      addCard = document.createElement("img")
      addCard.src = "cards/PNG-cards-1.3/" + current_deck[drawIndex] +".png"
      handarea2.appendChild(addCard)
      current2.innerHTML = "<img src='" + addCard.src + "'>"

      //Points system
      let cardval2 = current_deck[drawIndex].split("_")[0]
      switch(cardval2){
        case "king":
            cardval2 = 13
            break
        case "queen":
            cardval2 = 12
            break
        case "jack":
            cardval2 = 11
            break
        case "ace":
            cardval2 = 14
            break
      }

      //Prevent duplicates once drawn
      current_deck.splice(current_deck.indexOf(current_deck[drawIndex]),1)

      //Update scores
      if (cardval1 > cardval2){
        points1 += parseInt(cardval1)
        score1.innerHTML = "<h4>Points: " + points1 + "</h4>"
      }
      else if (cardval2 > cardval1){
        points2 += parseInt(cardval2)
        score2.innerHTML = "<h4>Points: " + points2 + "</h4>"
      }
    }


    else{
      if (points1 > points2){
        score1.innerHTML += " Player 1 wins!"
      }
      else if (points2 > points1){
        score2.innerHTML += " Player 2 wins!"
      }
      else{
        score1.innerHTML += " It's a tie!"
        score2.innerHTML += " It's a tie!"
      }
    }
  })

  reset.addEventListener("click",function(){
    hand1 = []
    hand2 = []

    current_deck = []
    for (let i = 0; i < card_template.length; i++) {
    	current_deck.push(card_template[i])
    }

    handarea1.innerHTML = ''
    handarea2.innerHTML = ''

    score1.innerHTML = 'Points: 0'
    score2.innerHTML = "Points: 0"
    points1 = 0
    points2 = 0
  })

}
