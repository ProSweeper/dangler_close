<template>
	<div
		class="button"
		type="button"
		role="button"
		:aria-disabled="props.disabled"
		:class="[
			props.size,
			props.active ? 'active' : '',
			props.disabled ? 'disabled' : '',
			props.hover ? 'hover' : '',
		]"
		:style="buttonStyle"
		@click="handleClick"
	>
		<div class="icon" v-if="props.iconPlacement === 'left'">
			<slot name="icon"></slot>
		</div>
		<p class="label" v-if="props.iconPlacement !== 'center'" :style="textStyle">
			{{ props.label }}
		</p>
		<div class="icon" v-if="props.iconPlacement === 'center'">
			<slot name="icon"></slot>
		</div>
		<div class="icon" v-if="props.iconPlacement === 'right'">
			<slot name="icon"></slot>
		</div>
		<div class="spinner" v-if="props.loading"></div>
	</div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import type { IButtonProps } from "./index";

const props = withDefaults(defineProps<IButtonProps>(), {
	iconPlacement: undefined,
	active: false,
	hover: false,
	disabled: false,
	loading: false,
	size: "medium",
});

const emit = defineEmits<{
	clicked: [label: string];
}>();

const handleClick = () => {
	if (props.callback) {
		props.callback();
	}
	emit("clicked", props.label);
};

const textStyle = reactive({ ...props.labelOverrides });
const buttonStyle = computed(() => {
	return {
		"--default-color": props.colorScheme.default,
		"--hover-color": props.colorScheme.hover,
		"--active-color": props.colorScheme.active,
		"--disabled-color": props.colorScheme.disabled,
		"--text-color": props.colorScheme.text,
		"--border-color": props.colorScheme.border ?? "transparent",
		...props.dimensionOverrides,
	};
});
</script>

<style scoped lang="scss">
@import "../../assets/colors.scss";

.icon {
	display: flex;
	align-items: center;
	justify-content: center;
}

.button {
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	gap: 10px;
	cursor: pointer;
	font-size: 16px;
	background-color: var(--default-color);
	transition:
		background-color 0.3s,
		color 0.3s,
		box-shadow 0.3s;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	color: var(--text-color);
	user-select: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	&:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);
	}

	&:hover,
	&.hover {
		background-color: var(--hover-color);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	&:active,
	&.active {
		background-color: var(--active-color);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
	}
	&.disabled {
		background-color: var(--disabled-color);
		opacity: 0.7;
		cursor: not-allowed;
	}

	&.small {
		font-size: 12px;
		padding: 5px 10px;
	}

	&.medium {
		font-size: 16px;
		padding: 10px 20px;
	}

	&.large {
		font-size: 20px;
		padding: 15px 30px;
	}
	.spinner {
		border: 4px solid var(--text-color);
		border-top: 4px solid var(--default-color);
		border-radius: 50%;
		width: 20px;
		height: 20px;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>
