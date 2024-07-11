<template>
	<div class="wrapper">
		<DcToggle
			id="myToggle"
			:checked="isToggled"
			width="5em"
			height="2.5em"
			onColor="#4CAF50"
			offColor="#f44336"
			transitionDuration="0.3s"
			@update-checked="handleToggle"
		/>
		<h3>Toggle: {{ isToggled ? "On" : "Off" }}</h3>
	</div>
</template>

<script setup lang="ts">
import DcToggle from "../DcToggle.vue";
import { ref } from "vue";

const isToggled = ref(false);
const handleToggle = () => {
	isToggled.value = !isToggled.value;
	console.log("checked", isToggled.value);
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

.wrapper {
	height: 100vh;
	flex-direction: column;
	gap: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
