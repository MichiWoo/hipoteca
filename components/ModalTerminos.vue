<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-40 flex flex-col items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-dark opacity-95"
  >
    <div
      class="relative z-50 w-full mt-6 mb-3 overflow-auto rounded-lg shadow-lg opacity-100 h-4/6 bg-light"
    >
      <div class="flex justify-between px-5 py-4 border-2 border-light">
        <div>
          <svg
            class="inline w-6 h-6 text-light-secondary dark:text-dark-secondary svg-inline--fa fa-exclamation-triangle fa-w-18"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="exclamation-triangle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
            ></path></svg
          ><span class="text-base font-bold text-light-secondary"
            >Términos Generales de Contratación.</span
          >
        </div>
        <div>
          <button aria-label="Botón Cerrar Modal" @click="closeModal('c')">
            <svg
              class="inline w-6 h-6 transition duration-150 text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col justify-center align-center">
        <div class="flex w-full flex-start">
          <div class="px-5 py-2 text-sm font-bold text-light-primary">
            CONDIONES GENERALES DE CONTRATACIÓN
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            Este documento establece las condiciones generales de contratación
            de la empresa Hipotecaes10 SL, con CIF B-87794061 y domicilio
            Carrera de San Jerónimo 18, 28014 Madrid TELÉFONO: 910 75 81 69.
            E-MAIL de contacto: info@hipoteca10.es.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="ml-1 text-sm text-justify text-light-primary">
            NOMBRE DEL DOMINIO:<a
              class="font-bold"
              href="https:hipoteca10.es"
              target="_blank"
              rel="noreferer noopener"
              aria-label="link a www.hipoteca10.es"
              >www.hipoteca10.es</a
            >
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            Estas condiciones regulan la relación contractual entre Hipotecaes10
            SL y las personas físicas y jurídicas que suscriban con la citada
            empresa el correspondiente contrato de intermediación para la
            concesión de préstamos o créditos, los consumidores.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            Hipoteca10 SL, dispone de la página web www.hipoteca10.es.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            Hipoteca10, es una empresa que actúa en el mercado español como
            Intermediario de Crédito Inmobiliario, y presta sus servicios bajo
            el marco regularotio de la Ley 5/2019, de 15 de marzo, reguladora de
            los contratos de crédito inmobiliario y de la Ley 2/2009, de 31 de
            marzo, por lo que se regula la contratación con los consumidores de
            préstamos o créditos hipotecarios de servicio de intermediación para
            la celebración de contratos de préstamo o crédito y que no ofrece
            servicios de asesoramiento hipotecario (la empresa se está adecuando
            a la ley 5/2019 de 15 de mayo, y al Real Decreto 309/2019 del 26 de
            abril, para poder prestar el servicio de asesoramiento).
            Hipotecaes10 SL, opera en el mercado financiero español actuando
            como intermediario de crédito inmobiliario independiente entre las
            entidades financieras y las empresas y/o particulares que llevan a
            cabo actividades de contratación de préstamos o créditos
            hipotecarios que deseen otorgar financiación, y las personas físicas
            y/o jurídicas que precisen la concesión de créditos o préstamos
            hipotecarios, realizando su labor comercial a través de publicidad
            en los medios de comunicación y campañas de marketing directo,
            posibilitándole una búsqueda más eficiente de los créditos y
            préstamos disponibles en el mercado y que se adapten a sus
            necesidades, favoreciendo el acceso a las mejores condiciones
            existentes, de conformidad a la información facilitada por los
            consumidores y al conocimiento del sector bancario.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            Hipotecaes10 SL se compromete a seleccionar, entre los productos que
            se ofrecen en el mercado, los que mejor se adapten a las
            características del crédito solicitado por los consumidores, de
            conformidad a la información proporcionada por éste a hipoteca10.es,
            presentándole al menos tres ofertas vinculantes de entidades de
            crédito u otras empresas y/o particulares sobre cuyas condiciones
            jurídicas y económicas les asesorará. No obstante, en el supuesto
            que, tras el examen de la información facilitada por los
            consumidores, no fuera posible presentar tres ofertas vinculantes
            debido a las condiciones del mercado financiero, o que del estudio
            del perfil económico del prestatario no cumpla con los requisitos
            que soliciten algunas de las entidades Prestamistas, y solo se
            pudieran presentar una oferta vinculante, el prestatario podrán
            desistir del contrato sin coste económico alguno, o bien aceptar
            la/s que se les propongan, en los términos indicados en el
            clausulado del contrato.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            Hipoteca10 actuando como intermediarios de crédito o sus
            representantes designados recabarán la información que resulte
            necesaria sobre la situación personal y financiera del prestatario,
            así como sobre sus preferencias y objetivos, de modo que puedan
            recomendar contratos de préstamo adecuados; el análisis se basará en
            información que esté actualizada en la fecha de que se trate, y
            tendrá en cuenta hipótesis razonables sobre los riesgos existentes
            para la situación del prestatario a lo largo de la vigencia del
            contrato de préstamo propuesto.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            El precio total que LOS CLIENTES deberán abonar a Hipotecaes10 SL
            por su labor de intermediación financiera, tras haber seleccionado,
            entre los productos que se ofrecen en el mercado, los que mejor se
            adaptan a las características del crédito solicitado por aquéllos y
            a su situación, se encuentra publicado en la tabla de tarifas que
            éstos encontrarán en nuestras oficinas y que serán de aplicación en
            función del tipo de la operación contratada finalmente, siempre y
            cuando se suscriba por LOS CLIENTES la oferta vinculante que le
            presente Hipotecaes10 SL , minutándose aparte los impuestos y gastos
            que no se paguen a través de Hipotecaes10 SL, como por ejemplo,
            notaría, registro, impuestos, gestoría, etc. así como los servicios
            y productos que puedan ser necesarios contratar durante la
            tramitación del crédito o préstamo, como por ejemplo seguros, notas
            simples registrales, tasaciones o servicios jurídicos, entre otros.
            Así mismo lo honorarios profesionales de Hipotecaes10 SL podrán ser
            pactados en nota de encargo pactada voluntariamente entre los
            clientes y Hipotecaes10 SL. En el caso de la contratación de
            tasación, la compañía tasadora facturará a LOS CLIENTES la cantidad
            que estime dicha compañía, según el valor de mercado de cada
            vivienda y sus tarifas. En el supuesto que LOS CLIENTES decidieran
            no firmar el nuevo crédito o préstamo propuesto por Hipotecaes10 SL,
            aquéllos no tendrán que pagar a la citada empresa cantidad alguna,
            siendo todos los servicios, prestados hasta ese momento totalmente
            GRATUITOS para LOS CLIENTES, salvo en aquellos supuestos, que el
            consumidor actúe en fraude de ley, tal y como aparecerá recogido en
            el contrato firmado entre ambas partes.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            Los honorarios serán abonados a en Hipotecaes10 SL el momento de la
            firma del nuevo crédito o préstamo hipotecario, a través de un
            talón, o mediante su ingreso en la cuenta corriente que se le
            indique a tal efecto.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            Hipoteca 10, procederá, ante la solicitud del cliente, a comunicar
            la existencia y, cuando se conozca, el importe de las comisiones u
            otros incentivos que el prestamista o un tercero pudieran abonar a
            Hipoteca10 por sus servicios en relación con el contrato de
            préstamo. Si el importe no es conocido en el momento de facilitarse
            la información, el intermediario de crédito inmobiliario informará
            al prestatario de que el importe real será revelado posteriormente
            en la ficha de información personalizada. Cuando el Hipoteca10 cobre
            una remuneración al prestatario y reciba adicionalmente una comisión
            del prestamista o de un tercero, deberá informar al prestatario si
            la remuneración se deducirá o no, total o parcialmente, de la
            comisión. Hipoteca10 actuara en este punto conforme a lo que exige
            la ley 5/2019 del 15 de marzo.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            Los consumidores podrán desistir del contrato de intermediación
            suscrito con en Hipotecaes10 SL los catorce días naturales
            siguientes a la formalización del mismo, sin alegación de causa
            alguna y sin penalización, salvo cuando se actúe en fraude de ley, y
            lo que se busque sea aprovechar el trabajo realizado por
            Hipotecaes10 SL, remitiendo a Hipotecaes10 SL el correspondiente
            requerimiento fehaciente, dentro del plazo indicado. Hipotecaes10 SL
            podrá resolver el contrato una vez haya constatado la imposibilidad
            de encontrar una solución en el mercado que se ajuste a los
            requerimientos de los consumidores, notificándoselo a éstos
            verbalmente o por escrito, vía correo electrónico, fax o correo
            ordinario.
          </div>
        </div>
        <div class="flex w-full flex-start">
          <div class="px-5 py-2 text-sm font-bold text-light-primary">
            CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS
          </div>
        </div>
        <div class="flex w-full flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            En cumplimiento de lo dispuesto en la L.O.P.D. 15/1999, de 13 de
            diciembre, de Protección de Datos de Carácter Personal, y en el Real
            Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el
            Reglamento de desarrollo de la LOPD, y de cualesquiera otras normas
            vigentes o que en el futuro vengan a sustituir y/o a modificar a
            éstas, se aplicará lo siguiente:
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            Los datos de carácter personal facilitados por los consumidores a
            través del formulario o correo electrónico quedarán registrados en
            el fichero de hipoteca10.es, el cual consta inscrito en el Registro
            General de Protección de Datos. Estos datos sólo serán accesibles al
            personal de esta entidad que deba conocerlos, y serán cedidos a las
            entidades con las que Hipotecaes10 SL colabora, a efectos de
            analizar y materializar la operación de financiación objeto de la
            intermediación financiera contratada. Hipotecaes10 SL podrá informar
            de otros productos financieros que considerase pudieran encajar con
            su perfil.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
          </div>
          <div class="ml-1 text-xs text-justify text-light-primary">
            Los consumidores autorizan a solicitar informe en su nombre a la
            Central de información de Riesgos del Banco de España (C.I.R.B.E) y
            a cualquier otro fichero de solvencia patrimonial y crédito,
            incluidas las bases de datos o listados de morosidad y los datos que
            puedan existir acerca de sus operaciones activas con otras entidades
            de crédito.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
            <div class="ml-1 text-xs text-justify text-light-primary">
              Los consumidores autorizarán a Hipotecaes10 SL para actuar,
              presentar en su nombre y ceder los datos de carácter personal
              necesarios a bancos, cajas y entidades colaboradoras, a través de
              formularios o presentación física de documentación, para que estos
              puedan analizar la viabilidad de la operación.
            </div>
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="flex items-start content-start justify-center mt-1">
            <svg
              class="inline w-6 h-6 text-xs text-light-primary dark:text-dark-primary"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dot-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
              ></path>
            </svg>
            <div class="ml-1 text-xs text-justify text-light-primary">
              En cualquier momento, los consumidores podrán ejercer su derecho
              de Acceso, Rectificación, Oposición y Cancelación de los datos que
              ha facilitado a www.hipoteca10.es. El ejercicio de este derecho
              deberán realizarlo ante el responsable del fichero, mediante
              comunicación escrita dirigida al correo electrónico:
              info@hipoteca10.es
            </div>
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="px-5 py-2 text-sm font-bold text-light-primary">
            LEY APLICABLE Y JURISDICCIÓN
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            Las presentes Condiciones Generales se rigen por la legislación
            española. Los usuarios de la web y cualquier persona que contrate
            los productos o servicios de Hipotecaes10 SL a través de la misma
            renuncian de manera expresa a cualquier otro foro que pudiera
            corresponderles, sometiéndose expresamente a los Juzgados y
            Tribunales de la ciudad de Madrid para la resolución de cualquier
            cuestión que pueda suscitarse sobre la aplicación, cumplimiento o
            interpretación de estas condiciones.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            Si procede, la existencia y, cuando se conozca, el importe de las
            comisiones u otros incentivos que el prestamista o un tercero han de
            abonar al intermediario de crédito inmobiliario por sus servicios en
            relación con el contrato de préstamo. Si el importe no es conocido
            en el momento de facilitarse la información, el intermediario de
            crédito inmobiliario informará al prestatario de que el importe real
            será revelado posteriormente en la ficha de información
            personalizada. h) Cuando el intermediario de crédito cobre una
            remuneración al prestatario y reciba adicionalmente una comisión del
            prestamista o de un tercero, deberá informar al prestatario si la
            remuneración se deducirá o no, total o parcialmente de la comisión.
          </div>
        </div>
        <div class="flex justify-end px-5 py-4">
          <button
            class="px-3 py-2 text-sm transition duration-150 text-light-secondary hover:text-light-secondary"
            aria-label="Botón Cancelar Modal"
            @click="closeModal('c')"
          >
            Cancelar</button
          ><button
            class="px-3 py-2 mr-1 text-sm transition duration-150 rounded bg-light-primary text-light hover:bg-ligth-primary"
            aria-label="Botón Aceptar Terminos"
            @click="closeModal('ok')"
          >
            Aceptar Términos y Condiciones
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalTerminos',
  methods: {
    closeModal(acc) {
      this.$emit('closeModal', acc)
    },
  },
}
</script>

<style scoped></style>
