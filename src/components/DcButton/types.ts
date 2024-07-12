import type { ColorScheme } from "../../constants/colors";

export interface IButtonProps {
	label: string;
	colorScheme: ColorScheme;
	iconPlacement?: "left" | "right" | "center" | undefined;
	hover?: boolean;
	active?: boolean;
	disabled?: boolean;
	loading?: boolean;
	size?: Size;
	callback?: () => void;
	labelOverrides?: Partial<LabelOverrides>;
	dimensionOverrides?: Partial<DimensionOverrides>;
}

export type Size = "small" | "medium" | "large";

export type LabelOverrides = {
	font?: string;
	fontWeight?: string;
	fontSize?: string;
};

export type DimensionOverrides = {
	width?: string;
	height?: string;
	borderRadius?: string;
	padding?: string;
};
