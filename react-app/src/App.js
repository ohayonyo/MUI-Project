import {
  Box,
  Container,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          direction={"row"}
          // flexDirection={'row'}
          spacing={{ xs: 0, sm: 2, md: 2, lg: 2, xl: 2 }}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        {/* <Container
          maxWidth="lg"
          sx={{ borderStyle: "dashed", borderColor: "red", height:'800px' }}
        >
          <Box
            display={'flex'}
            flexDirection={'row'}
            sx={{borderStyle:'solid',height:'50%'}}
            justifyContent={'space-between'}      
            alignItems={'center'}      
          >
            <Box bgcolor={'red'} alignSelf={'flex-end'}>hello</Box>
            <Box bgcolor={'blue'}>my</Box>
            <Box bgcolor={'orange'} alignSelf={'flex-start'}>name</Box>
            <Box bgcolor={'secondary.main'}>is</Box>
            <Box bgcolor={'warning.main'} alignSelf={'flex-end'}>Yoad</Box>
          </Box>
        </Container> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
