import { Box, Container, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction={"row"}
        spacing={{ xs: 0, sm: 2, md: 2, lg: 2, xl: 2 }}
        justifyContent={"space-between"}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
