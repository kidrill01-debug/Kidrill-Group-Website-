export type Language = 'en' | 'ko' | 'vi';

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

export type LogoStyle =
  | 'prismatic-k'
  | 'orbital-compass'
  | 'sovereign-crest'
  | 'minimal-ribbon'
  | 'classic';

export type WordmarkFont = 'display' | 'editorial' | 'modern';


export interface ProductItem {
  id: string;
  category: 'minerals' | 'food' | 'seafood';
  titleEn: string;
  titleKo: string;
  titleVi?: string;
  descriptionEn: string;
  descriptionKo: string;
  descriptionVi?: string;
  originEn: string;
  originKo: string;
  originVi?: string;
  specifications: string; // 'Available upon request.'
  image: string;
  companyEntity: 'PT PMA Kidrill Metal Mining' | 'Thunder Mark Vietnam Co., Ltd' | 'Kidrill Group';
}

export interface NewsItem {
  id: string;
  category: 'Company News' | 'Market Insights' | 'Minerals & Metals' | 'Commodity Markets' | 'Food & Agriculture' | 'International Trade';
  categoryKo: string;
  categoryVi?: string;
  date: string;
  readTime: string;
  titleEn: string;
  titleKo: string;
  titleVi?: string;
  summaryEn: string;
  summaryKo: string;
  summaryVi?: string;
  contentEn: string[];
  contentKo: string[];
  contentVi?: string[];
  isSample: true;
}

export interface MarketRegion {
  id: string;
  nameEn: string;
  nameKo: string;
  nameVi?: string;
  descriptionEn: string;
  descriptionKo: string;
  descriptionVi?: string;
  keyCommoditiesEn: string[];
  keyCommoditiesKo: string[];
  keyCommoditiesVi?: string[];
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

