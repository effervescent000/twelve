<script lang="ts">
	import { page } from '$app/stores';
	import { getSpeedMod } from '../constants/characters';
	import { WEAPONS, WEAPON_TYPES } from '../constants/gear';
	import { SPELLS, SPELL_TYPES } from '../constants/spells';
	import { characterStore, statsStore } from '../stores';

	// PROPS

	// STATE
	let attackDPS = 0;
	let spellDPS = 0;

	// LOGIC
	const targetDefense = 6;
	const avgComboHits = 2.873;

	$: character = $page.params.character;
	$: characterData = $characterStore[character];
	$: characterStats = $statsStore[character];

	$: {
		const weapon = characterData.weapon;
		if (weapon) {
			const weaponData = { ...WEAPON_TYPES[WEAPONS[weapon].type], ...WEAPONS[weapon] };
			const damage = weaponData.damageFormula({
				attackPower: WEAPONS[weapon].attack,
				characterStats,
				characterData,
				targetDefense
			});
			const comboDamage = weaponData.comboRate
				? damage * (avgComboHits - 1) * weaponData.comboRate
				: 0;
			const critDamage = weaponData.critRate ? damage * weaponData.critRate : 0;
			const executionTime =
				((WEAPONS[weapon].ct || WEAPON_TYPES[WEAPONS[weapon].type].ct) *
					getSpeedMod(characterStats.speed) +
					0.25) *
					1 *
					0.5 +
				(weaponData.range === 'melee' ? 1.2 : 1.4) +
				(weaponData.comboRate ? (avgComboHits - 1) * weaponData.comboRate * 0.5 : 0);
			attackDPS = (damage + comboDamage + critDamage) / executionTime;
		} else {
			attackDPS = 0;
		}
	}

	$: {
		const spell = characterData.spell;
		// I am assuming that if you are using an elemental spell, the target is weak to it
		if (spell) {
			const spellData = { ...SPELL_TYPES[SPELLS[spell].type], ...SPELLS[spell] };
			const damage =
				spellData.formula({
					power: spellData.power,
					characterData,
					characterStats,
					targetDefense
				}) * (spellData.type === 'damage' && spellData.element ? 1.5 : 1);
			spellDPS = damage / ((23 * getSpeedMod(characterStats.speed) + 0.25) * 1 * 0.5 + 1.2);
		} else {
			spellDPS = 0;
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
