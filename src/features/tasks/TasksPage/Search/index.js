import { StyledInput } from "../Form/styled";
import { SearchDiv } from "./styled";
import searchQueryParameterName from "../searchQueryParameterName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

const SearchInput = () => {
  const query = useQueryParameter(searchQueryParameterName);
  const replaceQueryParameter = useReplaceQueryParameter()

  const onInputChange = ({ target }) => {
   replaceQueryParameter({
    key: searchQueryParameterName,
    value: target.value.trim() !== "" ? target.value : undefined,
   });
  };

  return (
    <SearchDiv>
      <StyledInput
        placeholder="Szukana fraza"
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchDiv>)
};

export default SearchInput;