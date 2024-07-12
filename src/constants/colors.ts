export type ColorScheme = {
	default: string;
	hover: string;
	active: string;
	disabled: string;
	text: string;
	border?: string;
};

type ThemeColors = {
	primary: ColorScheme;
	secondary: ColorScheme;
	danger: ColorScheme;
	ghost: ColorScheme;
	neutral: {
		light: string;
		dark: string;
	};
	accent: string;
	text: {
		light: string;
		dark: string;
	};
};

type Themes = {
	light: ThemeColors;
	dark: ThemeColors;
	warm: ThemeColors;
	warmDark: ThemeColors;
};

export type ThemeKey = keyof Themes;

export const themes: Themes = {
	light: {
		primary: {
			default: "#3498db",
			hover: "#2b8acb",
			active: "#2277a3",
			disabled: "#7fb5e1",
			text: "#ffffff",
		},
		secondary: {
			default: "#2ecc71",
			hover: "#29b963",
			active: "#248e54",
			disabled: "#a5d6a7",
			text: "#ffffff",
		},
		danger: {
			default: "#e74c3c",
			hover: "#cf4436",
			active: "#b73b30",
			disabled: "#e1a3a3",
			text: "#ffffff",
		},
		ghost: {
			default: "transparent",
			hover: "rgba(0, 0, 0, 0.1)",
			active: "rgba(0, 0, 0, 0.2)",
			disabled: "rgba(0, 0, 0, 0.05)",
			text: "#2c3e50",
		},
		neutral: {
			light: "#ecf0f1",
			dark: "#2c3e50",
		},
		accent: "#e67e22",
		text: {
			light: "#ffffff",
			dark: "#2c3e50",
		},
	},
	dark: {
		primary: {
			default: "#2980b9",
			hover: "#216a9b",
			active: "#1a5f7e",
			disabled: "#7fa7ce",
			text: "#bdc3c7",
		},
		secondary: {
			default: "#27ae60",
			hover: "#229552",
			active: "#1e8449",
			disabled: "#7fb98d",
			text: "#bdc3c7",
		},
		danger: {
			default: "#c0392b",
			hover: "#a93226",
			active: "#89201d",
			disabled: "#ce8181",
			text: "#bdc3c7",
		},
		ghost: {
			default: "transparent",
			hover: "rgba(255, 255, 255, 0.1)",
			active: "rgba(255, 255, 255, 0.2)",
			disabled: "rgba(255, 255, 255, 0.05)",
			text: "#ffffff",
		},
		neutral: {
			light: "#95a5a6",
			dark: "#1a252f",
		},
		accent: "#f39c12",
		text: {
			light: "#bdc3c7",
			dark: "#ffffff",
		},
	},
	warm: {
		primary: {
			default: "#f39c12",
			hover: "#da890f",
			active: "#c07d0d",
			disabled: "#f1c40f",
			text: "#ffffff",
		},
		secondary: {
			default: "#d35400",
			hover: "#b24300",
			active: "#993700",
			disabled: "#e98b39",
			text: "#ffffff",
		},
		danger: {
			default: "#8e44ad",
			hover: "#7b3c98",
			active: "#6b3384",
			disabled: "#b085bb",
			text: "#ffffff",
		},
		ghost: {
			default: "transparent",
			hover: "rgba(0, 0, 0, 0.1)",
			active: "rgba(0, 0, 0, 0.2)",
			disabled: "rgba(0, 0, 0, 0.05)",
			text: "#34495e",
		},
		neutral: {
			light: "#f5f5f5",
			dark: "#34495e",
		},
		accent: "#e74c3c",
		text: {
			light: "#ffffff",
			dark: "#34495e",
		},
	},
	warmDark: {
		primary: {
			default: "#e67e22",
			hover: "#cc711e",
			active: "#b3681b",
			disabled: "#f39c12",
			text: "#ffffff",
		},
		secondary: {
			default: "#c0392b",
			hover: "#a73225",
			active: "#8e2a20",
			disabled: "#e74c3c",
			text: "#ffffff",
		},
		danger: {
			default: "#7d3c98",
			hover: "#6f3387",
			active: "#5f2b73",
			disabled: "#9b59b6",
			text: "#ffffff",
		},
		ghost: {
			default: "transparent",
			hover: "rgba(255, 255, 255, 0.1)",
			active: "rgba(255, 255, 255, 0.2)",
			disabled: "rgba(255, 255, 255, 0.05)",
			text: "#ffffff",
		},
		neutral: {
			light: "#bdc3c7",
			dark: "#2c3e50",
		},
		accent: "#f39c12",
		text: {
			light: "#ffffff",
			dark: "#2c3e50",
		},
	},
} as const;

export const themeKeys: ThemeKey[] = Object.keys(themes) as ThemeKey[];
export type ButtonThemes = Pick<ThemeColors, "ghost" | "primary" | "secondary" | "danger">;
