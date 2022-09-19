import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div class="bg-gray-50 h-full md:h-screen">
      <Header />
      <div class="grid grid-cols-12 gap-6">
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
