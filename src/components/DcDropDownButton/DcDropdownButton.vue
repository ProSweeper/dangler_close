<template>
	<DcButton icon-placement="right" :variant="'primary'" :label="'dropdown'">
		<template #icon>
			<ChevronIcon :height="15" :width="15" :fill="'white'" />
		</template>
	</DcButton>
</template>
<script setup lang="ts">
import { DcButton } from "../../components";
import { ChevronIcon } from "../../assets/icons";
</script>
<style lang="" scoped></style>
