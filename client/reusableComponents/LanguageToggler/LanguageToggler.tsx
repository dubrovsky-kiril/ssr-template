import * as React from "react";
import styled from "styled-components";

const StyledLanguageToggler = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  padding: 0;
`;

const StyledLanguageTogglerItem = styled.li`
  &:not(:last-child) {
    padding-right: 15px;
  }
`;

type LanguageTogglerTypes = {
  /** defines all available languages keys */
  languages: Array<string>;
  /** defines key for active language */
  activeLanguage: string;
  /** provides handler function for toggling active lanuage */
  toggleActiveLangauge(event: React.FormEvent<HTMLElement>): void;
};

const renderTogglerItems = toggleActiveLangauge => (language, index) => (
  <StyledLanguageTogglerItem
    key={index}
    onClick={toggleActiveLangauge(language)}
  >
    {language}
  </StyledLanguageTogglerItem>
);

const LanguageToggler: React.FunctionComponent<LanguageTogglerTypes> = ({
  languages,
  activeLanguage,
  toggleActiveLangauge
}) => (
  <StyledLanguageToggler>
    {languages.map(renderTogglerItems(toggleActiveLangauge))}
  </StyledLanguageToggler>
);

export default LanguageToggler;
