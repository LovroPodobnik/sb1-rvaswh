import React from 'react';
import { MetricBar } from './components/MetricBar';
import { ToxicTrueBar } from './components/ToxicTrueBar';
import { MetricSection } from './components/MetricSection';
import { BarChart3, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Leadership Metrics Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Habit Index Section */}
          <MetricSection title="Habit Index">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">HS First</span>
                </div>
                <MetricBar value={87} maxValue={100} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">HS Last</span>
                </div>
                <MetricBar value={88} maxValue={100} circleColor="blue-600" />
              </div>
            </div>
          </MetricSection>

          {/* Trust NPS Section */}
          <MetricSection title="Trust NPS">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">HS First</span>
                </div>
                <MetricBar value={75} maxValue={100} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">HS Last</span>
                </div>
                <MetricBar value={93} maxValue={100} circleColor="blue-600" />
              </div>
            </div>
          </MetricSection>

          {/* Toxic vs True Leaders Section */}
          <MetricSection title="Toxic vs True Leaders">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">HS First</span>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 text-sm">85% True Leaders</span>
                  </div>
                </div>
                <ToxicTrueBar toxic={0} true={85} />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">HS Last</span>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 text-sm">100% True Leaders</span>
                  </div>
                </div>
                <ToxicTrueBar toxic={0} true={100} />
              </div>
            </div>
          </MetricSection>
        </div>
      </div>
    </div>
  );
}

export default App;