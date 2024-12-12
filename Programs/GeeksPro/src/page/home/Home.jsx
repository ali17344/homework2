import { Banner, Brands, Catalog, CompanyInfo, ContactInfo, FigmaInfo, Footer, Header, Sale } from "./slice";
export const Home = () => {
    return (
        <div>
            <ContactInfo />
            <Header />
            <Banner />
            <Sale />
            <CompanyInfo /> 
            <Catalog /> 
            <Brands /> 
            <Footer />
            <FigmaInfo />
        </div>
    );
}

