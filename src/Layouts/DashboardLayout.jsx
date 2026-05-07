import { Outlet } from 'react-router-dom';
import BuyerSidebar from '../components/buyer/BuyerSidebar';

const DashboardLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
      {/* Dashboard Sidebar */}
     <BuyerSidebar/>
      {/* Dashboard Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;