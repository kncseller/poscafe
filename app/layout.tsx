import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import localFont from 'next/font/local';


// const myFont = localFont({
//   src: './font.woff2',
// })
// myFont.className


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POS",
  description: "FaucetPos",
  keywords:"pos, FaucetPos"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="apple-mobile-web-app-title" content="My App" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="viewport" content="viewport-fit=cover,width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
  <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
 
  <meta name="auth-token" content="" /> 
  <title>POS</title> 

   <meta name="description" content="--" />    
<link rel="canonical" href="https://banhang.donggiatri.com/" />
<meta name="keywords" content="" />

<meta name="robots" content="index,follow,noodp" />
<meta property="og:type" content="website" />
<meta property="og:title" content="" />
<meta property="og:image" content="https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />
<meta property="og:image:secure_url" content="https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />
<meta property="og:description" content="--" />
<meta property="og:url" content="https://banhang.donggiatri.com/" />
<meta property="og:site_name" content="FAUCETPOS" />
 
      

 <meta name="viewport" content="viewport-fit=cover,width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
 
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
  

   
   <link rel="stylesheet" href="/build/csscore.css" /> 
   <link rel="stylesheet" href="/build/app.min.css" /> 
   <link rel="stylesheet" href="/build/app.css" />
   <link rel="stylesheet" href="/build/font.css" />
         <Script src="/build/jscore.js" strategy="beforeInteractive" /> 
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased shop share`}
      >
        <div className="screen_box">

  <div className="box-row-col">

      <div className="a-col">

      </div>

      <div className="a-col a-auto abc">

        <div  className="imgbox"> </div>

        <div className="abcd">

          <div className="lds-ripple"><div></div><div></div></div>

        </div>

      </div>

      <div className="a-col">

      </div>

  </div>

</div>
        {children}
      </body>
    </html>
  );
}
