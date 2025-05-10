import DashboardCard from './DashboardCard';
import { Users, Calendar, TriangleAlert } from 'lucide-react';

function InformationCards({ className }) {
  return (
    <div className={`${className} grid grid-cols-3 gap-2`}>
      <DashboardCard info={'Total Pasien'} stats={42}>
        <Users size={32} />
      </DashboardCard>
      <DashboardCard info={'Sesi Minggu Ini'} stats={42}>
        <Calendar size={32} />
      </DashboardCard>
      <DashboardCard info={'Pasien Butuh Perhatian'} stats={42}>
        <TriangleAlert size={32} />
      </DashboardCard>
    </div>
  );
}

export default InformationCards;
