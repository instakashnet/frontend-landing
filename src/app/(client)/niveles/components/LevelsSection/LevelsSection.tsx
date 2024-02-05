import Image from "next/image";
import LevelItem from "../LevelItem/LevelItem";
import JuniorImage from "@/assets/illustrations/junior-level-p.webp";
import SeniorImage from "@/assets/illustrations/senior-level-p.webp";

function LevelsSection() {
  return (
    <div className='container py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <LevelItem amount={800} limit={5000} levelName='Junior'>
          <p>
            Para ti que cambias de 0 a $5000 mensuales. En este nivel puedes acceder a todos los beneficios del mes como el cupón del mes y
            el descuento por supermontos.
          </p>
        </LevelItem>
        <div className='items-end justify-center top-16 relative hidden lg:flex'>
          <Image src={JuniorImage} className='w-80 h-80 object-contain absolute' alt='Nivel Junior en Instakash' />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12'>
        <div className='items-end justify-center top-24 relative hidden lg:flex'>
          <Image src={SeniorImage} className='w-96 h-96 object-contain absolute' alt='Nivel Senior en Instakash' />
        </div>

        <LevelItem amount={15000} limit={50000} levelName='Senior'>
          <p>
            Para ti que cambias de 5,000 a $50,000 mensuales. En este nivel puedes acceder a todos los beneficios del JUNIOR y a una mejora
            de 15 puntos por 30 días, renovables siempre que mantenga la cantidad de cambio.
          </p>
        </LevelItem>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12'>
        <LevelItem amount={50000} limit={50000} levelName='Experto'>
          <p>
            Para ti que cambias de $50,000 en adelante al mes. En este nivel puedes acceder a todos los beneficios y a una mejora de 25
            puntos por 30 días, renovables siempre que mantenga la cantidad de cambio.
          </p>
        </LevelItem>
      </div>
    </div>
  );
}

export default LevelsSection;
