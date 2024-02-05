import Image from "next/image";
import APpMockupImg from "@/assets/illustrations/app-mockup.webp";

function AppMockup() {
  return (
    <div className='min-w-[20rem] min-h-[20rem]  lg:min-w-[30rem] lg:min-h-[30rem] rounded-full bg-primary relative'>
      <Image
        src={APpMockupImg}
        className='w-[24rem] h-[24rem] lg:w-[34rem]  lg:h-[34rem] top-[-1rem] object-contain absolute'
        alt='Descarga app Instakash'
      />
    </div>
  );
}

export default AppMockup;
