import ProgressBar from "@components/UI/progress-bar/ProgressBar";

function Levelprogress({ containerClassName = "", completed = 0, userLevel = "", amountRange = { min: 0, max: 0 } }) {
  return (
    <div className={`w-full text-left ${containerClassName}`}>
      <div className='flex items-center justify-between mb-2 text-xs lg:text-sm'>
        <p>Has cambiado:</p>
        <p>
          {amountRange.min.toLocaleString("en-US", { currency: "USD", style: "currency", minimumFractionDigits: 2 })} /{" "}
          <b>
            {amountRange?.max?.toLocaleString("en-US", { currency: "USD", style: "currency", minimumFractionDigits: 2 }) ?? "En adelante"}
          </b>
        </p>
      </div>
      <ProgressBar completed={completed} />
      <p className='mt-2 text-xs lg:text-sm'>
        <b>Nivel:</b> KASH {userLevel}
      </p>
    </div>
  );
}

export default Levelprogress;
