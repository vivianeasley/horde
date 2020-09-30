import { html } from 'lighterhtml';
import { setCurrentVisibleZone } from "../ui-methods/general";
import { dragEnd } from "../ui-methods/drag-methods"

export const zonePile = function zonePile (state:any, zoneName:string) {

    return html`
        <div class="zone-pile-wrapper">
        <div class="zone-pile-event-catcher" data-name="${zoneName}" onclick=${()=>{setCurrentVisibleZone(zoneName)}} ondrop=${(e)=>{dragEnd(e)}} ondragover=${(e)=>{e.preventDefault();e.dataTransfer.dropEffect = "move"}}></div>
            <div class="zone-pile-title">${zoneName}</div>
            <div class="zone-pile">
                ${
                    state.data.zones[zoneName].map((name, i) => html`
                        <div class="zone-pile-card" style="${"left:"+(Math.floor(i/10))+"px"}"></div>
                    `)
                }
                <div class="zone-pile-counter">${state.data.zones[zoneName].length > 0 ? state.data.zones[zoneName].length : ""}</div>
            </div>
            ${state.uiData.currentZone === zoneName ? html`<div class="zone-marker"></div>` : ``}
        </div>
        `;
}