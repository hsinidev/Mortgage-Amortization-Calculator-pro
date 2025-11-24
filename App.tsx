import React from 'react';
import Layout from './components/Layout';
import AmortizationCalculator from './components/AmortizationCalculator';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-5xl space-y-12">
          <section className="transform transition-all duration-500 hover:scale-[1.01]">
             <AmortizationCalculator />
          </section>
          <section>
            <SeoArticle />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default App;