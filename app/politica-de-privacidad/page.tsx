import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ShieldCheck } from "lucide-react"

import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"

type LegalSection = {
  title: string
  content?: string[]
  items?: string[]
  note?: string
}

const termsIntroduction = [
  "Los presentes Términos y Condiciones regulan la contratación, el acceso y la utilización de los servicios ofrecidos a través de lidIA (en adelante, “lidIA”, la “Plataforma” o el “Servicio”), operada por BUSINESS & LAWYERS S.A.S., identificada con NIT 901.035.706-0, con domicilio en Bogotá D.C., Colombia (en adelante, el “Proveedor”).",
  "La aceptación de estos Términos y Condiciones se realiza mediante los mecanismos electrónicos dispuestos por lidIA durante el proceso de contratación. Al aceptarlos, el Usuario declara que ha tenido la oportunidad de conocer previamente sus condiciones, comprende la naturaleza tecnológica del Servicio, su alcance y sus limitaciones y solicita su prestación en los términos aquí establecidos.",
  "Ahora bien, estos Términos deberán interpretarse de conformidad con la legislación colombiana aplicable. En consecuencia, ninguna de sus estipulaciones podrá entenderse como renuncia, restricción o modificación de aquellos derechos que, por disposición legal, tengan carácter imperativo o irrenunciable.",
]

const termsSections: LegalSection[] = [
  {
    title: "Alcance exclusivo del servicio",
    content: [
      "lidIA es una herramienta tecnológica de automatización, diligenciamiento y generación documental cuyo objeto consiste en recopilar información suministrada directamente por el Usuario y procesarla mediante estructuras, plantillas, minutas, reglas, campos, flujos automatizados y demás herramientas previamente configuradas, con el propósito de producir el documento específicamente seleccionado por aquel.",
      "Por tanto, el Servicio contratado se circunscribe al documento escogido por el Usuario y al procesamiento de la información que este suministre dentro del flujo correspondiente. De tal forma, lidIA no tiene por objeto investigar la situación jurídica integral del Usuario, descubrir circunstancias no informadas, revisar de oficio documentos externos, determinar la estrategia jurídica más conveniente ni sustituir la valoración profesional que, atendiendo a las circunstancias particulares de cada caso, pueda corresponder a un abogado.",
      "Cuando esté habilitado, el Servicio podrá incluir, tras la generación del documento, un módulo automatizado de consultas limitado exclusivamente al contenido del documento generado. Dicho módulo forma parte accesoria del servicio tecnológico adquirido y únicamente tiene por finalidad permitir al Usuario comprender, ubicar o solicitar una explicación del contenido efectivamente incorporado en ese documento.",
      "Por consiguiente, quedan expresamente excluidos del Servicio la asesoría jurídica general o individualizada, la emisión de conceptos profesionales independientes, la representación judicial, administrativa o extrajudicial, el análisis integral de controversias, la revisión de documentos distintos del generado, la elaboración de estrategias jurídicas, el acompañamiento profesional posterior, la negociación con terceros, el control de términos o actuaciones y cualquier otra prestación que no haya sido expresamente incluida dentro del servicio tecnológico contratado.",
      "El alcance contractual de lidIA se determina, por tanto, por las funcionalidades que hayan sido efectivamente ofrecidas al Usuario y no por expectativas, interpretaciones o prestaciones adicionales que este haya supuesto o esperado recibir y que no formen parte del Servicio.",
    ],
  },
  {
    title: "Primera: Naturaleza tecnológica y delimitación de la prestación",
    content: [
      "lidIA constituye una herramienta tecnológica de generación documental y no una firma de abogados, consultorio jurídico, abogado virtual, apoderado o representante del Usuario. La función de la Plataforma consiste en recibir los datos suministrados dentro del flujo correspondiente y utilizarlos para producir el documento seleccionado de acuerdo con las estructuras y reglas incorporadas al sistema.",
      "En virtud de lo anterior, el valor pagado por el Usuario remunera la ejecución del servicio tecnológico específicamente contratado. La circunstancia de que lidIA utilice automatización, inteligencia artificial u otras tecnologías para procesar información, estructurar textos, completar campos, generar documentos o atender funcionalidades accesorias no modifica la naturaleza del Servicio ni transforma las interacciones producidas por la Plataforma en asesoría jurídica profesional.",
      "De igual manera, la utilización de lidIA no genera por sí misma una relación abogado-cliente, mandato, representación, apoderamiento, obligación de seguimiento o deber profesional distinto de las obligaciones que correspondan al Proveedor por la prestación del servicio tecnológico ofrecido.",
    ],
  },
  {
    title: "Segunda: Información suministrada y responsabilidad del Usuario",
    content: [
      "El Usuario reconoce que el funcionamiento y resultado de lidIA dependen sustancialmente de la información que él mismo proporcione. En consecuencia, se obliga a suministrar datos ciertos, completos, suficientes, actualizados y coherentes, así como a revisar cuidadosamente la información incorporada antes de confirmar su utilización para generar el documento.",
      "Esta obligación comprende, particularmente: la verificación de nombres; números de identificación; calidad de las partes; fechas; valores; porcentajes; direcciones; información sobre bienes; obligaciones; plazos; y cualquier otro dato solicitado durante el flujo. Cuando lidIA presente un resumen, vista previa, confirmación o mecanismo semejante, corresponderá al Usuario revisarlo antes de continuar con la contratación.",
      "Salvo que para una funcionalidad determinada se indique expresamente lo contrario, lidIA no está obligada a comprobar mediante fuentes externas la autenticidad, exactitud o integridad material de la información suministrada, ni a consultar registros, bases de datos, documentos, antecedentes o fuentes públicas o privadas para verificarla.",
      "Por esta razón, las consecuencias que tengan origen exclusivo en datos falsos, equivocados, incompletos, contradictorios, desactualizados u omitidos por el Usuario no serán imputables a lidIA, sin perjuicio de las responsabilidades propias del Proveedor que, por disposición legal, no puedan ser excluidas.",
    ],
  },
  {
    title: "Tercera: Alcance y suficiencia del documento generado",
    content: [
      "El documento producido por lidIA corresponde al resultado del procesamiento de la información suministrada por el Usuario a través de las estructuras y funcionalidades disponibles para el documento seleccionado. Su generación no supone que lidIA haya realizado una auditoría, debida diligencia o estudio jurídico integral de la situación particular del Usuario.",
      "En efecto, la adecuación de un documento puede depender de circunstancias externas que no necesariamente sean conocidas por la Plataforma, tales como la existencia de contratos previos, restricciones particulares, poderes, gravámenes, limitaciones de capacidad, requisitos tributarios, regímenes especiales, decisiones judiciales o administrativas, formalidades notariales o registrales, permisos, licencias, autorizaciones de terceros, anexos, términos o cualquier otro elemento que no haya sido informado dentro del flujo.",
      "En consecuencia, lidIA no estará obligada a presumir, investigar, descubrir o reconstruir circunstancias que el Usuario no haya suministrado. Cuando las características particulares de una operación requieran un análisis adicional o la determinación de su conveniencia jurídica, corresponderá al Usuario obtener la revisión profesional que considere necesaria antes de utilizar el documento.",
    ],
  },
  {
    title: "Cuarta: Módulo de consultas sobre el documento generado",
    content: [
      "Cuando esta funcionalidad se encuentre habilitada, el módulo de consultas tendrá un alcance estrictamente accesorio, cerrado y vinculado al documento generado dentro de la misma operación. Su finalidad consiste exclusivamente en permitir al Usuario formular preguntas encaminadas a comprender el contenido de una cláusula, identificar dónde se encuentra determinada información, solicitar una explicación en lenguaje más sencillo, comprender la estructura del documento o aclarar qué quedó consignado en una sección específica.",
      "En consecuencia, la respuesta generada por dicho módulo deberá entenderse exclusivamente en relación con el texto del documento. No constituye un concepto jurídico independiente, no supone un análisis profesional integral de la situación particular del Usuario, no prescribe una conducta y no determina si resulta jurídicamente conveniente celebrar, modificar, ejecutar, terminar o abstenerse de realizar determinada actuación.",
      "Bajo ninguna circunstancia el módulo podrá utilizarse como mecanismo de asesoría jurídica general ni para formular consultas distintas de aquellas estrictamente relacionadas con el documento generado. Por ello, se consideran fuera de su alcance, entre otras, las preguntas acerca de qué actuación jurídica debe adelantar el Usuario, estrategias procesales o contractuales, demandas, controversias, procedimientos administrativos, interpretación de documentos diferentes, hechos externos al documento, elaboración de conceptos, análisis general de legislación o jurisprudencia, evaluación de riesgos jurídicos no contenidos en el texto generado o recomendaciones acerca de la conveniencia de firmar, demandar, negociar, modificar, incumplir, terminar o ejecutar un negocio jurídico.",
      "Cuando una consulta exceda el objeto anteriormente establecido, lidIA podrá rechazarla, interrumpirla, bloquearla o darla por terminada de plano, sin que dicha circunstancia constituya incumplimiento, defecto o falla del Servicio. Tampoco surgirá por ese solo hecho una obligación contractual de devolución, pues la consulta excluida nunca habrá formado parte de la prestación adquirida.",
      "El Usuario reconoce, en consecuencia, que cualquier servicio de consulta o asesoría jurídica distinto de la explicación del documento generado constituye una prestación autónoma y diferente, no ofrecida ni mantenida por lidIA a través de este módulo, y que únicamente podría existir si en algún momento fuese ofrecida y contratada de manera expresa e independiente.",
    ],
  },
  {
    title: "Quinta: Ausencia de asesoría jurídica y autonomía del Usuario",
    content: [
      "lidIA no determina cuál actuación debe adoptar el Usuario, no emite conceptos jurídicos profesionales individualizados, no realiza diagnósticos integrales, no representa al Usuario ante autoridades o terceros y no asume la conducción de controversias, reclamaciones, negociaciones o procedimientos.",
      "Las preguntas formuladas por la Plataforma durante la generación tienen por objeto recopilar los datos necesarios para completar la estructura correspondiente. Por consiguiente, el hecho de que lidIA formule una pregunta, presente alternativas, organice determinada información o la incorpore dentro de una cláusula no significa que haya evaluado integralmente todas las consecuencias jurídicas relacionadas con dicha información.",
      "En todo caso, el Usuario conserva plena autonomía respecto de las decisiones que adopte. La determinación final de firmar, utilizar, presentar, ejecutar, negociar, modificar o abstenerse de utilizar un documento corresponde al propio Usuario y no constituye una instrucción impartida por lidIA.",
    ],
  },
  {
    title: "Sexta: Proceso de generación, pago e inicio de la ejecución",
    content: [
      "El proceso de contratación se encuentra diseñado para que, antes del pago, el Usuario seleccione el documento requerido, responda las preguntas correspondientes, suministre los datos necesarios y tenga la oportunidad de revisar o confirmar la información cuando el flujo habilite dicha funcionalidad. Posteriormente, lidIA informará el precio correspondiente y permitirá al Usuario decidir si continúa o no con la operación.",
      "Una vez realizado y aprobado el pago, comenzará la ejecución del Servicio mediante el procesamiento de la información previamente suministrada y confirmada por el Usuario para producir el documento contratado. Finalizado dicho procesamiento, el documento será puesto a disposición por el mecanismo definido por lidIA y, cuando corresponda, podrá habilitarse el módulo accesorio de consultas.",
      "La ejecución del Servicio no depende de que el Usuario posteriormente decida abrir, descargar, firmar o utilizar el archivo. Por lo tanto, una vez producido y puesto a su disposición, la decisión posterior de no utilizarlo, cambiar de opinión respecto de la operación que pretendía documentar o resolver su necesidad por otra vía no significa, por sí sola, que el servicio tecnológico no haya sido ejecutado.",
      "En todo caso, ninguna estipulación de estos Términos pretende pactar en contrario, eliminar, restringir o hacer renunciar anticipadamente al Usuario a derechos que la legislación colombiana reconozca con carácter imperativo. Cuando una norma determine la existencia, procedencia, improcedencia, condiciones o efectos de un derecho del consumidor, prevalecerá lo dispuesto por la legislación vigente y no una estipulación contractual en contrario.",
      "La anterior previsión no altera la naturaleza ni la secuencia real de la prestación: la información es suministrada antes del pago y la ejecución tecnológica de generación comienza una vez la transacción ha sido aprobada.",
    ],
  },
  {
    title: "Séptima: Precio, autorización y procesamiento del pago",
    content: [
      "El Usuario conocerá el precio del Servicio antes de finalizar la operación. Cuando existan impuestos, costos o conceptos adicionales que deban ser asumidos dentro de la transacción, estos serán incorporados o informados conforme resulte aplicable.",
      "La validación del pago podrá depender de bancos, emisores, adquirentes, pasarelas de pago u otros participantes tecnológicos o financieros. Por esta razón, un intento de pago, un débito temporal, una retención o una autorización pendiente no equivaldrá necesariamente a una operación aprobada mientras el sistema correspondiente no confirme la transacción.",
      "La información financiera administrada directamente por terceros proveedores de pagos estará sometida a los sistemas y condiciones técnicas de dichos proveedores, en lo que corresponda.",
    ],
  },
  {
    title: "Octava: Reversión, contracargos y desconocimiento de transacciones",
    content: [
      "La presentación de una solicitud de reversión, contracargo, desconocimiento de una operación, devolución bancaria o reclamación relacionada con el pago no constituye, por sí sola, reconocimiento de incumplimiento o responsabilidad por parte de lidIA ni genera automáticamente una obligación contractual de devolución.",
      "La procedencia de dichos mecanismos se determinará de acuerdo con las causales, requisitos y procedimientos establecidos en la legislación colombiana aplicable. En ese contexto, lidIA podrá verificar la operación, controvertir las solicitudes que considere improcedentes y aportar la evidencia disponible legítimamente para acreditar la autorización y la ejecución de la transacción.",
      "Para estos efectos, lidIA podrá utilizar registros relacionados con la fecha y hora de la interacción, el documento seleccionado, la información suministrada o confirmada, la aceptación contractual, el valor pagado, la confirmación de la transacción, el inicio del procesamiento, la generación y la puesta a disposición del documento, los accesos posteriores y la utilización del módulo de consultas, en la medida en que su conservación y utilización resulten legalmente procedentes.",
      "En particular, el simple cambio de opinión del Usuario, la decisión posterior de no utilizar el documento, la circunstancia de que la operación jurídica finalmente no se celebre, la negativa de una contraparte a aceptarlo, los errores derivados de información suministrada por el propio Usuario, la expectativa de recibir asesoría jurídica no contratada o la negativa del módulo a atender una pregunta ajena al documento generado no constituyen, por sí mismos, reconocimiento contractual de una causal de devolución o reversión.",
      "Asimismo, lidIA podrá ejercer los mecanismos legalmente disponibles frente a solicitudes fraudulentas, abusivas o manifiestamente infundadas, sin que ello implique restricción de los derechos de reversión u otros mecanismos que la legislación reconozca obligatoriamente al consumidor.",
    ],
  },
  {
    title: "Novena: Ausencia de garantía de resultado",
    content: [
      "La obligación asumida por lidIA corresponde a la prestación del servicio tecnológico ofrecido y no a la obtención de un determinado resultado jurídico, económico, contractual, administrativo, judicial o comercial.",
      "En consecuencia, lidIA no garantiza que una contraparte acepte el documento, que una autoridad adopte determinada interpretación, que una cláusula produzca un efecto específico, que el documento evite futuras controversias ni que sea recibido sin requerimientos adicionales por jueces, árbitros, notarías, registros, cámaras de comercio, entidades financieras, autoridades administrativas o terceros.",
      "De igual manera, la generación de un documento no garantiza que este resulte suficiente para situaciones, hechos o circunstancias que el Usuario no haya suministrado durante el proceso. Las decisiones adoptadas por terceros y las modificaciones legales, regulatorias, jurisprudenciales o fácticas posteriores a la generación tampoco forman parte del resultado garantizado por lidIA.",
    ],
  },
  {
    title: "Décima: Formalidades, términos y actuaciones posteriores",
    content: [
      "Salvo que una funcionalidad determinada indique expresamente lo contrario, lidIA no asume la ejecución de formalidades posteriores a la generación del documento ni el seguimiento de los efectos derivados de su utilización.",
      "Por lo tanto, corresponde al Usuario verificar si el documento debe ser firmado, autenticado, reconocido, registrado, presentado ante una entidad, acompañado de anexos o sometido a cualquier otro requisito adicional. Del mismo modo, lidIA no asume el control, cómputo, vigilancia o seguimiento de términos judiciales, administrativos, contractuales, de prescripción, caducidad, notificación o cualquier otro plazo relacionado con situaciones del Usuario.",
      "Cuando exista riesgo de vencimiento de un término o sea necesaria una actuación profesional urgente, corresponderá al Usuario obtener oportunamente la asistencia que requiera.",
    ],
  },
  {
    title: "Undécima: Tratamiento de datos personales",
    content: [
      "Los datos personales suministrados o tratados con ocasión del uso de lidIA serán administrados de conformidad con la Ley 1581 de 2012, el Decreto 1074 de 2015, las normas que los modifiquen, adicionen, sustituyan o reglamenten y las demás disposiciones legales aplicables en materia de protección de datos personales.",
      "Dentro de ese marco, lidIA podrá recolectar, almacenar, organizar, utilizar, procesar, consultar, transmitir, conservar o suprimir información cuando ello resulte necesario y jurídicamente procedente para gestionar la interacción con el Usuario, producir el documento contratado, administrar la transacción, operar la Plataforma, prevenir fraudes, proteger la seguridad de sus sistemas, atender solicitudes, cumplir obligaciones legales, gestionar controversias, conservar evidencia de las operaciones o ejercer y defender sus derechos.",
      "Asimismo, lidIA podrá determinar, implementar, modificar y actualizar internamente, en el desarrollo ordinario de su actividad, los protocolos, criterios, controles, mecanismos de seguridad, procedimientos operativos, reglas de conservación, prácticas administrativas y demás medidas que considere razonablemente necesarias para la gestión cotidiana de la información y la evolución del Servicio.",
      "Tales determinaciones internas se ejercerán en todo caso dentro del marco establecido por la legislación aplicable y no podrán entenderse como autorización para desconocer los principios, derechos, deberes, finalidades o autorizaciones que legalmente resulten exigibles. En particular, cuando la legislación requiera una autorización previa, expresa e informada del titular para determinado tratamiento, esta deberá obtenerse en los términos legalmente correspondientes.",
      "Para la operación tecnológica, lidIA podrá apoyarse en terceros que desarrollen funciones de infraestructura, almacenamiento, seguridad, automatización, inteligencia artificial, mensajería, procesamiento de pagos u otras actividades necesarias para la prestación del Servicio, siempre con sujeción a las reglas legalmente aplicables.",
    ],
  },
  {
    title: "Duodécima: Información perteneciente a terceros",
    content: [
      "Cuando el Usuario suministre información, documentación o datos personales pertenecientes a otras personas, declara que cuenta con la legitimación, autorización o fundamento jurídico necesario para incorporarlos cuando ello resulte exigible.",
      "La posibilidad técnica de ingresar determinados datos en un formulario o conversación no constituye autorización de lidIA para que el Usuario trate ilícitamente información ajena. En consecuencia, cuando una reclamación de un tercero tenga origen directo en la incorporación ilícita o no autorizada de información realizada por el Usuario, dicha circunstancia será atribuible a este en los términos permitidos por la ley.",
      "El Usuario deberá, además, abstenerse de suministrar información sensible, reservada o manifiestamente innecesaria para el documento solicitado, salvo que la funcionalidad correspondiente requiera legítimamente dicha información.",
    ],
  },
  {
    title: "Decimotercera: Confidencialidad y seguridad",
    content: [
      "lidIA podrá implementar medidas técnicas, administrativas, humanas y organizativas razonables orientadas a proteger la información contra pérdida, acceso, alteración, uso o divulgación no autorizados.",
      "Sin embargo, dado que el Servicio no constituye por sí mismo una relación abogado-cliente, la utilización de lidIA no implica automáticamente la existencia de secreto profesional propio de dicha relación. Lo anterior no afecta los deberes legales de confidencialidad y seguridad que correspondan respecto de la información objeto de tratamiento.",
    ],
  },
  {
    title: "Decimocuarta: Servicios tecnológicos de terceros y disponibilidad",
    content: [
      "La operación de lidIA podrá depender parcialmente de servicios de terceros, incluyendo infraestructura en la nube, almacenamiento, comunicaciones, procesamiento de pagos, sistemas de seguridad, generación de archivos, analítica, automatización e inteligencia artificial.",
      "Por tratarse de un servicio tecnológico, pueden presentarse mantenimientos, actualizaciones, interrupciones, demoras o indisponibilidades temporales derivadas de fallas de telecomunicaciones, infraestructura, proveedores externos, incidentes de seguridad, caso fortuito, fuerza mayor u otras circunstancias razonablemente ajenas al control de lidIA.",
      "En consecuencia, una interrupción temporal que no impida definitivamente la prestación del Servicio no constituirá, por ese solo hecho, incumplimiento definitivo ni dará lugar automáticamente a una devolución, sin perjuicio de los derechos que legalmente correspondan cuando se configure un incumplimiento imputable al Proveedor.",
    ],
  },
  {
    title: "Decimoquinta: Usos prohibidos",
    content: [
      "El Usuario deberá utilizar lidIA de buena fe, conforme a la ley y de acuerdo con la finalidad para la que fue diseñada. En consecuencia, se encuentra prohibido, entre otros usos, emplear la Plataforma para cometer fraude, falsedad o suplantación; suministrar deliberadamente información falsa para generar documentos; vulnerar derechos de terceros; tratar ilícitamente datos personales; facilitar actividades ilegales; alterar documentos con propósitos fraudulentos; introducir código malicioso; vulnerar o intentar vulnerar sistemas de seguridad; acceder sin autorización a servidores, modelos, bases de datos o infraestructura; realizar scraping, extracción masiva, ingeniería inversa o explotación no autorizada; infringir derechos de propiedad intelectual; afectar deliberadamente la disponibilidad del Servicio; eludir restricciones técnicas; o utilizar el módulo de consultas como mecanismo para obtener asesoría o prestaciones distintas de aquellas expresamente incluidas.",
      "La anterior relación es enunciativa y no taxativa. En consecuencia, lidIA podrá adoptar medidas razonables frente a cualquier utilización ilícita, fraudulenta, abusiva, perjudicial para la Plataforma o manifiestamente contraria a estos Términos, aunque la conducta específica no se encuentre individualmente descrita en esta cláusula.",
    ],
  },
  {
    title: "Decimosexta: Propiedad intelectual",
    content: [
      "El software, arquitectura, código, interfaces, marca, metodologías, funcionamiento, bases de datos, estructuras, plantillas, preguntas, reglas, flujos automatizados y demás elementos protegibles asociados con lidIA pertenecen a sus respectivos titulares o son utilizados bajo la autorización correspondiente.",
      "La contratación del Servicio no transfiere al Usuario derechos de propiedad sobre dichos activos. El Usuario adquiere exclusivamente la facultad de utilizar el documento generado para sus finalidades lícitas, sin que ello implique autorización para reproducir, explotar o apropiarse de la tecnología, estructura o sistemas que permiten su generación.",
    ],
  },
  {
    title: "Decimoséptima: Modificaciones posteriores al documento",
    content: [
      "Una vez generado y puesto a disposición del Usuario, cualquier modificación, eliminación, adición, sustitución o alteración realizada directamente por este o por terceros será ajena al Servicio originalmente prestado.",
      "En consecuencia, no serán imputables a lidIA los efectos que tengan causa exclusiva en modificaciones posteriores efectuadas fuera del proceso de generación de la Plataforma. Del mismo modo, las explicaciones suministradas mediante el módulo de consultas no alteran automáticamente el contenido del documento, salvo que lidIA habilite expresamente una funcionalidad destinada a generar una nueva versión.",
    ],
  },
  {
    title: "Decimoctava: Delimitación de responsabilidad",
    content: [
      "La responsabilidad de lidIA deberá analizarse atendiendo necesariamente a la naturaleza específica del Servicio contratado, esto es, la automatización y generación de un documento a partir de información suministrada por el Usuario, y no la prestación de una asesoría jurídica integral.",
      "En ese contexto y dentro de los límites permitidos por la legislación colombiana, no serán imputables a lidIA los perjuicios o consecuencias que tengan causa exclusiva en información falsa, incompleta, inexacta, contradictoria o desactualizada aportada por el Usuario; en hechos o circunstancias relevantes que no hayan sido comunicados; en modificaciones posteriores del documento; en su utilización para finalidades distintas de aquellas para las cuales fue generado; en el incumplimiento de formalidades externas; en decisiones autónomas del Usuario; en actuaciones o interpretaciones de autoridades, contrapartes o terceros; en cambios normativos posteriores; en un uso ilícito de la Plataforma; o en expectativas referentes a servicios que nunca formaron parte de la contratación.",
      "La presente delimitación no tiene por objeto excluir obligaciones del Proveedor que tengan carácter imperativo ni trasladar al consumidor responsabilidades que legalmente correspondan a lidIA.",
    ],
  },
  {
    title: "Decimonovena: Indemnidad por hechos imputables al Usuario",
    content: [
      "Dentro de los límites permitidos por la legislación colombiana, el Usuario se obliga a mantener indemne al Proveedor, así como a sus administradores, empleados, contratistas y proveedores tecnológicos, frente a reclamaciones de terceros, contingencias, sanciones, costos o perjuicios que se originen directamente en actos u omisiones imputables al propio Usuario, particularmente cuando tengan origen en el suministro consciente de información falsa, suplantación, utilización ilícita del Servicio, incorporación ilegítima de información perteneciente a terceros, infracción de derechos ajenos, alteración fraudulenta de documentos o utilización de estos para finalidades ilícitas o diferentes de aquellas para las cuales fueron generados.",
      "La obligación de indemnidad operará respecto de las consecuencias que tengan origen directo en conductas atribuibles al Usuario, conforme a lo previsto en esta cláusula y a la legislación aplicable.",
      "Cuando lidIA sea objeto de una reclamación de tercero derivada de una actuación atribuible al Usuario, este deberá suministrar oportunamente la información y colaboración razonablemente necesarias para su atención y asumir los costos, perjuicios o consecuencias que legalmente le correspondan.",
    ],
  },
  {
    title: "Vigésima: Capacidad y legitimación",
    content: [
      "El Usuario declara contar con capacidad jurídica suficiente para contratar el Servicio. Cuando actúe en nombre o por cuenta de otra persona, manifiesta contar con las facultades o autorizaciones necesarias para suministrar información y realizar la operación correspondiente.",
      "La generación de un documento por parte de lidIA no constituye certificación de la capacidad, representación, titularidad o legitimación del Usuario o de las demás personas mencionadas en aquel.",
    ],
  },
  {
    title: "Vigésima primera: Facultad de rechazo, limitación o suspensión",
    content: [
      "lidIA podrá negarse a procesar una solicitud, limitar determinadas funcionalidades, bloquear consultas, suspender temporalmente el acceso o terminar una interacción cuando existan elementos objetivos que permitan identificar fraude, abuso, información manifiestamente inconsistente, utilización ilícita, riesgo para la seguridad de los sistemas, intento de eludir restricciones técnicas, infracción de estos Términos o utilización del módulo de consultas para finalidades ajenas al Servicio.",
      "Asimismo, podrá abstenerse de responder cuando una solicitud exceda las capacidades o el objeto de la Plataforma. El hecho de que el Usuario haya contratado un documento no obliga a lidIA a suministrar servicios adicionales diferentes de aquellos que integraban la oferta correspondiente.",
      "Estas facultades deberán ejercerse de manera compatible con las obligaciones legales que correspondan al Proveedor respecto de servicios ya pagados.",
    ],
  },
  {
    title: "Vigésima segunda: Registros y prueba de la contratación electrónica",
    content: [
      "lidIA podrá conservar, dentro de los límites y términos legalmente permitidos, los registros electrónicos necesarios para acreditar la existencia, contenido y ejecución de una operación.",
      "Estos registros podrán comprender la fecha y hora de interacción, documento seleccionado, datos suministrados o confirmados, versión de los Términos aceptados, manifestaciones electrónicas realizadas, valor de la transacción, confirmación del pago, inicio del procesamiento, generación del documento, puesta a disposición, eventos de acceso y utilización del módulo de consultas.",
      "Dicha información podrá utilizarse como elemento de prueba de la relación contractual, del alcance del Servicio, de la prestación efectuada, de las instrucciones impartidas por el Usuario y de las actuaciones realizadas electrónicamente, así como para la gestión de controversias o reclamaciones, siempre con sujeción a la legislación aplicable.",
    ],
  },
  {
    title: "Vigésima tercera: Peticiones, quejas y reclamaciones",
    content: [
      "Las solicitudes relacionadas con el Servicio podrán presentarse a través de los canales que lidIA habilite para tal efecto. El Usuario deberá suministrar la información razonablemente necesaria para identificar la transacción y comprender el objeto de la reclamación.",
      "lidIA atenderá las solicitudes en los términos establecidos por las disposiciones legales aplicables. La simple recepción de una petición, queja o reclamación no implica aceptación de los hechos alegados, reconocimiento de responsabilidad ni aceptación automática de una devolución, compensación o pretensión económica.",
    ],
  },
  {
    title: "Vigésima cuarta: Modificaciones de los Términos y evolución del Servicio",
    content: [
      "lidIA podrá modificar estos Términos por razones legales, regulatorias, tecnológicas, operativas, comerciales o de seguridad.",
      "Como regla general, cada operación se regirá por la versión de los Términos aceptada por el Usuario al momento de contratarla, sin perjuicio de las normas de aplicación inmediata. Las funcionalidades nuevas, servicios diferentes o contrataciones posteriores podrán someterse a versiones actualizadas de estos Términos o a condiciones adicionales cuando resulte necesario.",
      "La evolución, actualización o modificación de las funcionalidades tecnológicas de lidIA no implica obligación de conservar indefinidamente características accesorias que no hayan sido contratadas como una prestación permanente.",
    ],
  },
  {
    title: "Vigésima quinta: Legislación aplicable, normas imperativas e ineficacia parcial",
    content: [
      "Los presentes Términos se regirán por las leyes de la República de Colombia y cualquier controversia se someterá a las autoridades que resulten legalmente competentes.",
      "Las disposiciones de estos Términos deberán interpretarse de forma sistemática, atendiendo a la naturaleza tecnológica y al alcance concreto del Servicio, pero siempre con observancia de las normas imperativas aplicables.",
      "Si una disposición fuera considerada inválida, ineficaz o inaplicable, dicha circunstancia afectará exclusivamente la estipulación correspondiente en la medida necesaria y no comprometerá la eficacia de las demás cláusulas que puedan subsistir independientemente.",
      "Siempre que resulte jurídicamente posible, cualquier disposición deberá interpretarse de una manera que preserve su finalidad contractual legítima sin desconocer derechos legalmente irrenunciables.",
    ],
  },
  {
    title: "Declaración de aceptación",
    content: [
      "Al aceptar electrónicamente estos Términos y contratar el Servicio, el Usuario manifiesta que comprende que lidIA presta un servicio tecnológico de automatización y generación documental y no un servicio general de asesoría jurídica especializada; que el documento será producido sustancialmente con base en la información que él mismo proporcione; que corresponde al Usuario revisar dicha información antes de confirmar la operación; y que lidIA no está obligada a investigar hechos, antecedentes o circunstancias que no le hayan sido informados.",
      "Asimismo, el Usuario reconoce que, una vez aprobado el pago, lidIA podrá comenzar inmediatamente el procesamiento necesario para generar el documento solicitado; que dicha circunstancia describe la modalidad de ejecución del Servicio.",
      "El Usuario declara igualmente comprender que la generación del documento no garantiza un resultado jurídico determinado y que cualquier módulo posterior de consultas se limita estrictamente a la explicación y comprensión del documento generado, de manera que las preguntas ajenas a dicho contenido podrán ser rechazadas o finalizadas de plano sin que ello suponga incumplimiento del Servicio.",
      "Finalmente, el Usuario reconoce que conserva plena autonomía respecto del uso, firma, presentación o ejecución del documento; que deberá obtener asesoría profesional independiente cuando sus circunstancias particulares lo requieran; que la utilización de datos pertenecientes a terceros deberá realizarse con la legitimación correspondiente; y que lidIA podrá conservar los registros electrónicos necesarios para acreditar la existencia, alcance y ejecución de la operación, siempre dentro de los límites establecidos por la legislación aplicable.",
      "La aceptación electrónica de estos Términos constituye la manifestación del consentimiento del Usuario respecto del alcance contractual del Servicio, sin perjuicio de las autorizaciones específicas o manifestaciones adicionales que deban recaudarse separadamente cuando una disposición legal así lo exija.",
    ],
  },
]

const policySections: LegalSection[] = [
  {
    title: "1. Responsable del tratamiento de datos",
    content: ["El responsable del tratamiento de tus datos personales es LidIA legal co"],
  },
  {
    title: "2. Datos que recolectamos",
    items: [
      "Datos de identificación: nombre completo, tipo y número de documento de identidad.",
      "Datos de contacto: correo electrónico, número de teléfono o celular y dirección de correspondencia física o digital.",
      "Datos del caso: descripción de la situación, entidades o terceros involucrados y documentos de soporte que decidas cargar.",
      "Datos sensibles: en casos como salud o información de menores, LidIA solo tratará estos datos con tu consentimiento explícito para la formulación del documento.",
    ],
  },
  {
    title: "3. Finalidad del tratamiento",
    items: [
      "Estructurar, redactar y personalizar el documento legal solicitado.",
      "Enviar recordatorios sobre vencimientos o actuaciones asociadas a tus trámites, cuando aplique.",
      "Brindar soporte técnico y mejorar la experiencia de uso de LidIA.",
    ],
    note: "LidIA no vende, no alquila y no comparte tus datos personales ni la información de tus casos con terceras empresas con fines comerciales o publicitarios.",
  },
  {
    title: "4. Derechos del titular",
    items: [
      "Conocer, actualizar y rectificar tus datos personales cuando sean inexactos o incompletos.",
      "Solicitar la supresión de tus datos o revocar la autorización cuando proceda legalmente.",
      "Ser informado sobre el uso que se ha dado a tu información.",
    ],
  },
  {
    title: "5. Cómo protegemos tu información",
    content: [
      "Implementamos medidas de seguridad técnicas, humanas y administrativas para evitar acceso no autorizado, pérdida, adulteración o consulta indebida de tu información.",
      "Los datos de navegación y los textos generados se transmiten y almacenan bajo estándares razonables de seguridad.",
    ],
  },
  {
    title: "6. Canales de atención para habeas data",
    content: [
      "Si deseas consultar, actualizar, rectificar o eliminar tus datos de los sistemas de LidIA, puedes enviar una solicitud escrita a nuestro Oficial de Protección de Datos a través de:",
    ],
    items: [
      "Correo electrónico: contacto@lidialegal.co",
      "Asunto sugerido: Ejercicio de Derecho Habeas Data - LidIA",
      "Las solicitudes serán resueltas dentro de los términos legales aplicables.",
    ],
  },
]

export const metadata: Metadata = {
  title: "Términos y condiciones y política de privacidad",
  description:
    "Consulta los términos y condiciones de uso de LidIA y cómo se recolectan, usan y protegen los datos personales dentro del servicio.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
}

function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div>
      {sections.map((section, index) => (
        <article
          key={section.title}
          className={index === 0 ? "pb-10 md:pb-12" : "border-t border-foreground/12 py-10 md:py-12"}
        >
          <h3 className="max-w-4xl text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {section.title}
          </h3>

          {section.content?.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-4xl text-sm leading-7 text-foreground/72 md:text-[15px]">
              {paragraph}
            </p>
          ))}

          {section.items ? (
            <ul className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-foreground/72 md:text-[15px]">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <ChevronRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-lavanda" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {section.note ? (
            <p className="mt-5 max-w-4xl border-l-2 border-brand-lavanda/55 pl-4 text-sm leading-7 text-foreground/82">
              {section.note}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CustomCursor />
      <GrainOverlay />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(191,111,204,0.28),rgba(12,43,62,0)_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-linear-to-b from-brand-purple/10 via-brand-lavanda/8 to-transparent" />

      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-6">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex items-center gap-3 rounded-2xl border border-foreground/15 bg-foreground/8 py-1 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/12">
            <Image
              src="/lidia-logo-white.png"
              alt="LidiA Legaltech"
              width={108}
              height={40}
              priority
              className="h-7 w-auto md:h-9"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="group relative font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Inicio
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
          </Link>
          <span className="group relative font-sans text-sm font-medium text-foreground">
            Términos y privacidad
            <span className="absolute -bottom-1 left-0 h-px w-full bg-foreground transition-all duration-300" />
          </span>
        </div>

        <Link
          href="/"
          className="hidden rounded-full border border-brand-lavanda/30 bg-foreground/5 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-xl transition-all hover:border-brand-lavanda/55 hover:bg-foreground/10 md:inline-flex"
        >
          Volver al sitio
        </Link>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-12 pt-24 md:px-8 md:pb-20 md:pt-32">
        <div className="grid md:grid-cols-[minmax(0,1.2fr)_320px] md:gap-x-8">
          <section className="p-6 md:col-start-1 md:row-start-1 md:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-lavanda/40 bg-brand-purple/10 px-4 py-1.5 text-xs font-medium text-foreground/90">
              <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5" />
              Información legal de LidIA
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-foreground/55">
              Términos y privacidad
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-6xl">
              Reglas claras para usar LidIA y proteger tu información.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/72 md:text-base">
              Consulta los Términos y Políticas de uso del servicio aplicable al tratamiento de tus datos personales.
            </p>
          </section>

          <div className="mb-12 md:col-start-2 md:row-span-2 md:row-start-1 md:mb-0">
            <aside className="p-6 md:sticky md:top-28 md:p-7">
              <p className="text-sm font-medium text-foreground/90">Contenido de esta página</p>
              <nav aria-label="Contenido legal" className="mt-5 space-y-4 text-sm leading-6">
                <a className="group flex items-center justify-between border-b border-foreground/10 pb-4 text-foreground/72 transition-colors hover:text-foreground" href="#terminos">
                  Términos y condiciones
                  <ChevronRight aria-hidden="true" className="h-4 w-4 text-brand-lavanda transition-transform group-hover:translate-x-1" />
                </a>
                <a className="group flex items-center justify-between text-foreground/72 transition-colors hover:text-foreground" href="#privacidad">
                  Política de privacidad
                  <ChevronRight aria-hidden="true" className="h-4 w-4 text-brand-lavanda transition-transform group-hover:translate-x-1" />
                </a>
              </nav>
            </aside>
          </div>

          <div className="min-w-0 md:col-start-1 md:row-start-2 md:mt-16">
            <section id="terminos" className="scroll-mt-28" aria-labelledby="terms-title">
          <header className="mb-10 border-b border-brand-lavanda/30 pb-8 md:mb-12 md:pb-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-lavanda">Primero</p>
            <h2 id="terms-title" className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Términos y Condiciones de uso de lidIA
            </h2>
            <p className="mt-4 text-sm text-foreground/55">Última actualización: 28 de septiembre de 2026.</p>
            <div className="mt-8 space-y-4">
              {termsIntroduction.map((paragraph) => (
                <p key={paragraph} className="max-w-4xl text-sm leading-7 text-foreground/72 md:text-[15px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </header>

          <LegalSections sections={termsSections.slice(0, 1)} />

          <h3 className="border-t border-foreground/12 pb-8 pt-10 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/55 md:pt-12">
            Condiciones del servicio
          </h3>
          <LegalSections sections={termsSections.slice(1)} />
            </section>

            <section id="privacidad" className="mt-16 scroll-mt-28 border-t border-brand-lavanda/35 pt-14 md:mt-24 md:pt-20" aria-labelledby="privacy-title">
          <header className="mb-10 border-b border-brand-lavanda/30 pb-8 md:mb-12 md:pb-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-lavanda">Segundo</p>
            <h2 id="privacy-title" className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Política de privacidad
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-foreground/72 md:text-[15px]">
              En LidIA tratamos los datos personales exclusivamente para el diligenciamiento automatizado de documentos y la gestión asociada a ese servicio. Esta política explica el alcance del tratamiento y los derechos del titular conforme a la Ley 1581 de 2012 en Colombia.
            </p>
            <p className="mt-4 text-sm text-foreground/55">Última actualización: 06 de Junio 2026</p>
          </header>

          <LegalSections sections={policySections} />

          <div className="border-t border-foreground/12 pt-10 md:pt-12">
            <p className="max-w-4xl text-sm leading-7 text-foreground/72 md:text-[15px]">
              Para interactuar con LidIA, la interfaz debe incluir una autorización previa, expresa e informada para el tratamiento de datos personales conforme a esta política de privacidad.
            </p>
            <p className="mt-5 max-w-3xl border-l-2 border-brand-lavanda/55 pl-4 text-sm leading-7 text-foreground/82">
              Autorizo de manera previa, expresa e informada a LidIA para el tratamiento de mis datos personales de acuerdo con su Política de Privacidad. Entiendo que mis datos se usarán exclusivamente para la generación de mis documentos legales y el seguimiento de mis trámites, cuando aplique.
            </p>
          </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
