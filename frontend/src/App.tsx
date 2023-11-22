import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import router from "./Router";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading ....</p>} />
    </ChakraProvider>
  );
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default App;
