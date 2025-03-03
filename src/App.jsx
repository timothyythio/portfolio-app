
import './App.css'

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Tailwind wewew Test</h1>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4 w-full max-w-screen-lg mx-auto">
          <div className="bg-blue-500 text-white p-6 text-center rounded-lg">1</div>
          <div className="bg-green-500 text-white p-6 text-center rounded-lg">2</div>
          <div className="bg-red-500 text-white p-6 text-center rounded-lg">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
