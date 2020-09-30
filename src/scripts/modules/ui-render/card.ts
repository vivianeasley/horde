import { html } from 'lighterhtml';
import * as cardEffects from '../data-methods/card-data-methods'
import { dragStart } from "../ui-methods/drag-methods"

// {
//     incrementCounters,
//     decrementCounters,
//     incrementBuffs,
//     decrementBuffs,
//     incrementBuffsPerm,
//     decrementBuffsPerm,
//     toggleCantAttack,
//     toggleCantUntap,
//     toggleTap,
//     toggleAttack,
//     addColorMarker,
//     setBlocked
// }

export const card = function card (cardData:any, index:number, zone:string, isVisible:boolean, canBeBlocked:boolean) {

    function setToBlocked () {
        if (canBeBlocked === false) return;
        cardEffects.setBlocked(index);
    }

    function triggerCardEffect (event:any, index:number) {
        const selectValue = event.target.parentNode.querySelector("select").value;
        if (!selectValue || selectValue === "") return;
        const selectValueArr = selectValue.split("--");
        if (selectValueArr.length > 1) {
            cardEffects[selectValueArr[0]](index, selectValueArr[1]);
        } else {
            cardEffects[selectValue](index);
        }

    }

    function moveCard (event:any, index:number) {
        const selectValue = event.target.parentNode.querySelector("select").value;
        if (!selectValue || selectValue === "") return;
        if (selectValue === "topDeck") return;

        cardEffects.moveCardTo(index, zone, selectValue)
    }

    function shieldMarker () {
        if (canBeBlocked === false) return ``;
        if (cardData.isBlocked) {
            return html`<img class="card-shield-image" src="./images/shield.svg" alt="${cardData.name + "is blocked"}">`
        }
        return html`<img class="card-shield-image" src="./images/shield-disabled.svg" alt="${cardData.name + "is not blocked"}">`
    }

    return html`
        <div class="${cardData.isTapped ? "zone-card tapped" : "zone-card"}" onclick=${setToBlocked} data-id="${zone +"--"+ index}" ondragstart=${(e)=>{dragStart(e)}} draggable="true" >
            ${
                isVisible?
                html`
                <img class="card-image" src="${"./images/cards/art/"+cardData.image}" alt="${cardData.name}">
                <img class="card-border" src="${"./images/borders/"+cardData.color+"/"+cardData.border}" alt="${cardData.name}">
                ${cardData.isAttacking === true ? shieldMarker() : ``}
                <div class="card-name">${cardData.name}</div>
                <div class="card-type">${cardData.subType? cardData.type + " - " + cardData.subType : cardData.type}</div>
                ${cardData.rules ? html`<div class="card-rules">${cardData.rules}</div>` : ``}
                ${cardData.flavor ? html`<div class="card-rules italic">${cardData.flavor}</div>` : ``}
                ${
                    cardData.power && cardData.toughness ?
                    html`
                    <div class="card-power-toughness">
                        ${cardData.power + cardData.counters + cardData.buffs + cardData.buffsPerm} / ${cardData.toughness + cardData.counters + cardData.buffs+ cardData.buffsPerm}
                    </div>
                    `:``
                }

                ${cardData.isAttacking ? html`<div class="is-attacking"></div>` : ``}
                ${cardData.cantAttack ? html`<img class="card-cant-marker attack" src="./images/cant-attack.svg" alt="This creature can't attack"  title="This creature can't attack">` : ``}
                ${cardData.cantUntap ? html`<img class="card-cant-marker untap" src="./images/cant-untap.svg" alt="This creature can't untap"  title="This creature can't untap">` : ``}

                <div class="card-pt-mods-wrapper">
                    ${
                        cardData.counters !== 0 ?
                        html`
                        <div class="card-pt-mods top">&nbsp;Counters:
                            ${cardData.counters > 0 ? Math.abs(cardData.counters) + "x +1/+1" : ""}
                            ${cardData.counters < 0 ? Math.abs(cardData.counters) + "x -1/-1" : ""}
                            &nbsp;
                        </div>
                        `:``
                    }
                    ${
                        cardData.buffs !== 0 ?
                        html`
                        <div class="card-pt-mods middle">&nbsp;Temp Buffs:
                            ${cardData.buffs > 0 ? Math.abs(cardData.buffs) + "x +1/+1" : ""}
                            ${cardData.buffs < 0 ? Math.abs(cardData.buffs) + "x -1/-1" : ""}
                            &nbsp;
                        </div>
                        `:``
                    }
                    ${
                        cardData.buffsPerm !== 0 ?
                        html`
                        <div class="card-pt-mods bottom">&nbsp;Buffs:
                            ${cardData.buffsPerm > 0 ? Math.abs(cardData.buffsPerm) + "x +1/+1" : ""}
                            ${cardData.buffsPerm < 0 ? Math.abs(cardData.buffsPerm) + "x -1/-1" : ""}
                            &nbsp;
                        </div>
                        `:``
                    }
                    ${
                        cardData.markers.length > 0 ?
                        html`
                            <div class="card-pt-mods bottom">
                                ${cardData.markers.map((color, i) => html`
                                    <div class="${"card-marker-button "+color}"></div>
                                `)}
                        </div>
                        `:``
                    }
                </div>

            <div class="card-controls-wrapper">
                <div class="spacer"></div>
                    ${ (zone && zone === "battlefield") ?
                        html`
                        <div>
                        Card effects: <button class="card-effects-button" onclick=${(e)=>{triggerCardEffect(e, index)}}>Apply</button>
                            <select class="card-select" name="card-effects" id="card-effects">
                                <option value="incrementCounters">+1/+1 counter</option>
                                <option value="decrementCounters">-1/-1 counter</option>
                                <option value="incrementBuffs">+1/+1 EOT buff</option>
                                <option value="decrementBuffs">-1/-1 EOT buff</option>
                                <option value="incrementBuffsPerm">+1/+1 Perm. buff</option>
                                <option value="decrementBuffsPerm">-1/-1 Perm. buff</option>
                                <option value="toggleCantAttack">Toggle no attack</option>
                                <option value="toggleCantUntap">Toggle no untap</option>
                                <option value="toggleTap">Toggle Tap</option>
                                <option value="toggleAttack">Toggle Attack</option>
                                <option value="addColorMarker--white" style="color:grey">${cardData.markers.includes("white") ? "-" : "+"} White counter</option>
                                <option value="addColorMarker--blue" style="color:blue">${cardData.markers.includes("blue") ? "-" : "+"} Blue counter</option>
                                <option value="addColorMarker--black" style="color:black">${cardData.markers.includes("black") ? "-" : "+"} Black counter</option>
                                <option value="addColorMarker--red" style="color:red">${cardData.markers.includes("red") ? "-" : "+"} Red counter</option>
                                <option value="addColorMarker--green" style="color:green">${cardData.markers.includes("green") ? "-" : "+"} Green counter</option>
                            </select>
                        </div>
                        <hr>
                        `:
                        html`<div class="spacer"></div><div class="spacer"></div><div class="spacer"></div>`
                    }
                    <div>
                    Move to: <button class="card-effects-button" onclick=${(e)=>{moveCard(e, index)}}>Apply</button>
                        <select class="card-select" name="card-movement" id="card-movement">
                            <option value="graveyard">Graveyard</option>
                            <option value="hand">Hand</option>
                            <option value="battlefield">battlefield</option>
                            <option value="exile">exile</option>
                            <option value="deck">Bottom Deck</option>
                            <option value="topDeck">Top Deck</option>
                        </select>
                    </div>
                </div>
                `:
                html`<img class="face-down-card" src="./images/cards/cardback.jpg" alt="A hidden facedown card">`

            }


        </div>
        `
}