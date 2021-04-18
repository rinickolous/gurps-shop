console.log("Test??????");
import { GurpsActorSheet } from "../../systems/gurps/module/actor-sheet.js"

export class GurpsInventorySheet extends GurpsActorSheet {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['gurps', 'sheet', 'actor'],
            template: 'modules/gurps-shop/templates/inventory-sheet.html',
            width: 800,
            height: 800,
            tabs: [],
            scrollY: [],
            dragDrop: [{ dragSelector: 'item-list .item', dropSelector: null}]
        })

    }
}

Actors.registerSheet('gurps', GurpsInventorySheet, {
    label: 'Inventory Only',
    makeDefault: false,
})