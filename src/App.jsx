function App() {
  const result = 20;
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">계산기</h1>
      <div className="text-3xl font-black mb-4">{result}</div>
      <div className="mb-4"></div>
    </div>
  );
}

export default App;
