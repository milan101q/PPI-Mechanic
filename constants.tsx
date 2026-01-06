
import React from 'react';
import { 
  Wrench, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Thermometer, 
  Disc, 
  Gauge, 
  Search,
  Droplet,
  Battery,
  Wind
} from 'lucide-react';
import { ServiceItem, BusinessInfo } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Pre Purchase Inspection LLC",
  address: "25354 Pleasant Valley Rd STE 135, Chantilly, VA 20152",
  phone: "(571) 349-6760",
  hours: {
    Monday: "9 AM – 6 PM",
    Tuesday: "9 AM – 6 PM",
    Wednesday: "9 AM – 6 PM",
    Thursday: "9 AM – 6 PM",
    Friday: "9 AM – 6 PM",
    Saturday: "9 AM – 6 PM",
    Sunday: "Closed"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'diag',
    title: 'Advanced Diagnostics',
    description: 'Expert diagnostics for BMW, Mercedes, Porsche and more using factory-level tools.',
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 'check-engine',
    title: 'Check Engine Light',
    description: 'Precision troubleshooting of fault codes and sensor malfunctions.',
    icon: <Search className="w-6 h-6" />
  },
  {
    id: 'brakes',
    title: 'Brake Service',
    description: 'Complete brake inspections, rotor surfacing, and pad replacements.',
    icon: <Disc className="w-6 h-6" />
  },
  {
    id: 'oil',
    title: 'Fluid & Oil Services',
    description: 'Premium synthetic oil changes and transmission fluid flushes.',
    icon: <Droplet className="w-6 h-6" />
  },
  {
    id: 'electrical',
    title: 'Electrical Systems',
    description: 'Specialized repairs for complex European electrical architectures.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 'cooling',
    title: 'Cooling Systems',
    description: 'Radiator, water pump, and thermostat replacements to prevent overheating.',
    icon: <Thermometer className="w-6 h-6" />
  },
  {
    id: 'ac',
    title: 'AC & Heating',
    description: 'Recharging and repair of climate control systems for year-round comfort.',
    icon: <Wind className="w-6 h-6" />
  },
  {
    id: 'suspension',
    title: 'Suspension & Steering',
    description: 'Control arms, bushings, and steering rack repairs for peak handling.',
    icon: <Gauge className="w-6 h-6" />
  },
  {
    id: 'battery',
    title: 'Battery & Charging',
    description: 'Testing and replacement of high-performance European batteries.',
    icon: <Battery className="w-6 h-6" />
  }
];

export const BRANDS = [
  "BMW", "Mercedes-Benz", "Porsche", "Audi", "Volkswagen", 
  "MINI", "Volvo", "Land Rover", "Jaguar", "Alfa Romeo"
];
