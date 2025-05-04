import React from 'react'
import { QRCodeCanvas } from 'qrcode.react';


const MyQRCode = () => {
  return (
    <div>
    <QRCodeCanvas value="https://arquivivian.vercel.app" size={200} />
  </div>
  )
}

export default MyQRCode