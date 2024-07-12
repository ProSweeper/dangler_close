<template>
	<div class="wrapper">
		<header>
			<h1>Dangler Close Button</h1>
			<div class="buttons-wrapper">
				<DcButton
					:label="'toggle theme'"
					:callback="toggleTheme"
					icon-placement="right"
					:labelOverrides="labelOverrides"
					:dimensionOverrides="dimensionOverrides"
					:color-scheme="themes.dark.primary"
				>
					<template #icon>
						<PuckIcon :height="20" :width="20" :fill="'white'" />
					</template>
				</DcButton>
				<DcButton
					:label="'loading'"
					:callback="() => (loading = !loading)"
					:loading="loading"
					:labelOverrides="labelOverrides"
					:dimensionOverrides="dimensionOverrides"
					:color-scheme="themes.dark.secondary"
				/>
				<DcButton
					:label="'puck'"
					:iconPlacement="'center'"
					:loading="loading"
					:color-scheme="themes.light.ghost"
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
					v-for="scheme in activeTheme"
					:color-scheme="scheme"
					:label="'Button'"
				/>
			</div>
			<div class="buttons-wrapper">
				<h2>hover</h2>
				<DcButton
					v-for="scheme in activeTheme"
					:color-scheme="scheme"
					:label="'Button'"
					:hover="true"
				/>
			</div>
			<div class="buttons-wrapper">
				<h2>active</h2>
				<DcButton
					v-for="scheme in activeTheme"
					:color-scheme="scheme"
					:label="'Button'"
					:active="true"
				/>
			</div>
			<div class="buttons-wrapper">
				<h2>disabled</h2>
				<DcButton
					v-for="scheme in activeTheme"
					:color-scheme="scheme"
					:label="'Button'"
					:disabled="true"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { type LabelOverrides, type DimensionOverrides } from "../types";
import { DcButton } from "../index";
import { themes, themeKeys } from "../../../constants/colors";
import PuckIcon from "../../../assets/icons/PuckIcon.vue";

const currentThemeIndex = ref(0);
const activeTheme = computed(() => {
	const theme = themes[themeKeys[currentThemeIndex.value]];
	return {
		primary: theme.primary,
		secondary: theme.secondary,
		danger: theme.danger,
		ghost: theme.ghost,
	};
});

const loading = ref(false);

const dimensionOverrides: Partial<DimensionOverrides> = {
	width: "200px",
	height: "80px",
};

const labelOverrides: LabelOverrides = {
	fontSize: "22px",
	fontWeight: "600px",
};

const iconDimensions = {
	width: "100px",
	height: "100px",
	borderRadius: "50%",
	padding: "0",
};

const toggleTheme = () => {
	currentThemeIndex.value = (currentThemeIndex.value + 1) % themeKeys.length;
};
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
