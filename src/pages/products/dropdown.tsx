import { useState } from "react";
import { FilePenIcon, TrashIcon, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface DropdownProps {
  productId: number;
  onDelete: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ productId, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <Button variant="secondary" size="icon" onClick={toggleDropdown}>
        <MoreVertical className="h-4 w-4" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
          <Link to={`/edit-product/${productId}`} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors">
            <FilePenIcon className="h-4 w-4" />
            Edit
          </Link>
          <Button variant="destructive" size="sm" className="w-full text-left flex items-center gap-2 px-4 py-2" onClick={onDelete}>
            <TrashIcon className="h-4 w-4" />
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
