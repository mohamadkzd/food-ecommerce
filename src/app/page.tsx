import BottomHeader from "@/components/pages/Home/BHeader/BottomHeader";
import TabList from "@/components/pages/Home/TabList";

import { Button, Stack } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Stack className="container mx-auto ">
      <BottomHeader />
      <TabList />
    </Stack>
  );
}
