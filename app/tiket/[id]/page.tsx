import { IoTicketOutline } from "react-icons/io5";

function TicketDetailPage() {
  return (
    <div className="px-20 mb-10 text-white">
      <div className="w-full flex flex-col items-center justify-center bg-green-700 rounded-2xl p-10 pb-20 mt-28">
        <h1 className="text-5xl font-semibold">
          Pembayaran Berhasil!
        </h1>
        <div className="relative mt-10">
          <img src="/ticket-card.png" alt="ticket-card" />
          <h4 className="text-4xl font-semibold absolute text-white top-[50%] left-14 -translate-y-[50%] text-center -rotate-90">
            Tiket<br />Masuk
          </h4>
          <div className="absolute inset-y-0 w-[73%] top-0 right-0 flex items-center">
            <form action="" className="p-8 max-w-sm space-y-3">
              <div>
                <label htmlFor="name" className="block w-max font-semibold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Masukan nama"
                  value="Salman Miqdad"
                  className="w-full text-black border-2 border-black rounded-md px-4 py-2 font-bold"
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="date" className="block w-max font-semibold">
                  Jadwal Pengunjungan
                </label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="Masukan nama"
                  value="25, Nov 2023"
                  className="w-full text-black border-2 border-black rounded-md px-4 py-2 font-bold"
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nohp" className="block w-max font-semibold">
                  No. Handphone
                </label>
                <input
                  type="text"
                  name="nohp"
                  id="nohp"
                  placeholder="Masukan nama"
                  value="082316126449"
                  className="w-full text-black border-2 border-black rounded-md px-4 py-2 font-bold"
                  readOnly
                />
              </div>

              <div className="absolute bottom-6 right-14">
                <h4>Jumlah Tiket</h4>
                <div className="flex items-center justify-between py-2 px-2.5 bg-white text-black rounded-lg border-2 border-gray-700">
                  <IoTicketOutline fontSize={32} />
                  <span className="block text-2xl font-bold">03</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketDetailPage