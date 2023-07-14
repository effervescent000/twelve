<script lang="ts">
	import { page } from '$app/stores';
	import { getSpeedMod } from '../constants/characters';
	import { WEAPONS, WEAPON_TYPES } from '../constants/gear';
	import { SPELLS, spellDamageFormula } from '../constants/spells';
	import { characterStore, statsStore } from '../stores';

	// PROPS

	// STATE
	let attackDPS = 0;
	let spellDPS = 0;

	// LOGIC
	const targetDefense = 6;
	$: character = $page.params.character;
	$: characterData = $characterStore[character];
	$: characterStats = $statsStore[character];

	$: {
		const weapon = characterData.weapon;
		if (weapon) {
			const damageFormula =
				WEAPONS[weapon].damageFormula || WEAPON_TYPES[WEAPONS[weapon].type].damageFormula;
			attackDPS =
				damageFormula({
					attackPower: WEAPONS[weapon].attack,
					characterStats,
					characterData,
					targetDefense
				}) /
				(((WEAPONS[weapon].ct || WEAPON_TYPES[WEAPONS[weapon].type].ct) *
					getSpeedMod(characterStats.speed) +
					0.25) *
					1 *
					0.5 +
					1.2);
		}
	}

	$: {
		const spell = characterData.spell;
		if (spell) {
			const damage = spellDamageFormula({
				power: SPELLS[spell].power,
				characterData,
				characterStats,
				targetDefense
			});
			spellDPS = damage / ((23 * getSpeedMod(characterStats.speed) + 0.25) * 1 * 0.5 + 1.2);
		}
	}
</script>

<div>
	<div>
		Attack DPS: {Math.round(attackDPS)}
	</div>
	<div>
		Spell DPS: {Math.round(spellDPS)}
	</div>
</div>
