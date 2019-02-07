import React, { useState } from "react";
import styled from "styled-components";
import { resourcesRoutes } from "../config/routes";
import Routes from "../components/Routes";
import AddButton from "../components/AddButton";
import resourceItems from "../config/resourceItems";
import TextInput from "../components/Forms/TextInput";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`;

const ButtonPosition = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const Search = styled.div`
  display: flex;
  border-bottom: 1px solid #717171;
  box-shadow: 0 0 5px #2727277a;
  position: relative;
  z-index: 100;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  max-width: 900px;
  flex: 1;
`;

const Clear = styled.button`
  cursor: pointer;
  font-size: 16px;
  padding: 10px 5px;
  appearance: none;
  appearance: none;
`;

const ResourcesScene = () => {
  const [search, setSearch] = useState(null);
  const finalSearch = search === "" ? null : search;

  return (
    <Container>
      <Search>
        <Inner>
          <TextInput
            placeholder="Search"
            value={finalSearch || ""}
            onChange={setSearch}
          />
          <Clear onClick={() => setSearch(null)}>Clear Search</Clear>
        </Inner>
      </Search>
      <Routes routes={resourcesRoutes} search={finalSearch} />
      <ButtonPosition>
        <AddButton listItems={resourceItems} />
      </ButtonPosition>
    </Container>
  );
};

export default ResourcesScene;
