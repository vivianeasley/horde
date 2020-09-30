import { updateState } from "../state-manager"

function resetCardDamage (state:any, index:number) {
    state.uiData.damageToPlayers = 0;
    if (state.data.zones.battlefield[index].isAttacking === true &&
        state.data.zones.battlefield[index].isBlocked === false) {
        state.uiData.damageToPlayers = state.uiData.damageToPlayers + state.data.zones.battlefield[index].power + state.data.zones.battlefield[index].buffs + state.data.zones.battlefield[index].buffsPerm + state.data.zones.battlefield[index].counters
    }

}

export const incrementCounters = function incrementCounters () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            state.data.zones.battlefield[index].counters += 1;
            resetCardDamage(state, index);
        }

    });

}

export const decrementCounters = function decrementCounters () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            state.data.zones.battlefield[index].counters -= 1;
            resetCardDamage(state, index);
        }
    });
}

export const incrementBuffs = function incrementBuffs () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            state.data.zones.battlefield[index].buffs += 1;
            resetCardDamage(state, index);
        }
    });

}

export const decrementBuffs = function decrementBuffs () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            state.data.zones.battlefield[index].buffs -= 1;
            resetCardDamage(state, index);
        }
    });
}

export const incrementBuffsPerm = function incrementBuffsPerm () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            state.data.zones.battlefield[index].buffsPerm += 1;
            resetCardDamage(state, index);
        }
    });

}

export const decrementBuffsPerm = function decrementBuffsPerm () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            state.data.zones.battlefield[index].buffsPerm -= 1;
            resetCardDamage(state, index);
        }
    });
}

export const toggleCantAttack = function toggleCantAttack () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            state.data.zones.battlefield[index].cantAttack = !state.data.zones.battlefield[index].cantAttack;
        }
    });
}

export const toggleCantUntap = function toggleCantUntap () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            state.data.zones.battlefield[index].cantUntap = !state.data.zones.battlefield[index].cantUntap;
        }
    });
}

export const setTapped = function toggleTap () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            if(state.data.zones.battlefield[index].isTapped === true && state.data.zones.battlefield[index].cantUntap === true) return;
            state.data.zones.battlefield[index].isTapped = true;
        }
    });
}

export const setAttacking = function toggleAttack () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            if(state.data.zones.battlefield[index].cantAttack === true) return;
            state.data.zones.battlefield[index].isAttacking = true;
        }
    });
}

export const setUntapped = function toggleTap () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            if(state.data.zones.battlefield[index].isTapped === true && state.data.zones.battlefield[index].cantUntap === true) return;
            state.data.zones.battlefield[index].isTapped = false;
        }
    });
}

export const setNotAttacking = function toggleAttack () {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            if(state.data.zones.battlefield[index].cantAttack === true) return;
            state.data.zones.battlefield[index].isAttacking = false;
        }
    });
}

export const addColorMarker = function addColorMarker (color:string) {
    updateState((state:any)=>{
        for (let index = 0; index <  state.data.zones.battlefield.length; index++) {
            if (state.data.zones.battlefield[index].markers.includes(color)) {
                state.data.zones.battlefield[index].markers.splice(state.data.zones.battlefield[index].markers.indexOf(color), 1);
            } else {
                state.data.zones.battlefield[index].markers.push(color)
            }
        }
    });
}