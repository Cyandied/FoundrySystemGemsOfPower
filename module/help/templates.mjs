
export const handlebarsTemplates = async function() {
    return loadTemplates([
  
      // Actor partials.
      "systems/gemsofpower/templates/actor/parts/actionSet.html",
      "systems/gemsofpower/templates/actor/parts/abilities.html",
      "systems/gemsofpower/templates/actor/parts/biography.html",
      "systems/gemsofpower/templates/actor/parts/items.html",
      "systems/gemsofpower/templates/actor/parts/spells.html",
    ]);
  };