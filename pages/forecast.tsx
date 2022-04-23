import { NextPage } from 'next';
import Head from 'next/head';
import ForecastList from '../src/components/ForecastList/ForecastList';
import Header from '../src/components/Header/Header';
import PageWrapper from '../src/components/PageWrapper/PageWrapper';
import { SearchBar } from '../src/components/SearchBar/SearchBar';
import SearchedLocation from '../src/components/SearchedLocation/SearchedLocation';

export const Forecast: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Forecast</title>
            </Head>

            <PageWrapper>
                <Header />
                <SearchBar />
                <SearchedLocation />
                <ForecastList />
            </PageWrapper>
        </div>
    );
};

export default Forecast;
