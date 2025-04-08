import localFont from 'next/font/local';  

const vazirFont = localFont({  
  src: [  
    {  
      path: '../../public/fonts/Vazir.eot',  
      style: 'normal',  
      weight: '400', // وزن مناسب را تنظیم کنید  
    },  
    {  
      path: '../../public/fonts/Vazir.ttf',  
      style: 'normal',  
      weight: '400',  
    },  
    {  
      path: '../../public/fonts/Vazir.woff',  
      style: 'normal',  
      weight: '400',  
    },  
    {  
      path: '../../public/fonts/Vazir.woff2',  
      style: 'normal',  
      weight: '400',  
    },  
  ],  
});  

export default vazirFont;  