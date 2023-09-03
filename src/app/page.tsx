import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import FormSigil from '@/components/form-sigil';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-between max-w-xl min-h-screen mx-auto">
        <div className="w-full">
          <h1 className="my-8 text-3xl font-bold text-center underline">
            Sigilify - Sigil Generator
          </h1>
          <FormSigil />
          <h2 className="my-8 text-3xl font-bold text-center underline">FAQ</h2>
          <FAQ />
        </div>
        <Footer />
      </div>
    </main>
  );
}
