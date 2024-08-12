import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading.jsx";

const StyledApp = styled.div`
    background-color: orangered;
    padding: 20px;
`

function App() {
    return (
        <>
            <GlobalStyles/>
            <StyledApp>
                <Heading type="h1">Hello World</Heading>
                <Button>Check In</Button>
                <Button>Check Out</Button>
                <Input type="number" defaultValue={0}/>
            </StyledApp>
        </>
    )
}

export default App;