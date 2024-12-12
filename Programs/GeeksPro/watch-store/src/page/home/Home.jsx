import React from 'react';
import { Banner, Brands, Catalog, CompanyInfo, MiniCatalog } from './slice';

export const Home = () => {
    return (
        <div>
          <Banner /> 
          <MiniCatalog /> 
          <CompanyInfo />
          <Catalog />
          <Brands />
        </div>
    );
}

