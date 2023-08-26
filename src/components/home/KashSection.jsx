import Image from "next/legacy/image";
import Link from "next/link";

function KashSection() {
  return (
    <section className="container md:mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Image src="/images/bg/kash.webp" objectFit="contain" width={600} height={500} />
        <div className="text-left md:w-1/3 flex flex-col">
          <h2 className="title">¿Que es KASH?</h2>
          <p className="mb-3">
            El KASH es nuestra moneda digital que puedes obtener refiriendo a tus amigos. Por cada referido que complete 1 cambio obtendrás
            2 KASH. con el KASH puedes ahorrar o retirarlo a una de tus cuentas bancarias.{" "}
            <Link href="/beneficios" className="underline" legacyBehavior>
              <b>Conoce más aquí.</b>
            </Link>
          </p>
          <Image src="/images/illustrations/kash-equal.svg" objectFit="contain" width={350} height={150} />
          <a className="button" href="https://app.instakash.net/register">
            Registrarse
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-3">
        <div className="bg-[#67be9f] text-white rounded-md p-8 grid items-center text-center m-1 max-w-[400px] min-h-[14rem]">
          <Image src="/images/illustrations/refiere-gana.svg" width={110} height={70} />
          <p className="mt-4">
            Cuando tu referido realiza su primer cambio, tu ganas 2 KASH y tu referido una tasa especial. Copia y comparte el código que
            está en tu perfil de InstaKash.
          </p>
        </div>
        <div className="bg-[#67be9f] text-white rounded-md p-8 grid items-center text-center m-1 max-w-[400px] min-h-[14rem]">
          <Image src="/images/illustrations/ahorra-retira.svg" width={110} height={70} />
          <p className="mt-4">
            Puedes acumular tus KASH y luego retirarlos transfiriéndolos a tu cuenta en dólares en forma de dinero. Un dinero extra para tus
            ahorros. Hasta 15 KASH por retiro.
          </p>
        </div>
      </div>
    </section>
  );
}

export default KashSection;
