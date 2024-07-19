import Layout from "@/components/layout";

function About() {
  return (
    <Layout>
      <div className="flex flex-col gap-12 md:gap-16 py-12 md:py-16">
        <section className="container">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">Meet the talented individuals behind our products.</p>
          </div>
        </section>
        <section className="container">
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-full bg-muted p-1">
                  <img src="/ardi.png" alt="Ardi S" width={120} height={120} className="rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ardi S</h3>
                  <p className="text-muted-foreground">Frontend</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-full bg-muted p-1">
                  <img src="/henry.png" alt="Henry Rivardo" width={120} height={120} className="rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Henry Rivardo</h3>
                  <p className="text-muted-foreground">Frontend</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-full bg-muted p-1">
                  <img src="/hafiz.png" alt="Hafis Dermawan" width={120} height={120} className="rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Hafiz Dermawan</h3>
                  <p className="text-muted-foreground">Backend</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-full bg-muted p-1">
                  <img src="/akbar.png" alt="Muhammad Akbar Ali Syfa" width={120} height={120} className="rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Muhammad Akbar Ali Syifa</h3>
                  <p className="text-muted-foreground">Backend</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container flex justify-center">
          <div className="space-y-4 max-w-[700px] text-center">
            <p className="text-muted-foreground md:text-lg">
              Thank you for taking the time to learn more about us. We're passionate about what we do and are excited to continue delivering exceptional
              products and services.
            </p>
            <p className="text-muted-foreground md:text-lg">- Tech Store.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;
