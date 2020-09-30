import { render, html } from 'lighterhtml';
import { zonePile } from "./zone-pile"
import { zoneCards } from "../ui-render/zone-cards"
import { zoneStack } from "../ui-render/zone-stack"
import { phases } from "../ui-render/phases"
import { controls } from "../ui-render/controls"
import { configureGame } from "../ui-render/game-configure"
import { winGame } from "../ui-render/players-win"

const main = document.querySelector("main");

export function renderDOM (state) {
    if (state.uiData.playersWin) {
        render(main, html`
            ${winGame(state)}
        `);
    } else if (state.uiData.gameConfigured) {
        render(main, html`
            ${phases(state)}
            ${controls(state)}
            ${zonePile(state, "graveyard")}
            ${zonePile(state, "battlefield")}
            ${zonePile(state, "deck")}
            ${zonePile(state, "hand")}
            ${zonePile(state, "exile")}
            ${zoneStack(state)}
            ${zoneCards(state)}
        `);
    } else {
        render(main, html`
            ${configureGame(state)}
        `);
    }


}






// <div class="container first-names" ondrop=${(e)=>{e.preventDefault();}} ondragover=${(e)=>{e.preventDefault()}}>
// ${
//     state.uiData.firstName.map((name, i) => html`
//     <div onclick=${(e)=>{
//         state.uiData.firstName = [];
//         state.uiData.lastName = ["Easley", "Robert"];
//         const targetNode = document.querySelector(".last-names");
//         moveElement(e.target, targetNode, 200, ()=>{return renderDOM(state)})
//     }} data-id=${i} ondragstart=${(e)=>{dragStart(e)}} ondragend=${(e)=>{dragEnd(e)}} draggable="true" id=${name}>${name}</div>
//     `)
// }

// </div>
// <div class="container last-names" ondrop=${(e)=>{e.preventDefault();}} ondragover=${(e)=>{e.preventDefault()}}>
// ${
//     state.uiData.lastName.map((name, i) => html`
//     <div data-id=${i} ondragstart=${(e)=>{dragStart(e)}} ondragend=${(e)=>{dragEnd(e)}} draggable="true" id=${name}>${name}</div>
//     `)
// }
// </div>
// <button class="button">Test</button>







// const crewCards = document.querySelector(".crew-cards-wrapper");
// const missionCards = document.querySelector(".mission-cards-wrapper");
// const phases = document.querySelector(".phases-wrapper");
// const modals = document.querySelector(".modal-wrapper");

// export function renderDOM (state:any, uiState:any) {
//     const { crew, missions, gameUiData } = state;
//     const { lvlOne, lvlTwo, lvlThree } = missions;

//     render(missionCards, html`
//         <div class=${ !isColumnEmptyCheck(lvlOne) ? "level-column" : "re-display-none"}>
//             ${Object.keys(lvlOne).map((missionId, i) => {
//                 if (lvlOne[missionId].succeeded || (i === 0 && gameUiData.isEasy === true)) return html`<span></span>`;
//                 return html`
//                     <div class="mission-grid-cell" style="top:${i*8}px;" data-i=${i}>${missionCard(state, missionId, "lvlOne")}</div>
//                 `})}
//         </div>
//         <div class=${ !isColumnEmptyCheck(lvlTwo) ? "level-column" : "re-display-none"}>
//             ${Object.keys(lvlTwo).map((missionId, i) => {
//                 if (lvlTwo[missionId].succeeded || (i === 0 && gameUiData.isEasy === true)) return html`<span></span>`;
//                 return html`
//                     <div class="mission-grid-cell" style="top:${i*8}px;" data-i=${i}>${missionCard(state, missionId, "lvlTwo")}</div>
//                 `})}
//         </div>
//         <div class=${ !isColumnEmptyCheck(lvlThree) ? "level-column" : "re-display-none"}>
//             ${Object.keys(lvlThree).map((missionId, i) => {
//                 if (lvlThree[missionId].succeeded || (i === 0 && gameUiData.isEasy === true)) return html`<span></span>`;
//                 return html`
//                     <div class="mission-grid-cell" style="top:${i*8}px;" data-i=${i}>${missionCard(state, missionId, "lvlThree")}</div>
//                 `})}
//         </div>
//     `);

//     render(crewCards, html`${Object.keys(crew).map((crewId, i) => html`
//        <div class="crew-grid-cell" data-i=${i}>${characterCard(state, crewId)}</div>
//     `)}`);


//     render(phases, html`${phasesUi(state)}`);

//     render(modals, html`${modalWrapper(state)}`);

//     function isColumnEmptyCheck (lvlData:any) {
//         for (const prop in lvlData) {
//              if (lvlData[prop].succeeded === false) {
//                  if (gameUiData.isEasy === true &&
//                     prop !== "weapons" &&
//                     prop !== "scienceBay" &&
//                     prop !== "bridge") {
//                         return false;
//                     } else {
//                         return false;
//                     }
//              }
//         }
//         return true;
//      }

// }