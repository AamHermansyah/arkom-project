import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mt-[10%]">
      <div className="w-[1440px] h-44 px-[104px] py-16 bg-gray-900 flex-col justify-center items-start gap-8 inline-flex">
          <div className="self-stretch justify-between items-start inline-flex">
              <div className="text-neutral-100 text-sm font-normal font-['Inter'] leading-[21px]">Copyright ARKOM Kel 1-2023</div>
              <div className="justify-start items-start gap-8 flex">
                  <div className="text-center text-slate-400 text-sm font-normal font-['Inter'] leading-[21px]">Privacy Policy</div>
                  <div className="text-center text-slate-400 text-sm font-normal font-['Inter'] leading-[21px]">Terms & Conditions</div>
                  <div className="text-center text-slate-400 text-sm font-normal font-['Inter'] leading-[21px]">Cookie Policy</div>
                  <div className="text-center text-slate-400 text-sm font-normal font-['Inter'] leading-[21px]">Contact</div>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer