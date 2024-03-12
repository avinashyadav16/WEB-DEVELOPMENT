import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <h1 className="bg-blue-900 rounded-xl p-4">Tailwind CSS Test</h1>
      <div className="flex justify-center">
        <div className="mx-4">
          <Cards
            imageUrl="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            title="Delba"
            description="Lorem ipsum dolor sit amet"
            buttonText="View Profile →"
          />
        </div>
        <div className="mx-4">
          <Cards
            imageUrl="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            description="Another description here."
            buttonText="Learn More →"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
