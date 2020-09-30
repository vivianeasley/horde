import * as goblinCards from "../modules/decks/goblins";
import * as zombieCards from "../modules/decks/zombies";
import { updateState } from "./state-manager"
import { shuffle } from 'lodash-es';

export const generateDeck = function generateDeck (event:any) {
    let selectValue = event.target.parentNode.querySelector("select").value;
    const playersLevel = event.target.parentNode.querySelector(".players-level").value;
    const playersNum = event.target.parentNode.querySelector(".players-number").value;

    if (!playersLevel || playersLevel === "" || isNaN(playersLevel)) return;
    if (!playersNum || playersNum === "" || isNaN(playersNum)) return;
    if (!selectValue || selectValue === "") return;

    let cards;
    if (selectValue === "goblin") {
        cards = goblinCards;
    } else if (selectValue === "zombie") {
        cards = zombieCards;
    }  else {
        selectValue = "zombie"
        cards = zombieCards;
    }

    const level = parseInt(playersLevel);
    const numOfPlayers = parseInt(playersNum);
    const token = cards[selectValue+"Token"]();
    const numberOfTokens = 5 + (level*2) + (5 * numOfPlayers);

    updateState((state:any)=>{
        let i = 0;
        while (i < numberOfTokens) {
            state.data.zones.deck.push(token);
            i++;
          }

        let j = 0;
        while (j < (6 + (numOfPlayers + 2))) {
            const spell = cards[selectValue+"CommonSpell"]();
            state.data.zones.deck.push(spell);
            j++;
        }

        if (level > 5) {
            let k = 0;
            while (k < ((level - 5) + numOfPlayers)) {
                const spell = cards[selectValue+"UncommonSpell"]();
                state.data.zones.deck.push(spell);
                k++;
            }
        }

        if (level > 20) {
            let l = 0;
            while (l < ((level - 20) + numOfPlayers)) {
                const spell = cards[selectValue+"RareSpell"]();
                state.data.zones.deck.push(spell);
                l++;
            }
        }

        state.data.zones.deck = shuffle(state.data.zones.deck);
        state.uiData.gameConfigured = true;
    });




}