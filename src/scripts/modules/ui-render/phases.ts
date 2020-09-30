import { html } from 'lighterhtml';
import { undo } from '../state-manager'
import * as phaseMethods from "../data-methods/phase-data-methods";

export const phases =  function phases (state:any) {
    const { uiData } = state;
    const { currentPhase, phases, damageToPlayers } = uiData;

    function nextPhase () {
        const phaseIndex = phases.indexOf(currentPhase);
        const nextPhaseName = phases[phaseIndex + 1] === undefined ? phases[0] : phases[phaseIndex + 1];
        // console.log(nextPhaseName, phaseIndex, phaseMethods["hordeUntap"]("hordeUntap"))
        phaseMethods[nextPhaseName](nextPhaseName)
    }

    return html`
        <div class="phases-wrapper">
            <button
            onclick=${undo}
            class="phase-marker phase-button">Undo &#9100;</button>
            <button
            onclick=${()=>{nextPhase()}}
            class="phase-marker phase-button">Next Phase &#9658;</button>

            <div class="${currentPhase === "playersTurn" ? "phase-marker current" : "phase-marker"}">Players turn</div>
            <div class="${currentPhase === "hordeUntap" ? "phase-marker current" : "phase-marker"}">Horde Untap</div>
            <div class="${currentPhase === "hordeMain" ? "phase-marker current" : "phase-marker"}">Horde Main</div>
            <div class="${currentPhase === "hordeAttack" ? "phase-marker current" : "phase-marker"}">Horde Attack</div>
            <div class="${currentPhase === "declareBlockers" ? "phase-marker current" : "phase-marker"}">Declare Blockers</div>
            <div class="${currentPhase === "resolveDamage" ? "phase-marker current" : "phase-marker"}">Resolve ${damageToPlayers} Damage</div>
        </div>
    `;
}