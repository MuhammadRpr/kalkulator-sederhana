function Calculator() {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <div className="text-6xl text-right bg-gray-100 p-3 rounded-xl mb-6">
        0
      </div>
      <div className=" grid grid-cols-4 gap-4">

      </div>

    </div>
  )
}


function App() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-950 h-dvh flex items-center justify-center">
      <Calculator />
    </div>
  )
}

export default App;