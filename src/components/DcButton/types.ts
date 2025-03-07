export type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

export const variants: ButtonVariant[] = [
	"primary",
	"secondary",
	"danger",
	"ghost",
] as const;

export interface IButtonProps {
	label: string;
	variant?: ButtonVariant;
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
	color: string;
	fontWeight: string;
	fontSize: string;
};

export type DimensionOverrides = {
	width: string;
	height: string;
	borderRadius: string;
	padding: string;
};
