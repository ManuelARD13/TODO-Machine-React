import { TODOProvider } from "./TodoContext/TodoContext";
import { AppUi } from "./components/AppUi/AppUi";

function App () {
  return (
    <TODOProvider>
      <AppUi />
    </TODOProvider>    
  );
}

export {App}