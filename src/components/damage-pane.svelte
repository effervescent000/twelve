<script lang="ts">
	import { page } from '$app/stores';
	import { getSpeedMod } from '../constants/characters';
	import { WEAPONS, WEAPON_TYPES } from '../constants/gear';
	import { characterStore, statsStore } from '../stores';

	// PROPS

	// STATE
	let attackDamage = 0;
	// currently I am not taking into account action time
	// because I am having a hard time figuring out how it's determined
	// is it a set time for everything? does it depend on your weapon?
	// all I can find is that it can't be modified
	let chargeTime = 0;

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
			attackDamage = damageFormula({
				attackPower: WEAPONS[weapon].attack,
				characterStats,
				characterData,
				targetDefense
			});
		}
	}

	$: {
		const weapon = characterData.weapon;
		if (weapon) {
			// the `1` in the below calculation is for swiftness licenses which
			// I'm just not dealing with yet
			chargeTime =
				((WEAPONS[weapon].ct || WEAPON_TYPES[WEAPONS[weapon].type].ct) *
					getSpeedMod(characterStats.speed) +
					0.25) *
				1 *
				0.5;
		}
	}
</script>

<div>
	Attack damage: {Math.round(attackDamage)}
	Attack DPS: {Math.round(attackDamage / (chargeTime + 1.2))}
</div>
