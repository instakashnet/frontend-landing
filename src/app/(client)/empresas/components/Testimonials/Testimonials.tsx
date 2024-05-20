import TestimonialsBanner from "@/components/molecules/TestimonialsBanner/TestimonialsBanner";

function CompanyTestimonials() {
  return (
    <section className='w-full pt-10'>
      <div className='container px-4 lg:px-8 '>
        <h2 className='lg:text-4xl text-2xl font-bold text-center mb-2'>Testimonios</h2>
        <p className='text-center text-lg mb-10'>Conoce lo que opinan las empresas que operan con nosotros</p>
        <div className='my-6 w-full place-content-center'>
          <TestimonialsBanner />
        </div>
      </div>
    </section>
  );
}

export default CompanyTestimonials;
