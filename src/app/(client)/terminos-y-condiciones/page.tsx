import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://instakash.net/terminos-y-condiciones"),
  title: "Términos y condiciones",
  description:
    "Conoce los términos y condiciones de uso de la plataforma de Instakash. Asegúrate de leerlos detenidamente antes de utilizar nuestros servicios.",
  alternates: {
    canonical: "/terminos-y-condiciones"
  },
  openGraph: {
    title: "Términos y condiciones",
    description:
      "Conoce los términos y condiciones de uso de la plataforma de Instakash. Asegúrate de leerlos detenidamente antes de utilizar nuestros servicios.",
    type: "website",
    url: "https://instakash.net/terminos-y-condiciones",
    siteName: "Instakash"
  }
};

function TerminosYCondicionesPage() {
  return (
    <main className='h-full'>
      <header className='py-10 mt-20'>
        <div className='container text-center'>
          <h1 className='text-xl lg:text-5xl text-primary font-semibold'>Términos y condiciones</h1>
        </div>
      </header>
      <section className='container pb-20'>
        <p className='mt-4'>
          El presente Acuerdo es un contrato entre usted e <b>INSTAKASH S.A.C.</b> (en adelante, “INSTAKASH”, o “la Empresa”) a efectos de
          hacer uso de los servicios brindados por nuestra empresa. Al registrarse, usted acepta todos los términos y condiciones
          establecidos en el presente contrato, lo que le permitirá utilizar los servicios de “INSTAKASH”. Por favor, lea este contrato
          detalladamente y asegúrese de entenderlo en su totalidad antes de utilizar los servicios. Tenga en cuenta que el utilizar los
          servicios prestados por <b>INSTAKASH</b> implica una aceptación de los términos de este Acuerdo. <b>INSTAKASH</b> no se hace
          responsable por la omisión o falta de lectura total o parcial de los Términos y Condiciones del uso de la plataforma.
        </p>
        <p className='my-3'>
          Al aceptar este contrato, aceptas que podamos comunicarnos por: teléfono, correo electrónico, whatsapp o publicando avisos en LA
          PLATAFORMA.
        </p>
        <p className='my-3'>
          <b>INSTAKASH</b> se reserva el derecho a modificar el presente Acuerdo de forma unilateral y sin previo aviso mediante la
          publicación de una nueva versión en el sitio web de la Empresa.
        </p>

        <ol className='mt-4 [&>li>h2]:text-primary [&>li>h2]:text-lg [&>li>h2]:font-semibold [&>li>h2]:mt-5 [&>li>h2]:mb-1 [&>li>p]:leading-7 [&>li>p]:mb-3'>
          <li>
            <h2>1. EMPRESA</h2>
            <p>
              INSTAKASH: es una plataforma digital, siendo sus servicios operados por INSTAKASH S.A.C., debidamente registrado con RUC N°
              20605285105 con domicilio fiscal en Calle Martin de Murua, Nro. 150, Int. 907, Urb. Maranga, San Miguel, Lima.
            </p>
            <p>
              INSTAKASH es un proveedor del servicio de cambio de divisas en el Perú, debidamente registrada y autorizada ante la
              Superintendencia de Banca, Seguros y AFP (en adelante, “SBS”) a través de Resolución N° 05939-2019-SBS.
            </p>
            <p>INSTAKASH ofrece sus servicios a través de medios digitales, donde cuenta con un portal en Internet instakash.net</p>
          </li>
          <li>
            <h2>2. REGISTRO DE USUARIO</h2>
            <p>
              EL USUARIO declara y garantiza que el usuario creado en LA PLATAFORMA de INSTAKASH, es para su uso personal y/o a nombre de la
              empresa que representa.
            </p>
            <p>Para el caso de que EL USUARIO sea una persona natural, declara que no está actuando en nombre de una tercera persona.</p>
            <p>
              Para el caso de que EL USUARIO sea una persona jurídica, declara que los datos consignados son verídicos y vigentes respecto
              a: persona responsable de contacto para el registró y operación, información del representante legal e información actualizada
              de la empresa.
            </p>
            <p>
              EL USUARIO, al crear un usuario en LA PLATAFORMA deberá registrar un correo electrónico personal y una clave segura, la cual
              será de su exclusiva responsabilidad no compartirla.
            </p>
            <p>
              EL USUARIO deberá registrar sus datos personales y de contacto (como persona natural o como responsable de la empresa
              registrada) el momento de crear un perfil, lo cual incluye adjuntar un documento de identidad (digitalizado) cuando se le
              solicite.
            </p>
            <p>
              Cada USUARIO registrado en INSTAKASH, podrá crear un perfil de persona natural y varios perfiles de personas jurídicas. Los
              perfiles permitirán tener un mayor orden contable del distinto tipo de personas a las que el usuario representa.
            </p>
            <p>
              El USUARIO, al hacer uso de los servicios brindados por INSTAKASH se compromete a mantener actualizados los datos brindados, o
              actualizarlos cuando ello se requiera.
            </p>
            <p>
              Para hacer uso de nuestros servicios, el USUARIO debe ser mayor de 18 años de edad, y tener una cuenta bancaria en Soles (S/)
              y/o en Dólares ($) en un banco constituido en la República del Perú.
            </p>
            <p>La cuenta registrada en INSTAKASH será de uso personal e intransferible.</p>
          </li>
          <li>
            <h2>3. VERIFICACIÓN</h2>
            <p>
              INSTAKASH es una empresa que cumple con la normativa vigente de PLAFT otorgada por la Unidad de Inteligencia Financiera
              (UIF-SBS) y por lo tanto, INSTAKASH realizará la verificación de los datos personales y, de ser necesario, establecerá
              contacto con EL USUARIO en cualquier momento que lo considere pertinente.
            </p>
            <p>
              INSTAKASH podrá ejercer las acciones que crea pertinentes para verificar la autenticidad de su identidad, pudiendo solicitar
              información adicional necesaria a fin de recabar la documentación correspondiente para dicho fin; de igual manera INSTAKASH se
              reserva el derecho de solicitar información a las entidades del Estado y/o privadas con el objeto de corroborar la veracidad
              de la información registrada al momento de abrir la cuenta.
            </p>
            <p>
              La Empresa se reserva el derecho a rechazar cualquier nuevo usuario o transferencia a discreción y sin expresión de causa ante
              la sospecha de que se estarían utilizando nuestras plataformas para realizar operaciones fraudulentas y/o delictivas.
            </p>
            <p>
              INSTAKASH se reserva el derecho de rechazar la apertura de cuentas respecto a personas cuya cuenta previamente haya sido dada
              de baja o suspendida”.
            </p>
            <p>
              En caso se detecten cuentas duplicadas, la Empresa se reserva el derecho a cerrar o fusionar las mismas, sin necesidad de dar
              previo aviso al titular de las cuentas.
            </p>
          </li>
          <li>
            <h2>4. REGISTRO DE CUENTAS BANCARIAS</h2>
            <p>EL USUARIO podrá registrar datos de la cuenta bancaria, tanto en soles como en moneda extranjera.</p>
            <p>En INSTAKASH aceptamos cuentas de las siguientes entidades financieras:</p>
            <ul className='list-disc pl-6 my-4 flex flex-col gap-2'>
              <li>BCP, generados a nivel nacional.</li>
              <li>Interbank, generados en el departamento de Lima – Perú.</li>
              <li>Otras entidades serán tomadas como interbancarias.</li>
            </ul>

            <p>
              INSTAKASH solicitará el registro de la cuenta bancaria de origen y la cuenta bancaria destino del USUARIO con el fin de poder
              validar la autenticidad del titular de la cuenta.
            </p>

            <p>
              INSTAKASH no será responsable del bloqueo de cuentas bancarias registradas por el USUARIO en una entidad financiera o por otra
              situación similar a esta.
            </p>
            <p>
              INSTAKASH no será responsable por las comisiones cobradas por las entidades financieras por concepto de transferencia
              inmediata o transferencia regular, en el momento de la transferencia a cuentas de INSTAKASH.
            </p>
            <p>
              En caso de que EL USUARIO no tenga cuentas bancarias en Lima y opere con transferencia interplaza, INSTAKASH deducirá del
              monto a enviar los costos bancarios asociados al envío del dinero.
            </p>
            <p>
              INSTAKASH no será responsable de errores, gastos, comisiones o tiempos incurridos debidos a errores del USUARIO o de los
              bancos donde este transfiera a otra cuenta de la especificada por INSTAKASH.
            </p>
            <p>
              INSTAKASH no será responsable de errores, gastos, comisiones o tiempos incurridos debidos a errores del USUARIO donde este
              transfiera de una cuenta de una moneda a otra cuenta en una moneda diferente.
            </p>
            <p>
              INSTAKASH podrá solicitar el registro de información adicional, a fin de cumplir con la normativa que rige la Ley de
              Prevención de Lavado de Activos y del Financiamiento del Terrorismo (PLAFT).
            </p>
          </li>
          <li>
            <h2>5. REGISTROS</h2>
            <ol className='ml-4 mt-3 [&>li>h2]:text-primary [&>li>h2]:font-semibold [&>li>h2]:mt-5 [&>li>h2]:mb-1 [&>li>p]:leading-7 [&>li>p]:mb-3'>
              <li>
                <h2>5.1 MONEDA KASH</h2>
                <p>
                  La moneda virtual KASH es un activo digital, emitido en asociación de KASHCORP SAC que custodia las transacciones
                  vinculadas al KASH. Cada KASH que disponga el usuario corresponde a 1 dólar estadounidense en la cuenta bancaria para
                  garantizar que siempre pueda comprar y canjear el activo con dólares estadounidenses vinculados 1:1.
                </p>
                <p>
                  La moneda KASH es inmutable y transable de forma exclusiva dentro de la plataforma, ratificando así que no se puede emitir
                  a discreción y tampoco destinar a fines ajenos a ésta. Constituye un patrimonio concreto en función de ofrecer
                  estabilidad, comodidad, sencillez y sobre todo seguridad, ya que cada KASH tiene respaldo real (en dólares
                  estadounidenses). En consecuencia, cada moneda KASH siempre estará disponible en forma de reserva.
                </p>
                <p>
                  Usuarios que acumulen KASH podrán disponer, retirar o canjear monedas KASH libremente dentro de los servicios ofrecidos en
                  la plataforma que le permitirán ahorrar o agilizar en sus transacciones.
                </p>
                <p>
                  Los retiros de KASH (transables en dólares estadounidenses) se harán solo con bancos afiliados dentro de las facultades y
                  horarios habituales de la plataforma. Los usuarios pueden visualizar su cantidad de KASH acumulados en la sección de MIS
                  CUENTAS, y también ver el movimiento de sus transacciones en la pantalla de ACTIVIDADES.
                </p>
                <p>
                  Tener en cuenta que los datos e información incluidos en LA PLATAFORMA brindan elementos para la toma de decisión
                  financiera, por lo cual no debe tomarse como una asesoría o sugerencia por parte de INSTAKASH para la compra o venta de
                  dólares o cualquier transacción o negocio.
                </p>
              </li>
              <li>
                <h2>5.2 CAMBIO DE MONEDA EXTRANJERA:</h2>

                <p>
                  Para hacer uso de este servicio, el USUARIO debe contar con una cuenta bancaria propia en una entidad financiera
                  supervisada por la SBS, es decir, debe aceptar realizar transferencias (en adelante, la “Cuenta de Cargo”) y, una cuenta
                  bancaria propia para la recepción de fondos a través de entidades financieras (en adelante, la “Cuenta de Destino”).
                </p>
                <p>
                  INSTAKASH no realiza ningún cobro de comisión por el uso de este servicio. Sin embargo, el USUARIO debe considerar que en
                  determinados escenarios podrían existir cobros de comisiones o del impuesto a las transacciones financieras (ITF) por
                  parte las entidades financieras involucradas en la operación.
                </p>
                <p>Para registrar una operación, el USUARIO lo debe hacer usando su cuenta:</p>
                <ul className='list-disc pl-6 mt-2 flex flex-col gap-4'>
                  <li>El USUARIO indicará el monto a transferir y el tipo de operación (compra o venta).</li>
                  <li>
                    El USUARIO puede solicitar el canje de sus monedas KASH acumuladas al procesar un registro de VENTA de dólares. Los Kash
                    acumulados se verán reflejados en su operación de cambio y serán anexados como parte de pago por INSTAKASH.
                  </li>
                  <li>
                    El USUARIO está obligado a indicar el origen de los fondos en base a la normativa vigente de prevención de lavado de
                    activos y financiamiento de terrorismo, y esta indicación tendrá validez de una declaración jurada.
                  </li>
                  <li>
                    EL USUARIO indicará la cuenta bancaria de cargo y la cuenta bancaria de destino, estas cuentas podrían ser previamente
                    registradas a través de LA PLATAFORMA o ser registradas en el mismo momento que registra la operación. El tiempo
                    referencial de ejecución de la operación dependerá del tipo de operación que registre.
                  </li>
                  <li>
                    INSTAKASH no realiza transferencias u operaciones a terceros. Es exigencia de la normativa de la SBS que el titular de
                    la cuenta de origen sea la misma persona natural o jurídica de la cuenta destino. De no coincidir alguna de éstas,
                    deberá proporcionar un número de cuenta con destino al titular de origen de los fondos.
                  </li>
                  <li>
                    Cuando se hayan completado los pasos anteriores se dará por registrada la operación, estableciéndose desde ese momento
                    un acuerdo de cambio de divisas entre el USUARIO e INSTAKASH.
                  </li>
                  <li>
                    Luego, el USUARIO deberá proceder a realizar la transferencia del monto objeto de cambio desde la Cuenta de Cargo, que
                    pertenezca a la persona o entidad que registra la operación y la cual se encuentra previamente registrada, hacia la
                    cuenta bancaria indicada de INSTAKASH, en un tiempo máximo de quince (15) minutos, contado a partir del momento del
                    registro de la operación. Solo durante el período de tiempo señalado, se mantendrá el acuerdo de cambio de dólares.
                  </li>
                  <li>
                    Para las operaciones interbancarias, INSTAKASH realizará la orden cuando los fondos lleguen a sus cuentas como saldo
                    líquido.
                  </li>
                  <li>
                    Si el tipo de cambio varia drásticamente según criterio de INSTAKASH, se podrá anular la operación o realizarla a un
                    nuevo tipo de cambio si el usuario así lo prefiriese.
                  </li>
                  <li>
                    EL USUARIO deberá asumir el costo de la transferencia inmediata cobrada por su entidad financiera y ejecutar la
                    transferencia dentro de los horarios establecidos para la operativa interbancaria; el cual establece que el tiempo para
                    realizar este tipo de operaciones es de lunes a viernes de 8:30 am y 3:45 pm de días hábiles.
                  </li>
                  <li>
                    Las operaciones ejecutadas vía transferencias interbancarias tendrán que considerar que el tiempo máximo de espera para
                    la llegada del fondo a la cuenta de INSTAKASH será las 17:30 horas del día del registro de la operación.
                  </li>
                  <li>
                    El USUARIO deberá entregar la constancia de la transferencia de los fondos a la cuenta bancaria indicada por INSTAKASH,
                    en el momento del registro de la operación y por el monto acordado.
                  </li>
                  <li>
                    El USUARIO deberá realizar la transferencia desde una cuenta personal o de la empresa que representa. INSTAKASH no
                    acepta depósitos en efectivo ni cheques, por lo que de detectarse alguna de estos casos la operación quedará anulada.
                  </li>
                  <li>
                    Es facultad de INSTAKASH informar aquellas operaciones que cumplan con la calidad de “operaciones sospechosas” de
                    acuerdo a la normativa que abarca únicamente la materia de prevención de lavado de activos y del financiamiento del
                    terrorismo, emitida por la SBS.
                  </li>
                  <li>
                    Una vez recibidos los fondos, el tiempo para que INSTAKASH ejecute la orden será no mayor a 3 horas, siempre y cuando no
                    se hayan establecido tiempos diferentes entre las partes o exista algún problema en el sistema del banco, INSTAKASH
                    realizará la transferencia del monto acordado a la cuenta destino del USUARIO, previamente registrada. INSTAKASH no se
                    hace responsable del tiempo de transferencia de fondos por parte de las entidades financieras.{" "}
                  </li>
                </ul>
              </li>

              <li id='#cupones' className='mt-2'>
                <h2>5.3 CUPONES DE DESCUENTO:</h2>
                <p>
                  Los cupones de descuento son una iniciativa utilizada por el Equipo de Marketing para campañas específicas y pueden ser
                  adquiridos a través de nuestro whatsapp, redes sociales o promoción directa por parte de INSTAKASH a determinados
                  usuarios.
                </p>
                <p>
                  INSTAKASH establece los límites, condiciones, y detalles puntuales para el uso de sus cupones. Ciertos cupones de
                  descuento son válidos únicamente para una determinada categoría, evento festivo, usuario frecuente, empresa, monto
                  significativo, entre otros.
                </p>
                <p>
                  Usuarios podrán solicitar cupones de descuento o emplear alguno promocionado por las redes sociales de INSTAKASH mientras
                  mantenga vigencia, para recibir descuentos en sus operaciones cambiarias.
                </p>
                <p>
                  El tipo de cambio ofrecido por cada cupón solo tiene vigencia durante el tiempo que se registra la operación hasta que se
                  ejecute o se cancele dentro del plazo que tiene el usuario para transferir y completar sus datos de operación. INSTAKASH
                  no se compromete en congelar mantener un tipo de cambio con cupón si la operación termina cancelándose por superar el
                  límite de tiempo para completarse.
                </p>
                <p>
                  INSTAKASH se reserva la discreción sobre casos puntuales o extraordinarios de los beneficios que otorga con los cupones
                  dependiendo de la situación y el caso presentado a nuestro equipo de atención al usuario.
                </p>
                <h4 className='text-primary font-semibold mt-4 mb-2'>Cupón INKAEMPRESAS</h4>
                <p>
                  El cupón INKAEMPRESAS es el cupón que ha sido creado para las empresas afiliadas a INSTAKASH. El cupón otorga puntos a
                  favor de la tasa de cambio y debe ser activado por medio de Servicio al Cliente Instakash. Para ponerse en contacto
                  encontrará un botón de Whatsapp en la parte inferior derecha de su pantalla acá en nuestro sitio web.
                </p>
                <h4 className='text-primary font-semibold mt-4 mb-2'>Plan de Empresas Afiliadas</h4>
                <p>
                  El Plan de Empresas Afiliadas ha sido creado para para apoyar la gestión de las empresas en el Perú, nuestro objetivo es
                  generar procesos y actividades que garanticen el ahorro y la mejor experiencia de cambio de divisas . El plan incluye:{" "}
                </p>
                <ul className='list-disc pl-6 my-2 flex flex-col gap-4'>
                  <li>Atención preferencial para nuestra red empresas (tiempos más rápidos).</li>
                  <li>Cotización preferencial y en directo de la mejor tasa posible según el mercado.</li>
                  <li>Descuentos usando cupón preferencial. Es importante tener en cuenta el horario del mercado 9:30 AM a 4:00 PM.</li>
                  <li>Atención para cambios en BCP e Interbank el fin de semana.</li>
                </ul>
                <p className='mt-4 font-semibold'>
                  Para ser parte de nuestro Plan de Empresas Afiliadas solo tiene que compartirnos algunos datos:{" "}
                </p>
                <ul className='list-disc pl-6 my-2 flex flex-col gap-4'>
                  <li>Nombre completo</li>
                  <li>Nombre de la empresa</li>
                  <li>RUC</li>
                  <li>Correo electrónico de la cuenta asociada</li>
                  <li>Teléfono de contacto</li>
                  <li>Cargo</li>
                </ul>
                <p>
                  Para acceder a este Plan de Empresas Afiliadas, puede escribirnos a través de los canales oficiales de Instakash (Whatsapp
                  en nuestra página web, Instagram, Facebook) y nuestros asesores estarán encantandos de hacerlos parte de este grupo de
                  empresas peruanas que hoy trabajan con Instakash.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <h2>6 AFILIADOS</h2>
            <ol className='ml-4 mt-3 [&>li>h2]:text-primary [&>li>h2]:font-semibold [&>li>h2]:mt-5 [&>li>h2]:mb-1 [&>li>p]:leading-7 [&>li>p]:mb-3'>
              <li>
                <h2>6.1 PROGRAMA DE AFILIADOS:</h2>
                <p>
                  Cada Afiliado es un contratista independiente y no un empleado. INSTAKASH no se hace responsable por las formas en que las
                  personas promuevan sus códigos de afiliado.
                </p>
              </li>
              <li>
                <h2>6.2 CÓDIGO DE AFILIADO:</h2>
                <p>
                  El usuario puede ubicar su código de afiliado en los detalles de MI PERFIL y también podrá editar el texto y número de su
                  código según disponibilidad ya que solo puede haber un código único por usuario.
                </p>
              </li>
              <li>
                <h2>6.3 BENEFICIO DEL AFILIADOR:</h2>
                <p>
                  Por cada nuevo usuario que utilice un código afiliado para registrarse y efectuar su primera operación de cambio dentro de
                  INSTAKASH, hará que el usuario afiliador gane automáticamente 1 KASH equivalente a 1,00 dólar estadounidense.
                </p>
              </li>
              <li>
                <h2>6.4 BENEFICIO DEL NUEVO AFILIADO:</h2>
                <p>
                  El nuevo usuario al usar un código afiliado de otro usuario, ganará un descuento en la tasa de su primera operación de
                  cambio dentro de INSTAKASH.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <h2>7. SISTEMA DE NIVELES:</h2>
            <p>
              EL SISTEMAS DE NIVELES fue creado para brindar mayores beneficios a todos nuestros usuarios. Todos los usuarios nuevos o ya
              existentes registrados en nuestra plataforma, comenzarán a ser calificados por el SISTEMA DE NIVELES a partir del 1ero de
              Agosto del 2023. El sistema de niveles de INSTAKASH esta dividido en Junior, Senior y Experto, conoce como funciona cada uno
              de ellos.
            </p>
            <ol className='ml-4 mt-3 [&>li>h2]:text-primary [&>li>h2]:font-semibold [&>li>h2]:mt-5 [&>li>h2]:mb-1 [&>li>p]:leading-7 [&>li>p]:mb-3'>
              <li>
                <h2>7.1 TIEMPOS DE EJECUCIÓN:</h2>
                <p>
                  EL SISTEMA DE NIVELES se divide en tres rangos de calificación:
                  <br />
                  <br />
                  <b>JUNIOR:</b> En este nivel se encuentran todos los usuarios registrados en la plataforma de INSTAKASH, tanto nuevos como
                  ya existentes. El NIVEL JUNIOR será el rango estándar de inicio para cualquier USUARIO, en este nivel el USUARIO mantendrá
                  y accederá a todos los beneficios y promociones que INSTAKASH realice en el mes, entre ellas se encuentra el cupón del mes
                  (insertar link del cupón), los cupones supermontos y más.
                  <br />
                  <br />
                  <b>SENIOR:</b> A partir de 5000$ a 50000$ en cambios acumulados. En este nivel se encuentran todos los usuarios
                  registrados que superaron los 4999.99$ en cambios. El NIVEL SENIOR es el rango que sigue al JUNIOR, en este nivel el
                  USUARIO mantendrá todos los beneficios del JUNIOR y adicionalmente recibirá acceso al uso de 1 cupón de descuento de 15
                  puntos para cualquier cambio que desee realizar sin límite de monto (exceptuando el monto mínimo establecido en nuestras
                  políticas) y sin límite de uso. Válido por 30 días a partir del momento de la activación automática del rango de nivel.
                  Una vez finalizado el periodo de los 30 días, el SISTEMA DE NIVELES detectará automáticamente en que rango comenzará el
                  USUARIO en los siguientes 30 días, según el monto acumulado en los cambios realizados durante este periodo.
                  <br />
                  <br />
                  <b>EXPERTO:</b> A partir de 50000$ en adelante en cambios acumulados. En este nivel se encuentran todos los usuarios
                  registrados que superaron los 49999.99$ en cambios. El NIVEL EXPERTO es el rango que sigue al SENIOR, en este nivel el
                  USUARIO mantendrá todos los beneficios del JUNIOR y adicionalmente recibirá acceso al uso de 1 cupón de descuento de 25
                  puntos para cualquier cambio que desee realizar sin límite de monto (exceptuando el monto mínimo establecido en nuestras
                  políticas) y sin límite de uso. Válido por 30 días a partir del momento de la activación automática del rango de nivel.
                  Una vez finalizado el periodo de los 30 días, el SISTEMA DE NIVELES detectará automáticamente en que rango comenzará el
                  USUARIO para los siguientes 30 días, según el monto acumulado en los cambios realizados durante este periodo.
                </p>
              </li>
              <li>
                <h2>7.2 CALIFICACIÓN DE NIVELES AUTOMATICA</h2>
                <p>
                  La CALIFICACION DE NIVELES AUTOMATICA estará visible para el USUARIO de forma automática dentro de la plataforma. Para
                  calificar a un siguiente nivel o mantener el nivel actual se tomará en consideración el primer cambio posterior a la
                  calificación del rango alcanzado. El USUARIO podrá fluctuar entre niveles, sin embargo, los beneficios correspondientes a
                  cada nivel serán los establecidos y estos permanecerán durante 30 días o hasta que se cambie de nivel.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <h2>8. TRANSFERENCIAS INTERBANCARIAS/INTERPLAZA:</h2>
            <p>
              INSTAKASH tiene cuentas bancarias en soles y dólares en el Banco de Crédito del Perú (BCP - Lima) e Interbank (Banco
              Internacional del Perú - Lima). Las transferencias que se realicen a otros bancos- entre ellos Scotiabank, BBVA Continental,
              Banco Financiero, Banbif, Banco de la Nación, entre otros, serán consideradas transferencias interbancarias.
            </p>
            <p>
              Las transferencias que se realicen entre cuentas bancarias cuyo origen o destino sea distinto a plaza de Lima, son
              consideradas transferencias interplaza. INSTAKASH no realiza transferencias hacia cuentas interplaza porque los bancos suelen
              agregar una alta comisión por transacción. Para evitar cualquier tipo de comisión bancaria interplaza, se recomienda utilizar
              los aplicativos móviles o páginas web de los bancos para efectuar las transferencias. Operaciones desde ventanilla (BCP o
              Interbank) o desde cuentas Interbank que no sean de Lima, podrían acarrear comisión.
            </p>
            <p className='font-semibold'>
              INSTAKASH trasladará al usuario cualquier comisión generada por la entidad bancaria en cualquiera de los siguientes casos:
            </p>
            <ul className='list-disc flex flex-col gap-4 pl-6 mt-2'>
              <li>Use cuentas bancarias de plazas distintas a Lima y esto incurra en comisiones interplaza.</li>
              <li>Realice una transferencia en la agencia de su entidad bancaria y esta se encuentre en una plaza distinta a Lima.</li>
              <li>
                Realice operaciones de transferencia bancarias desde provincias, de otros bancos distintos a: BCP (solo banca por internet),
                Interbank.
              </li>
              <li>
                Las comisiones de transferencias interbancarias será la que el banco estipule al momento de hacer la transferencia a la
                cuenta destino.
              </li>
            </ul>
          </li>
          <li className='mt-4'>
            <p className='text-primary'>
              <b>Comisiones para transferencias interbancarias: 3.50 $ (comision fija)</b>
            </p>
            <p className='text-primary'>
              <b>Comisiones para transferencias interbancarias: 3.50 S/. (comision fija)</b>
            </p>
            <p className='text-primary'>
              <b>
                Comisiones interplaza desde ventanilla BCP será la que refleje el banco al llegar la transacción a cuentas de INSTAKASH. El
                usuario asume la totalidad de la comisión.
              </b>
            </p>
            <p className='text-primary'>
              <b>No se realizan transferencias a cuentas Interbank que se encuentren fuera de provincia.</b>
            </p>
            <p>
              <b>**</b> Estas comisiones son referenciales y pueden variar sin previa notificación.
            </p>
            <p>
              INSTAKASH podría exonerar comisiones de transferencias interbancarias solo si la transacción de cambio supera los 2.000,00 $ o
              su equivalente en soles. INSTAKASH se reserva la decisión final sobre este beneficio.
            </p>
          </li>

          <li>
            <h2>9. TIEMPOS DE EJECUCIÓN:</h2>
            <p>
              INSTAKASH no influye en las operaciones que los bancos realizan, por ende, no se hace responsable por la dilación en los
              tiempos del envío de los fondos por su entidad bancaria o proveedor de pagos.
            </p>
            <p>
              Dicho lo anterior, cabe señalar que la Empresa monitorea continuamente sus cuentas bancarias, y asume la obligación de
              notificar y completar su orden de compra siempre y cuando hayan sido recibidas antes de las 19:00 horas de un día útil. Si
              INSTAKASH recibiera los fondos pasada dicha hora, la orden de compra será completada al día hábil siguiente. Por otro lado,
              las órdenes de compra colocadas durante un día no hábil también serán procesadas al siguiente día útil.
            </p>
            <p>
              El usuario reconoce y acepta que es responsable por verificar la cuenta de destino a la que se le transfiera el dinero, para
              ello debe tener en consideración que INSTAKASH tiene cuentas en Soles y en Dólares, y que una difiere de la otra. INSTAKASH no
              se responsabiliza de ninguna manera por la negligencia del usuario en este aspecto.
            </p>
            <p>
              Todas las órdenes de compra colocadas dentro del horario de atención, y en días útiles se procesarán a partir del momento en
              que se reciban los fondos. Una vez recibidos los mismos, el tiempo para que nosotros ejecutemos la orden no será mayor a 30
              minutos, siempre y cuando no se hayan establecido tiempos diferentes entre las partes o exista alguna dilación con el banco de
              la operación correspondiente.
            </p>
            <p>
              Es necesario recalcar que INSTAKASH no controla los tiempos que puedan tomar las diferentes entidades bancarias o entidades
              que procesan los pagos para poder hacer que los fondos estén disponibles al titular de la cuenta de destino. Asimismo, es
              importante destacar que los tiempos mencionados anteriormente se encuentran sujetos a variaciones causadas por verificaciones
              adicionales de seguridad que puedan ser necesarias, a la cuantía del monto requerido por el usuario y/o disponibilidad de las
              plataformas bancarias utilizadas. Estas condiciones son completamente ajenas a INSTAKASH y podrían retrasar el procesamiento y
              ejecución de la orden de compra.
            </p>
          </li>
          <li>
            <h2>10. ANULACIÓN DE TRANSACCIONES</h2>
            <p>
              Si el USUARIO se demora en realizar la transferencia y/o ésta exceda el Plazo de Recepción de Fondos, INSTAKASH no podrá
              mantener el tipo de cambio y la operación podrá quedar ANULADA. Se entiende por operación ANULADA, cuando esta última y el
              tipo de cambio no tiene vigencia y por tanto INSTAKASH no asume el compromiso de mantener el tipo de cambio acordado.
            </p>
            <p>
              En el supuesto de que el USUARIO, pasado el Plazo de Recepción de Fondos, haya realizado la transferencia del monto acordado
              en el registro de la operación o el monto acordado haya ingresado a la cuenta bancaria de INSTAKASH, el USUARIO podrá:
            </p>
            <ul className='list-disc flex flex-col gap-4 ml-6 my-3'>
              <li>
                Aceptar el nuevo tipo de cambio en base a la fecha y hora en que fueron recibidos los fondos por parte de INSTAKASH. Esta
                fecha y hora será aquella que señale la banca en línea de la entidad financiera que recibe el fondo.
              </li>
              <li>
                Solicitar la devolución del monto, para lo cual INSTAKASH procederá a hacer la devolución del monto en la cuenta registrada
                previamente; de modo que el USUARIO acepta asumir los costos (comisiones, impuestos y otros) en que incurra INSTAKASH para
                tales efectos.
              </li>
            </ul>
            <p>
              Sin perjuicio de lo anteriormente mencionado, en caso de que INSTAKASH detecte alguna anomalía en el tipo de cambio o no pueda
              procesar la operación, por razones ajenas a la responsabilidad del USUARIO, tendrá la posibilidad de anular la operación de
              cambio de moneda procediendo con la devolución inmediata del monto abonado por el USUARIO. Dicha devolución será procesada
              mendiante el envío de un correo por parte del USUARIO indicando: nro. de operación, cuenta de orígen de los fondos y anexo de
              su voucher de transferencia. El mismo deberá ser enviado desde el correo registrado en plataforma por parte del USUARIO.
            </p>
            <p>
              Si el USUARIO llegase a realizar la cancelación de una operación una vez realizado el abono, el USUARIO quedará sujeto a
              asumir los costos (comisiones, impuestos y otros) en que incurra INSTAKASH para tales efectos.
            </p>
            <p>
              EL USUARIO se obliga a actuar de buena fe en relación con las operaciones de cambio que solicite y acepta que los montos que
              acuerde serán transferidos por INSTAKASH son montos exactos y finales. Por ende, en caso INSTAKASH transfiera a favor del
              USUARIO un monto superior al acordado, el USUARIO se obliga a devolver mediante transferencia a favor de la cuenta bancaria
              que indique INSTAKASH, el saldo transferido en exceso en un plazo no mayor a dos (2) días hábiles.
            </p>
          </li>
          <li>
            <h2>11. DEVOLUCIONES</h2>
            <p>
              INSTAKASH se reserva la discreción de aprobación de la solicitud de devolución, estando siempre atentos a la inquietud y
              consideraciones del USUARIO.
            </p>
            <p>
              La solicitud de devolución solo pasará a evaluación cuando se trate o se presuma de un error de la plataforma. Mientras no
              ocurra ninguna irregularidad con la operación no se aceptará ninguna solicitud. El USUARIO dispone de 48 horas para informar
              al equipo de soporte, brindando información que se le consulte sobre la materia. Transcurrido el plazo de 48 horas dentro de
              los días útiles de realizada la transacción de CAMBIO, queda inválida cualquier solicitud de devolución.
            </p>
            <p>
              INSTAKASH se reserva el derecho de cualquier acción sobre aquellas solicitudes de cambio registradas o no registradas y/o
              devoluciones que sean solicitadas por el usuario habiendo transcurrido un lapso de tiempo. En este caso INSTAKASH podrá
              aplicar cargos y comisiones administrativas, tomando en consideración la cuantía, la moneda y el lapso transcurrido sobre el
              cual se realizó la transferencia de fondos inicial.
            </p>
            <p>
              INSTAKASH no se hace responsable ni ofrece devoluciones en los casos de un error en la información brindada por el USUARIO en
              los datos de transferencia.
            </p>
            <p>
              INSTAKASH no se hace responsable ni ofrece devoluciones por errores de transacción que correspondan a las entidades
              financieras. Estas deben resolverse entre el USUARIO y el banco emisor.
            </p>
            <p>
              INSTAKASH no realiza devoluciones a través de efectivo físico ya que todas las operaciones se realizan vía transferencia
              bancaria.
            </p>
          </li>
          <li>
            <h2>12. BOLETAS Y FACTURAS ELECTRÓNICAS:</h2>
            <p>
              INSTAKASH emitirá boletas electrónicas a los usuarios que estén registrados como personas naturales y emitirá facturas a los
              usuarios registrados como personas jurídicas. La respectiva boleta y/o factura será emitida hacia el perfil que ejecute la
              operación, sea persona natural o persona jurídica. Para mantener un orden contable, no se podrán modificar las boletas o
              facturas una vez emitidas, ya que estás se rigen de acuerdo a los datos solicitados por el usuario. Si el USUARIO requiere
              alguna modificación deberá anunciarlo antes de efectuar su operación para proceder con la actualización de sus datos
              registrados. Por normativa de la Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT), las operaciones
              de cambio de divisas están exentas del pago de IGV, es decir, no existe un cobro adicional por concepto de IGV.
            </p>
          </li>
          <li>
            <h2>13. HORARIO DE ATENCIÓN:</h2>
            <p>
              El horario de atención de INSTAKASH es de lunes a viernes de 9 am a 7 pm y sábados de 9 am a 2 pm, siempre y cuando sean días
              hábiles, es decir excluyendo feriados locales e internacionales. Por lo tanto, las operaciones y transferencias a ser
              solicitadas por parte del USUARIO deberán realizarse de acuerdo a lo antes señalado.
            </p>
            <p>
              Si el USUARIO realiza una transferencia a las cuentas de INSTAKASH fuera del horario de atención, la operación podrá no ser
              aceptada. Caso contrario, la misma será finalizada en el horario de apertura del siguiente dia útil, todo bajo las condiciones
              que INSTAKASH considere pertinentes.
            </p>
          </li>
          <li>
            <h2>14. SEGURIDAD:</h2>
            <p>
              Proteger su privacidad es muy importante para INSTAKASH. El acceso a los servicios se realiza a través de una contraseña que
              EL USUARIO ha asignado en el momento del registro a través de LA PLimport Layout from
              &lsquo;../src/components/layout/Layout&rsquo; ATAFORMA de INSTAKASH. Por lo tanto, EL USUARIO es el único que conoce esta
              información. EL USUARIO no deberá revelar dicha información a terceros, habiendo sido creada la cuenta para uso exclusivo de
              EL USUARIO.
            </p>
            <p>
              INSTAKASH no revela los datos de su cuenta, direcciones postales, correo electrónico, operaciones ni datos personales en
              general; excepto ante un mandato emitido por una autoridad competente.
            </p>
            <p>
              Todo tipo de información sensible entre su navegador e INSTAKASH se transfiere de forma encriptada utilizando (SSL), razón por
              la cual, deberá asegurarse de que su navegador reconozca y valide el certificado de www.instakash.net.
            </p>
          </li>
          <li>
            <h2>15. PROPIEDAD INTELECTUAL:</h2>
            <p>
              INSTAKASH está protegido por los derechos de propiedad de autor. Todos los derechos involucrados como por ejemplo el
              contenido, el diseño visual, logos y eslogan que forman parte del contenido y servicios, pertenecen a INSTAKASH. En base a
              ello, se prohíbe utilizar, codificar, copiar, distribuir, transmitir o comercializar los derechos involucrados sin el permiso
              expreso por escrito.
            </p>
            <p>
              EL USUARIO no adquiere ningún derecho de propiedad intelectual por el uso de los Servicios y Contenidos de LA PLATAFORMA, no
              siendo considerado una autorización ni licencia para utilizar los servicios y contenidos con fines distintos a los mencionados
              en el presente contrato.
            </p>
          </li>
          <li>
            <h2>16. QUEJAS Y RECLAMOS:</h2>
            <p>
              Sección de la página web de INSTAKASH donde el usuario puede documentar su reclamo de forma directa con la empresa. Estamos
              comprometidos a proporcionarle los más altos estándares de servicio.
            </p>
          </li>
          <li>
            <h2>17. DEFINICIONES</h2>
            <p>VISITANTE: Cualquier persona que en cualquier momento visite o haya visitado la Plataforma.</p>
            <p>
              USUARIO: Persona natural o jurídica, que se haya registrado en la Plataforma, celebrado un acuerdo con INSTAKASH, que tenga
              domicilio legal en Perú y cuente con: i) un número de cuenta en un banco peruano a su disposición para realizar la
              transferencia de fondos correspondiente y ii) una tarjeta de crédito aprobada con saldo disponible para compras.
            </p>
            <p>
              CUENTA: Es el espacio del USUARIO en una entidad bancaria donde se realizará el depósito del efectivo o transferencia de
              fondos correspondiente, luego de cancelados los recibos de servicios del USUARIO.
            </p>
            <p>TRANSACCIONES: Es el medio de registro de las operaciones solicitadas y ejecutadas dentro de la plataforma.</p>
            <p>
              HISTORIAL DE TRANSACCIONES: Usted podrá acceder al detalle de sus operaciones realizadas y otra información relacionada a su
              cuenta, dando click en la pestaña “Mi Cuenta”, habiendo ingresado a su cuenta personal.
            </p>
            <p>
              TRANSFERENCIA INTERBANCARIA: Cuando las trasferencias son entre cuentas de bancos locales distintas a las que tiene INSTAKASH.
            </p>
            <p>
              TRANSFERENCIA INTERPLAZA: en el caso que el USUARIO no tenga cuentas en Lima INSTAKASH deducirá del monto a enviar como
              resultado de la operación los costos bancarios asociados al envió de dinero a otra plaza.
            </p>
            <p>
              TRANSFERENCIA INMEDIATA: Transferencia interbancarias que se pueden ejecutar en un aproximado de quince (15) minutos, donde la
              entidad financiera establecerá una comisión por dicho servicio que EL USUARIO tendrá que asumir
            </p>
          </li>
          <li>
            <h2>18. ACUERDO COMPLETO</h2>
            <p>
              Este contrato y cualquier documento expresamente mencionado en él, constituye el acuerdo entero entre EL USUARIO e INSTAKASH y
              sustituye cualquier discusión, correspondencia, acuerdos o entendimientos anteriores entre nosotros.
            </p>
            <p>
              Para la interpretación, cumplimiento y ejecución de estos términos y condiciones, las partes están de acuerdo en que serán
              aplicables las leyes vigentes en la República del Perú, renunciando expresamente a cualquier otra jurisdicción que pudiera
              corresponderles en razón de sus domicilios presente o futuros, sometiéndose a la competencia y jurisdicción de los Jueces y
              Tribunales de Lima, Perú.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}

export default TerminosYCondicionesPage;
