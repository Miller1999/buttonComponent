import GlobalStyle from "./global";
import { StyledDiv } from "./global";
import "./reset.css"
import Button from "./Components/Button";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <h1>Buttons</h1>
      <h2>Button</h2>
      <StyledDiv>
        <Button/>
      </StyledDiv>
      <h2>variant = outline</h2>
      <StyledDiv>
        <Button variant="outline"/>
      </StyledDiv>
      <h2>variant = text</h2>
      <StyledDiv>
        <Button variant="text"/>
      </StyledDiv>
      <h2>DisabledShadow</h2>
      <StyledDiv>
        <Button disabledShadow/>
      </StyledDiv>
      <h2>Disabled</h2>
      <StyledDiv>
        <Button disabled/>
        <Button disabled variant="text"/>
      </StyledDiv>
      <h2>startIcon or endIcon</h2>
      <StyledDiv>
        <Button startIcon/>
        <Button endIcon/>
      </StyledDiv>
      <h2>Sizes</h2>
      <StyledDiv>
        <Button size="sm"/>
        <Button size="md"/>
        <Button size="lg"/>
      </StyledDiv>
      <h2>Colors</h2>
      <StyledDiv>
        <Button color="default"/>
        <Button color="primary"/>
        <Button color="secondary"/>
        <Button color="danger"/>
      </StyledDiv>
      <h2 style={{textAlign:"center"}}>Developed by Miller Arias - Miller1999</h2>
    </Fragment>
  );
}

export default App;
