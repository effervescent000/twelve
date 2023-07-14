<script lang="ts">
	import { page } from '$app/stores';
	import { WEAPONS, WEAPON_TYPES } from '../constants/gear';
	import { characterStore, statsStore } from '../stores';

	// PROPS

	// STATE
	let attackDamage = 0;

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
</script>

<div>
	Attack damage: {Math.round(attackDamage)}
</div>
