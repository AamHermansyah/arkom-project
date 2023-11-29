'use client'

import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Ticket } from "@/index.types";
import { useRouter } from "next/navigation";
import { formatDate, formattedPrice } from "@/lib/utils";

function NotificationPage() {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState<Omit<Ticket, 'user'>[] | null>(null);

  const navigate = useRouter();

  useEffect(() => {
    fetch('/api/ticket', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ('Bearer ' + localStorage.getItem('token') || '').replaceAll('"', '')
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setTickets(res.data);
          return;
        }

        if (res.status === 401) {
          alert(`${res.status}: ${res.message}`);
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          window.location.href = '/login';
          return;
        }

        alert(`${res.status}: ${res.message}`);
        navigate.push('/');
      })
      .catch((error) => {
        alert(`${error.status}: ${error.message}`);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="px-10 lg:px-20 pt-28 pb-20 min-h-screen">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        Notifikasi
        <IoMdNotificationsOutline fontSize={32} />
      </h2>
      {loading && (
        <div className="mt-4 min-h-[200px] p-10 flex items-center justify-center">
          <h2 className="text-xl animate-pulse">
            Loading...
          </h2>
        </div>
      )}
      {!loading && tickets !== null && (
        <div className="mt-4">
          {tickets.map((ticket) => (
            <Link href={`/tiket/${ticket.id}`} key={ticket.id} className="block hover:bg-green-700 hover:text-white">
              <div className="relative w-full flex items-center justify-between gap-2 py-2 px-10 border-t">
                <HiOutlineTicket fontSize={40} />
                <h3 className="text-xl font-semibold">Tiket Masuk</h3>
                <h3 className="text-lg">{formatDate(ticket.date)}</h3>
                <span className="block text-2xl font-bold">
                  {formattedPrice.format(ticket.totalPrice)}
                </span>
                <IoChevronForward fontSize={24} className="absolute top-[50%] -translate-y-[50%] right-0" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default NotificationPage