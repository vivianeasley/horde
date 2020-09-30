import { updateState } from "../state-manager"

export const changePhase = function changePhase (targetPhase:string) {
    if (targetPhase === undefined) return;
    updateState((state:any)=>{
        state.uiData.currentPhase = targetPhase;
    });

}

export const hordeUntap = function hordeUntap (targetPhase:string) {
    // Unatp all that can untap
    if (targetPhase === undefined) return;
    updateState((state:any)=>{
        for (let index = 0; index < state.data.zones.battlefield.length; index++) {
            if (state.data.zones.battlefield[index].cantUntap === false &&
                state.data.zones.battlefield[index].isTapped === true) {
                state.data.zones.battlefield[index].isTapped = false;
            }
        }
        state.uiData.currentPhase = targetPhase;
    });

}

export const hordeMain = function hordeMain (targetPhase:string) {

    if (targetPhase === undefined) return;
    updateState((state:any)=>{
        for (let index = 0; index < state.data.zones.deck.length; index++) {
            if (state.data.zones.deck[index].isToken === true) {
                state.data.zones.deck[index].isTapped = true;
                state.data.zones.battlefield.push(state.data.zones.deck[index]);
                state.data.zones.deck.splice(index, 1)
                index--;
            } else {
                state.data.zones.stack.push(state.data.zones.deck[index]);
                state.data.zones.deck.splice(index, 1);
                index--;
                break;
            }
        }
        state.uiData.currentPhase = targetPhase;
    });



}

export const hordeAttack = function hordeAttack (targetPhase:string) {
    // Tap all attacking creatures can attack and set to attacking
    if (targetPhase === undefined) return;
    updateState((state:any)=>{
        for (let index = 0; index < state.data.zones.battlefield.length; index++) {
            if (state.data.zones.battlefield[index].cantAttack === false &&
                state.data.zones.battlefield[index].isTapped === false) {
                state.data.zones.battlefield[index].isTapped = true;
                state.data.zones.battlefield[index].isAttacking = true;
                state.uiData.damageToPlayers = state.uiData.damageToPlayers + state.data.zones.battlefield[index].power + state.data.zones.battlefield[index].buffs + state.data.zones.battlefield[index].buffsPerm + state.data.zones.battlefield[index].counters
            }
        }
        state.uiData.currentPhase = targetPhase;
    });

}

export const declareBlockers = function declareBlockers (targetPhase:string) {
    // Maybe not needed
    if (targetPhase === undefined) return;
    updateState((state:any)=>{
        state.uiData.currentPhase = targetPhase;
    });

}

export const hordeDamage = function hordeDamage (targetPhase:string) {
    if (targetPhase === undefined) return;
    updateState((state:any)=>{
        state.uiData.currentPhase = targetPhase;
    });

}

export const resolveDamage = function resolveDamage (targetPhase:string) {
    if (targetPhase === undefined) return;
    updateState((state:any)=>{


        state.uiData.currentPhase = targetPhase;
    });

}

export const playersTurn = function playersTurn (targetPhase:string) {
    if (targetPhase === undefined) return;
    updateState((state:any)=>{
        for (let index = 0; index < state.data.zones.battlefield.length; index++) {
            state.data.zones.battlefield[index].isBlocked = false;
            state.data.zones.battlefield[index].isAttacking = false;
            state.data.zones.battlefield[index].buffs = 0;
            state.uiData.damageToPlayers = 0;
        }
        state.uiData.currentPhase = targetPhase;
    });

}