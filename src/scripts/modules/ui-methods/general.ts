import { updateState } from "../state-manager"

export const setCurrentVisibleZone = function setCurrentVisibleZone (zoneName:string) {
    if (zoneName === undefined) return;
    updateState((state:any)=>{
        state.uiData.isHordeHandRevealed = false;
        state.uiData.isHordeDeckRevealed = false;
        state.uiData.currentZone = zoneName;
    });
}