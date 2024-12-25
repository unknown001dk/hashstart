import { ServiceIcons } from '../../data/icons';

export function ServiceIcon({ name }) {
  const IconComponent = ServiceIcons[name];
  return IconComponent ? <IconComponent className="h-12 w-12" /> : null;
}