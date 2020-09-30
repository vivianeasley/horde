import { shuffle } from 'lodash-es'
import { updateState } from "../state-manager"
import * as massCardMethods from "../data-methods/mass-card-effects"

export const shuffleDeck = function shuffleDeck () {
    updateState((state:any)=>{
        state.data.zones.deck = shuffle(state.data.zones.deck);
    });
}

export const toggleDeckView = function toggleDeckView () {
    updateState((state:any)=>{
        state.uiData.isHordeDeckRevealed = !state.uiData.isHordeDeckRevealed;
    });

}

export const toggleHandView = function toggleHandView () {
    updateState((state:any)=>{
        state.uiData.isHordeHandRevealed = !state.uiData.isHordeHandRevealed;
    });

}

export const applyDamageToHorde = function applyDamageToHorde (event:any) {
    const inputValue = event.target.parentNode.querySelector("input").value;
    if (!inputValue || inputValue === "" || isNaN(inputValue)) return;
    const damage = parseInt(inputValue);
    updateState((state:any)=>{
        if (state.data.zones.deck.length < damage) {
            state.uiData.playersWin = true;
            return;
        }


        for (let index = 0; index < damage; index++) {
            state.data.zones.graveyard.push(state.data.zones.deck[index]);
            if (state.data.zones.deck[index+1] === undefined) {
                state.data.zones.deck.splice(0, index+1);
                return;
            }
        }
        state.data.zones.deck.splice(0, damage);
    });

}

export const getRandomNum = function getRandomNum (event) {
    const inputValue = event.target.parentNode.querySelector("select").value;
    if (!inputValue || inputValue === "" || isNaN(inputValue)) return;
    const max = parseInt(inputValue);
    updateState((state:any)=>{
        state.uiData.randomNumber = (Math.floor(Math.random() * max) + 1);
    });


}

export const moveCardsTo = function moveCardsTo (event:any, currentZone:string) {
    const inputValue = event.target.parentNode.querySelector("select").value;
    if (!currentZone || !inputValue || inputValue === "" || currentZone === inputValue) return;
    function resetCard (state:any, index:number) {
        if (currentZone !== "battlefield") return;
        state.data.zones.battlefield[index].isTapped = false;
        state.data.zones.battlefield[index].isAttacking = false;
        state.data.zones.battlefield[index].isBlocked = false;
        state.data.zones.battlefield[index].isPermanent = true;
        state.data.zones.battlefield[index].counters = 0;
        state.data.zones.battlefield[index].buffs = 0;
        state.data.zones.battlefield[index].buffsPerm = 0;
        state.data.zones.battlefield[index].markers = [];
        state.data.zones.battlefield[index].cantAttack = false;
        state.data.zones.battlefield[index].cantUntap = false;
    }
    updateState((state:any)=>{
        if (inputValue === "topDeck") {
            let topDeckCardsArr = [];
            for (let index = 0; index < state.data.zones[currentZone].length; index++) {
                topDeckCardsArr.push(state.data.zones[currentZone][index]);
                resetCard(state, index)
                if (state.data.zones[currentZone][index+1] === undefined) break;
            }
            state.data.zones.deck = [...topDeckCardsArr, ...state.data.zones.deck];
            state.data.zones[currentZone] = [];
        } else {
            for (let index = 0; index < state.data.zones[currentZone].length; index++) {
                state.data.zones[inputValue].push(state.data.zones[currentZone][index]);
                resetCard(state, index);
                state.data.zones[currentZone].splice(index, 1)
                index--;
            }
        }
    });
}

export const cardEffects = function cardEffects (event:any) {
    const inputValue = event.target.parentNode.querySelector("select").value;
    if (!inputValue || inputValue === "") return;
    if (["white", "blue", "black", "red", "green"].includes(inputValue)) {
        massCardMethods.addColorMarker(inputValue);
        return;
    }
    massCardMethods[inputValue]();

}