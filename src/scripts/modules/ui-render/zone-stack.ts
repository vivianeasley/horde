import { html } from 'lighterhtml';
import { card } from "../ui-render/card"

export const zoneStack = function zoneStack (state:any) {

    return html`
        ${ state.data.zones.stack.length > 0 ?
            html`
                <div class="zone-cards-area stack">
                    <div>The Stack</div>
                    ${
                        state.data.zones.stack.map((data, i) => html`
                            ${card(data, i, "stack", true, false)}
                        `)
                    }
                </div>
                `:``
        }`
}