import { Menu, X } from 'lucide-react';

export function MobileMenuButton({ isOpen, onClick }) {
  return (
    <div className="md:hidden flex items-center">
      <button onClick={onClick} className="text-gray-700">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
}