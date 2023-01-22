import AddPark from "./components/AddPark";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <h1>BMX Parks</h1>
        <AddPark />
      </main>
    </div>
  );
}

export default App;