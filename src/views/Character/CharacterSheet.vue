<template>
  <w-flex wrap class="text-left">
    <w-input
      shadow
      class="mb3 xs6 pa1"
      label="Character Name"
      placeholder="Character Name"
    >
    </w-input>
    <w-input shadow class="mb3 xs4 pa1" label="Class" placeholder="Class">
    </w-input>
    <w-select
      shadow
      class="mb3 xs2 pa1"
      :items="levels"
      label="Level"
      placeholder="Level"
    >
    </w-select>
    <w-select
      shadow
      class="mb3 xs6 sm3 pa1"
      :items="backgrounds"
      label="Background"
      placeholder="Background"
    >
    </w-select>
    <w-select
      shadow
      class="mb3 xs6 sm3 pa1"
      :items="races"
      label="Race"
      placeholder="Race"
    >
    </w-select>
    <w-select
      shadow
      class="mb3 xs2 pa1"
      :items="alignment"
      label="Alignment"
      placeholder="Alignment"
    >
    </w-select>
    <w-input
      shadow
      class="mb3 xs6 sm3 pa1"
      type="number"
      label="XP"
      placeholder="XP"
    >
    </w-input>
  </w-flex>
  <w-flex wrap class="text-left">
    <w-textarea
      shadow
      class="mb3 xs12 sm6 md3 pa1"
      label="Traits"
      placeholder="Traits..."
    ></w-textarea>
    <w-textarea
      shadow
      class="mb3 xs12 sm6 md3 pa1"
      label="Ideals"
      placeholder="Ideals..."
    ></w-textarea>
    <w-textarea
      shadow
      class="mb3 xs12 sm6 md3 pa1"
      label="Bonds"
      placeholder="Bonds..."
    ></w-textarea>
    <w-textarea
      shadow
      class="mb3 xs12 sm6 md3 pa1"
      label="Flaws"
      placeholder="Flaws..."
    ></w-textarea>
  </w-flex>
  <w-flex wrap class="text-left mods">
    <w-flex wrap class="xs6 sm2 text-left">
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Strength"
        placeholder="0"
      ></w-input>
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Str Mod"
        placeholder="0"
      ></w-input>
    </w-flex>
    <w-flex wrap class="xs6 sm2 text-left">
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Dexterity"
        placeholder="0"
      ></w-input>
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Dex Mod"
        placeholder="0"
      ></w-input>
    </w-flex>
    <w-flex wrap class="xs6 sm2 text-left">
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Consitution"
        placeholder="0"
      ></w-input>
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Con Mod"
        placeholder="0"
      ></w-input>
    </w-flex>
    <w-flex wrap class="xs6 sm2 text-left">
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Intelligence"
        placeholder="0"
      ></w-input>
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Int Mod"
        placeholder="0"
      ></w-input>
    </w-flex>
    <w-flex wrap class="xs6 sm2 text-left">
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Wisdom"
        placeholder="0"
      ></w-input>
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Wis Mod"
        placeholder="0"
      ></w-input>
    </w-flex>
    <w-flex wrap class="xs6 sm2 text-left">
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Charisma"
        placeholder="0"
      ></w-input>
      <w-input
        shadow
        type="number"
        class="mb3 xs12 pa1 custom-inside"
        label="Cha Mod"
        placeholder="0"
      ></w-input>
    </w-flex>
  </w-flex>
  <w-flex wrap class="text-left">
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Inpiration"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Proficiency Bonus"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Armour Class"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Initiative"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Speed"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Passive Perception"
      placeholder="0"
    ></w-input>
  </w-flex>
  <w-flex wrap class="text-left">
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Max HP"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Current HP"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Temporary HP"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Max Hit Dice"
      placeholder="0"
    ></w-input>
    <!-- MAKE SURE THIS SHOWS DICE TYPE PROGRAMMATICALLY-->
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Current Hit Dice"
      placeholder="0"
    ></w-input>
  </w-flex>
  <!--
    DEATH SAVES
  successes () () ()
  failures  () () ()
-->

  <h4>SAVING THROWS</h4>
  <w-flex wrap class="text-left">
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Strength"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Dexterity"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Consitution"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Intelligence"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Wisdom"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Charisma"
      placeholder="0"
    ></w-input>
  </w-flex>
  <h4>SKILLS</h4>
  <w-flex wrap class="text-left">
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Acrobatics"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Animal Handling"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Arcana"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Athletics"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Deception"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="History"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Insight"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Intimidation"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Investigation"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Medicine"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Nature"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Perception"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Performance"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Persuasion"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Religion"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Sleight of Hand"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Stealth"
      placeholder="0"
    ></w-input>
    <w-input
      shadow
      type="number"
      class="mb3 xs6 sm3 pa1 custom-inside"
      label="Survival"
      placeholder="0"
    ></w-input>
  </w-flex>
  <w-flex wrap class="text-left">
    <w-textarea
      shadow
      class="mb3 xs12 sm6 md3 pa1"
      label="Other Proficiencies"
      placeholder="..."
    ></w-textarea>
    <w-textarea
      shadow
      class="mb3 xs12 sm6 md3 pa1"
      label="Languages"
      placeholder="..."
    ></w-textarea>
    <w-textarea
      shadow
      class="mb3 xs12 sm6 md3 pa1"
      label="Features & Traits"
      placeholder="..."
    ></w-textarea>
  </w-flex>
</template>

<script>
export default {
  setup () {
    const levels = [
      { label: '1' },
      { label: '2' },
      { label: '3' },
      { label: '4' },
      { label: '5' },
      { label: '6' },
      { label: '7' },
      { label: '8' },
      { label: '9' },
      { label: '10' },
      { label: '11' },
      { label: '12' },
      { label: '13' },
      { label: '14' },
      { label: '15' },
      { label: '16' },
      { label: '17' },
      { label: '18' },
      { label: '19' },
      { label: '20' }
    ]
    const alignment = [
      { label: 'Lawful Good' },
      { label: 'Neutral Good' },
      { label: 'Chaotic Good' },
      { label: 'Lawful Neutral' },
      { label: 'True Neutral' },
      { label: 'Chaotic Neutral' },
      { label: 'Lawful Evil' },
      { label: 'Neutral Evil' },
      { label: 'Chaotic Evil' }
    ]
    const backgrounds = [
      { label: 'Acolyte' },
      { label: 'Acolyte – Baldur’s Gate' },
      { label: 'Acolyte (Luxonborn)' },
      { label: 'Anthropologist' },
      { label: 'Archaeologist' },
      { label: 'Athlete' },
      { label: 'Azorius Functionary' },
      { label: 'Boros Legionnaire' },
      { label: 'Celebrity Adventurer’s Scion' },
      { label: 'Charlatan' },
      { label: 'Charlatan – Baldur’s Gate' },
      { label: 'City Watch / Investigator' },
      { label: 'Clan Crafter' },
      { label: 'Cloistered Scholar' },
      { label: 'Courtier' },
      { label: 'Criminal – Baldur’s Gate' },
      { label: 'Criminal (Myriad Operative)' },
      { label: 'Criminal / Spy' },
      { label: 'Dimir Operative' },
      { label: 'Entertainer' },
      { label: 'Entertainer – Baldur’s Gate' },
      { label: 'Faceless' },
      { label: 'Faction Agent' },
      { label: 'Failed Merchant' },
      { label: 'Far Traveler' },
      { label: 'Fisher' },
      { label: 'Folk Hero' },
      { label: 'Folk Hero – Baldur’s Gate' },
      { label: 'Gambler' },
      { label: 'Gladiator' },
      { label: 'Golgari Agent' },
      { label: 'Grinner' },
      { label: 'Gruul Anarch' },
      { label: 'Guild Artisan – Baldur’s Gate' },
      { label: 'Guild Artisan / Guild Merchant' },
      { label: 'Haunted One' },
      { label: 'Hermit' },
      { label: 'Hermit – Baldur’s Gate' },
      { label: 'House Agent (Cannith)' },
      { label: 'House Agent (Deneith)' },
      { label: 'House Agent (Ghallanda)' },
      { label: 'House Agent (Jorasco)' },
      { label: 'House Agent (Kundarak)' },
      { label: 'House Agent (Lyrandar)' },
      { label: 'House Agent (Medani)' },
      { label: 'House Agent (Orien)' },
      { label: 'House Agent (Phiarlan)' },
      { label: 'House Agent (Sivis)' },
      { label: 'House Agent (Tharashk)' },
      { label: 'House Agent (Thuranni)' },
      { label: 'House Agent (Vadalis)' },
      { label: 'Inheritor' },
      { label: 'Investigator' },
      { label: 'Izzet Engineer' },
      { label: 'Knight' },
      { label: 'Knight of the Order' },
      { label: 'Marine' },
      { label: 'Mercenary Veteran' },
      { label: 'Noble' },
      { label: 'Noble – Baldur’s Gate' },
      { label: 'Orzhov Representative' },
      { label: 'Outlander' },
      { label: 'Outlander – Baldur’s Gate' },
      { label: 'Pirate' },
      { label: 'Plaintiff' },
      { label: 'Rakdos Cultist' },
      { label: 'Rival Intern' },
      { label: 'Sage' },
      { label: 'Sage – Baldur’s Gate' },
      { label: 'Sage (Cobalt Scholar)' },
      { label: 'Sailor' },
      { label: 'Sailor – Baldur’s Gate' },
      { label: 'Sailor (Revelry Pirate)' },
      { label: 'Selesnya Initiate' },
      { label: 'Shipwright' },
      { label: 'Simic Scientist' },
      { label: 'Smuggler' },
      { label: 'Soldier' },
      { label: 'Soldier – Baldur’s Gate' },
      { label: 'Spy (Augen Trust)' },
      { label: 'Urban Bounty Hunter' },
      { label: 'Urchin' },
      { label: 'Urchin – Baldur’s Gate' },
      { label: 'Uthgardt Tribe Member' },
      { label: 'Volstrucker Agent' },
      { label: 'Waterdhavian Noble' }
    ]
    const races = [
      { label: 'Aarakocra' },
      { label: 'Aasimar' },
      { label: 'Aasimar (Fallen)' },
      { label: 'Aasimar (Protector)' },
      { label: 'Aasimar (Scourge)' },
      { label: 'Bugbear' },
      { label: 'Bugbear' },
      { label: 'Bullywug' },
      { label: 'Centaur' },
      { label: 'Centaur' },
      { label: 'Changeling' },
      { label: 'Custom Lineage' },
      { label: 'Dhampir' },
      { label: 'Dragonborn' },
      { label: 'Dragonborn (Chromatic)' },
      { label: 'Dragonborn (Draconblood)' },
      { label: 'Dragonborn (Gem)' },
      { label: 'Dragonborn (Metallic)' },
      { label: 'Dragonborn (Ravenite)' },
      { label: 'Dwarf (Duergar)' },
      { label: 'Dwarf (Hill)' },
      { label: 'Dwarf (Mark of Warding)' },
      { label: 'Dwarf (Mountain)' },
      { label: 'Elf (Drow)' },
      { label: 'Elf (Eladrin)' },
      { label: 'Elf (High)' },
      { label: 'Elf (Mark of Shadow)' },
      { label: 'Elf (Pallid)' },
      { label: 'Elf (Sea)' },
      { label: 'Elf (Shadar-kai)' },
      { label: 'Elf (Wood)' },
      { label: 'Fairy' },
      { label: 'Firbolg' },
      { label: 'Genasi (Air)' },
      { label: 'Genasi (Earth)' },
      { label: 'Genasi (Fire)' },
      { label: 'Genasi (Water)' },
      { label: 'Gith (Githzerai)' },
      { label: 'Gnoll' },
      { label: 'Gnome (Deep)' },
      { label: 'Gnome (Deep/Svirfneblin)' },
      { label: 'Gnome (Forest)' },
      { label: 'Gnome (Mark of Scribing)' },
      { label: 'Gnome (Rock)' },
      { label: 'Goblin' },
      { label: 'Goblin (Dankwood)' },
      { label: 'Goliath' },
      { label: 'Grimlock' },
      { label: 'Grung' },
      { label: 'Half-Elf' },
      { label: 'Half-Elf (Variant; Aquatic Elf Descent)' },
      { label: 'Half-Elf (Variant; Drow Descent)' },
      { label: 'Half-Elf (Variant; Mark of Detection)' },
      { label: 'Half-Elf (Variant; Mark of Storm)' },
      { label: 'Half-Elf (Variant; Moon Elf or Sun Elf Descent)' },
      { label: 'Half-Elf (Variant; Wood Elf Descent)' },
      { label: 'Half-Orc' },
      { label: 'Half-Orc (Mark of Finding)' },
      { label: 'Halfling (Ghostwise)' },
      { label: 'Halfling (Lightfoot)' },
      { label: 'Halfling (Lotusden)' },
      { label: 'Halfling (Mark of Healing)' },
      { label: 'Halfling (Mark of Hospitality)' },
      { label: 'Halfling (Stout)' },
      { label: 'Harengon' },
      { label: 'Hexblood' },
      { label: 'Hobgoblin' },
      { label: 'Human' },
      { label: 'Human (Mark of Finding)' },
      { label: 'Human (Mark of Handling)' },
      { label: 'Human (Mark of Making)' },
      { label: 'Human (Mark of Passage)' },
      { label: 'Human (Mark of Sentinel)' },
      { label: 'Human (Variant)' },
      { label: 'Kalashtar' },
      { label: 'Kenku' },
      { label: 'Kobold' },
      { label: 'Leonin' },
      { label: 'Lizardfolk' },
      { label: 'Locathah' },
      { label: 'Loxodon' },
      { label: 'Minotaur' },
      { label: 'Orc' },
      { label: 'Owlin' },
      { label: 'Reborn' },
      { label: 'Satyr' },
      { label: 'Shifter (Beasthide)' },
      { label: 'Shifter (Longtooth)' },
      { label: 'Shifter (Swiftstride)' },
      { label: 'Shifter (Wildhunt)' },
      { label: 'Simic Hybrid' },
      { label: 'Skeleton' },
      { label: 'Tabaxi' },
      { label: 'Tiefling' },
      { label: 'Tiefling (Asmodeus)' },
      { label: 'Tiefling (Baalzebul)' },
      { label: 'Tiefling (Dispater)' },
      { label: 'Tiefling (Fierna)' },
      { label: 'Tiefling (Glasya)' },
      { label: 'Tiefling (Levistus)' },
      { label: 'Tiefling (Mammon)' },
      { label: 'Tiefling (Mephistopheles)' },
      { label: 'Tiefling (Variant; Devils Tongue)' },
      { label: 'Tiefling (Variant; Hellfire)' },
      { label: 'Tiefling (Variant; Infernal Legacy)' },
      { label: 'Tiefling (Variant; Winged)' },
      { label: 'Tiefling (Zariel)' },
      { label: 'Tortle' },
      { label: 'Triton' },
      { label: 'Troglodyte' },
      { label: 'Vedalken' },
      { label: 'Verdan' },
      { label: 'Warforged' },
      { label: 'Yuan-ti Pureblood' },
      { label: 'Zombie' }
    ]
    return {
      levels,
      alignment,
      backgrounds,
      races
    }
  }
}
</script>

<style>
.w-input.custom-inside {
  font-size: 12px;
}
.mods .w-input__label--inside {
  top: 15%;
  transform: translate(0%, -50%) !important;
  padding-left: 5px;
}
.mods input {
  font-size: 40px;
  text-align: center;
}
.mods .w-input__input-wrap {
  height: 100px;
}
/* .custom-inside .w-input__input {
  text-align: right;
}
.custom-inside .w-input__label--inside {
  transform: translateY(-50%) !important;
} */
</style>
