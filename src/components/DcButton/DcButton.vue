<template>
	<div
		class="button"
		type="button"
		role="button"
		:aria-disabled="props.disabled"
		:class="[
			props.variant,
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
import { reactive } from "vue";
import type { IButtonProps } from "./types";

const props = withDefaults(defineProps<IButtonProps>(), {
	variant: "primary",
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
const buttonStyle = reactive({ ...props.dimensionOverrides });
</script>

<style scoped lang="scss">
@import "../../assets/colors.scss";

.button {
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	cursor: pointer;
	font-size: 16px;
	transition:
		background-color 0.3s,
		color 0.3s,
		box-shadow 0.3s;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	color: var(--text-color-light);
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
	&.primary {
		background-color: var(--primary-color);

		&:hover,
		&.hover {
			background-color: var(--primary-hover);
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		}

		&:active,
		&.active {
			background-color: var(--primary-active);
			box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
		}
		&.disabled {
			background-color: var(--primary-disabled);
		}
	}

	&.secondary {
		background-color: var(--secondary-color);

		&:hover,
		&.hover {
			background-color: var(--secondary-hover);
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		}

		&:active,
		&.active {
			background-color: var(--secondary-active);
			box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
		}
		&.disabled {
			background-color: var(--secondary-disabled);
		}
	}

	&.danger {
		background-color: var(--danger-color);

		&:hover,
		&.hover {
			background-color: var(--danger-hover);
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		}

		&:active &.active {
			background-color: var(--danger-active);
			box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
		}
		&.disabled {
			background-color: var(--danger-disabled);
		}
	}

	&.ghost {
		background-color: var(--ghost-color);
		border: 2px solid var(--primary-color);

		&:hover,
		&.hover {
			background-color: var(--ghost-hover);
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		}

		&:active &.active {
			background-color: var(--ghost-active);
			box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
		}
		&.disabled {
			background-color: var(--ghost-disabled);
		}
	}

	&.disabled {
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
		border: 4px solid var(--text-color-light);
		border-top: 4px solid var(--primary-color);
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
