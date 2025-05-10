import { Users } from 'lucide-react';
import { Card } from './ui/card';

function InformationCards({ className }) {
  return (
    <div className={`${className} grid grid-cols-3`}>
      <Card className="w-72 p-4 h-25">
        <div className="flex flex-row items-center gap-4 h-full">
          <Users size={32} />
          <div>
            <p className="font-normal text-gray-500">Total Pasien</p>
            <p className="font-semibold text-2xl">42</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default InformationCards;
