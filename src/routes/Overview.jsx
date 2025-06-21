const Overview = () => {
  return (
    <div className="text-[#072635] font-[Manrope]">
      <h2 className="text-3xl font-bold my-4">Overview</h2>
      <p className="text-base">
        Welcome to the healthcare dashboard. Here you can monitor key metrics,
        upcoming appointments, patient stats, and system alerts.
      </p>
      {/* Placeholder for metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-[#ffffff] p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold">Total Patients</h4>
          <p className="text-xl font-bold">132</p>
        </div>
        <div className="bg-[#ffffff] p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold">Today&#39;s Appointments</h4>
          <p className="text-xl font-bold">18</p>
        </div>
        <div className="bg-[#ffffff] p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold">Lab Results Pending</h4>
          <p className="text-xl font-bold">5</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
