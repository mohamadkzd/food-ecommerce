"use client";

import { getFetch } from "@/config/fetcher";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { Data, TabPanel, TabPanelProps, Timage } from "./type";
import Image from "next/image";

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
  //   console.log(data);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ bgcolor: "background.paper", width: "50%" }}
      className="mt-[100px] mx-auto"
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {data?.tabList.map((item: [], index: number) => {
            // console.log(item);

            return <Tab label={item} key={index} {...a11yProps(0)} />;
          })}
        </Tabs>
      </AppBar>

      {data?.tabPanel.map((elem: []) =>
        elem.map((item: TabPanel) => {
          //   console.log("item", item);
          return (
            <TabPanel
              key={item.id}
              value={value}
              index={item.category_id - 1}
              dir={theme.direction}
            >
              <div className="flex flex-col justify-center items-center gap-x-5">
                <div className="flex">
                  {item.images.map((elem: Timage) => {
                    return (
                      <div className="flex ">
                        <Image
                          width={200}
                          height={200}
                          alt=""
                          src={elem.image}
                        />
                      </div>
                    );
                  })}
                 
                </div>
                <div>{item.name}</div>
              </div>
            </TabPanel>
          );
        })
      )}
      {/* <TabPanel value={value} index={0} dir={theme.direction}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel> */}
    </Box>
  );
};

export default TabList;
