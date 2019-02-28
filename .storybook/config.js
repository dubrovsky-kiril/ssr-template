import { configure } from "@storybook/react";

const stories = require.context("../client", true, /.stories.tsx$/);
const loadStories = () => stories.keys().forEach(storyKey => stories(storyKey));

configure(loadStories, module);
