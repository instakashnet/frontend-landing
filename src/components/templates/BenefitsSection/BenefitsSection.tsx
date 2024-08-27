import BenefitItem from "@/components/molecules/BenefitItem/BenefitItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/Tabs";
import { BENEFTIS_TYPES } from "@/enums/benefitsTypes";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { getBenefitsQuery } from "../../../../sanity/utils/getBenefits";
import { PortableTextBlock } from "sanity";
interface Benefit {
  title: string;
  cover: string;
  description: PortableTextBlock[];
  type: BENEFTIS_TYPES;
  hasDate: boolean;
  fromDate: string;
  toDate: string;
}

async function BenefitsSection({ benefits }: { benefits: Benefit[] }) {
  return (
    <section className='min-h-[70vh] w-full pb-20'>
      <div className='container'>
        <header className='py-20 text-center'>
          <h3 className='font-semibold text-secondary text-lg'>Nuestro beneficios para tí</h3>
          <h2 className='text-4xl lg:text-5xl text-primary font-bold mt-6 max-w-2xl mx-auto'>
            Aprovecha de nuestros beneficios en todas tus operaciones
          </h2>
          <p className='mt-6  text-xl font-medium max-w-2xl mx-auto'>
            Todos los meses tenemos diferentes formas de ayudarte a conseguir las mejores tasas y que puedas sacar el mayor provecho a tu
            dinero.
          </p>
        </header>
        <Tabs defaultValue={BENEFTIS_TYPES.TODOS} className='flex flex-col items-center justify-center gap-6'>
          <TabsList>
            <TabsTrigger value={BENEFTIS_TYPES.TODOS}>Todos</TabsTrigger>
            <TabsTrigger value={BENEFTIS_TYPES.PERSONAL}>Personales</TabsTrigger>
            <TabsTrigger value={BENEFTIS_TYPES.EMPRESARIAL}>Empresariales</TabsTrigger>
          </TabsList>
          <TabsContent value={BENEFTIS_TYPES.TODOS}>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
              {benefits &&
                benefits.map((benefit) => (
                  <BenefitItem
                    key={benefit.title}
                    title={benefit.title}
                    coverUrl={benefit.cover}
                    description={benefit.description}
                    hasDate={benefit.hasDate}
                    fromDate={benefit.fromDate}
                    toDate={benefit.toDate}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value={BENEFTIS_TYPES.PERSONAL}>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
              {benefits &&
                benefits
                  .filter((benefit) => benefit.type !== BENEFTIS_TYPES.EMPRESARIAL)
                  .map((benefit) => (
                    <BenefitItem
                      key={benefit.title}
                      title={benefit.title}
                      coverUrl={benefit.cover}
                      description={benefit.description}
                      hasDate={benefit.hasDate}
                      fromDate={benefit.fromDate}
                      toDate={benefit.toDate}
                    />
                  ))}
            </div>
          </TabsContent>
          <TabsContent value={BENEFTIS_TYPES.EMPRESARIAL}>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 content-center'>
              {benefits &&
                benefits
                  .filter((benefit) => benefit.type === BENEFTIS_TYPES.EMPRESARIAL)
                  .map((benefit) => (
                    <BenefitItem
                      key={benefit.title}
                      title={benefit.title}
                      coverUrl={benefit.cover}
                      description={benefit.description}
                      hasDate={benefit.hasDate}
                      fromDate={benefit.fromDate}
                      toDate={benefit.toDate}
                    />
                  ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default BenefitsSection;
