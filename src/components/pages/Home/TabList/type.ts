export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export interface Data {
  tabPanel: [];
  tabList: [];
}

export interface TabPanel {
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
  images: [];
}

export interface Timage {
  image: [];
}
