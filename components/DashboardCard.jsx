import { Users } from 'lucide-react';
import { Card } from './ui/card';

function DashboardCard({ children, info, stats }) {
  return (
    <div>
      <Card className="w-full p-4 h-25">
        <div className="flex flex-row items-center gap-6 h-full">
          {children}
          <div>
            <p className="font-normal text-gray-500">{info}</p>
            <p className="font-semibold text-2xl">{stats}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default DashboardCard;
