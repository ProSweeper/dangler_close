<template>
	<div class="toggle-container">
		<input :id="id" class="toggle-input" type="checkbox" @change="emitChange" />
		<label :for="id" class="toggle-label" :style="toggleStyle"></label>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IToggleProps {
	id: string;
	checked: boolean;
	width?: string;
	height?: string;
	onColor?: string;
	offColor?: string;
	transitionDuration?: string;
}

const props = withDefaults(defineProps<IToggleProps>(), {
	width: "4em",
	height: "2em",
	onColor: "#86d993",
	offColor: "#fbfbfb",
	transitionDuration: "0.4s",
});

const emit = defineEmits<{
	updateChecked: [id: string];
}>();

const emitChange = () => {
	emit("updateChecked", props.id);
};

const toggleStyle = computed(() => ({
	"--width": props.width,
	"--height": props.height,
	"--on-color": props.onColor,
	"--off-color": props.offColor,
	"--transition-duration": props.transitionDuration,
}));
</script>

<style lang="scss" scoped>
.toggle-container {
	display: inline-block;
}

.toggle-input {
	display: none;

	&:checked + .toggle-label {
		background: var(--on-color);

		&:after {
			left: calc(100% - 2px);
			transform: translateX(-100%);
		}

		&:active:after {
			margin-left: -0.8em;
		}
	}
}

.toggle-label {
	display: block;
	width: var(--width);
	height: var(--height);
	background: var(--off-color);
	border-radius: 2em;
	position: relative;
	cursor: pointer;
	user-select: none;
	transition: all var(--transition-duration) ease;
	border: 1px solid #e8eae9;

	&:after {
		content: "";
		position: absolute;
		top: 2px;
		left: 2px;
		width: calc(50% - 2px);
		height: calc(100% - 4px);
		border-radius: 2em;
		background: #fbfbfb;
		transition: all var(--transition-duration) ease;
		box-shadow:
			0 0 0 1px rgba(0, 0, 0, 0.1),
			0 4px 0 rgba(0, 0, 0, 0.08);
	}

	&:active:after {
		width: 60%;
	}
}
</style>
