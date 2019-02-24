import { configure } from "@storybook/react";

const stories = require.context("../src", true, /.stories.tsx$/);

function loadStories() {
  stories.keys().forEach(storyKey => stories(storyKey));
}

configure(loadStories, module);
