import React from "react";
import styled from "styled-components";
import Resource from "../Resource";
import search from "../../utils/search";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${({ horizontal }) => (horizontal ? "" : "overflow-x: scroll;")}
`;

const Inner = styled.div``;

const TitleBar = styled.div`
  display: flex;
  background-color: #e4e4e4;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 20px;
  padding: 5px;
`;

const List = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  ${({ horizontal }) => (horizontal ? "overflow-y: scroll;" : "")}
`;

const ListInner = styled.div`
  display: flex;
  flex-direction: row;
  ${({ horizontal }) =>
    horizontal ? "" : "flex-wrap: wrap; justify-content: center;"}
  ${({ horizontal }) =>
    horizontal ? "padding: 20px;" : "padding-bottom: 100px;"}
`;

const CardContainer = styled.div`
  display: flex;
  padding: 15px 5px;
  overflow: hidden;
  justify-content: center;
`;

const AddRand = styled.button`
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
  margin-left: 20px;
  appearance: none;
`;

class ResourceList extends React.Component {
  constructor(props) {
    super(props);

    let loading = false;
    let resources = props.resources;

    if (props.search) {
      const searchProps = this.search(props);
      resources = searchProps.resources || [];
      loading = !searchProps.resources;
    }

    this.state = {
      loading,
      resources
    };
  }

  componentWillReceiveProps(props) {
    let loading = false;
    let resources = props.resources;

    if (props.search) {
      const searchProps = this.search(props);
      resources = searchProps.resources || this.state.resources;
      loading = !searchProps.resources;
    }

    this.setState({ loading, resources });
  }

  search(props) {
    if (this.cancelSearch) this.cancelSearch();

    const { resources, cancel } = search(
      props.resources,
      props.search,
      filteredResources => {
        this.setState({ resources: filteredResources, loading: false });
      }
    );

    this.cancelSearch = cancel;

    return { resources: resources };
  }

  render() {
    const { horizontal, title, character, addRand } = this.props;
    const { loading, resources } = this.state;

    return (
      <Container horizontal={horizontal}>
        <Inner>
          {title && (
            <TitleBar>
              <Title horizontal={horizontal}>
                {title} {loading && "(Loading)"}
              </Title>
              {typeof character === "number" && (
                <AddRand onClick={addRand}>Add Random Item</AddRand>
              )}
            </TitleBar>
          )}

          <List horizontal={horizontal}>
            <ListInner horizontal={horizontal}>
              {resources.map((id, i) => (
                <CardContainer key={`${id}-${i}`} horizontal={horizontal}>
                  <Resource id={id} baseSize={10} character={character} />
                </CardContainer>
              ))}
            </ListInner>
          </List>
        </Inner>
      </Container>
    );
  }
}

export default ResourceList;
