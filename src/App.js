import GlobalStyle from "./global";
import { StyledDiv } from "./global";
import "./reset.css"
import Button from "./Components/Button";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <StyledDiv>
        <Button/>
      </StyledDiv>
      <StyledDiv>
        <Button variant="outline"/>
      </StyledDiv>
      <StyledDiv>
        <Button variant="text"/>
      </StyledDiv>
      <StyledDiv>
        <Button disabledShadow/>
      </StyledDiv>
      <StyledDiv>
      <Button disabled/>
      <Button disabled variant="text"/>
    </StyledDiv>
    </Fragment>
  );
}

export default App;
