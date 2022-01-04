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
    <w-input
      shadow
      class="mb3 xs2 pa1"
      type="number"
      label="Level"
      placeholder="Level"
    >
    </w-input>
    <w-input
      shadow
      class="mb3 xs6 sm3 pa1"
      label="Background"
      placeholder="Background"
    >
    </w-input>
    <w-input shadow class="mb3 xs6 sm3 pa1" label="Race" placeholder="Race">
    </w-input>
    <w-input
      shadow
      class="mb3 xs6 sm3 pa1"
      label="Alignment"
      placeholder="Alignment"
    >
    </w-input>
    <w-input shadow class="mb3 xs6 sm3 pa1" label="XP" placeholder="XP">
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
  setup () {}
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
