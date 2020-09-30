import { html } from 'lighterhtml';
import { card } from "../ui-render/card"

export const zoneCards =  function zoneCards (state:any) {
    const { uiData, data } = state;
    const {
        currentZone,
        isHordeHandRevealed,
        isHordeDeckRevealed,
        currentPhase
    } = uiData;
    const { zones } = data;
    let isVisible = true;
    let canBeBlocked = false;
    if (currentZone === "hand" &&
    isHordeHandRevealed === false) isVisible = false;

    if (currentZone === "deck" &&
    isHordeDeckRevealed === false) isVisible = false;

    if (currentZone === "battlefield" &&
    currentPhase === "declareBlockers") {
        canBeBlocked = true;
    }

    if (zones[currentZone].length === 0) return html``;

    return html`
        <div class="zone-cards-area">
            ${
                zones[currentZone].map((cardData, i) => html`
                    ${card(cardData, i, currentZone, isVisible, canBeBlocked)}
                `)
            }
        </div>`;
}