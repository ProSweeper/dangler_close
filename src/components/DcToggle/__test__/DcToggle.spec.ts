import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DcToggle from "../DcToggle.vue";
import { ref } from "vue";

const id = "testingId";
const checked = ref(false);

const createWrapper = () => {
	const wrapper = mount(DcToggle, {
		props: {
			id,
			checked: checked.value,
		},
	});
	return wrapper;
};

describe("DcToggle", () => {
	it("should render the component", () => {
		const wrapper = createWrapper();
		const component = wrapper.findComponent(DcToggle);
		expect(component.exists()).toBeTruthy();
	});
	it("should register the id prop as the input id", () => {
		const wrapper = createWrapper();
		const toggle = wrapper.find(`#${id}`);
		expect(toggle.exists()).toBeTruthy();
	});
	it("should emit updateChecked when the change event is emitted", async () => {
		const wrapper = createWrapper();
		const toggle = wrapper.find(`#${id}`);
		await toggle.trigger("change");
		expect(wrapper.emitted()).toHaveProperty("updateChecked");
	});
	it("should have the correct data attached to the emit", async () => {
		const wrapper = createWrapper();
		const toggle = wrapper.find(`#${id}`);
		await toggle.trigger("change");
		expect(wrapper.emitted("updateChecked")?.[0][0]).toBe(id);
	});
});
