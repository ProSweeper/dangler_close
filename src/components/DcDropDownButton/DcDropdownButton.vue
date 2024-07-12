<template>
	<div class="dropdown-button">
		<DcButton
			icon-placement="right"
			:color-scheme="themes.light.primary"
			:label="'dropdown'"
			@clicked="toggleDropdown"
		>
			<template #icon>
				<ChevronIcon
					:height="15"
					:width="15"
					:fill="'white'"
					:class="[isDropdownShowing ? 'dropdownShowing' : 'dropdownHidden']"
				/>
			</template>
		</DcButton>
		<div class="dropdown-content" v-show="isDropdownShowing">
			<slot name="dropdown-content"></slot>
		</div>
	</div>
</template>
<script setup lang="ts">
import { DcButton } from "../../components";
import { ChevronIcon } from "../../assets/icons";
import { ref } from "vue";
import { themes } from "../../constants/colors";

const isDropdownShowing = ref(false);
const toggleDropdown = () => {
	isDropdownShowing.value = !isDropdownShowing.value;
};
</script>
<style lang="scss" scoped>
.dropdownShowing {
	transform: rotate(180deg);
	transition: transform 0.5s ease;
}

.dropdownHidden {
	transition: transform 0.5s ease;
}
</style>
