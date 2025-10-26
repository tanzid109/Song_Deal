import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Ticket, Clock } from 'lucide-react';
import { TbBell } from 'react-icons/tb';

export default function Notification() {
    const notifications = [
        {
            id: 1,
            title: 'New Ticket Purchase',
            description: 'James Miller purchased 5 tickets',
            time: '3 min ago',
            icon: Ticket,
        },
        {
            id: 2,
            title: 'Winner Announcement',
            description: 'The winner for Raffle #123 has been announced.',
            time: '1hours ago',
            icon: Ticket,
        },
        {
            id: 3,
            title: 'Low Ticket Alert',
            description: 'Raffle #123 has only 50 tickets left',
            time: '2hours ago',
            icon: Ticket,
        },
        {
            id: 4,
            title: 'New Ticket Purchase',
            description: 'Isabella Moore purchased 2 tickets.',
            time: '3hours ago',
            icon: Ticket,
        },
    ];

    return (
        <div className="flex items-center justify-center">
            <Dialog>
                <DialogTrigger asChild>
                    <TbBell className="text-3xl text-[#635BFF]" />
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold">Notification</DialogTitle>
                    </DialogHeader>
                    <div className=" space-y-1 h-auto overflow-y-auto">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="mt-1 p-2 bg-purple-100 rounded-lg shrink-0">
                                    <Ticket className="w-4 h-4 text-purple-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm text-gray-900 mb-1">
                                        {notification.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {notification.description}
                                    </p>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <Clock className="w-3 h-3" />
                                        <span>{notification.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="pt-2 text-center">
                            <Button
                                variant="secondary"
                                size="sm"
                            >
                                View More..
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
