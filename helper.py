#File used to generate code for various parts of project, e.g. list of cards

def deckgen():
    #deck of cards has 1-10 + J, Q, K, A (joker not included here)
    deck = []
    for i in range(2,15):
        if i>10:
            match i:
                case 14:
                    deck.append("ace_of_clubs")
                    deck.append("ace_of_diamonds")
                    deck.append("ace_of_hearts")
                    deck.append("ace_of_spades")
                case 13:
                    deck.append("jack_of_clubs")
                    deck.append("jack_of_diamonds")
                    deck.append("jack_of_hearts")
                    deck.append("jack_of_spades")
                case 12:
                    deck.append("queen_of_clubs")
                    deck.append("queen_of_diamonds")
                    deck.append("queen_of_hearts")
                    deck.append("queen_of_spades")
                case 11:
                    deck.append("king_of_clubs")
                    deck.append("king_of_diamonds")
                    deck.append("king_of_hearts")
                    deck.append("king_of_spades")
        else:
            deck.append(str(i)+"_of_clubs")
            deck.append(str(i)+"_of_diamonds")
            deck.append(str(i)+"_of_hearts")
            deck.append(str(i)+"_of_spades")
    return deck

# print(deckgen())
