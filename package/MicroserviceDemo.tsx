import { Rocket } from 'lucide-react';

export function MicroserviceDemo() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="shrink-0">
        <Rocket className="h-12 w-12 text-blue-500" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Micro Frontend</div>
        <p className="text-slate-500">Ready to be shared!</p>
      </div>
    </div>
  );
}
