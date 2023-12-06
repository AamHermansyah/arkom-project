"use client"

import { formatDate, formattedPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const paymentMethods = [
  { id: 1, name: 'Dana', logo: '/Danalogo.png' },
  { id: 2, name: 'Ovo', logo: '/Ovologo.png' },
  { id: 3, name: 'Gopay', logo: '/Gopaylogo.png' },
  { id: 4, name: 'Shoopepay', logo: '/Shoopepaylogo.png' },
];

const PRICE = 10000;

function Pembayaran() {
  const [paymentMethodId, setPaymentMethodId] = useState(0);
  const [qty, setQty] = useState(1);
  const [date, setDate] = useState('');
  const [activeTabId, setActiveTabId] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  const onIncrement = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const onDecrement = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  const handleBayar = () => {
    setLoading(true);

    const data = {
      qty,
      price: PRICE,
      totalPrice: qty * PRICE,
      methodPayment: paymentMethods[paymentMethodId - 1].name,
      date
    }

    fetch('/api/ticket', {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ('Bearer ' + localStorage.getItem('token') || '').replaceAll('"', '')
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 201) {
          navigate.push('/tiket/' + res.data.id);
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
      })
      .catch((error) => {
        alert(`${error.status}: ${error.message}`);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    const userStringify = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (!userStringify || !token) navigate.push('/');
  }, []);

  return (
    <div className="px-20 mb-10 text-white">
      <div className="w-full min-h-[535px] flex flex-col items-center justify-center bg-green-700 rounded-2xl p-10 pb-20 mt-28">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-4">
          {activeTabId === 0 && (
            <>
              <h1 className="text-[40px] font-semibold leading-[100px] tracking-tigh text-cente">
                Pilih Pembayaran
              </h1>

              <div className="flex items-center flex-wrap gap-6">
                {paymentMethods.map((payment) => (
                  <button
                    onClick={() => setPaymentMethodId(payment.id)}
                    key={payment.id}
                    className={`
                  ${paymentMethodId === payment.id ? 'border-2 border-black' : ''}
                  w-[70.33px] h-16 px-3 py-2.5 bg-white rounded-md shadow
                `}
                  >
                    <img src={payment.logo} alt={`Logo ${payment.name}`} className="text-black" />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-2 text-center">
                <div className="text-center">
                  <h2 className="text-lg mb-2">Tanggal Pengunjungan</h2>
                  <input
                    type="date"
                    className="w-full text-black px-4 py-3 rounded-md"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className="text-lg">Jumlah Tiket</h2>
                  <div className="flex items-center justify-between gap-2 mt-2">
                    <button onClick={onDecrement} className="text-2xl font-bold w-10 aspect-square p-1 rounded-full bg-white text-green-500 active:scale-95 transition">
                      -
                    </button>
                    <input type="text" value={qty} className="px-4 py-2 rounded text-black text-center text-lg font-bold w-[50px]" />
                    <button onClick={onIncrement} className="text-2xl font-bold w-10 aspect-square p-1 rounded-full bg-white text-green-500 active:scale-95 transition">
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full mt-4 text-center">
                <button
                  disabled={(paymentMethodId === 0) || date === ''}
                  onClick={() => setActiveTabId(1)}
                  className="px-10 py-2.5 bg-blue-400 rounded-[5px] disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  <span className="block text-white text-xl font-semibold leading-tight tracking-tight">
                    Next
                  </span>
                </button>
              </div>
            </>
          )}

          {activeTabId === 1 && (
            <div className="w-full text-center max-w-lg">
              <h2 className="text-6xl font-bold">{formattedPrice.format(qty * PRICE)}</h2>
              <p className="mt-2">Lakukan pembayaran dengan nominal diatas.</p>

              <div className="text-left mt-6 bg-white text-green-700 p-10 rounded-md">
                <h6 className="text-2xl font-bold">Detail</h6>
                <table className="w-full mt-2">
                  <tbody>
                    <tr>
                      <td className="pr-4 py-1">Metode Pembayaran</td>
                      <td className="pl-4 py-1">{paymentMethods[paymentMethodId - 1].name}</td>
                    </tr>
                    <tr>
                      <td className="pr-4 py-1">Tanggal Pengunjungan</td>
                      <td className="pl-4 py-1">{formatDate(date)}</td>
                    </tr>
                    <tr>
                      <td className="pr-4 py-1">Jumlah Tiket</td>
                      <td className="pl-4 py-1">{qty}</td>
                    </tr>
                    <tr>
                      <td className="pr-4 py-1">Harga Total</td>
                      <td className="pl-4 py-1">{qty} x {formattedPrice.format(PRICE)}</td>
                    </tr>
                    <tr>
                      <td className="pr-4 py-1"></td>
                      <td className="pl-4 py-1 font-bold">{formattedPrice.format(qty * PRICE)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-left mt-2 italic">
                <sup>*</sup>Silahkan klik tombol "Saya telah membayar" jika anda sudah melakukan pembayaran!
              </p>
              <div className="w-full flex justify-between mt-4 text-center">
                <button disabled={loading} onClick={() => setActiveTabId(0)} className="px-10 py-2.5 border-2 border-white rounded-[5px]">
                  <span className="block text-white text-xl font-semibold leading-tight tracking-tight">
                    Kembali
                  </span>
                </button>
                <button disabled={loading} onClick={handleBayar} className="px-10 py-2.5 bg-blue-400 rounded-[5px]">
                  {loading ? (
                    <AiOutlineLoading3Quarters
                      fontSize={24}
                      className="mx-auto animate-spin"
                    />
                  ) : (
                    <span className="block text-white text-xl font-semibold leading-tight tracking-tight">
                      Saya telah membayar
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
