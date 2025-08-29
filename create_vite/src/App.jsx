import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-screen gap-10 bg-gray-900 text-white">
        <Card hotel="Hotel Delhi" img="https://images.unsplash.com/photo-1756296576686-decd6d93f699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"  detail="This is"/>
        <Card  hotel="Hotel Goa" img="https://images.unsplash.com/photo-1756296576613-ba165a77555f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" detail="This is"/>
      </div>
    </>
    
  );
}

export default App;
