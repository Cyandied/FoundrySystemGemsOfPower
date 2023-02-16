import {gopActor} from "./document/actor.mjs";
// import {gopItem} from "./document/item.mjs";

import {gopActorSheet} from "./sheets/actor-sheet.mjs";
// import {gopItemSheet} from "./sheets/item-sheet.mjs";

import {handlebarsTemplates} from "./help/templates.mjs";
import {GOP} from "./help/config.mjs";

Hooks.once('init',async function(){
    game.gop = {
        gopActor,
        // gopItem,
        // rollItemMacro
    };

    console.log("gop start")

    CONFIG.GOP = GOP

    CONFIG.Combat.intitative = {
        formula: "1d20 + @initiativeFromClass",
        decimals: 2
    };

    CONFIG.Actor.documentClass = gopActor;
    // CONFIG.Item.documentClass = gopItem;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("gop", gopActorSheet, { makeDefault: true });
    // Items.unregisterSheet("core", ItemSheet);
    // Items.registerSheet("gop", gopItemSheet, { makeDefault: true });

    return handlebarsTemplates();
});

// Hooks.once("ready", async function() {
//     // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
//     Hooks.on("hotbarDrop", (bar, data, slot) => createItemMacro(data, slot));
//   });