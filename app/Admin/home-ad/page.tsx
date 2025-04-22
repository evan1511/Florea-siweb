const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <div className="font-bold">Evan</div>
        </div>
        <div className="text-lg">Dashboard</div>
        <div className="flex items-center space-x-4">
          <div>Search</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 flex flex-col items-center">
            <div className="text-xl font-semibold mb-4">Catalog</div>
            <div className="text-3xl font-bold">5.560</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 flex flex-col items-center">
            <div className="text-xl font-semibold mb-4">Total Income</div>
            <div className="text-3xl font-bold">Rp 984.562.433.04</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 flex flex-col items-center">
            <div className="text-xl font-semibold mb-4">Review</div>
            <div className="text-3xl font-bold">19.302</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
