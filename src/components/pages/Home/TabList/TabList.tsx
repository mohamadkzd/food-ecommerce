// "use client"

// import { getFetch } from "@/config/fetcher";
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import React from "react";

// interface TabPanelProps {
//     children?: React.ReactNode;
//     dir?: string;
//     index: number;
//     value: number;
//   }

// function TabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;

//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`full-width-tabpanel-${index}`}
//         aria-labelledby={`full-width-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }

//   function a11yProps(index: number) {
//     return {
//       id: `full-width-tab-${index}`,
//       'aria-controls': `full-width-tabpanel-${index}`,
//     };
//   }

// const TabList = async () => {
//   const data = await getFetch("/products/products-tabs");
//   console.log(data);

//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
//     <AppBar position="static">
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="secondary"
//         textColor="inherit"
//         variant="fullWidth"
//         aria-label="full width tabs example"
//       >
//         <Tab label="Item One" {...a11yProps(0)} />
//         <Tab label="Item Two" {...a11yProps(1)} />
//         <Tab label="Item Three" {...a11yProps(2)} />
//       </Tabs>
//     </AppBar>
//     <TabPanel value={value} index={0} dir={theme.direction}>
//       Item One
//     </TabPanel>
//     <TabPanel value={value} index={1} dir={theme.direction}>
//       Item Two
//     </TabPanel>
//     <TabPanel value={value} index={2} dir={theme.direction}>
//       Item Three
//     </TabPanel>
//   </Box>
//   )
// };

// export default TabList;

"use client";

import { getFetch } from "@/config/fetcher";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

interface Data {
  tabPanel: [];
  tabList: [];
}

interface TabPanel{
  id: number;  
  name: string;  
  slug: string;  
  category: string;  
  category_id: number;  
  primary_image: string;  
  status_value: number;  
  status: string;  
  price: number;  
  quantity: number;  
  description: string;  
  is_sale: boolean;  
  sale_price: number;  
  date_on_sale_from: string; // تاریخ به صورت String، می‌توان از نوع Date هم استفاده کرد  
  date_on_sale_to: string; // تاریخ به صورت String، می‌توان از نوع Date هم استفاده کرد  
  images: ProductImage[];  
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TabList: React.FC = () => {
  const [data, setData] = useState<Data>(); // فرض بر این است که داده‌ها رشته هستند
  const [value, setValue] = useState(0);
  const theme = useTheme();

  // بارگذاری داده‌ها با استفاده از useEffect
  useEffect(() => {
    const fetchData = async () => {
      const result = await getFetch("/products/products-tabs");
      setData(result); // فرض بر این است که result یک آرایه از تب‌ها است
    };
    fetchData();
  }, []);
  console.log(data);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {data?.tabList.map((item:[]) => {
            console.log(item);

            return <Tab label={item} {...a11yProps(0)} />;
          })}
        </Tabs>
      </AppBar>

      {data?.tabPanel.map((elem: []) =>
        elem.map((item: TabPanel) => {
          console.log("item", item);

          return <h1>{item.name}</h1>;
        })
      )}
      <TabPanel value={value} index={0} dir={theme.direction}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default TabList;
