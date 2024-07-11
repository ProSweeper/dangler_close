<template>
	<div class="wrapper">
		<h1>Dropdown</h1>
		<DcDropdownButton />
	</div>
</template>

<script setup lang="ts">
import DcDropdownButton from "../DcDropdownButton.vue";
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
