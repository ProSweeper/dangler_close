<template>
	<div class="wrapper">
		<header>
			<h1>Dangler Close Button</h1>
			<div class="buttons-wrapper">
				<DcButton
					:label="'toggle theme'"
					:callback="toggleTheme"
					:labelOverrides="labelOverrides"
					:dimensionOverrides="dimensionOverrides"
				/>
				<DcButton
					:label="'loading'"
					:callback="() => (loading = !loading)"
					:loading="loading"
					:labelOverrides="labelOverrides"
					:dimensionOverrides="dimensionOverrides"
				/>
				<DcButton
					:label="'puck'"
					:iconPlacement="'center'"
					:loading="loading"
					:variant="'ghost'"
					:labelOverrides="labelOverrides"
					:dimensionOverrides="iconDimensions"
				>
					<template #icon>
						<PuckIcon :height="50" :width="50" :fill="'#3498db'" />
					</template>
				</DcButton>
			</div>
		</header>
		<div class="showcase">
			<div class="buttons-wrapper">
				<h2>default</h2>
				<DcButton
					v-for="variant in variants"
					:label="variant"
					:variant="variant"
				/>
			</div>
			<div class="buttons-wrapper">
				<h2>hover</h2>
				<DcButton
					v-for="variant in variants"
					:label="variant"
					:hover="true"
					:variant="variant"
				/>
			</div>
			<div class="buttons-wrapper">
				<h2>active</h2>
				<DcButton
					v-for="variant in variants"
					:label="variant"
					:active="true"
					:variant="variant"
				/>
			</div>
			<div class="buttons-wrapper">
				<h2>disabled</h2>
				<DcButton
					v-for="variant in variants"
					:label="variant"
					:disabled="true"
					:variant="variant"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
	variants,
	type LabelOverrides,
	type DimensionOverrides,
} from "../types";
import { DcButton } from "../index";
import PuckIcon from "../../../assets/icons/PuckIcon.vue";

const themes = ["light", "dark", "warm", "warm-dark"];
const currentThemeIndex = ref(0);
const loading = ref(false);
const dimensionOverrides: Partial<DimensionOverrides> = {
	width: "200px",
	height: "80px",
};
const labelOverrides: LabelOverrides = {
	fontSize: "22px",
	fontWeight: "600px",
	color: "black",
};

const iconDimensions = {
	width: "100px",
	height: "100px",
	borderRadius: "50%",
	padding: "0",
};

const toggleTheme = () => {
	currentThemeIndex.value = (currentThemeIndex.value + 1) % themes.length;
	document.documentElement.setAttribute(
		"data-theme",
		themes[currentThemeIndex.value],
	);
};

onMounted(() => {
	document.documentElement.setAttribute(
		"data-theme",
		themes[currentThemeIndex.value],
	);
});
</script>

<style lang="scss">
@import "../../../assets/colors.scss";
* {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: 0;
	background-color: var(--neutral-light-color);
	color: var(--neutral-dark-color);
}

header {
	justify-content: flex-start;
	align-items: center;
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
}

h1 {
	text-align: center;
}
h2 {
	text-align: right;
	width: 80px;
}

.showcase {
	justify-content: flex-start;
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 40px;
}

.buttons-wrapper {
	display: flex;
	flex-direction: row;
	gap: 30px;
	justify-content: center;
	align-items: center;
}
</style>
