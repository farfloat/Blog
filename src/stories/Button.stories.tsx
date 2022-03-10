import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BackToButton } from "../components/Atom/Buttons/back";

export default {
  title: "BackToButton",
  component: BackToButton,
} as ComponentMeta<typeof BackToButton>;

export const Template: ComponentStory<typeof BackToButton> = (args) => (
  <BackToButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  href: "",
  text: "トップへ戻る",
};
