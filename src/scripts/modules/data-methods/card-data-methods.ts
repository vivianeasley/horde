import { updateState } from "../state-manager"

function resetDamage (state) {
    state.uiData.damageToPlayers = 0;
    for (let index = 0; index < state.data.zones.battlefield.length; index++) {
        if (state.data.zones.battlefield[index].isAttacking === true &&
            state.data.zones.battlefield[index].isBlocked === false) {
            state.uiData.damageToPlayers = state.uiData.damageToPlayers + state.data.zones.battlefield[index].power + state.data.zones.battlefield[index].buffs + state.data.zones.battlefield[index].buffsPerm + state.data.zones.battlefield[index].counters
        }
    }
}

export const incrementCounters = function incrementCounters (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        state.data.zones.battlefield[index].counters += 1;
        resetDamage(state);
    });

}

export const decrementCounters = function decrementCounters (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        state.data.zones.battlefield[index].counters -= 1;
        resetDamage(state);
    });
}

export const setBlocked = function setBlocked (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        state.data.zones.battlefield[index].isBlocked = !state.data.zones.battlefield[index].isBlocked;
        resetDamage(state);
    });
}

export const incrementBuffs = function incrementBuffs (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        state.data.zones.battlefield[index].buffs += 1;
        resetDamage(state);
    });

}

export const decrementBuffs = function decrementBuffs (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        state.data.zones.battlefield[index].buffs -= 1;
        resetDamage(state);
    });
}

export const incrementBuffsPerm = function incrementBuffsPerm (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        state.data.zones.battlefield[index].buffsPerm += 1;
        resetDamage(state);
    });

}

export const decrementBuffsPerm = function decrementBuffsPerm (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        state.data.zones.battlefield[index].buffsPerm -= 1;
        resetDamage(state);
    });
}

export const toggleCantAttack = function toggleCantAttack (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        state.data.zones.battlefield[index].cantAttack = !state.data.zones.battlefield[index].cantAttack;
    });
}

export const toggleCantUntap = function toggleCantUntap (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        state.data.zones.battlefield[index].cantUntap = !state.data.zones.battlefield[index].cantUntap;
    });
}

export const toggleTap = function toggleTap (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        if(state.data.zones.battlefield[index].isTapped === true && state.data.zones.battlefield[index].cantUntap === true) return;
        state.data.zones.battlefield[index].isTapped = !state.data.zones.battlefield[index].isTapped;
    });
}

export const toggleAttack = function toggleAttack (index:number) {
    if (index === undefined) return;
    updateState((state:any)=>{
        if(state.data.zones.battlefield[index].cantAttack === true) return;
        state.data.zones.battlefield[index].isAttacking = !state.data.zones.battlefield[index].isAttacking;
        resetDamage(state);
    });
}

export const addColorMarker = function addColorMarker (index:number, color:string) {
    if (index === undefined) return;
    updateState((state:any)=>{
        if (state.data.zones.battlefield[index].markers.includes(color)) {
            state.data.zones.battlefield[index].markers.splice(state.data.zones.battlefield[index].markers.indexOf(color), 1);
        } else {
            state.data.zones.battlefield[index].markers.push(color)
        }
    });
}

export const moveCardTo = function moveCardTo(index:number, currentZone:string, targetZone:string) {
    updateState((state:any)=>{
        if (targetZone === "battlefield") {
            state.data.zones[currentZone][index].isTapped = true;
        } else {
            state.data.zones[currentZone][index].isTapped = false;
        }
        state.data.zones[currentZone][index].isAttacking = false;
        state.data.zones[currentZone][index].isBlocked = false;
        state.data.zones[currentZone][index].isPermanent = true;
        state.data.zones[currentZone][index].counters = 0;
        state.data.zones[currentZone][index].buffs = 0;
        state.data.zones[currentZone][index].buffsPerm = 0;
        state.data.zones[currentZone][index].markers = [];
        state.data.zones[currentZone][index].cantAttack = false;
        state.data.zones[currentZone][index].cantUntap = false;

        state.data.zones[targetZone].push(state.data.zones[currentZone][index]);
        state.data.zones[currentZone].splice(index, 1);
    });

}