export type Language = 'en' | 'ko';

export type PageId =
  | 'home'
  | 'about'
  | 'companies'
  | 'products'
  | 'minerals-metals'
  | 'food-agriculture'
  | 'seafood'
  | 'projects'
  | 'markets'
  | 'news'
  | 'sustainability'
  | 'contact';

export interface ProductItem {
  id: string;
  category: 'minerals' | 'food' | 'seafood';
  titleEn: string;
  titleKo: string;
  descriptionEn: string;
  descriptionKo: string;
  originEn: string;
  originKo: string;
  specifications: string; // 'Available upon request.'
  image: string;
  companyEntity: 'PT PMA Kidrill Metal Mining' | 'Thunder Mark Vietnam Co., Ltd' | 'Kidrill Group';
}

export interface NewsItem {
  id: string;
  category: 'Company News' | 'Market Insights' | 'Minerals & Metals' | 'Commodity Markets' | 'Food & Agriculture' | 'International Trade';
  categoryKo: string;
  date: string;
  readTime: string;
  titleEn: string;
  titleKo: string;
  summaryEn: string;
  summaryKo: string;
  contentEn: string[];
  contentKo: string[];
  isSample: true;
}

export interface MarketRegion {
  id: string;
  nameEn: string;
  nameKo: string;
  descriptionEn: string;
  descriptionKo: string;
  keyCommoditiesEn: string[];
  keyCommoditiesKo: string[];
  coordinatingEntity: string;
}

export interface InquiryData {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  businessInterest: string;
  productCommodity: string;
  message: string;
}
