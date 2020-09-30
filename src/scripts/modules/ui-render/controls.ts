import { html } from 'lighterhtml';
import {
    shuffleDeck,
    toggleDeckView,
    toggleHandView,
    applyDamageToHorde,
    getRandomNum,
    moveCardsTo,
    cardEffects
} from "../data-methods/controls-methods"

export const controls = function controls (state:any) {
    return html`
        <div class="controls-wrapper">
            <div class="control">Damage horde: <input type="text" class="damage-input"> <button class="controls-button" onclick=${(e)=>{applyDamageToHorde(e)}}>&#9876;</button> | <button class="controls-button" onclick=${shuffleDeck}> Shuffle Deck </button></div>
            <div class="control"> 🎲 Roll Die:
                <select name="" id="">
                    <option value="2">2 sided</option>
                    <option value="3">3 sided</option>
                    <option value="4">4 sided</option>
                    <option value="5">5 sided</option>
                    <option value="6">6 sided</option>
                    <option value="7">7 sided</option>
                    <option value="8">8 sided</option>
                    <option value="9">9 sided</option>
                    <option value="10">10 sided</option>
                    <option value="11">11 sided</option>
                    <option value="12">12 sided</option>
                    <option value="13">13 sided</option>
                    <option value="14">14 sided</option>
                    <option value="15">15 sided</option>
                    <option value="16">16 sided</option>
                    <option value="17">17 sided</option>
                    <option value="18">18 sided</option>
                    <option value="19">19 sided</option>
                    <option value="20">20 sided</option>
                </select> <button onclick=${(e)=>{getRandomNum(e)}}> Roll </button> Result = ${state.uiData.randomNumber}
            </div>
            <div class="control">Mass card effects:
                <select name="mass-card-effects" id="mass-card-effects">
                    <option value="incrementCounters">+1/+1 counter</option>
                    <option value="decrementCounters">-1/-1 counter</option>
                    <option value="incrementBuffs">+1/+1 EOT buff</option>
                    <option value="decrementBuffs">-1/-1 EOT buff</option>
                    <option value="incrementBuffsPerm">+1/+1 Perm. buff</option>
                    <option value="decrementBuffsPerm">-1/-1 Perm. buff</option>
                    <option value="toggleCantAttack">Can't attack</option>
                    <option value="toggleCantUntap">Can't untap</option>
                    <option value="setTapped">Tap</option>
                    <option value="setUntapped">Untap</option>
                    <option value="setAttacking">Attack</option>
                    <option value="setNotAttacking">Stop attacking</option>
                    <option value="white" style="color:grey">+ White counter</option>
                    <option value="blue" style="color:blue">+ Blue counter</option>
                    <option value="black" style="color:black">+ Black counter</option>
                    <option value="red" style="color:red">+ Red counter</option>
                    <option value="green" style="color:green">+ Green counter</option>
                </select><button onclick=${(e)=>{cardEffects(e)}}>Apply</button>
            </div>
            <div class="control">Move all ${state.uiData.currentZone} to:
                <select name="zone-change" id="zone-change">
                    ${
                    ["graveyard", "hand","exile", "battlefield", "deck", "topDeck"].map((zone, i) => html`
                        <option value=${zone} >${zone}</option>`)
                    }
                </select><button onclick=${(e)=>{moveCardsTo(e, state.uiData.currentZone)}}>Apply</button>
            </div>
            <button onclick=${toggleDeckView}>${state.uiData.isHordeDeckRevealed ? "Hide Horde Deck" : "Reveal Horde Deck"}</button> <button onclick=${toggleHandView}>${state.uiData.isHordeHandRevealed ? "Hide Horde Hand" : "Reveal Horde Hand"}</button>
        </div>
    `
}