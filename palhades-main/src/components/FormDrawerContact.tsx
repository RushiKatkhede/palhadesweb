import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FormDrawerContact({ isOpen, onClose }: Props) {
  if (!isOpen) return null; // ← Prevents rendering when closed

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose} // Close drawer when clicking outside
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed right-0 top-0 h-full max-w-md w-full bg-white p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <Dialog.Title className="text-xl font-bold">Contact Us</Dialog.Title>
              <button onClick={onClose}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="mt-4 flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border rounded"
              />
              <textarea
                placeholder="Your Message"
                className="p-2 border rounded resize-none"
                rows={4}
              />
              <button
                type="submit"
                className="bg-theme text-white py-2 px-4 rounded hover:bg-header"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
