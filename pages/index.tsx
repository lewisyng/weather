import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../src/components/Header/Header';
import PageWrapper from '../src/components/PageWrapper/PageWrapper';
import WeatherData from '../src/components/WeatherData/WeatherData';
import { SearchBar } from '../src/components/SearchBar/SearchBar';
import SearchedLocation from '../src/components/SearchedLocation/SearchedLocation';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageWrapper>
                <Header />
                <SearchBar />
                <SearchedLocation />
                <WeatherData />
            </PageWrapper>
        </div>
    );
};

export default Home;
