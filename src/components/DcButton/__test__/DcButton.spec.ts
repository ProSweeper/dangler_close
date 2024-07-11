import { vi, beforeEach, it, describe, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import DcButton from "../DcButton.vue";
import { variants, type IButtonProps } from "../types";

const label = "testing";
const callbackFunc = vi.fn();

const createProps = (overrides = {}): IButtonProps => ({
	label,
	callback: callbackFunc,
	variant: "primary",
	disabled: false,
	hover: false,
	active: false,
	iconPlacement: undefined,
	...overrides,
});

const props: IButtonProps = createProps();
let wrapper: VueWrapper<InstanceType<typeof DcButton>>;
describe("Dc Button", () => {
	beforeEach(() => {
		wrapper = mount(DcButton, { props });
		vi.clearAllMocks();
	});
	it("should render the button", () => {
		expect(wrapper.exists()).toBeTruthy();
	});
	describe("props", () => {
		it("should call the callback function prop when clicked", async () => {
			await wrapper.trigger("click");
			expect(callbackFunc).toHaveBeenCalledOnce();
		});
		it("should display the label passed in", () => {
			expect(wrapper.text().includes(label)).toBeTruthy();
		});
		it.each(variants)("should add the variant prop as a class", (variant) => {
			const wrapper = mount(DcButton, { props: createProps({ variant }) });
			expect(wrapper.classes().includes(variant)).toBeTruthy();
		});
		it.each(["disabled", "active", "hover"])(
			"should apply the hover class when hover prop is true",
			async (buttonState) => {
				const wrapper = mount(DcButton, {
					props: createProps({ [buttonState]: true }),
				});

				expect(wrapper.classes().includes(buttonState)).toBeTruthy();
			},
		);
	});
	describe("emits", () => {
		it("should emit the clicked event when the button is clicked", async () => {
			await wrapper.trigger("click");
			expect(wrapper.emitted()).toHaveProperty("clicked");
			expect(wrapper.emitted("clicked")?.[0][0]).toBe(label);
		});
	});
});
