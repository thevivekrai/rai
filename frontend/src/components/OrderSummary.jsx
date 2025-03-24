import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { MoveRight, Send } from "lucide-react";

const OrderSummary = () => {
	const { total, subtotal, cart } = useCartStore();
	const formattedSubtotal = subtotal.toFixed(2);

	const handleContactTeam = () => {
		// Replace with your WhatsApp number
		const whatsappNumber = "+1234567890";
		const message = `Hi, I'm interested in purchasing ${cart.length} items from your store. Total value: $${formattedSubtotal}`;
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, "_blank");
	};

	return (
		<motion.div
			className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<p className='text-xl font-semibold text-emerald-400'>Order summary</p>

			<div className='space-y-4'>
				<div className='space-y-2'>
					<dl className='flex items-center justify-between gap-4'>
						<dt className='text-base font-normal text-gray-300'>Total price</dt>
						<dd className='text-base font-medium text-white'>₹{formattedSubtotal}</dd>
					</dl>
				</div>

				<motion.button
					className='flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleContactTeam}
				>
					<Send className="w-5 h-5 mr-2" />
					Contact Team on WhatsApp
				</motion.button>

				<div className='flex items-center justify-center gap-2'>
					<span className='text-sm font-normal text-gray-400'>or</span>
					<Link
						to='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-emerald-400 underline hover:text-emerald-300 hover:no-underline'
					>
						Continue Shopping
						<MoveRight size={16} />
					</Link>
				</div>
			</div>
		</motion.div>
	);
};
export default OrderSummary;
