Copyright (c) 2026 Patricia Rocio Bustos Paco TODOS LOS DERECHOS RESERVADOS. Este software y toda la documentación asociada, incluyendo la estructura de datos del Plan General Contable (PGC) contenida en este repositorio, son propiedad exclusiva de Patricia Rocio Bustos Paco. Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier parte de este código o de su arquitectura de datos, por cualquier medio o procedimiento, sin la autorización previa, expresa y por escrito de la titular del copyright. El uso de este software se limita exclusivamente a fines de consulta y revisión dentro de la plataforma GitHub. El uso comercial o la implementación de esta estructura de datos en otros proyectos educativos o financieros está estrictamente prohibido. Registrado en Safe Creative.
Estructura de Datos del Plan General Contable (PGC) Español para Desarrollo de Software Educativo
Introducción: Arquitectura de la Información Contable en España
El propósito de este documento es proporcionar una extracción exhaustiva y estructurada de datos del Plan General Contable (PGC) español. Esta estructura está específicamente diseñada para servir como la base de datos fundamental en el desarrollo de un software educativo, permitiendo simular con precisión la realidad económica y financiera de una empresa bajo la normativa española vigente.
El PGC se organiza como una taxonomía financiera, dividida en 9 grupos de cuentas que modelan todos los aspectos de la actividad empresarial. Su sistema de codificación decimal es jerárquico y permite un gran nivel de detalle: el primer dígito identifica el grupo, los dos primeros el subgrupo, los tres primeros la cuenta, y los siguientes dígitos la subcuenta. Esta estructura no solo clasifica las operaciones, sino que también define las relaciones lógicas entre los distintos elementos patrimoniales y de gestión.
Para cada cuenta analizada, definiremos cuatro atributos clave que son esenciales para la lógica de cualquier software contable:
Código: El identificador numérico único y jerárquico de la cuenta.
Denominación: El nombre oficial y descriptivo de la cuenta.
Naturaleza: El comportamiento contable de la cuenta, que puede ser Deudora (aumenta con cargos en el "Debe") o Acreedora (aumenta con abonos en el "Haber").
Estado Financiero: El informe anual al que se destina el saldo de la cuenta, siendo estos el Balance de Situación, la Cuenta de Pérdidas y Ganancias, o el Estado de Cambios en el Patrimonio Neto (ECPN).
--------------------------------------------------------------------------------
1. Grupo 1: Financiación Básica
Este grupo representa la arquitectura financiera a largo plazo de la entidad, constituyendo su esqueleto de capital. Aquí se registran tanto los fondos propios, que son las aportaciones de los socios y los beneficios retenidos (Patrimonio Neto), como la financiación ajena cuyo vencimiento es superior a un año (Pasivo No Corriente). Desde una perspectiva de modelado de datos, el Grupo 1 establece los recursos permanentes con los que la empresa financiará sus inversiones estructurales, reflejadas en el Activo No Corriente. Los subgrupos de este grupo son de naturaleza predominantemente acreedora, con la excepción de ciertas cuentas correctoras como la (103) o la (109) que minoran el patrimonio.
Código
Denominación
Naturaleza
Estado Financiero
10
Capital
Acreedora
Balance de Situación


100
Capital social
Acreedora


101
Fondo social
Acreedora


102
Capital
Acreedora


103
Socios por desembolsos no exigidos
Deudora


104
Socios por aportaciones no dinerarias pendientes
Deudora


108
Acciones o participaciones propias en situaciones especiales
Deudora


109
Acciones o participaciones propias para reducción de capital
Deudora
11
Reservas y otros instrumentos de patrimonio
Acreedora
Balance de Situación


110
Prima de emisión o asunción
Acreedora


111
Otros instrumentos de patrimonio neto
Acreedora


112
Reserva legal
Acreedora


113
Reservas voluntarias
Acreedora


114
Reservas especiales
Acreedora


115
Reservas por pérdidas y ganancias actuariales y otros ajustes
Acreedora


118
Aportaciones de socios o propietarios
Acreedora


119
Diferencias por ajuste del capital a euros
Acreedora
12
Resultados pendientes de aplicación
Acreedora
Balance de Situación


120
Remanente
Acreedora


121
Resultados negativos de ejercicios anteriores
Deudora


129
Resultado del ejercicio
Variable (Acreedora/Deudora)
13
Subvenciones, donaciones y ajustes por cambios de valor
Acreedora
Balance de Situación


130
Subvenciones oficiales de capital
Acreedora


131
Donaciones y legados de capital
Acreedora


132
Otras subvenciones, donaciones y legados
Acreedora


133
Ajustes por valoración en activos financieros a valor razonable con cambios en el patrimonio neto
Acreedora


134
Operaciones de cobertura
Acreedora


135
Diferencias de conversión
Acreedora


136
Ajustes por valoración en activos no corrientes y grupos enajenables de elementos mantenidos para la venta
Acreedora


137
Ingresos fiscales a distribuir en varios ejercicios
Acreedora
14
Provisiones
Acreedora
Balance de Situación


140
Provisión por retribuciones a largo plazo al personal
Acreedora


141
Provisión para impuestos
Acreedora


142
Provisión para otras responsabilidades
Acreedora


143
Provisión por desmantelamiento, retiro o rehabilitación del inmovilizado
Acreedora


145
Provisión para actuaciones medioambientales
Acreedora


146
Provisión para reestructuraciones
Acreedora


147
Provisión por transacciones con pagos basados en instrumentos de patrimonio
Acreedora
15
Deudas a largo plazo con características especiales
Acreedora
Balance de Situación


150
Acciones o participaciones a largo plazo consideradas como pasivos financieros
Acreedora


153
Desembolsos no exigidos por acciones o participaciones consideradas como pasivos financieros
Deudora


154
Aportaciones no dinerarias pendientes por acciones o participaciones consideradas como pasivos financieros
Deudora
16
Deudas a largo plazo con partes vinculadas
Acreedora
Balance de Situación


160
Deudas a largo plazo con entidades de crédito vinculadas
Acreedora


161
Proveedores de inmovilizado a largo plazo, partes vinculadas
Acreedora


162
Acreedores por arrendamiento financiero a largo plazo, partes vinculadas
Acreedora


163
Otras deudas a largo plazo con partes vinculadas
Acreedora
17
Deudas a largo plazo por préstamos recibidos, empréstitos y otros conceptos
Acreedora
Balance de Situación


170
Deudas a largo plazo con entidades de crédito
Acreedora


171
Deudas a largo plazo
Acreedora


172
Deudas a largo plazo transformables en subvenciones, donaciones y legados
Acreedora


173
Proveedores de inmovilizado a largo plazo
Acreedora


174
Acreedores por arrendamiento financiero a largo plazo
Acreedora


175
Efectos a pagar a largo plazo
Acreedora


176
Pasivos por derivados financieros a largo plazo
Acreedora


177
Obligaciones y bonos
Acreedora


178
Obligaciones y bonos convertibles
Acreedora


179
Deudas representadas en otros valores negociables
Acreedora
18
Pasivos por fianzas, garantías y otros conceptos a largo plazo
Acreedora
Balance de Situación


180
Fianzas recibidas a largo plazo
Acreedora


181
Anticipos recibidos por ventas o prestaciones de servicios a largo plazo
Acreedora


185
Depósitos recibidos a largo plazo
Acreedora


189
Garantías financieras a largo plazo
Acreedora
19
Situaciones transitorias de financiación
Acreedora
Balance de Situación


190
Acciones o participaciones emitidas
Acreedora


192
Suscriptores de acciones
Deudora


194
Capital emitido pendiente de inscripción
Acreedora


195
Acciones o participaciones emitidas consideradas como pasivos financieros
Acreedora


197
Suscriptores de acciones consideradas como pasivos financieros
Deudora


199
Acciones o participaciones emitidas consideradas como pasivos financieros pendientes de inscripción
Acreedora

Una vez establecida la estructura de financiación a largo plazo, es lógico analizar los activos que esta financia, lo que nos lleva directamente al Grupo 2.
2. Grupo 2: Activo No Corriente
El Grupo 2 agrupa los bienes y derechos que la empresa adquiere con la intención de que permanezcan en ella a largo plazo, formando la base de su capacidad productiva y de inversión. Este grupo incluye el inmovilizado intangible, el material, las inversiones inmobiliarias y las financieras a largo plazo. Desde una perspectiva de arquitectura de datos, es crucial entender que el Valor Neto Contable (VNC) es un campo calculado. La lógica para un desarrollador es: VNC = Saldo(2XX) - Saldo(28X) - Saldo(29X). La cuenta del activo registra el coste histórico, mientras que las cuentas correctoras de los subgrupos 28 (Amortización Acumulada) y 29 (Deterioro de Valor), de naturaleza acreedora, registran la disminución de valor por el uso y por la pérdida de valor recuperable, respectivamente.
Código
Denominación
Naturaleza
Estado Financiero
20
Inmovilizaciones intangibles
Deudora
Balance de Situación


200
Investigación
Deudora


201
Desarrollo
Deudora


202
Concesiones administrativas
Deudora


203
Propiedad industrial
Deudora


204
Fondo de comercio
Deudora


205
Derechos de traspaso
Deudora


206
Aplicaciones informáticas
Deudora


209
Anticipos para inmovilizaciones intangibles
Deudora
21
Inmovilizaciones materiales
Deudora
Balance de Situación


210
Terrenos y bienes naturales
Deudora


211
Construcciones
Deudora


212
Instalaciones técnicas
Deudora


213
Maquinaria
Deudora


214
Utillaje
Deudora


215
Otras instalaciones
Deudora


216
Mobiliario
Deudora


217
Equipos para procesos de información
Deudora


218
Elementos de transporte
Deudora


219
Otro inmovilizado material
Deudora
22
Inversiones inmobiliarias
Deudora
Balance de Situación


220
Inversiones en terrenos y bienes naturales
Deudora


221
Inversiones en construcciones
Deudora
23
Inmovilizaciones materiales en curso
Deudora
Balance de Situación


230
Adaptación de terrenos y bienes naturales
Deudora


231
Construcciones en curso
Deudora


232
Instalaciones técnicas en montaje
Deudora


233
Maquinaria en montaje
Deudora


237
Equipos para procesos de información en montaje
Deudora


239
Anticipos para inmovilizaciones materiales
Deudora
24
Inversiones financieras a largo plazo en partes vinculadas
Deudora
Balance de Situación


240
Participaciones a largo plazo en partes vinculadas
Deudora


241
Valores representativos de deuda a largo plazo de partes vinculadas
Deudora


242
Créditos a largo plazo a partes vinculadas
Deudora


249
Desembolsos pendientes sobre participaciones a largo plazo en partes vinculadas
Deudora
25
Otras inversiones financieras a largo plazo
Deudora
Balance de Situación


250
Inversiones financieras a largo plazo en instrumentos de patrimonio
Deudora


251
Valores representativos de deuda a largo plazo
Deudora


252
Créditos a largo plazo
Deudora


253
Créditos a largo plazo por enajenación de inmovilizado
Deudora


254
Créditos a largo plazo al personal
Deudora


255
Activos por derivados financieros a largo plazo
Deudora


257
Derechos de reembolso derivados de contratos de seguro relativos a retribuciones a LP al personal
Deudora


258
Imposiciones a largo plazo
Deudora


259
Desembolsos pendientes sobre participaciones en el patrimonio neto a largo plazo
Deudora
26
Fianzas y depósitos constituidos a largo plazo
Deudora
Balance de Situación


260
Fianzas constituidas a largo plazo
Deudora


265
Depósitos constituidos a largo plazo
Deudora
28
Amortización acumulada del inmovilizado
Acreedora
Balance de Situación


280
Amortización acumulada del inmovilizado intangible
Acreedora


281
Amortización acumulada del inmovilizado material
Acreedora


282
Amortización acumulada de las inversiones inmobiliarias
Acreedora
29
Deterioro de valor de activos no corrientes
Acreedora
Balance de Situación


290
Deterioro de valor del inmovilizado intangible
Acreedora


291
Deterioro de valor del inmovilizado material
Acreedora


292
Deterioro de valor de las inversiones inmobiliarias
Acreedora


293
Deterioro de valor de participaciones a largo plazo
Acreedora




> 2933
Deterioro de valor de participaciones a largo plazo en empresas del grupo




> 2934
Deterioro de valor de participaciones a largo plazo en empresas asociadas




> 2935
Deterioro de valor de participaciones a largo plazo en otras partes vinculadas




> 2936
Deterioro de valor de participaciones a largo plazo en otras empresas


294
Deterioro de valores representativos de deuda a largo plazo de partes vinculadas
Acreedora


295
Deterioro de valor de créditos a largo plazo a partes vinculadas
Acreedora


297
Deterioro de valor de valores representativos de deuda a largo plazo
Acreedora


298
Deterioro de valor de créditos a largo plazo
Acreedora

De la infraestructura productiva a largo plazo, pasamos a los activos que definen el ciclo de explotación diario de la empresa: las existencias.
3. Grupo 3: Existencias
El Grupo 3 es central para la gestión del ciclo de explotación. Gestiona todos aquellos activos que la empresa posee para ser vendidos en el curso normal de su actividad (mercaderías, productos terminados), que se encuentran en proceso de producción (productos en curso) o que serán consumidos en el proceso productivo (materias primas y otros aprovisionamientos). Este grupo actúa como un pulmón que se expande con las compras y la producción y se contrae con las ventas, siendo su valoración al cierre un paso clave en la determinación del resultado del ejercicio.
Código
Denominación
Naturaleza
Estado Financiero
30
Comerciales
Deudora
Balance de Situación


300
Mercaderías A
Deudora


301
Mercaderías B
Deudora
31
Materias primas
Deudora
Balance de Situación


310
Materias primas A
Deudora


311
Materias primas B
Deudora
32
Otros aprovisionamientos
Deudora
Balance de Situación


320
Elementos y conjuntos incorporables
Deudora


321
Combustibles
Deudora


322
Repuestos
Deudora


325
Materiales diversos
Deudora


326
Embalajes
Deudora


327
Envases
Deudora


328
Material de oficina
Deudora
33
Productos en curso
Deudora
Balance de Situación


330
Productos en curso A
Deudora


331
Productos en curso B
Deudora
34
Productos semiterminados
Deudora
Balance de Situación


340
Productos semiterminados A
Deudora


341
Productos semiterminados B
Deudora
35
Productos terminados
Deudora
Balance de Situación


350
Productos terminados A
Deudora


351
Productos terminados B
Deudora
36
Subproductos, residuos y materiales recuperados
Deudora
Balance de Situación


360
Subproductos A
Deudora


361
Subproductos B
Deudora


365
Residuos A
Deudora


366
Residuos B
Deudora


368
Materiales recuperados A
Deudora


369
Materiales recuperados B
Deudora
39
Deterioro de valor de las existencias
Acreedora
Balance de Situación


390
Deterioro de valor de las mercaderías
Acreedora


391
Deterioro de valor de las materias primas
Acreedora


392
Deterioro de valor de otros aprovisionamientos
Acreedora


393
Deterioro de valor de los productos en curso
Acreedora


394
Deterioro de valor de los productos semiterminados
Acreedora


395
Deterioro de valor de los productos terminados
Acreedora


396
Deterioro de valor de los subproductos, residuos y materiales recuperados
Acreedora

Las operaciones comerciales relacionadas con estas existencias, como las compras y las ventas, inevitablemente generan derechos y obligaciones con terceros, lo que nos introduce de lleno en el Grupo 4.
4. Grupo 4: Acreedores y Deudores por Operaciones Comerciales
Este grupo funciona como el nexo contable entre la empresa y su entorno operativo, registrando los derechos de cobro sobre clientes (activo) y las obligaciones de pago a proveedores (pasivo). Para un desarrollador de software, el subgrupo 47 (Administraciones Públicas) es particularmente relevante, ya que opera como una "máquina de estados" que requiere una lógica algorítmica específica. Por ejemplo, la liquidación del IVA exige comparar los saldos de las cuentas (472) IVA Soportado y (477) IVA Repercutido, y trasladar el resultado neto a la cuenta (4700) H.P. Deudora por IVA o (4750) H.P. Acreedora por IVA, un proceso que impacta directamente en la tesorería.
Código
Denominación
Naturaleza
Estado Financiero
40
Proveedores
Acreedora
Balance de Situación


400
Proveedores
Acreedora




> 4000
Proveedores (euros)




> 4004
Proveedores (moneda extranjera)




> 4009
Proveedores, facturas pendientes de recibir o de formalizar


401
Proveedores, efectos comerciales a pagar
Acreedora


403
Proveedores, empresas del grupo
Acreedora


404
Proveedores, empresas asociadas
Acreedora


405
Proveedores, otras partes vinculadas
Acreedora


406
Envases y embalajes a devolver a proveedores
Deudora


407
Anticipos a proveedores
Deudora
41
Acreedores varios
Acreedora
Balance de Situación


410
Acreedores por prestaciones de servicios
Acreedora


411
Acreedores, efectos comerciales a pagar
Acreedora


419
Acreedores por operaciones en común
Acreedora
43
Clientes
Deudora
Balance de Situación


430
Clientes
Deudora




> 4300
Clientes (euros)




> 4304
Clientes (moneda extranjera)




> 4309
Clientes, facturas pendientes de formalizar


431
Clientes, efectos comerciales a cobrar
Deudora


432
Clientes, operaciones de "factoring"
Deudora


433
Clientes, empresas del grupo
Deudora


434
Clientes, empresas asociadas
Deudora


435
Clientes, otras partes vinculadas
Deudora


436
Clientes de dudoso cobro
Deudora


437
Envases y embalajes a devolver por clientes
Acreedora


438
Anticipos de clientes
Acreedora
44
Deudores varios
Deudora
Balance de Situación


440
Deudores
Deudora


441
Deudores, efectos comerciales a cobrar
Deudora


446
Deudores de dudoso cobro
Deudora


449
Deudores por operaciones en común
Deudora
46
Personal
Deudora
Balance de Situación


460
Anticipos de remuneraciones
Deudora


465
Remuneraciones pendientes de pago
Acreedora


466
Remuneraciones mediante sistemas de aportación definida pendientes de pago
Acreedora
47
Administraciones públicas
Deudora
Balance de Situación


470
Hacienda Pública, deudora por diversos conceptos
Deudora




> 4700
Hacienda Pública, deudora por IVA




> 4708
Hacienda Pública, deudora por subvenciones concedidas




> 4709
Hacienda Pública, deudora por devolución de impuestos


471
Organismos de la Seguridad Social, deudores
Deudora


472
Hacienda Pública, IVA soportado
Deudora


473
Hacienda Pública, retenciones y pagos a cuenta
Deudora


474
Activos por impuesto diferido
Deudora


475
Hacienda Pública, acreedora por conceptos fiscales
Acreedora




> 4750
Hacienda Pública, acreedora por IVA




> 4751
Hacienda Pública, acreedora por retenciones practicadas




> 4752
Hacienda Pública, acreedora por impuesto sobre sociedades




> 4758
Hacienda Pública, acreedora por subvenciones a reintegrar


476
Organismos de la Seguridad Social, acreedores
Acreedora


477
Hacienda Pública, IVA repercutido
Acreedora


479
Pasivos por diferencias temporarias imponibles
Acreedora
48
Ajustes por periodificación
Deudora
Balance de Situación


480
Gastos anticipados
Deudora


485
Ingresos anticipados
Acreedora
49
Deterioro de valor de créditos comerciales y provisiones a corto plazo
Acreedora
Balance de Situación


490
Deterioro de valor de créditos por operaciones comerciales
Acreedora


493
Deterioro de valor de créditos por operaciones comerciales con partes vinculadas
Acreedora


499
Provisión por operaciones comerciales
Acreedora

La gestión de estas operaciones comerciales y fiscales converge inevitablemente en la necesidad de administrar los flujos de dinero, lo que nos dirige al núcleo de la liquidez empresarial: el Grupo 5.
5. Grupo 5: Cuentas Financieras
El Grupo 5 es el centro neurálgico de la liquidez y la financiación a corto plazo de la empresa. Aquí se gestionan los activos más líquidos, como el dinero en caja y en cuentas bancarias (tesorería), así como las inversiones financieras con vencimiento inferior a un año. Por el lado del pasivo, recoge las deudas con entidades de crédito, socios y otros terceros que deben ser atendidas en el corto plazo. En esencia, este grupo refleja la capacidad de la empresa para hacer frente a sus compromisos inmediatos.
Código
Denominación
Naturaleza
Estado Financiero
50
Empréstitos, deudas con características especiales y otras emisiones análogas a corto plazo
Acreedora
Balance de Situación


500
Obligaciones y bonos a corto plazo
Acreedora


501
Obligaciones y bonos convertibles a corto plazo
Acreedora


502
Acciones o participaciones a corto plazo consideradas como pasivos financieros
Acreedora


505
Deudas representadas en otros valores negociables a corto plazo
Acreedora


506
Intereses a corto plazo de empréstitos y otras emisiones análogas
Acreedora


507
Dividendos de acciones o participaciones consideradas como pasivos financieros
Acreedora


509
Valores negociables amortizados
Deudora
51
Deudas a corto plazo con partes vinculadas
Acreedora
Balance de Situación


510
Deudas a corto plazo con entidades de crédito vinculadas
Acreedora


511
Proveedores de inmovilizado a corto plazo, partes vinculadas
Acreedora


512
Acreedores por arrendamiento financiero, partes vinculadas
Acreedora


513
Otras deudas a corto plazo con partes vinculadas
Acreedora


514
Intereses a corto plazo de deudas con partes vinculadas
Acreedora
52
Deudas a corto plazo por préstamos recibidos y otros conceptos
Acreedora
Balance de Situación


520
Deudas a corto plazo con entidades de crédito
Acreedora


521
Deudas a corto plazo
Acreedora


522
Deudas a corto plazo transformables en subvenciones, donaciones y legados
Acreedora


523
Proveedores de inmovilizado a corto plazo
Acreedora


524
Acreedores por arrendamiento financiero a corto plazo
Acreedora


525
Efectos a pagar a corto plazo
Acreedora


526
Dividendo activo a pagar
Acreedora


527
Intereses a corto plazo de deudas con entidades de crédito
Acreedora


528
Intereses a corto plazo de deudas
Acreedora


529
Provisiones a corto plazo
Acreedora
53
Inversiones financieras a corto plazo en partes vinculadas
Deudora
Balance de Situación


530
Participaciones a corto plazo en partes vinculadas
Deudora


531
Valores representativos de deuda a corto plazo de partes vinculadas
Deudora


532
Créditos a corto plazo a partes vinculadas
Deudora


533
Intereses a corto plazo de valores representativos de deudas de partes vinculadas
Deudora


534
Intereses a corto plazo de créditos a partes vinculadas
Deudora


535
Dividendo a cobrar de inversiones financieras en partes vinculadas
Deudora


539
Desembolsos pendientes sobre participaciones a corto plazo en partes vinculadas
Deudora
54
Otras inversiones financieras a corto plazo
Deudora
Balance de Situación


540
Inversiones financieras a corto plazo en instrumentos de patrimonio
Deudora


541
Valores representativos de deuda a corto plazo
Deudora


542
Créditos a corto plazo
Deudora


543
Créditos a corto plazo por enajenación de inmovilizado
Deudora


544
Créditos a corto plazo al personal
Deudora


545
Dividendo a cobrar
Deudora


546
Intereses a corto plazo de valores representativos de deuda
Deudora


547
Intereses a corto plazo de créditos
Deudora


548
Imposiciones a corto plazo
Deudora


549
Desembolsos pendientes sobre participaciones en el patrimonio neto a corto plazo
Deudora
55
Otras cuentas no bancarias
Deudora
Balance de Situación


550
Titular de la explotación
Deudora


551
Cuenta corriente con socios y administradores
Variable (Acreedora/Deudora)


552
Cuenta corriente con otras personas y entidades vinculadas
Variable (Acreedora/Deudora)


553
Cuentas corrientes en fusiones y escisiones
Variable (Acreedora/Deudora)


554
Cuenta corriente con uniones temporales de empresas y comunidades de bienes
Variable (Acreedora/Deudora)


555
Partidas pendientes de aplicación
Variable (Acreedora/Deudora)


556
Desembolsos exigidos sobre participaciones en el patrimonio neto
Deudora


557
Dividendo activo a cuenta
Deudora


558
Socios por desembolsos exigidos
Deudora


559
Derivados financieros a corto plazo
Variable (Acreedora/Deudora)
56
Fianzas y depósitos recibidos y constituidos a corto plazo y ajustes por periodificación
Acreedora
Balance de Situación


560
Fianzas recibidas a corto plazo
Acreedora


561
Depósitos recibidos a corto plazo
Acreedora


565
Fianzas constituidas a corto plazo
Deudora


566
Depósitos constituidos a corto plazo
Deudora


567
Intereses pagados por anticipado
Deudora


568
Intereses cobrados por anticipado
Acreedora


569
Garantías financieras a corto plazo
Acreedora
57
Tesorería
Deudora
Balance de Situación


570
Caja, euros
Deudora


571
Caja, moneda extranjera
Deudora


572
Bancos e instituciones de crédito c/c vista, euros
Deudora


573
Bancos e instituciones de crédito c/c vista, moneda extranjera
Deudora


574
Bancos e instituciones de crédito, cuentas de ahorro, euros
Deudora


575
Bancos e instituciones de crédito, cuentas de ahorro, moneda extranjera
Deudora


576
Inversiones a corto plazo de gran liquidez
Deudora
58
Activos no corrientes mantenidos para la venta y pasivos asociados
Deudora
Balance de Situación


580
Inmovilizado
Deudora


581
Inversiones con personas y entidades vinculadas
Deudora


582
Inversiones financieras
Deudora


583
Existencias, deudores comerciales y otras cuentas a cobrar
Deudora


584
Otros activos
Deudora


585
Provisiones
Acreedora


586
Deudas con características especiales
Acreedora


587
Deudas con personas y entidades vinculadas
Acreedora


588
Acreedores comerciales y otras cuentas a pagar
Acreedora


589
Otros pasivos
Acreedora
59
Deterioro del valor de inversiones financieras a corto plazo y de activos no corrientes mantenidos para la venta
Acreedora
Balance de Situación


593
Deterioro de valor de participaciones a corto plazo
Acreedora




> 5933
Deterioro de valor de participaciones a corto plazo en empresas del grupo




> 5934
Deterioro de valor de participaciones a corto plazo en empresas asociadas




> 5935
Deterioro de valor de participaciones a corto plazo en otras partes vinculadas




> 5936
Deterioro de valor de participaciones a corto plazo en otras empresas


594
Deterioro de valor de valores representativos de deuda a corto plazo de partes vinculadas
Acreedora


595
Deterioro de valor de créditos a corto plazo a partes vinculadas
Acreedora


597
Deterioro de valor de valores representativos de deuda a corto plazo
Acreedora


598
Deterioro de valor de créditos a corto plazo
Acreedora


599
Deterioro de valor de activos no corrientes mantenidos para la venta
Acreedora

Con el análisis del Grupo 5 concluimos la revisión de las cuentas de Balance (Grupos 1-5). Ahora nos adentramos en las cuentas de Gestión (Grupos 6 y 7), cuyos saldos conformarán el resultado del ejercicio económico.
6. Grupo 6: Compras y Gastos
El Grupo 6 registra el consumo de recursos económicos necesarios para generar los ingresos de la empresa. Incluye desde la compra de mercaderías y materias primas hasta los gastos operativos como salarios, alquileres, suministros y servicios externos. Estos flujos económicos negativos, de naturaleza deudora en su mayoría, se acumulan a lo largo del ejercicio y su saldo final se traslada a la Cuenta de Pérdidas y Ganancias, disminuyendo el resultado del periodo. Las cuentas como (606), (608) y (609) son excepciones de naturaleza acreedora que minoran el gasto total.
Código
Denominación
Naturaleza
Estado Financiero
60
Compras
Deudora
Cuenta de Pérdidas y Ganancias


600
Compras de mercaderías
Deudora


601
Compras de materias primas
Deudora


602
Compras de otros aprovisionamientos
Deudora


606
Descuentos sobre compras por pronto pago
Acreedora


607
Trabajos realizados por otras empresas
Deudora


608
Devoluciones de compras y operaciones similares
Acreedora


609
"Rappels" por compras
Acreedora
61
Variación de existencias
Variable (Acreedora/Deudora)
Cuenta de Pérdidas y Ganancias


610
Variación de existencias de mercaderías
Variable (Acreedora/Deudora)


611
Variación de existencias de materias primas
Variable (Acreedora/Deudora)


612
Variación de existencias de otros aprovisionamientos
Variable (Acreedora/Deudora)
62
Servicios exteriores
Deudora
Cuenta de Pérdidas y Ganancias


620
Gastos en investigación y desarrollo del ejercicio
Deudora


621
Arrendamientos y cánones
Deudora


622
Reparaciones y conservación
Deudora


623
Servicios de profesionales independientes
Deudora


624
Transportes
Deudora


625
Primas de seguros
Deudora


626
Servicios bancarios y similares
Deudora


627
Publicidad, propaganda y relaciones públicas
Deudora


628
Suministros
Deudora


629
Otros servicios
Deudora
63
Tributos
Deudora
Cuenta de Pérdidas y Ganancias


630
Impuesto sobre beneficios
Deudora


631
Otros tributos
Deudora


633
Ajustes negativos en la imposición sobre beneficios
Deudora


634
Ajustes negativos en la imposición indirecta
Deudora


636
Devolución de impuestos
Acreedora


638
Ajustes positivos en la imposición sobre beneficios
Acreedora


639
Ajustes positivos en la imposición indirecta
Acreedora
64
Gastos de personal
Deudora
Cuenta de Pérdidas y Ganancias


640
Sueldos y salarios
Deudora


641
Indemnizaciones
Deudora


642
Seguridad Social a cargo de la empresa
Deudora


643
Retribuciones a largo plazo mediante sistemas de aportación definida
Deudora


644
Retribuciones a largo plazo mediante sistemas de prestación definida
Deudora


649
Otros gastos sociales
Deudora
65
Otros gastos de gestión
Deudora
Cuenta de Pérdidas y Ganancias


650
Pérdidas de créditos comerciales incobrables
Deudora


651
Resultados de operaciones en común
Variable (Acreedora/Deudora)


659
Otras pérdidas en gestión corriente
Deudora
66
Gastos financieros
Deudora
Cuenta de Pérdidas y Ganancias


660
Gastos financieros por actualización de provisiones
Deudora


661
Intereses de obligaciones y bonos
Deudora


662
Intereses de deudas
Deudora


663
Pérdidas por valoración de instrumentos financieros por su valor razonable
Deudora




> 6632
Pérdidas de activos financieros a valor razonable con cambios en el patrimonio neto




> 6634
Pérdidas de otros instrumentos financieros


664
Dividendos de acciones o participaciones consideradas como pasivos financieros
Deudora


665
Intereses por descuento de efectos y operaciones de "factoring"
Deudora


666
Pérdidas en participaciones y valores representativos de deuda
Deudora


667
Pérdidas de créditos no comerciales
Deudora


668
Diferencias negativas de cambio
Deudora


669
Otros gastos financieros
Deudora
67
Pérdidas procedentes de activos no corrientes y gastos excepcionales
Deudora
Cuenta de Pérdidas y Ganancias


670
Pérdidas procedentes de inmovilizado intangible
Deudora


671
Pérdidas procedentes de inmovilizado material
Deudora


672
Pérdidas procedentes de las inversiones inmobiliarias
Deudora


673
Pérdidas procedentes de participaciones a largo plazo en partes vinculadas
Deudora


675
Pérdidas por operaciones con obligaciones propias
Deudora


678
Gastos excepcionales
Deudora
68
Dotaciones para amortizaciones
Deudora
Cuenta de Pérdidas y Ganancias


680
Amortización del inmovilizado intangible
Deudora


681
Amortización del inmovilizado material
Deudora


682
Amortización de las inversiones inmobiliarias
Deudora
69
Pérdidas por deterioro y otras dotaciones
Deudora
Cuenta de Pérdidas y Ganancias


690
Pérdidas por deterioro del inmovilizado intangible
Deudora


691
Pérdidas por deterioro del inmovilizado material
Deudora


692
Pérdidas por deterioro de las inversiones inmobiliarias
Deudora


693
Pérdidas por deterioro de existencias
Deudora


694
Pérdidas por deterioro de créditos comerciales
Deudora


695
Dotación a la provisión por operaciones comerciales
Deudora


696
Pérdidas por deterioro de participaciones y valores representativos de deuda a largo plazo
Deudora


697
Pérdidas por deterioro de créditos a largo plazo
Deudora


698
Pérdidas por deterioro de participaciones y valores representativos de deuda a corto plazo
Deudora


699
Pérdidas por deterioro de créditos a corto plazo
Deudora

A estos gastos se contraponen los ingresos que justifican la actividad empresarial, los cuales se registran en el Grupo 7.
7. Grupo 7: Ventas e Ingresos
El Grupo 7 es el espejo del Grupo 6. Registra todos los ingresos generados por la empresa durante el ejercicio, ya sea por la venta de bienes, la prestación de servicios u otras actividades secundarias o financieras. Estos flujos económicos positivos, de naturaleza predominantemente acreedora, constituyen la parte superior de la Cuenta de Pérdidas y Ganancias y su saldo final se traslada al resultado del ejercicio para incrementarlo. Cuentas como (706), (708) o (709) son de naturaleza deudora y actúan como minoradoras de la cifra de ventas.
Código
Denominación
Naturaleza
Estado Financiero
70
Ventas de mercaderías, de producción propia, de servicios, etc.
Acreedora
Cuenta de Pérdidas y Ganancias


700
Ventas de mercaderías
Acreedora


701
Ventas de productos terminados
Acreedora


702
Ventas de productos semiterminados
Acreedora


703
Ventas de subproductos y residuos
Acreedora


704
Ventas de envases y embalajes
Acreedora


705
Prestaciones de servicios
Acreedora


706
Descuentos sobre ventas por pronto pago
Deudora


708
Devoluciones de ventas y operaciones similares
Deudora


709
"Rappels" sobre ventas
Deudora
71
Variación de existencias
Variable (Acreedora/Deudora)
Cuenta de Pérdidas y Ganancias


710
Variación de existencias de productos en curso
Variable (Acreedora/Deudora)


711
Variación de existencias de productos semiterminados
Variable (Acreedora/Deudora)


712
Variación de existencias de productos terminados
Variable (Acreedora/Deudora)


713
Variación de existencias de subproductos, residuos y materiales recuperados
Variable (Acreedora/Deudora)
73
Trabajos realizados para la empresa
Acreedora
Cuenta de Pérdidas y Ganancias


730
Trabajos realizados para el inmovilizado intangible
Acreedora


731
Trabajos realizados para el inmovilizado material
Acreedora


732
Trabajos realizados en inversiones inmobiliarias
Acreedora


733
Trabajos realizados para el inmovilizado material en curso
Acreedora
74
Subvenciones, donaciones y legados
Acreedora
Cuenta de Pérdidas y Ganancias


740
Subvenciones, donaciones y legados a la explotación
Acreedora


746
Subvenciones, donaciones y legados de capital transferidos al resultado del ejercicio
Acreedora


747
Otras subvenciones, donaciones y legados transferidos al resultado del ejercicio
Acreedora
75
Otros ingresos de gestión
Acreedora
Cuenta de Pérdidas y Ganancias


751
Resultados de operaciones en común
Variable (Acreedora/Deudora)


752
Ingresos por arrendamientos
Acreedora


753
Ingresos de propiedad industrial cedida en explotación
Acreedora


754
Ingresos por comisiones
Acreedora


755
Ingresos por servicios al personal
Acreedora


759
Ingresos por servicios diversos
Acreedora
76
Ingresos financieros
Acreedora
Cuenta de Pérdidas y Ganancias


760
Ingresos de participaciones en instrumentos de patrimonio
Acreedora


761
Ingresos de valores representativos de deuda
Acreedora


762
Ingresos de créditos
Acreedora


763
Beneficios por valoración de instrumentos financieros por su valor razonable
Acreedora




> 7632
Beneficios de activos financieros a valor razonable con cambios en el patrimonio neto




> 7634
Beneficios otros instrumentos financieros


766
Beneficios en participaciones y valores representativos de deuda
Acreedora


768
Diferencias positivas de cambio
Acreedora


769
Otros ingresos financieros
Acreedora
77
Beneficios procedentes de activos no corrientes e ingresos excepcionales
Acreedora
Cuenta de Pérdidas y Ganancias


770
Beneficios procedentes de inmovilizado intangible
Acreedora


771
Beneficios procedentes de inmovilizado material
Acreedora


772
Beneficios procedentes de las inversiones inmobiliarias
Acreedora


773
Beneficios procedentes de participaciones a largo plazo en partes vinculadas
Acreedora


774
Diferencia negativa en combinaciones de negocios
Acreedora


775
Beneficios por operaciones con obligaciones propias
Acreedora


778
Ingresos excepcionales
Acreedora
79
Excesos y aplicaciones de provisiones y de pérdidas por deterioro
Acreedora
Cuenta de Pérdidas y Ganancias


790
Reversión del deterioro del inmovilizado intangible
Acreedora


791
Reversión del deterioro del inmovilizado material
Acreedora


792
Reversión del deterioro de las inversiones inmobiliarias
Acreedora


793
Reversión del deterioro de existencias
Acreedora


794
Reversión del deterioro de créditos por operaciones comerciales
Acreedora


795
Exceso de provisiones
Acreedora


796
Reversión del deterioro de participaciones y valores representativos de deuda a largo plazo
Acreedora


797
Reversión del deterioro de créditos a largo plazo
Acreedora


798
Reversión del deterioro de participaciones y valores representativos de deuda a corto plazo
Acreedora


799
Reversión del deterioro de créditos a corto plazo
Acreedora

Sin embargo, no todos los gastos e ingresos afectan al resultado del ejercicio. Ciertas variaciones de valor, por su naturaleza, se imputan directamente al patrimonio, lo que nos lleva a los grupos 8 y 9.
8. Grupo 8: Gastos Imputados al Patrimonio Neto
Las cuentas del Grupo 8 tienen una función muy específica: registrar gastos y pérdidas que, debido a su naturaleza particular (como ajustes en la valoración de ciertos activos financieros o el efecto impositivo asociado), no se incluyen en la Cuenta de Pérdidas y Ganancias. En su lugar, disminuyen directamente las cifras del patrimonio neto, reflejando cambios en la riqueza de la empresa que no provienen de su actividad operativa ordinaria. Su saldo se presenta en el Estado de Cambios en el Patrimonio Neto (ECPN).
Código
Denominación
Naturaleza
Estado Financiero
80
Gastos financieros por valoración de activos y pasivos
Deudora
Estado de Cambios en el Patrimonio Neto (ECPN)


800
Pérdidas de activos financieros a valor razonable con cambios en el patrimonio neto
Deudora


802
Transferencia de beneficios en activos financieros a valor razonable con cambios en el patrimonio neto
Deudora
81
Gastos en operaciones de cobertura
Deudora
Estado de Cambios en el Patrimonio Neto (ECPN)


810
Pérdidas por coberturas de flujos de efectivo
Deudora


811
Pérdidas por coberturas de inversiones netas en un negocio en el extranjero
Deudora


812
Transferencia de beneficios por coberturas de flujos de efectivo
Deudora


813
Transferencia de beneficios por coberturas de inversiones netas en un negocio en el extranjero
Deudora
82
Gastos por diferencias de conversión
Deudora
Estado de Cambios en el Patrimonio Neto (ECPN)


820
Diferencias de conversión negativas
Deudora


821
Transferencia de diferencias de conversión positivas
Deudora
83
Impuesto sobre beneficios
Deudora
Estado de Cambios en el Patrimonio Neto (ECPN)


830
Impuesto sobre beneficios
Deudora


833
Ajustes negativos en la imposición sobre beneficios
Deudora


834
Ingresos fiscales por diferencias permanentes
Acreedora


835
Ingresos fiscales por deducciones y bonificaciones
Acreedora


836
Transferencia de diferencias permanentes
Acreedora


837
Transferencia de deducciones y bonificaciones
Acreedora


838
Ajustes positivos en la imposición sobre beneficios
Acreedora
84
Transferencias de subvenciones, donaciones y legados
Deudora
Estado de Cambios en el Patrimonio Neto (ECPN)


840
Transferencia de subvenciones oficiales de capital
Deudora


841
Transferencia de donaciones y legados de capital
Deudora


842
Transferencia de otras subvenciones, donaciones y legados
Deudora
85
Gastos por pérdidas actuariales y ajustes en los activos por retribuciones a largo plazo de prestación definida
Deudora
Estado de Cambios en el Patrimonio Neto (ECPN)


850
Pérdidas actuariales
Deudora


851
Ajustes negativos en activos por retribuciones a largo plazo de prestación definida
Deudora
86
Gastos por activos no corrientes en venta
Deudora
Estado de Cambios en el Patrimonio Neto (ECPN)


860
Pérdidas en activos no corrientes y grupos enajenables de elementos mantenidos para la venta
Deudora


862
Transferencia de beneficios en activos no corrientes y grupos enajenables de elementos mantenidos para la venta
Deudora
89
Gastos de participaciones en empresas del grupo o asociadas con ajustes valorativos positivos previos
Deudora
Estado de Cambios en el Patrimonio Neto (ECPN)


891
Deterioro de participaciones en el patrimonio, empresas del grupo
Deudora


892
Deterioro de participaciones en el patrimonio, empresas asociadas
Deudora

La contrapartida de estos gastos directos al patrimonio son los ingresos que siguen la misma lógica, recogidos en el Grupo 9.
9. Grupo 9: Ingresos Imputados al Patrimonio Neto
De forma análoga al Grupo 8, las cuentas del Grupo 9 registran aquellos ingresos y beneficios que, por normativa, impactan directamente en el patrimonio neto sin transitar por la cuenta de resultados. Estos movimientos suelen reflejar variaciones de valor favorables en ciertos instrumentos financieros, el efecto de subvenciones de capital o diferencias de conversión positivas, mostrando un incremento en la riqueza de la empresa que no se deriva de sus ventas o ingresos de explotación. Estos saldos también son un componente clave del Estado de Cambios en el Patrimonio Neto (ECPN).
Código
Denominación
Naturaleza
Estado Financiero
90
Ingresos financieros por valoración de activos y pasivos
Acreedora
Estado de Cambios en el Patrimonio Neto (ECPN)


900
Beneficios en activos financieros a valor razonable con cambios en el patrimonio neto
Acreedora


902
Transferencia de pérdidas de activos financieros a valor razonable con cambios en el patrimonio neto
Acreedora
91
Ingresos en operaciones de cobertura
Acreedora
Estado de Cambios en el Patrimonio Neto (ECPN)


910
Beneficios por coberturas de flujos de efectivo
Acreedora


911
Beneficios por coberturas de una inversión neta en un negocio en el extranjero
Acreedora


912
Transferencia de pérdidas por coberturas de flujos de efectivo
Acreedora


913
Transferencia de pérdidas por coberturas de una inversión neta en un negocio en el extranjero
Acreedora
92
Ingresos por diferencias de conversión
Acreedora
Estado de Cambios en el Patrimonio Neto (ECPN)


920
Diferencias de conversión positivas
Acreedora


921
Transferencia de diferencias de conversión negativas
Acreedora
94
Ingresos por subvenciones, donaciones y legados
Acreedora
Estado de Cambios en el Patrimonio Neto (ECPN)


940
Ingresos de subvenciones oficiales de capital
Acreedora


941
Ingresos de donaciones y legados de capital
Acreedora


942
Ingresos de otras subvenciones, donaciones y legados
Acreedora
95
Ingresos por ganancias actuariales y ajustes en los activos por retribuciones a largo plazo de prestación definida
Acreedora
Estado de Cambios en el Patrimonio Neto (ECPN)


950
Ganancias actuariales
Acreedora


951
Ajustes positivos en activos por retribuciones a largo plazo de prestación definida
Acreedora
96
Ingresos por activos no corrientes en venta
Acreedora
Estado de Cambios en el Patrimonio Neto (ECPN)


960
Beneficios en activos no corrientes y grupos enajenables de elementos mantenidos para la venta
Acreedora


962
Transferencia de pérdidas en activos no corrientes y grupos enajenables de elementos mantenidos para la venta
Acreedora
99
Ingresos de participaciones en empresas del grupo o asociadas con ajustes valorativos negativos previos
Acreedora
Estado de Cambios en el Patrimonio Neto (ECPN)


991
Recuperación de ajustes valorativos negativos previos, empresas del grupo
Acreedora


992
Recuperación de ajustes valorativos negativos previos, empresas asociadas
Acreedora


993
Transferencia por deterioro de ajustes valorativos negativos previos, empresas del grupo
Acreedora


994
Transferencia por deterioro de ajustes valorativos negativos previos, empresas asociadas
Acreedora

Concluida la revisión de los nueve grupos, la estructura de datos presentada conforma el mapa completo y vigente del Plan General Contable español, un modelo robusto y listo para su implementación en un sistema informático educativo.

Copyright (c) 2026 Patricia Rocio Bustos Paco TODOS LOS DERECHOS RESERVADOS. Este software y toda la documentación asociada, incluyendo la estructura de datos del Plan General Contable (PGC) contenida en este repositorio, son propiedad exclusiva de Patricia Rocio Bustos Paco. Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier parte de este código o de su arquitectura de datos, por cualquier medio o procedimiento, sin la autorización previa, expresa y por escrito de la titular del copyright. El uso de este software se limita exclusivamente a fines de consulta y revisión dentro de la plataforma GitHub. El uso comercial o la implementación de esta estructura de datos en otros proyectos educativos o financieros está estrictamente prohibido. Registrado en Safe Creative.
Preguntas para Juego de Contabilidad
Introducción
Este documento constituye el banco de preguntas oficial para el juego de mesa educativo "El Gran Balance". El objetivo principal del juego es facilitar a los estudiantes el dominio de los fundamentos de la contabilidad española, específicamente el Plan General de Contabilidad (PGC), la naturaleza de las cuentas y la mecánica esencial de la partida doble. A través de una serie de retos de dificultad progresiva, los jugadores podrán construir su conocimiento desde la identificación básica de las cuentas hasta el registro de transacciones complejas, convirtiendo el aprendizaje en una experiencia interactiva y competitiva.
--------------------------------------------------------------------------------
NIVEL 1: "EL RECONOCEDOR" (Dificultad: Fácil)
1.1. Contexto del Nivel
Este nivel inicial es estratégicamente el más importante del juego. El reconocimiento y la clasificación correcta de las cuentas son el cimiento sobre el que se construye toda la disciplina contable. Sin una base sólida en la identificación de activos, pasivos, patrimonio, gastos e ingresos, es imposible registrar transacciones de forma coherente o interpretar los estados financieros de una empresa. "El Reconocedor" asegura que los jugadores dominen la taxonomía fundamental del PGC, una habilidad indispensable para avanzar hacia la comprensión de la dinámica contable.
1.2. Banco de Preguntas de Identificación y Naturaleza
NIVEL: Fácil
RETO: La cuenta "(213) Maquinaria" es un elemento fundamental para la producción. ¿A qué grupo del PGC pertenece?
OPCIONES: A) Grupo 3: Existencias B) Grupo 2: Activo No Corriente C) Grupo 6: Compras y gastos D) Grupo 5: Cuentas financieras
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (213) Maquinaria representa un bien que la empresa utiliza en su actividad productiva durante más de un año. Por tanto, pertenece al Grupo 2: Activo No Corriente.
NIVEL: Fácil
RETO: La cuenta "(400) Proveedores" representa las deudas con los suministradores de mercancías. Según su comportamiento, ¿cuál es su naturaleza?
OPCIONES: A) Naturaleza Deudora (aumenta por el Debe) B) Naturaleza Acreedora (aumenta por el Haber) C) Naturaleza Mixta D) No tiene naturaleza definida
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (400) Proveedores es un Pasivo, ya que representa una obligación de pago. Las cuentas de Pasivo, Patrimonio e Ingresos son de naturaleza acreedora, lo que significa que su saldo aumenta con anotaciones en el Haber (créditos).
NIVEL: Fácil
RETO: Tres de estas cuentas aparecen en el Balance de Situación. ¿Cuál se presenta en la Cuenta de Pérdidas y Ganancias?
OPCIONES: A) (100) Capital social B) (400) Proveedores C) (640) Sueldos y salarios D) (218) Elementos de transporte
RESPUESTA: C
EFECTO EN EL JUEGO: Las cuentas de los Grupos 1 a 5 son cuentas de balance. La cuenta (640) Sueldos y salarios pertenece al Grupo 6: Compras y gastos, y su saldo se utiliza para calcular el resultado del ejercicio en la Cuenta de Pérdidas y Ganancias.
NIVEL: Fácil
RETO: La cuenta "(700) Ventas de mercaderías" es el motor de ingresos de una empresa comercial. ¿A qué grupo del PGC pertenece?
OPCIONES: A) Grupo 5: Cuentas financieras B) Grupo 1: Financiación básica C) Grupo 7: Ventas e ingresos D) Grupo 3: Existencias
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (700) es una cuenta nominal o de gestión que registra los ingresos generados por la actividad principal de la empresa. Pertenece al Grupo 7: Ventas e ingresos, cuyo saldo se consolida en la Cuenta de Pérdidas y Ganancias.
NIVEL: Fácil
RETO: El pago de las nóminas se registra en la cuenta "(640) Sueldos y salarios". ¿Cuál es la naturaleza de esta cuenta?
OPCIONES: A) Naturaleza Acreedora (aumenta por el Haber) B) Naturaleza Deudora (aumenta por el Debe) C) Naturaleza Pasiva D) Naturaleza de Patrimonio
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (640) es una cuenta de Gasto. Las cuentas de Gasto y de Activo son de naturaleza deudora. Su saldo aumenta con anotaciones en el Debe (débitos o cargos).
NIVEL: Fácil
RETO: ¿Cuál de las siguientes cuentas representa el activo más líquido para una empresa?
OPCIONES: A) (211) Construcciones B) (300) Mercaderías C) (572) Bancos e instituciones de crédito c/c vista, euros D) (430) Clientes
RESPUESTA: C
EFECTO EN EL JUEGO: La liquidez mide la facilidad de convertir un activo en dinero. La cuenta (572) Bancos, que pertenece al Grupo 5: Cuentas financieras, ya es dinero disponible, por lo que es la más líquida.
NIVEL: Fácil
RETO: ¿A qué grupo del PGC pertenece la cuenta "(300) Mercaderías"?
OPCIONES: A) Grupo 6: Compras y gastos B) Grupo 7: Ventas e ingresos C) Grupo 3: Existencias D) Grupo 2: Activo No Corriente
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (300) Mercaderías representa los bienes que la empresa compra para vender sin transformarlos. Forma parte del Grupo 3: Existencias, que controla los inventarios de la empresa.
NIVEL: Fácil
RETO: La cuenta "(112) Reserva Legal" es una parte de los beneficios que la ley obliga a retener. ¿Qué tipo de cuenta es?
OPCIONES: A) Una cuenta de Pasivo B) Una cuenta de Patrimonio Neto C) Una cuenta de Gasto D) Una cuenta de Activo
RESPUESTA: B
EFECTO EN EL JUEGO: La (112) Reserva legal es parte de los fondos propios de la empresa, junto con el capital y otras reservas. Pertenece al Grupo 1: Financiación básica y se muestra en el Patrimonio Neto del Balance.
NIVEL: Fácil
RETO: La cuenta "(430) Clientes" registra los derechos de cobro por ventas a crédito. ¿Su naturaleza es deudora o acreedora?
OPCIONES: A) Naturaleza Deudora B) Naturaleza Acreedora C) Depende del cliente D) Es una cuenta de resultado
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (430) Clientes es un Activo, ya que representa un derecho de cobro. Las cuentas de Activo son de naturaleza deudora, por lo que aumentan su saldo con un débito (cargo en el Debe).
NIVEL: Fácil
RETO: ¿En qué grupo del PGC se clasifica la cuenta "(628) Suministros" utilizada para registrar gastos de electricidad y agua?
OPCIONES: A) Grupo 4: Acreedores y deudores por operaciones comerciales B) Grupo 5: Cuentas financieras C) Grupo 6: Compras y gastos D) Grupo 2: Activo No Corriente
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (628) Suministros es una cuenta nominal que registra un gasto operativo necesario para la actividad. Pertenece al Grupo 6: Compras y gastos, que se presenta en la Cuenta de Pérdidas y Ganancias.
NIVEL: Fácil
RETO: Una empresa obtiene un préstamo a 5 años para comprar una nueva fábrica. ¿En qué grupo clasificarías esta obligación de pago?
OPCIONES: A) Grupo 5: Cuentas financieras B) Grupo 1: Financiación básica C) Grupo 4: Acreedores y deudores por operaciones comerciales D) Grupo 2: Activo No Corriente
RESPUESTA: B
EFECTO EN EL JUEGO: Las deudas con vencimiento superior a un año, como la cuenta (170) Deudas a l/p, representan una fuente de financiación a largo plazo. Se clasifican en el Grupo 1: Financiación básica.
NIVEL: Fácil
RETO: ¿Qué tipo de cuentas se incluyen en los Grupos 8 y 9 del PGC Normal, como "(900) Beneficios en activos financieros a valor razonable con cambios en el patrimonio neto"?
OPCIONES: A) Cuentas de Balance (Activos y Pasivos) B) Cuentas de Gestión (Ingresos y Gastos) C) Cuentas que se imputan directamente al Patrimonio Neto D) Cuentas de Tesorería
RESPUESTA: C
EFECTO EN EL JUEGO: Los Grupos 8 y 9 son una categoría especial de cuentas que no afectan a la Cuenta de Pérdidas y Ganancias, sino que registran variaciones de valor que se imputan directamente al Patrimonio Neto, reflejándose en el Estado de Cambios en el Patrimonio Neto (ECPN).
NIVEL: Fácil
RETO: La cuenta "(218) Elementos de transporte" como una furgoneta de reparto, ¿dónde se clasifica?
OPCIONES: A) Grupo 3: Existencias B) Grupo 2: Activo No Corriente C) Grupo 6: Compras y gastos D) Grupo 4: Acreedores y deudores por operaciones comerciales
RESPUESTA: B
EFECTO EN EL JUEGO: Un vehículo utilizado para la actividad de la empresa es un bien duradero. Por ello, se considera un inmovilizado material y pertenece al Grupo 2: Activo No Corriente.
NIVEL: Fácil
RETO: ¿Cuál es la naturaleza de la cuenta "(705) Prestaciones de servicios"?
OPCIONES: A) Naturaleza Deudora B) Naturaleza de Activo C) Naturaleza Acreedora D) Naturaleza de Gasto
RESPUESTA: C
EFECTO EN EL JUEGO: Esta cuenta registra un ingreso por la actividad de la empresa. Las cuentas de Ingresos son de naturaleza acreedora, aumentando su saldo con abonos (anotaciones en el Haber).
NIVEL: Fácil
RETO: ¿A qué grupo pertenece la cuenta "(477) Hacienda Pública, IVA repercutido"?
OPCIONES: A) Grupo 6: Compras y gastos B) Grupo 7: Ventas e ingresos C) Grupo 4: Acreedores y deudores por operaciones comerciales D) Grupo 5: Cuentas financieras
RESPUESTA: C
EFECTO EN EL JUEGO: Esta cuenta registra la deuda que la empresa tiene con Hacienda por el IVA cobrado en sus ventas. Es una obligación con una Administración Pública, por lo que pertenece al Grupo 4: Acreedores y deudores por operaciones comerciales.
NIVEL: Fácil
RETO: ¿Cuál de estas cuentas tiene como función principal corregir el valor de un activo en el balance, funcionando de forma opuesta a las demás cuentas de su epígrafe?
OPCIONES: A) (211) Construcciones B) (281) Amortización acumulada del inmovilizado material C) (430) Clientes D) (681) Amortización del inmovilizado material
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (281) es una cuenta correctora. Aunque se presenta en el Activo, su función es disminuir el valor contable de los inmovilizados, por lo que tiene naturaleza acreedora y su saldo aumenta por el Haber.
NIVEL: Fácil
RETO: La cuenta "(600) Compras de mercaderías" es una cuenta de...
OPCIONES: A) Activo B) Pasivo C) Gasto D) Ingreso
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (600) es una cuenta de Gasto del Grupo 6: Compras y gastos. Registra el coste de las mercancías adquiridas y su saldo se lleva a la Cuenta de Pérdidas y Ganancias al final del ejercicio.
NIVEL: Fácil
RETO: ¿A qué grupo del PGC pertenece la cuenta "(520) Deudas a corto plazo con entidades de crédito"?
OPCIONES: A) Grupo 1: Financiación básica B) Grupo 5: Cuentas financieras C) Grupo 4: Acreedores y deudores por operaciones comerciales D) Grupo 2: Activo No Corriente
RESPUESTA: B
EFECTO EN EL JUEGO: Esta cuenta refleja deudas con bancos con vencimiento inferior a un año. Pertenece al Grupo 5: Cuentas financieras, que agrupa la financiación a corto plazo y la tesorería.
NIVEL: Fácil
RETO: ¿Cuál de estas dos cuentas representa una deuda para la empresa?
OPCIONES: A) (472) Hacienda Pública, IVA soportado B) (477) Hacienda Pública, IVA repercutido C) Ambas D) Ninguna
RESPUESTA: B
EFECTO EN EL JUEGO: El IVA soportado (472) es un derecho (activo) frente a Hacienda, mientras que el IVA repercutido (477) es una obligación (pasivo) con Hacienda. Ambas pertenecen al Grupo 4: Acreedores y deudores por operaciones comerciales.
NIVEL: Fácil
RETO: ¿Cuál es la naturaleza de la cuenta "(129) Resultado del ejercicio"?
OPCIONES: A) Siempre Deudora B) Siempre Acreedora C) Mixta (Deudora si hay pérdidas, Acreedora si hay beneficios) D) Es una cuenta de Gasto
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (129) recoge el resultado neto de la Cuenta de Pérdidas y Ganancias. Si la empresa ha tenido beneficios, su saldo será acreedor. Si ha tenido pérdidas, su saldo será deudor.
NIVEL: Fácil
RETO: ¿Cuál de estas cuentas es un componente clave de los gastos de explotación en la Cuenta de Pérdidas y Ganancias?
OPCIONES: A) (700) Ventas de mercaderías B) (213) Maquinaria C) (621) Arrendamientos y cánones D) (520) Deudas a corto plazo con entidades de crédito
RESPUESTA: C
EFECTO EN EL JUEGO: El alquiler (621) es un gasto operativo del Grupo 6: Compras y gastos, que reduce el resultado del ejercicio en la Cuenta de Pérdidas y Ganancias. Las otras opciones son un ingreso, un activo y un pasivo.
NIVEL: Fácil
RETO: ¿En qué grupo se encuentra la cuenta "(410) Acreedores por prestaciones de servicios" que registra deudas por servicios como la limpieza o la asesoría?
OPCIONES: A) Grupo 1: Financiación básica B) Grupo 4: Acreedores y deudores por operaciones comerciales C) Grupo 6: Compras y gastos D) Grupo 5: Cuentas financieras
RESPUESTA: B
EFECTO EN EL JUEGO: Esta cuenta representa deudas por servicios recibidos en la actividad comercial. Es una obligación de pago a corto plazo y, por tanto, pertenece al Grupo 4: Acreedores y deudores por operaciones comerciales.
NIVEL: Fácil
RETO: La cuenta "(206) Aplicaciones informáticas" registra el valor de un software contable comprado por la empresa. ¿Es un activo, pasivo, gasto o ingreso?
OPCIONES: A) Un Gasto B) Un Activo C) Un Pasivo D) Un Ingreso
RESPUESTA: B
EFECTO EN EL JUEGO: El software que se va a utilizar durante varios ejercicios es un activo intangible. Se clasifica en el Grupo 2: Activo No Corriente y su valor se reduce a lo largo del tiempo mediante la amortización.
NIVEL: Fácil
RETO: La cuenta "(465) Remuneraciones pendientes de pago" refleja los salarios del mes que aún no se han abonado a los empleados. ¿Su naturaleza es deudora o acreedora?
OPCIONES: A) Deudora B) Acreedora C) Depende del mes D) No tiene naturaleza
RESPUESTA: B
EFECTO EN EL JUEGO: Esta cuenta representa una obligación de pago con el personal de la empresa. Al ser una deuda, es un Pasivo de naturaleza acreedora, cuyo saldo aumenta con anotaciones en el Haber.
NIVEL: Fácil
RETO: Los "(762) Ingresos de créditos" registran los intereses ganados por un préstamo que la empresa ha concedido. ¿A qué grupo pertenece?
OPCIONES: A) Grupo 5: Cuentas financieras B) Grupo 1: Financiación básica C) Grupo 7: Ventas e ingresos D) Grupo 4: Acreedores y deudores por operaciones comerciales
RESPUESTA: C
EFECTO EN EL JUEGO: Esta cuenta registra un ingreso de naturaleza financiera. Pertenece al Grupo 7: Ventas e ingresos y su saldo se integra en la Cuenta de Pérdidas y Ganancias, sumando al resultado del ejercicio.
NIVEL: Fácil
RETO: La cuenta "(570) Caja, euros" refleja el dinero en efectivo. ¿Es una cuenta de Balance o de Resultados?
OPCIONES: A) Cuenta de Resultados (Nominal) B) Cuenta de Balance (Real) C) Cuenta de Orden D) Cuenta de Patrimonio Neto Directo
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (570) Caja es una cuenta de Activo que permanece abierta entre ejercicios contables. Por tanto, es una cuenta real o de balance, presentada en el Balance de Situación.
NIVEL: Fácil
RETO: ¿A qué grupo pertenece la cuenta "(662) Intereses de deudas", que registra el coste financiero de un préstamo?
OPCIONES: A) Grupo 5: Cuentas financieras B) Grupo 1: Financiación básica C) Grupo 7: Ventas e ingresos D) Grupo 6: Compras y gastos
RESPUESTA: D
EFECTO EN EL JUEGO: Los intereses pagados por deudas son un gasto financiero para la empresa. Se registran en el Grupo 6: Compras y gastos y disminuyen el resultado del ejercicio en la Cuenta de Pérdidas y Ganancias.
NIVEL: Fácil
RETO: Una empresa paga a un proveedor por adelantado. ¿Qué cuenta refleja correctamente este derecho a recibir mercancía en el futuro?
OPCIONES: A) (400) Proveedores B) (407) Anticipos a proveedores C) (600) Compras de mercaderías D) (438) Anticipos de clientes
RESPUESTA: B
EFECTO EN EL JUEGO: Un anticipo a un proveedor es un pago que genera un derecho (un Activo) y no cancela una deuda. La cuenta (407) es de naturaleza deudora, a diferencia de la (400) Proveedores, que es acreedora.
NIVEL: Fácil
RETO: ¿En qué grupo se clasifica la cuenta "(210) Terrenos y bienes naturales"?
OPCIONES: A) Grupo 3: Existencias B) Grupo 2: Activo No Corriente C) Grupo 1: Financiación básica D) Grupo 5: Cuentas financieras
RESPUESTA: B
EFECTO EN EL JUEGO: Los terrenos propiedad de la empresa son un inmovilizado material. Se registran en el Grupo 2: Activo No Corriente y, a diferencia de otros inmovilizados, generalmente no se amortizan.
NIVEL: Fácil
RETO: La cuenta "(438) Anticipos de clientes" refleja el dinero recibido de un cliente antes de entregarle la mercancía. ¿Qué tipo de cuenta es?
OPCIONES: A) Un Ingreso B) Un Activo C) Un Pasivo D) Un Gasto
RESPUESTA: C
EFECTO EN EL JUEGO: Recibir un anticipo genera la obligación de entregar un bien o prestar un servicio en el futuro. Por tanto, es un Pasivo (ingreso anticipado) de naturaleza acreedora hasta que se realiza la venta.
--------------------------------------------------------------------------------
Una vez que domines el arte de reconocer y clasificar cada cuenta, estarás listo para el siguiente desafío: entender cómo estas cuentas cobran vida y operan entre sí.
--------------------------------------------------------------------------------
NIVEL 2: "EL OPERADOR" (Dificultad: Media)
2.1. Contexto del Nivel
Tras dominar la taxonomía de las cuentas en el Nivel 1, ahora es el momento de ponerlas en movimiento. Si el reconocimiento es el cimiento, la comprensión de la dinámica de débitos y créditos es el motor que impulsa toda la maquinaria contable. Este nivel se centra en el "cómo": cómo se registra un aumento o una disminución en cada tipo de cuenta. Dominar si una cuenta debe anotarse en el "Debe" o en el "Haber" según la transacción es crucial para poder registrar correctamente cualquier hecho económico y mantener el equilibrio fundamental de la ecuación contable.
2.2. Banco de Preguntas de Aumentos y Disminuciones
NIVEL: Medio
RETO: La empresa cobra una factura de 500€ de un cliente a través de una transferencia bancaria. ¿Qué le ocurre a la cuenta "(572) Bancos"?
OPCIONES: A) Disminuye, por lo que se anota en el Haber. B) Aumenta, por lo que se anota en el Debe. C) Aumenta, por lo que se anota en el Haber. D) No se ve afectada.
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (572) Bancos es un Activo de naturaleza deudora. Los cobros son entradas de dinero que aumentan su saldo, por lo tanto, se registran en el Debe (débito).
NIVEL: Medio
RETO: Se realiza una venta de mercaderías a crédito por 1.000€. ¿Qué efecto tiene esta operación en la cuenta "(430) Clientes"?
OPCIONES: A) Aumenta, por lo que se anota en el Debe. B) Disminuye, por lo que se anota en el Haber. C) Aumenta, por lo que se anota en el Haber. D) Disminuye, por lo que se anota en el Debe.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (430) Clientes es un Activo (derecho de cobro) de naturaleza deudora. Una venta a crédito incrementa la deuda del cliente con nosotros, por lo que la cuenta aumenta mediante una anotación en el Debe (débito).
NIVEL: Medio
RETO: La empresa paga la factura de la luz de 200€ por banco. ¿Cómo se registra el efecto en la cuenta "(628) Suministros"?
OPCIONES: A) Aumenta el gasto, por lo que se anota en el Haber. B) Disminuye el gasto, por lo que se anota en el Haber. C) Aumenta el gasto, por lo que se anota en el Debe. D) Disminuye el gasto, por lo que se anota en el Debe.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (628) Suministros es una cuenta de Gasto de naturaleza deudora. Al recibir y registrar la factura, el gasto de la empresa aumenta. Este aumento se anota en el Debe (débito).
NIVEL: Medio
RETO: Compramos mercaderías por valor de 800€ y acordamos pagarlas en 30 días. ¿Qué le ocurre a la cuenta "(400) Proveedores"?
OPCIONES: A) Aumenta la deuda, por lo que se anota en el Debe. B) Disminuye la deuda, por lo que se anota en el Debe. C) Aumenta la deuda, por lo que se anota en el Haber. D) No se ve afectada hasta el pago.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (400) Proveedores es un Pasivo (obligación de pago) de naturaleza acreedora. Al comprar a crédito, nuestra deuda aumenta. Este aumento se registra con una anotación en el Haber (crédito).
NIVEL: Medio
RETO: La empresa paga una deuda de 300€ que tenía con un proveedor. ¿Qué le sucede a la cuenta "(400) Proveedores"?
OPCIONES: A) Disminuye la deuda, por lo que se anota en el Debe. B) Aumenta la deuda, por lo que se anota en el Haber. C) Disminuye la deuda, por lo que se anota en el Haber. D) No se ve afectada, solo la cuenta de bancos.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (400) Proveedores es un Pasivo de naturaleza acreedora. Al pagar la deuda, esta disminuye. Las disminuciones de Pasivo se registran en el Debe (débito).
NIVEL: Medio
RETO: Un socio realiza una aportación de capital de 10.000€ en efectivo a la cuenta bancaria de la empresa. ¿Qué efecto tiene sobre la cuenta "(100) Capital social"?
OPCIONES: A) Disminuye, por lo que se anota en el Debe. B) Aumenta, por lo que se anota en el Debe. C) Aumenta, por lo que se anota en el Haber. D) Disminuye, por lo que se anota en el Haber.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (100) Capital social es una cuenta de Patrimonio Neto de naturaleza acreedora. Una nueva aportación incrementa los fondos propios de la empresa, por lo que se registra con un abono en el Haber.
NIVEL: Medio
RETO: La empresa recibe un préstamo bancario de 20.000€ a largo plazo. ¿Cómo se ve afectada la cuenta "(170) Deudas a l/p con entidades de crédito"?
OPCIONES: A) La deuda aumenta, por lo que se anota en el Haber. B) La deuda disminuye, por lo que se anota en el Debe. C) La deuda aumenta, por lo que se anota en el Debe. D) No se registra hasta que se paga la primera cuota.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (170) es un Pasivo de naturaleza acreedora. Al recibir el préstamo, la obligación de pago de la empresa aumenta. Este aumento se registra con una anotación en el Haber (crédito).
NIVEL: Medio
RETO: Se compra mobiliario de oficina por 2.000€ pagando por transferencia. ¿Qué efecto tiene en la cuenta "(216) Mobiliario"?
OPCIONES: A) Aumenta, por lo que se anota en el Haber. B) Disminuye, por lo que se anota en el Haber. C) No se ve afectada, es un gasto. D) Aumenta, por lo que se anota en el Debe.
RESPUESTA: D
EFECTO EN EL JUEGO: La cuenta (216) Mobiliario es un Activo de naturaleza deudora. Al comprar el mobiliario, la empresa incrementa sus bienes. Este aumento de Activo se registra con una anotación en el Debe (débito).
NIVEL: Medio
RETO: Se realiza una venta de servicios por 400€. ¿Cómo afecta a la cuenta "(705) Prestaciones de servicios"?
OPCIONES: A) El ingreso aumenta, por lo que se anota en el Debe. B) El ingreso aumenta, por lo que se anota en el Haber. C) El ingreso disminuye, por lo que se anota en el Debe. D) El ingreso disminuye, por lo que se anota en el Haber.
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (705) es una cuenta de Ingreso de naturaleza acreedora. Cada venta o prestación de servicios aumenta los ingresos de la empresa. Este aumento se registra con una anotación en el Haber (crédito).
NIVEL: Medio
RETO: Un cliente nos devuelve mercaderías valoradas en 150€ de una venta que se hizo a crédito. ¿Qué le ocurre a la cuenta "(708) Devoluciones de ventas"?
OPCIONES: A) Aumenta su saldo, registrándose en el Debe. B) Aumenta su saldo, registrándose en el Haber. C) Disminuye su saldo, registrándose en el Debe. D) Disminuye su saldo, registrándose en el Haber.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (708) es una cuenta especial del Grupo 7. Aunque es un "ingreso", funciona al revés, restando de las ventas. Tiene naturaleza deudora. Una devolución aumenta su saldo, registrándose en el Debe para disminuir el importe neto de la cifra de negocios.
NIVEL: Medio
RETO: La empresa paga 1.200€ por la prima anual del seguro del local. ¿Qué efecto tiene sobre la cuenta "(625) Primas de seguros"?
OPCIONES: A) Aumenta el gasto, por lo que se anota en el Debe. B) Aumenta el gasto, por lo que se anota en el Haber. C) Disminuye el gasto, por lo que se anota en el Haber. D) Se considera un activo.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (625) es una cuenta de Gasto de naturaleza deudora. Pagar la prima del seguro constituye un gasto para la empresa, por lo que su saldo aumenta mediante una anotación en el Debe.
NIVEL: Medio
RETO: Se paga la nómina del mes por un total de 5.000€ desde la cuenta bancaria. ¿Qué le ocurre a la cuenta "(572) Bancos"?
OPCIONES: A) Aumenta, por lo que se anota en el Debe. B) Disminuye, por lo que se anota en el Debe. C) Disminuye, por lo que se anota en el Haber. D) No se ve afectada, solo la cuenta de gastos.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (572) Bancos es un Activo de naturaleza deudora. Los pagos son salidas de dinero que disminuyen su saldo, por lo tanto, se registran en el Haber (crédito).
NIVEL: Medio
RETO: Se registra la amortización anual de la maquinaria por 1.500€. ¿Qué le ocurre a la cuenta "(281) Amortización acumulada del inmovilizado material"?
OPCIONES: A) Aumenta, por lo que se anota en el Debe. B) Disminuye, por lo que se anota en el Debe. C) Aumenta, por lo que se anota en el Haber. D) Disminuye, por lo que se anota en el Haber.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (281) es una cuenta correctora de Activo con naturaleza acreedora. Su saldo aumenta cada año para reflejar la depreciación acumulada, por lo que se anota en el Haber (crédito).
NIVEL: Medio
RETO: Devolvemos a un proveedor mercaderías defectuosas por valor de 250€ que habíamos comprado a crédito. ¿Qué le ocurre a la cuenta "(608) Devoluciones de compras"?
OPCIONES: A) Aumenta su saldo, registrándose en el Haber. B) Aumenta su saldo, registrándose en el Debe. C) Disminuye su saldo, registrándose en el Haber. D) Disminuye su saldo, registrándose en el Debe.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (608) es una cuenta especial del Grupo 6. Funciona como un "menor gasto" y tiene naturaleza acreedora. Una devolución de compra aumenta su saldo, registrándose en el Haber para disminuir el gasto neto por compras.
NIVEL: Medio
RETO: La empresa compra un programa informático (software de gestión) por 600€ a crédito. ¿Cómo se ve afectada la cuenta "(206) Aplicaciones informáticas"?
OPCIONES: A) Aumenta, por lo que se anota en el Debe. B) Aumenta, por lo que se anota en el Haber. C) No se ve afectada, es un gasto. D) Disminuye, por lo que se anota en el Debe.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (206) es un Activo intangible de naturaleza deudora. La compra de software aumenta los activos de la empresa, registrándose este incremento en el Debe (débito).
NIVEL: Medio
RETO: El banco nos cobra una comisión de 15€ por mantenimiento. ¿Qué efecto tiene sobre la cuenta "(626) Servicios bancarios y similares"?
OPCIONES: A) Disminuye el gasto, por lo que se anota en el Haber. B) Aumenta el gasto, por lo que se anota en el Haber. C) Aumenta el gasto, por lo que se anota en el Debe. D) Es un pasivo financiero.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (626) es una cuenta de Gasto de naturaleza deudora. Las comisiones bancarias son un gasto para la empresa, y su aumento se registra con una anotación en el Debe (débito).
NIVEL: Medio
RETO: La empresa paga 5.000€ de la cuota de un préstamo a largo plazo. ¿Qué le ocurre a la cuenta "(170) Deudas a l/p con entidades de crédito"?
OPCIONES: A) Aumenta la deuda, por lo que se anota en el Haber. B) Disminuye la deuda, por lo que se anota en el Haber. C) Disminuye la deuda, por lo que se anota en el Debe. D) No se ve afectada, solo la cuenta de intereses.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (170) es un Pasivo de naturaleza acreedora. El pago de una cuota reduce el capital pendiente de la deuda. Las disminuciones de Pasivo se registran en el Debe (débito).
NIVEL: Medio
RETO: Un cliente, que nos debía 700€, es declarado insolvente. La empresa lo da de baja como pérdida. ¿Qué efecto tiene esto en la cuenta "(436) Clientes de dudoso cobro" (asumiendo que ya estaba clasificado ahí)?
OPCIONES: A) Aumenta su saldo, anotando en el Debe. B) Disminuye su saldo, anotando en el Haber. C) Disminuye su saldo, anotando en el Debe. D) Aumenta su saldo, anotando en el Haber.
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (436) es un Activo de naturaleza deudora. Al dar de baja definitivamente el crédito por incobrable, el saldo de esta cuenta debe desaparecer. Una disminución de Activo se registra en el Haber (crédito).
NIVEL: Medio
RETO: La empresa recibe una subvención oficial de capital de 10.000€. ¿Cómo se registra en la cuenta "(130) Subvenciones oficiales de capital"?
OPCIONES: A) Aumenta su saldo, registrándose en el Debe. B) Disminuye su saldo, registrándose en el Debe. C) Aumenta su saldo, registrándose en el Haber. D) Es un ingreso del grupo 7.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (130) es una cuenta de Patrimonio Neto (Grupo 1) de naturaleza acreedora. Al recibir la subvención, aumenta el patrimonio de la empresa, lo que se registra con un abono en el Haber.
NIVEL: Medio
RETO: Se compran 100€ de material de oficina (bolígrafos, papel) al contado. ¿Qué le sucede a la cuenta "(602) Compras de otros aprovisionamientos"?
OPCIONES: A) Aumenta, por lo que se anota en el Haber. B) Disminuye, por lo que se anota en el Haber. C) Aumenta, por lo que se anota en el Debe. D) No se ve afectada, se usa la (328) Material de oficina.
RESPUESTA: C
EFECTO EN EL JUEGO: El material de oficina consumible se considera un gasto. La cuenta (602) es una cuenta de Gasto de naturaleza deudora. Al comprarlo, el gasto aumenta, registrándose en el Debe.
NIVEL: Medio
RETO: Se pagan 4.000€ a Hacienda por el Impuesto de Sociedades del año anterior. ¿Qué le ocurre a la cuenta "(4752) H.P., acreedora por Imp. Sociedades"?
OPCIONES: A) Aumenta la deuda, anotando en el Haber. B) Disminuye la deuda, anotando en el Debe. C) Aumenta la deuda, anotando en el Debe. D) Disminuye la deuda, anotando en el Haber.
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (4752) es un Pasivo de naturaleza acreedora. Al pagar el impuesto, la deuda con Hacienda se cancela o disminuye. Las disminuciones de Pasivo se registran en el Debe (débito).
NIVEL: Medio
RETO: La empresa paga por adelantado 600€ por el alquiler de los próximos tres meses. ¿Cómo se ve afectada la cuenta "(480) Gastos anticipados"?
OPCIONES: A) Aumenta el activo, anotando en el Debe. B) Disminuye el activo, anotando en el Haber. C) Aumenta el activo, anotando en el Haber. D) Es un gasto del grupo 6 directamente.
RESPUESTA: A
EFECTO EN EL JUEGO: Pagar un gasto por adelantado genera un derecho a recibir un servicio en el futuro. Esto es un Activo (Grupo 4) de naturaleza deudora. Por tanto, la cuenta (480) aumenta con una anotación en el Debe.
NIVEL: Medio
RETO: Cobramos por adelantado 1.000€ por un servicio que prestaremos el mes que viene. ¿Qué efecto tiene en la cuenta "(485) Ingresos anticipados"?
OPCIONES: A) Aumenta el pasivo, anotando en el Haber. B) Disminuye el pasivo, anotando en el Debe. C) Aumenta el pasivo, anotando en el Debe. D) Es un ingreso del grupo 7 directamente.
RESPUESTA: A
EFECTO EN EL JUEGO: Cobrar por adelantado genera una obligación de prestar un servicio en el futuro. Esto es un Pasivo (Grupo 4) de naturaleza acreedora. Por tanto, la cuenta (485) aumenta con una anotación en el Haber.
NIVEL: Medio
RETO: Se compran materias primas a crédito por 2.000€. ¿Qué le ocurre a la cuenta "(601) Compras de materias primas"?
OPCIONES: A) Aumenta, por lo que se anota en el Debe. B) Disminuye, por lo que se anota en el Haber. C) Aumenta, por lo que se anota en el Haber. D) No se ve afectada hasta que se consume.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (601) es una cuenta de Gasto de naturaleza deudora. La adquisición de materias primas se registra como un aumento del gasto en el momento de la compra, por lo que se anota en el Debe.
NIVEL: Medio
RETO: Se registra el gasto de la Seguridad Social a cargo de la empresa por 3.000€. ¿Cómo afecta esto a la cuenta "(642) Seguridad Social a cargo de la empresa"?
OPCIONES: A) Aumenta el gasto, registrándolo en el Debe. B) Disminuye el gasto, registrándolo en el Haber. C) Aumenta el gasto, registrándolo en el Haber. D) Es un pasivo con Hacienda.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (642) es una cuenta de Gasto de naturaleza deudora. Las cotizaciones sociales son un gasto de personal para la empresa, y su devengo aumenta el saldo de esta cuenta mediante una anotación en el Debe.
NIVEL: Medio
RETO: Se pagan dividendos a los accionistas por 10.000€ desde el banco. ¿Qué le sucede a la cuenta "(526) Dividendo activo a pagar" (asumiendo que ya estaba provisionado)?
OPCIONES: A) La deuda aumenta, por lo que se anota en el Haber. B) La deuda disminuye, por lo que se anota en el Debe. C) La deuda disminuye, por lo que se anota en el Haber. D) Aumenta la deuda, por lo que se anota en el Debe.
RESPUESTA: B
EFECTO EN EL JUEGO: La cuenta (526) es un Pasivo de naturaleza acreedora. Representa la deuda con los socios por los dividendos acordados. Al pagar, la deuda se cancela. Las disminuciones de Pasivo se registran en el Debe.
NIVEL: Medio
RETO: La empresa compra acciones de otra compañía como inversión a corto plazo por 500€. ¿Qué efecto tiene sobre la cuenta "(540) Inversiones financieras c/p en instrumentos de patrimonio"?
OPCIONES: A) Aumenta el activo, registrándolo en el Haber. B) Disminuye el activo, registrándolo en el Haber. C) Aumenta el activo, registrándolo en el Debe. D) Es un gasto financiero.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (540) es un Activo financiero de naturaleza deudora. La compra de acciones incrementa los activos de la empresa, por lo que se registra con una anotación en el Debe.
NIVEL: Medio
RETO: Se vende un producto terminado por 3.000€ al contado. ¿Cómo se ve afectada la cuenta "(701) Ventas de productos terminados"?
OPCIONES: A) Aumenta el ingreso, anotando en el Debe. B) Disminuye el ingreso, anotando en el Haber. C) Aumenta el ingreso, anotando en el Haber. D) Es una cuenta de activo.
RESPUESTA: C
EFECTO EN EL JUEGO: La cuenta (701) es una cuenta de Ingreso de naturaleza acreedora. Cada venta aumenta los ingresos de la empresa, lo cual se registra con una anotación en el Haber (crédito).
NIVEL: Medio
RETO: La empresa contrata una campaña de publicidad por 800€, que pagará el mes que viene. ¿Qué le ocurre a la cuenta "(627) Publicidad, propaganda y RR.PP."?
OPCIONES: A) Aumenta el gasto, anotando en el Debe. B) Aumenta el gasto, anotando en el Haber. C) No se ve afectada hasta el pago. D) Disminuye el gasto, anotando en el Haber.
RESPUESTA: A
EFECTO EN EL JUEGO: La cuenta (627) es una cuenta de Gasto de naturaleza deudora. Según el principio de devengo, el gasto se registra cuando ocurre, no cuando se paga. Por tanto, aumenta con una anotación en el Debe.
NIVEL: Medio
RETO: La empresa constituye una fianza de 1.000€ por el alquiler de un local, pagando por banco. ¿Qué le ocurre a la cuenta "(260) Fianzas constituidas a largo plazo"?
OPCIONES: A) Disminuye, por lo que se anota en el Haber. B) Aumenta, por lo que se anota en el Haber. C) Disminuye, por lo que se anota en el Debe. D) Aumenta, por lo que se anota en el Debe.
RESPUESTA: D
EFECTO EN EL JUEGO: Una fianza constituida es un derecho de cobro futuro (un Activo) de naturaleza deudora. Al constituirla, este activo aumenta, por lo que se registra con una anotación en el Debe (débito).
--------------------------------------------------------------------------------
Ahora que entiendes cómo se mueve cada cuenta individualmente, es hora de unir las piezas. El desafío final es aplicar este conocimiento para registrar transacciones completas, respetando la regla de oro de la contabilidad.
--------------------------------------------------------------------------------
NIVEL 3: "EL CONTADOR" (Dificultad: Difícil)
3.1. Contexto del Nivel
Este nivel representa la prueba definitiva de competencia contable, donde la teoría se encuentra con la práctica. Aquí es donde el "qué" (el reconocimiento de cuentas del Nivel 1) se fusiona con el "cómo" (la dinámica de débitos y créditos del Nivel 2) para dominar el "porqué" de la contabilidad. Cada reto exige registrar transacciones completas que afectan a múltiples cuentas simultáneamente, demostrando una comprensión integral del flujo económico y asegurando que el principio de partida doble permanezca siempre en equilibrio.
3.2. Banco de Casos Prácticos de Partida Doble
NIVEL: Difícil
RETO: La empresa "VENDE TODO S.L." vende mercaderías a crédito por 1.000€ más 21% de IVA. ¿Cuál es el asiento contable correcto?
OPCIONES: A) Debe: (430) Clientes 1.210€ / Haber: (700) Ventas 1.210€ B) Debe: (572) Bancos 1.210€ / Haber: (700) Ventas 1.000€, (472) IVA Soportado 210€ C) Debe: (430) Clientes 1.210€ / Haber: (700) Ventas de mercaderías 1.000€, (477) H.P. IVA Repercutido 210€ D) Debe: (700) Ventas de mercaderías 1.000€, (477) H.P. IVA Repercutido 210€ / Haber: (430) Clientes 1.210€
RESPUESTA: C
EFECTO EN EL JUEGO: Se registra el aumento del derecho de cobro en el Debe de (430) Clientes por el total. El ingreso por la venta se anota en el Haber de (700) por la base imponible, y la deuda con Hacienda por el IVA de la venta se anota en el Haber de (477). La suma del Debe iguala a la suma del Haber.
NIVEL: Difícil
RETO: "COMPRA FÁCIL S.A." compra materias primas por 500€ más 21% de IVA, acordando el pago en 30 días. ¿Cuál es el registro correcto?
OPCIONES: A) Debe: (601) Compras de materias primas 605€ / Haber: (400) Proveedores 605€ B) Debe: (601) Compras de materias primas 500€, (472) H.P. IVA Soportado 105€ / Haber: (572) Bancos 605€ C) Debe: (572) Bancos 605€ / Haber: (601) Compras de materias primas 500€, (472) H.P. IVA Soportado 105€ D) Debe: (601) Compras de materias primas 500€, (472) H.P. IVA Soportado 105€ / Haber: (400) Proveedores 605€
RESPUESTA: D
EFECTO EN EL JUEGO: Aumenta el gasto por la compra en el Debe de (601) por la base. El IVA pagado genera un crédito fiscal, que aumenta en el Debe de (472). Al ser una compra a crédito, nace una deuda con el proveedor, que aumenta el Pasivo en el Haber de (400).
NIVEL: Difícil
RETO: Los socios fundan "NUEVA EMPRESA S.L." con una aportación de 50.000€ que ingresan en la cuenta bancaria de la sociedad. ¿Cómo se contabiliza la fundación?
OPCIONES: A) Debe: (100) Capital Social 50.000€ / Haber: (572) Bancos 50.000€ B) Debe: (572) Bancos 50.000€ / Haber: (700) Ventas 50.000€ C) Debe: (572) Bancos 50.000€ / Haber: (170) Deudas a l/p 50.000€ D) Debe: (572) Bancos 50.000€ / Haber: (100) Capital Social 50.000€
RESPUESTA: D
EFECTO EN EL JUEGO: La entrada de dinero aumenta el activo (572) Bancos, por lo que se carga en el Debe. La aportación de los socios aumenta los fondos propios de la empresa, por lo que se abona en el Haber de la cuenta (100) Capital Social.
NIVEL: Difícil
RETO: Se paga la nómina del único empleado. Gasto total: Sueldo bruto (640) 1.500€ y S.S. a cargo empresa (642) 450€. Retenciones: S.S. empleado 90€ y IRPF 150€. El resto se paga por banco. ¿Cuál es el asiento?
OPCIONES: A) Debe: (640) 1.500€ / Haber: (572) Bancos 1.500€ B) Debe: (640) 1.500€, (642) 450€ / Haber: (476) 540€, (4751) 150€, (572) Bancos 1.260€ C) Debe: (640) 1.500€ / Haber: (476) 90€, (4751) 150€, (572) Bancos 1.260€ D) Debe: (640) 1.950€ / Haber: (572) Bancos 1.950€
RESPUESTA: B
EFECTO EN EL JUEGO: Se registran los gastos totales en el Debe: (640) y (642). En el Haber se registran las deudas generadas (Pasivos): con la S.S. por ambas cotizaciones (476) y con Hacienda por la retención (4751). La diferencia es el líquido pagado al trabajador, que sale de (572) Bancos.
NIVEL: Difícil
RETO: Al final del trimestre, la empresa tiene 5.000€ en la (477) H.P. IVA Repercutido y 3.000€ en la (472) H.P. IVA Soportado. ¿Cuál es el asiento de liquidación de IVA?
OPCIONES: A) Debe: (477) 5.000€ / Haber: (472) 3.000€, (572) Bancos 2.000€ B) Debe: (472) 3.000€ / Haber: (477) 5.000€, (4700) H.P. Deudora por IVA 2.000€ C) Debe: (631) Otros Tributos 2.000€ / Haber: (572) Bancos 2.000€ D) Debe: (477) 5.000€ / Haber: (472) 3.000€, (4750) H.P. Acreedora por IVA 2.000€
RESPUESTA: D
EFECTO EN EL JUEGO: Para liquidar, se saldan las cuentas de IVA. Se carga la (477) por su saldo acreedor y se abona la (472) por su saldo deudor. Como el IVA repercutido es mayor, la diferencia es una deuda con Hacienda que se registra en el Haber de (4750).
NIVEL: Difícil
RETO: Se registra la amortización anual de un vehículo que costó 20.000€. La cuota de amortización es de 4.000€. ¿Cómo se contabiliza?
OPCIONES: A) Debe: (281) Amort. Acumulada 4.000€ / Haber: (681) Amort. Inmov. Material 4.000€ B) Debe: (681) Amort. Inmov. Material 4.000€ / Haber: (218) Elementos de Transporte 4.000€ C) Debe: (681) Amort. Inmov. Material 4.000€ / Haber: (281) Amort. Acumulada del Inmov. Material 4.000€ D) Debe: (671) Pérdidas procedentes del Inmov. 4.000€ / Haber: (218) Elementos de Transporte 4.000€
RESPUESTA: C
EFECTO EN EL JUEGO: Se registra el gasto por la depreciación del año en el Debe de la cuenta (681). La contrapartida es un aumento de la amortización acumulada, que se abona en el Haber de la cuenta correctora de activo (281).
NIVEL: Difícil
RETO: La empresa paga 900€ de alquiler trimestral del local por banco. ¿Cuál es el asiento correcto?
OPCIONES: A) Debe: (211) Construcciones 900€ / Haber: (572) Bancos 900€ B) Debe: (621) Arrendamientos y cánones 900€ / Haber: (572) Bancos 900€ C) Debe: (572) Bancos 900€ / Haber: (621) Arrendamientos y cánones 900€ D) Debe: (621) Arrendamientos y cánones 900€ / Haber: (410) Acreedores por prest. de servicios 900€
RESPUESTA: B
EFECTO EN EL JUEGO: El pago del alquiler es un gasto operativo. Se carga en el Debe la cuenta de gasto (621). La salida de dinero se registra como un abono en el Haber de la cuenta (572) Bancos.
NIVEL: Difícil
RETO: La empresa "TECNO S.L." compra ordenadores por 3.000€, pagando 1.000€ por transferencia y dejando el resto a deber a 3 años. ¿Cuál es el asiento correcto? (IVA no incluido para simplificar).
OPCIONES: A) Debe: (600) Compras 3.000€ / Haber: (572) Bancos 1.000€, (400) Proveedores 2.000€ B) Debe: (217) Equipos para procesos de información 3.000€ / Haber: (572) Bancos 1.000€, (173) Proveedores de inmovilizado a l/p 2.000€ C) Debe: (217) Equipos para procesos de información 3.000€ / Haber: (572) Bancos 3.000€ D) Debe: (629) Otros servicios 3.000€ / Haber: (572) Bancos 1.000€, (523) Proveedores de inmovilizado a c/p 2.000€
RESPUESTA: B
EFECTO EN EL JUEGO: Los ordenadores son un activo no corriente (inmovilizado), por lo que aumenta el Debe de la cuenta (217). Disminuye el dinero en el banco, abonando en (572) Bancos. La deuda a largo plazo por la compra de un activo fijo se registra en (173), un pasivo que aumenta por el Haber.
NIVEL: Difícil
RETO: El cliente del primer reto, que nos debía 1.210€, nos paga la totalidad de su deuda mediante transferencia. ¿Cómo se registra el cobro?
OPCIONES: A) Debe: (572) Bancos 1.210€ / Haber: (700) Ventas 1.210€ B) Debe: (430) Clientes 1.210€ / Haber: (572) Bancos 1.210€ C) Debe: (572) Bancos 1.210€ / Haber: (430) Clientes 1.210€ D) Debe: (700) Ventas 1.210€ / Haber: (430) Clientes 1.210€
RESPUESTA: C
EFECTO EN EL JUEGO: El cobro aumenta el dinero en el banco, por lo que se carga en el Debe de (572). Al mismo tiempo, se cancela el derecho de cobro que teníamos, por lo que se abona en el Haber de (430) Clientes para disminuir su saldo a cero.
NIVEL: Difícil
RETO: La empresa recibe la factura de un abogado por 750€ más 21% de IVA por un servicio de asesoramiento. La pagará más adelante. ¿Cuál es el asiento?
OPCIONES: A) Debe: (623) Serv. profesionales indep. 907,50€ / Haber: (410) Acreedores por prest. servicios 907,50€ B) Debe: (623) Serv. profesionales indep. 750€, (472) H.P. IVA Soportado 157,50€ / Haber: (410) Acreedores por prest. servicios 907,50€ C) Debe: (623) Serv. profesionales indep. 750€ / Haber: (572) Bancos 750€ D) Debe: (410) Acreedores 907,50€ / Haber: (623) Serv. profesionales indep. 750€, (472) H.P. IVA Soportado 157,50€
RESPUESTA: B
EFECTO EN EL JUEGO: Se registra el gasto por el servicio en el Debe de (623) y el IVA soportado como un activo en (472). Como no se paga al momento, se genera una deuda con el proveedor del servicio, que es un pasivo que aumenta por el Haber de la cuenta (410).
NIVEL: Difícil
RETO: La empresa compra acciones del Banco XYZ por 2.000€ como inversión a corto plazo, pagando con una transferencia. ¿Cuál es el registro?
OPCIONES: A) Debe: (669) Otros gastos financieros 2.000€ / Haber: (572) Bancos 2.000€ B) Debe: (540) Inv. fin. c/p en instrum. de patrimonio 2.000€ / Haber: (572) Bancos 2.000€ C) Debe: (250) Inv. fin. l/p en instrum. de patrimonio 2.000€ / Haber: (572) Bancos 2.000€ D) Debe: (572) Bancos 2.000€ / Haber: (540) Inv. fin. c/p en instrum. de patrimonio 2.000€
RESPUESTA: B
EFECTO EN EL JUEGO: La compra de acciones como inversión a corto plazo aumenta un activo financiero, que se carga en el Debe de (540). La contrapartida es la salida de dinero del banco, que disminuye el activo (572) y se abona en el Haber.
NIVEL: Difícil
RETO: Se paga la deuda del reto de "COMPRA FÁCIL S.A." (605€) al proveedor mediante transferencia. ¿Cómo se registra el pago?
OPCIONES: A) Debe: (601) Compras 605€ / Haber: (572) Bancos 605€ B) Debe: (400) Proveedores 605€ / Haber: (572) Bancos 605€ C) Debe: (572) Bancos 605€ / Haber: (400) Proveedores 605€ D) No procede, la deuda no existe.
RESPUESTA: B
EFECTO EN EL JUEGO: La compra original generó una deuda en la cuenta (400). El pago posterior cancela esa deuda. Se carga en el Debe la cuenta de pasivo (400) Proveedores para disminuirla, y se abona en el Haber la cuenta de activo (572) Bancos por la salida de dinero.
NIVEL: Difícil
RETO: La empresa obtiene un "rappel" (descuento por volumen) de un proveedor por 300€. El proveedor nos lo descuenta de una factura pendiente. ¿Cuál es el asiento?
OPCIONES: A) Debe: (572) Bancos 300€ / Haber: (609) "Rappels" por compras 300€ B) Debe: (609) "Rappels" por compras 300€ / Haber: (400) Proveedores 300€ C) Debe: (400) Proveedores 300€ / Haber: (609) "Rappels" por compras 300€ D) Debe: (400) Proveedores 300€ / Haber: (709) "Rappels" sobre ventas 300€
RESPUESTA: C
EFECTO EN EL JUEGO: El rappel es un menor gasto, que se registra en el Haber de la cuenta (609). Como el proveedor nos lo descuenta de lo que le debemos, nuestra deuda con él disminuye. Se carga en el Debe la cuenta (400) Proveedores para reflejar la disminución del pasivo.
NIVEL: Difícil
RETO: La empresa contrata un seguro anual por 1.200€, pagando por banco el 1 de enero. ¿Cuál es el asiento del pago inicial?
OPCIONES: A) Debe: (625) Primas de seguros 1.200€ / Haber: (572) Bancos 1.200€ B) Debe: (480) Gastos anticipados 1.200€ / Haber: (572) Bancos 1.200€ C) Debe: (572) Bancos 1.200€ / Haber: (480) Gastos anticipados 1.200€ D) Debe: (410) Acreedores 1.200€ / Haber: (572) Bancos 1.200€
RESPUESTA: B
EFECTO EN EL JUEGO: Al pagar un gasto que cubre un periodo futuro, se genera un activo (un derecho). Se carga en el Debe la cuenta (480) Gastos anticipados. La contrapartida es la salida de dinero del banco, abonando en el Haber de (572) Bancos.
NIVEL: Difícil
RETO: A final de mes, la empresa del reto anterior debe reconocer el gasto del seguro de ese mes (1.200€ / 12 meses = 100€). ¿Cuál es el asiento de periodificación?
OPCIONES: A) Debe: (625) Primas de seguros 100€ / Haber: (572) Bancos 100€ B) Debe: (480) Gastos anticipados 100€ / Haber: (625) Primas de seguros 100€ C) Debe: (625) Primas de seguros 100€ / Haber: (480) Gastos anticipados 100€ D) No se hace nada hasta fin de año.
RESPUESTA: C
EFECTO EN EL JUEGO: Para llevar a resultados la parte del gasto que corresponde al mes, se carga en el Debe la cuenta de gasto (625). La contrapartida es la disminución del activo que se había registrado inicialmente, por lo que se abona en el Haber la cuenta (480) Gastos anticipados.
NIVEL: Difícil
RETO: Se vende la maquinaria de la empresa por 10.000€ al contado. Su precio de compra fue 30.000€ y tenía una amortización acumulada de 22.000€. ¿Cuál es el asiento?
OPCIONES: A) Debe: (572) Bancos 10.000€ / Haber: (213) Maquinaria 10.000€ B) Debe: (572) Bancos 10.000€, (281) Amort. Acum. 22.000€ / Haber: (213) Maquinaria 30.000€, (771) Beneficios 2.000€ C) Debe: (572) Bancos 10.000€, (671) Pérdidas 20.000€ / Haber: (213) Maquinaria 30.000€ D) Debe: (572) Bancos 10.000€ / Haber: (771) Beneficios 10.000€
RESPUESTA: B
EFECTO EN EL JUEGO: Se registra la entrada de dinero en (572). Se da de baja la maquinaria por su precio original en el Haber de (213) y su amortización acumulada en el Debe de (281). La diferencia entre el valor contable (30.000-22.000=8.000€) y el precio de venta (10.000€) es un beneficio, que se abona en (771).
NIVEL: Difícil
RETO: La empresa compra 1.000€ de mercaderías (IVA 21% no incluido) y paga con un efecto comercial (letra de cambio) a 60 días.
OPCIONES: A) Debe: (600) 1.210€ / Haber: (401) Proveedores, efectos a pagar 1.210€ B) Debe: (600) 1.000€, (472) 210€ / Haber: (572) Bancos 1.210€ C) Debe: (600) 1.000€, (472) 210€ / Haber: (401) Proveedores, efectos comerciales a pagar 1.210€ D) Debe: (600) 1.000€, (472) 210€ / Haber: (400) Proveedores 1.210€
RESPUESTA: C
EFECTO EN EL JUEGO: Se registran el gasto (600) y el IVA soportado (472) en el Debe. Como la deuda se documenta en un efecto comercial, en lugar de usar la cuenta general (400), se utiliza la específica (401), que aumenta por el Haber.
NIVEL: Difícil
RETO: Se paga una sanción de tráfico de 200€ con la furgoneta de la empresa.
OPCIONES: A) Debe: (631) Otros tributos 200€ / Haber: (572) Bancos 200€ B) Debe: (678) Gastos excepcionales 200€ / Haber: (572) Bancos 200€ C) Debe: (629) Otros servicios 200€ / Haber: (572) Bancos 200€ D) Debe: (659) Otras pérdidas en gestión corriente 200€ / Haber: (572) Bancos 200€
RESPUESTA: B
EFECTO EN EL JUEGO: Las multas y sanciones no son un gasto de explotación normal. Se consideran gastos excepcionales. Se carga en el Debe la cuenta (678) y se abona en el Haber (572) Bancos por la salida de dinero.
NIVEL: Difícil
RETO: La empresa cobra 500€ de intereses de una cuenta de ahorro.
OPCIONES: A) Debe: (572) Bancos 500€ / Haber: (705) Prestación de servicios 500€ B) Debe: (572) Bancos 500€ / Haber: (769) Otros ingresos financieros 500€ C) Debe: (769) 500€ / Haber: (572) Bancos 500€ D) Debe: (572) Bancos 500€ / Haber: (545) Dividendo a cobrar 500€
RESPUESTA: B
EFECTO EN EL JUEGO: La entrada de dinero se carga en el Debe de (572). Los intereses ganados son un ingreso financiero, por lo que se abona en el Haber la cuenta (769) u otra específica como la (762).
NIVEL: Difícil
RETO: La empresa declara un cliente como incobrable. La deuda era de 400€ y ya se había dotado una provisión por ese importe (en la 490). ¿Cuál es el asiento para dar de baja la deuda?
OPCIONES: A) Debe: (650) Pérdidas de créditos incobrables 400€ / Haber: (430) Clientes 400€ B) Debe: (490) Deterioro de valor de créditos 400€ / Haber: (430) Clientes 400€ C) Debe: (430) Clientes 400€ / Haber: (490) Deterioro de valor de créditos 400€ D) Debe: (650) Pérdidas de créditos incobrables 400€ / Haber: (490) Deterioro de valor de créditos 400€
RESPUESTA: B
EFECTO EN EL JUEGO: Para cancelar la deuda, se abona la cuenta (430) Clientes. Como el gasto ya se reconoció al dotar la provisión, ahora se utiliza esa provisión. Se carga en el Debe la cuenta (490) Deterioro de valor para saldarla, evitando un doble gasto.
NIVEL: Difícil
RETO: La empresa decide aplicar el resultado del año anterior (un beneficio de 10.000€ en la cuenta 129) de la siguiente forma: 10% a Reserva Legal y el resto a Reservas Voluntarias.
OPCIONES: A) Debe: (129) 10.000€ / Haber: (112) 1.000€, (113) 9.000€ B) Debe: (112) 1.000€, (113) 9.000€ / Haber: (129) 10.000€ C) Debe: (129) 10.000€ / Haber: (526) Dividendo a pagar 10.000€ D) Debe: (129) 10.000€ / Haber: (100) Capital Social 10.000€
RESPUESTA: A
EFECTO EN EL JUEGO: Para distribuir el resultado, se salda la cuenta (129) cargándola en el Debe. La contrapartida es el aumento de las cuentas de reservas (Patrimonio Neto), que se abonan en el Haber de (112) y (113).
NIVEL: Difícil
RETO: La empresa realiza trabajos de mejora en su propio local, valorados en 5.000€. Estos trabajos los realiza con su personal y materiales.
OPCIONES: A) No se hace asiento, es un coste interno. B) Debe: (622) Reparaciones y conservación 5.000€ / Haber: (572) Bancos 5.000€ C) Debe: (211) Construcciones 5.000€ / Haber: (731) Trabajos realizados para el inmovilizado material 5.000€ D) Debe: (211) Construcciones 5.000€ / Haber: (113) Reservas voluntarias 5.000€
RESPUESTA: C
EFECTO EN EL JUEGO: La mejora aumenta el valor del activo, por lo que se carga en el Debe la cuenta (211). Para neutralizar los gastos ya incurridos (sueldos, materiales), se reconoce un ingreso en la cuenta (731), que se abona en el Haber. Esto se llama "activación de gastos".
NIVEL: Difícil
RETO: La empresa vende envases a un cliente por 200€, con la opción de que el cliente los devuelva.
OPCIONES: A) Debe: (430) Clientes 200€ / Haber: (700) Ventas 200€ B) Debe: (430) Clientes 200€ / Haber: (437) Envases a devolver por clientes 200€ C) Debe: (430) Clientes 200€ / Haber: (704) Ventas de envases y embalajes 200€ D) Debe: (326) Embalajes 200€ / Haber: (430) Clientes 200€
RESPUESTA: C
EFECTO EN EL JUEGO: Aunque tengan facultad de devolución, la operación inicial es una venta. Se utiliza la cuenta específica (704) para este tipo de ingresos, abonándola en el Haber. El derecho de cobro se registra en el Debe de (430) Clientes.
NIVEL: Difícil
RETO: La empresa paga una deuda a corto plazo de 2.000€ con un proveedor de inmovilizado.
OPCIONES: A) Debe: (400) Proveedores 2.000€ / Haber: (572) Bancos 2.000€ B) Debe: (173) Proveedores inmov. l/p 2.000€ / Haber: (572) Bancos 2.000€ C) Debe: (523) Proveedores inmov. c/p 2.000€ / Haber: (572) Bancos 2.000€ D) Debe: (600) Compras 2.000€ / Haber: (572) Bancos 2.000€
RESPUESTA: C
EFECTO EN EL JUEGO: Se debe usar la cuenta específica para deudas por compra de activos fijos. Al ser a corto plazo, es la (523). Se carga en el Debe esta cuenta de pasivo para saldarla y se abona en el Haber (572) Bancos por la salida de tesorería.
NIVEL: Difícil
RETO: La empresa adquiere un vehículo por leasing (arrendamiento financiero) valorado en 25.000€.
OPCIONES: A) Debe: (621) Arrendamientos 25.000€ / Haber: (410) Acreedores 25.000€ B) Debe: (218) Elementos de transporte 25.000€ / Haber: (174) Acreedores arrend. fin. l/p 20.000€, (524) Acreedores arrend. fin. c/p 5.000€ C) No se registra el vehículo, solo las cuotas mensuales como gasto. D) Debe: (218) Elementos de transporte 25.000€ / Haber: (572) Bancos 25.000€
RESPUESTA: B
EFECTO EN EL JUEGO: Un arrendamiento financiero se considera una compra financiada. Se da de alta el activo en el Debe (218). La contrapartida es la deuda total, que se divide entre el largo plazo (174) y el corto plazo (524), registrándose ambas en el Haber. (Nota: los importes c/p y l/p son un ejemplo).
Guía de Integración Fiscal para Simulación Educativa
Introducción: Gamificación de las Obligaciones Contables y Fiscales
Este documento sirve como un manual técnico para la integración de las obligaciones fiscales españolas, derivadas del Plan General de Contabilidad (PGC), en una mecánica de juego educativa. El propósito fundamental es transformar los registros contables en "Eventos Críticos" y desafíos estratégicos para el jugador. Para lograr una simulación fiel, el PGC se trata como un esquema de base de datos jerárquico. Cada cuenta es un objeto con atributos definidos —ID (código), Label (denominación), y Balance Type (naturaleza)— que dictan la lógica del motor de juego. Este manual se centra en el núcleo del PGC aplicable tanto a grandes empresas como a PYMES, si bien la estructura completa del PGC Normal (con sus Grupos 8 y 9) ofrece una vía natural para futuras "expansiones" con mecánicas avanzadas. Los siguientes apartados proporcionan una tabla de referencia y un banco de preguntas diseñados para este fin.
--------------------------------------------------------------------------------
1. Tabla Maestra de Correspondencia Fisco-Contable
Esta tabla es el núcleo del motor fiscal. Su importancia estratégica radica en que mapea los modelos fiscales (eventos de juego) a los objetos de cuenta específicos del PGC. Cada cuenta está destinada a un estado financiero de salida (Output: Balance de Situación o Pérdidas y Ganancias), que el jugador debe gestionar. Dominar estas conexiones es fundamental para gestionar el recurso más crítico del jugador: la tesorería (representada en la cuenta (572) Bancos e instituciones de crédito c/c vista, euros) y cumplir con las normativas simuladas.
Tabla Maestra Fiscal
Modelo
Nombre del Impuesto
Cuentas Contables Relacionadas (PGC)
Propósito del Formulario
Periodicidad y Plazos
Modelo 303
Impuesto sobre el Valor Añadido (IVA)
(472) Hacienda Pública, IVA soportado<br>(477) Hacienda Pública, IVA repercutido<br>(4700) Hacienda Pública, deudora por IVA<br>(4750) Hacienda Pública, acreedora por IVA
Declarar y liquidar la diferencia entre el IVA que la empresa cobra a sus clientes (repercutido) y el IVA que paga a sus proveedores (soportado).
[Información no disponible en el contexto fuente. Requiere datos externos para la simulación del calendario fiscal.]
Modelo 111
Retenciones e Ingresos a Cuenta del IRPF (Rendimientos del Trabajo)
(640) Sueldos y salarios<br>(4751) Hacienda Pública, acreedora por retenciones practicadas
Ingresar en Hacienda las cantidades retenidas a los empleados en sus nóminas a cuenta de su Impuesto sobre la Renta de las Personas Físicas (IRPF).
[Información no disponible en el contexto fuente. Requiere datos externos para la simulación del calendario fiscal.]
Modelo 115
Retenciones e Ingresos a Cuenta del IRPF (Rentas de Arrendamiento)
(621) Arrendamientos y cánones<br>(4751) Hacienda Pública, acreedora por retenciones practicadas
Ingresar en Hacienda las cantidades retenidas en los pagos de alquileres de inmuebles urbanos afectos a la actividad económica.
[Información no disponible en el contexto fuente. Requiere datos externos para la simulación del calendario fiscal.]

Esta tabla de referencia es la base teórica; el siguiente banco de preguntas permitirá aplicar este conocimiento en escenarios prácticos dentro de la simulación.
--------------------------------------------------------------------------------
2. Banco de Preguntas para Gamificación
El siguiente banco de preguntas está diseñado para ser utilizado en el juego como desafíos o "misiones" que pondrán a prueba el conocimiento del jugador sobre la contabilidad fiscal. Las preguntas están estructuradas en tres niveles de dificultad creciente, abarcando desde la identificación básica de cuentas hasta el análisis de escenarios complejos basados en la lógica contable inherente al PGC.
2.1. Nivel Fácil: Identificación de Hechos Contables
El objetivo de este nivel es evaluar la capacidad del jugador para identificar la cuenta contable correcta asociada a una transacción fiscal común, un pilar fundamental para el registro adecuado de las operaciones.
Pregunta: Al realizar una venta, tu empresa cobra un 21% de IVA al cliente. Este IVA no es un ingreso tuyo, sino una deuda con Hacienda. ¿En qué cuenta registras esta obligación?
a) (472) Hacienda Pública, IVA soportado
b) (477) Hacienda Pública, IVA repercutido
c) (700) Ventas de mercaderías
Pregunta: Tu empresa adquiere material de oficina y el proveedor te cobra el IVA correspondiente en la factura. Este impuesto es un derecho de cobro (o compensación) frente a Hacienda. ¿En qué cuenta se registra?
a) (472) Hacienda Pública, IVA soportado
b) (602) Compras de otros aprovisionamientos
c) (4750) Hacienda Pública, acreedora por IVA
Pregunta: Al pagar la nómina de un empleado, le retienes un 12% a cuenta de su IRPF. Esta cantidad retenida representa una deuda con la Administración Pública que deberás ingresar más adelante. ¿Qué cuenta refleja esta deuda?
a) (640) Sueldos y salarios
b) (465) Remuneraciones pendientes de pago
c) (4751) Hacienda Pública, acreedora por retenciones practicadas
Pregunta: Tras realizar la liquidación periódica de IVA, resulta que has soportado más IVA del que has repercutido. Hacienda te debe devolver la diferencia. ¿En qué cuenta se registra este derecho de cobro?
a) (477) Hacienda Pública, IVA repercutido
b) (4700) Hacienda Pública, deudora por IVA
c) (4750) Hacienda Pública, acreedora por IVA
Pregunta: Tu negocio paga el alquiler mensual de su local. El gasto se registra en la cuenta (621) Arrendamientos y cánones. La retención de IRPF que practicas en esa factura, ¿en qué cuenta se contabiliza como una obligación?
a) (410) Acreedores por prestaciones de servicios
b) (473) Hacienda Pública, retenciones y pagos a cuenta
c) (4751) Hacienda Pública, acreedora por retenciones practicadas
Una vez dominada la identificación de las cuentas individuales, el siguiente nivel introduce la dimensión temporal del ciclo contable para entender cómo interactúan estas cuentas a lo largo del tiempo.
2.2. Nivel Medio: Lógica del Ciclo Contable
Dado que los plazos fiscales específicos no están definidos en el contexto fuente, este nivel se centra en un concepto temporal igualmente crucial: el ciclo contable. Las preguntas evalúan la comprensión del jugador sobre la diferencia fundamental entre las cuentas reales o de balance (Grupos 1-5), cuyo saldo es persistente, y las cuentas nominales o de gestión (Grupos 6-7), que se cierran al final de cada ciclo, y cómo interactúan al final de un ejercicio.
Pregunta: Las cuentas del Grupo 6 (Compras y Gastos) y Grupo 7 (Ventas e Ingresos) se denominan "nominales" o "de gestión". Según la lógica del PGC, ¿qué ocurre con el saldo de estas cuentas al final del ejercicio y qué papel juega la cuenta (129) Resultado del ejercicio en este proceso?
Análisis para el Motor de Juego: Al final del ejercicio, las cuentas de los Grupos 6 y 7 se "cierran" o "saladan". Esto significa que sus saldos se traspasan a la cuenta (129) Resultado del ejercicio. Esta cuenta, catalogada como P&L Accumulator, centraliza todos los ingresos y gastos del periodo, y su saldo final representa el beneficio o la pérdida de la empresa antes de impuestos.
Pregunta: Explica la diferencia fundamental en el comportamiento a lo largo del tiempo entre una cuenta del Grupo 2, como la (213) Maquinaria, y una cuenta del Grupo 6, como la (628) Suministros.
Análisis para el Motor de Juego: La cuenta (213) Maquinaria es una cuenta de balance (o "real"). Su saldo es persistente y se transfiere de un ejercicio contable al siguiente, representando un activo que la empresa posee a largo plazo. Por el contrario, la (628) Suministros es una cuenta de gestión (o "nominal") que registra un gasto. Su saldo se reinicia a cero al final de cada ejercicio, ya que su total se traslada al resultado del año a través de la cuenta (129).
Pregunta: Las cuentas del subgrupo (28) Amortización acumulada del inmovilizado tienen naturaleza acreedora, a pesar de estar en el Grupo 2 (Activo no Corriente), que es de naturaleza deudora. ¿Cuál es su función y por qué tienen esta naturaleza "contraria"?
Análisis para el Motor de Juego: Funcionan como cuentas "correctoras" de activo. Su propósito es registrar la depreciación o pérdida de valor sistemática de los activos a lo largo de su vida útil. Tienen naturaleza acreedora para que, al presentar el Balance de Situación, su saldo se reste al del activo correspondiente (p. ej., el saldo de la (281) se resta al de la (211)), mostrando así el valor neto contable del bien, que es una representación más fiel de su valor real.
Dominar la lógica del ciclo contable prepara al jugador para el desafío final: analizar y diagnosticar las consecuencias de los errores.
2.3. Nivel Difícil: Análisis de Casos de Error
Este nivel representa el desafío definitivo para el jugador. En lugar de centrarse en penalizaciones externas (no disponibles en la fuente), estos escenarios evalúan la capacidad del jugador para diagnosticar errores contables internos y predecir su impacto devastador en el 'stat sheet' de la empresa (los estados financieros), distorsionando la "imagen fiel" de su situación.
Escenario: Un jugador realiza correctamente el registro de todas sus compras y ventas del trimestre, incluyendo su IVA correspondiente en las cuentas (472) y (477). Sin embargo, al final del periodo, olvida ejecutar el asiento de "liquidación de IVA", que consiste en saldar ambas cuentas para determinar la deuda o el crédito con Hacienda.
Pregunta de Análisis: Evalúa el impacto de esta omisión en los estados financieros del jugador. Específicamente:
a) ¿Cómo afecta al Activo Corriente y al Pasivo Corriente del Balance de Situación?
b) ¿Por qué este error, aunque no afecta directamente a la Cuenta de Pérdidas y Ganancias, ofrece una imagen distorsionada de la liquidez y las obligaciones reales de la empresa?
Análisis para el Motor de Juego:
a) La omisión infla artificialmente tanto el Activo Corriente como el Pasivo Corriente. El saldo de la cuenta (472) Hacienda Pública, IVA soportado, permanece indebidamente como un activo, y el saldo de la (477) Hacienda Pública, IVA repercutido, permanece como un pasivo, cuando en realidad deberían haberse compensado.
b) Ofrece una imagen distorsionada porque muestra un derecho de cobro (472) y una obligación de pago (477) por sus importes brutos, en lugar de la obligación neta (en la cuenta (4750)) o el derecho neto (en la (4700)). Esto falsea los ratios de liquidez, una métrica clave para la supervivencia del jugador, y hace que la empresa parezca tener más activos y más deudas de los que realmente tiene una vez liquidado el impuesto.
Escenario: La empresa del jugador contrata a un profesional independiente para una reparación mayor de una de sus máquinas clave. El coste es significativo. Por error, en lugar de registrar la factura en la cuenta de gasto (622) Reparaciones y conservación, el jugador la registra como un aumento del valor del activo en la cuenta (213) Maquinaria.
Pregunta de Análisis: Analiza las consecuencias de este error de clasificación en los dos principales estados financieros del ejercicio.
a) ¿Cuál es el impacto en la Cuenta de Pérdidas y Ganancias y, por tanto, en el beneficio del ejercicio?
b) ¿Cómo afecta este error al valor total de los Activos No Corrientes y al Patrimonio Neto en el Balance de Situación?
Análisis para el Motor de Juego:
a) En la Cuenta de Pérdidas y Ganancias, el beneficio del ejercicio estará sobrevalorado. Al no registrar el gasto en la cuenta (622), el total de gastos de explotación es menor de lo que debería ser, lo que infla artificialmente el resultado (129).
b) En el Balance de Situación, el valor de los Activos No Corrientes está sobrevalorado porque se ha añadido un importe a la cuenta (213) Maquinaria que no correspondía a una mejora, sino a un gasto. Como consecuencia, el Patrimonio Neto también estará inflado, ya que recoge el beneficio erróneamente elevado del ejercicio. El error presenta una imagen falsa de una empresa más rentable, inflando artificialmente las 'stats' de rendimiento y valor del jugador.
--------------------------------------------------------------------------------
3. Glosario para el Desarrollador
Este glosario traduce conceptos contables clave a una terminología orientada a la ingeniería de software, facilitando la implementación del motor de juego.
Naturaleza (Deudora/Acreedora): Se implementa como el Balance Type de un objeto de cuenta. Es un atributo fundamental que dicta la lógica de las transacciones. Una cuenta con Balance Type: Deudora (ej. Activos, Gastos) aumenta su saldo con un débito y lo disminuye con un crédito. Una cuenta con Balance Type: Acreedora (ej. Pasivos, Patrimonio, Ingresos) funciona a la inversa. El motor debe validar cada transacción contra este atributo.
Cuentas Reales vs. Nominales: Esta es la distinción entre el estado persistente y el flujo temporal del juego.
Reales (Grupos 1-5): Son "Persistent State Variables". Sus saldos (activos, deudas, patrimonio) se conservan entre ciclos de juego (ejercicios contables), definiendo la situación patrimonial del jugador.
Nominales (Grupos 6 y 7): Son "Temporary Flow Variables". Registran los ingresos y gastos de un único ciclo. Al final del periodo, sus saldos se "vacían" y se consolidan en la cuenta (129) Resultado del ejercicio, reiniciándose a cero para el siguiente ciclo.
Asiento de Regularización: Corresponde al "End-of-Cycle Script" que el motor de juego debe ejecutar obligatoriamente para cerrar un periodo. Este script automatiza la secuencia de cierre: ajusta existencias, calcula amortizaciones, y lo más importante, transfiere los saldos de todas las "Temporary Flow Variables" (Grupos 6 y 7) a la "Persistent State Variable" que es la cuenta (129) Resultado del ejercicio, calculando así el beneficio o pérdida final del ciclo.
Copyright (c) 2026 Patricia Rocio Bustos Paco TODOS LOS DERECHOS RESERVADOS. Este software y toda la documentación asociada, incluyendo la estructura de datos del Plan General Contable (PGC) contenida en este repositorio, son propiedad exclusiva de Patricia Rocio Bustos Paco. Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier parte de este código o de su arquitectura de datos, por cualquier medio o procedimiento, sin la autorización previa, expresa y por escrito de la titular del copyright. El uso de este software se limita exclusivamente a fines de consulta y revisión dentro de la plataforma GitHub. El uso comercial o la implementación de esta estructura de datos en otros proyectos educativos o financieros está estrictamente prohibido. Registrado en Safe Creative.
Base de Datos Maestra para Simulación Contable
Introducción: Arquitectura de Datos para la Gamificación del PGC
Este informe técnico desglosa la arquitectura de datos del Plan General Contable (PGC) español, diseñada para servir como la base de datos maestra y el motor lógico de un juego educativo. El objetivo es modelar con precisión la ontología financiera del PGC, definiendo cada cuenta, su naturaleza contable, su destino en los estados financieros y, crucialmente, sus interacciones lógicas para simular el principio de partida doble de forma realista e instructiva. Este documento constituye un plano arquitectónico indispensable para el desarrollo del simulador, traduciendo la normativa contable en una especificación funcional para los desarrolladores.
Tabla Maestra del Plan de Cuentas
La siguiente tabla consolida la estructura del Plan de Cuentas, detallando los atributos esenciales de cada cuenta para su implementación en el motor de simulación.
Código y Nombre
Naturaleza (D/C)
Estado Financiero
Lógica de Simulación (Eventos y Contrapartidas)
## Grupo 1: FINANCIACIÓN BÁSICA






10. CAPITAL






 100 Capital social
Acreedora
Balance (PN)
Evento: Constitución o ampliación de capital. Asiento Principal: Crédito a (100) contra Débito a (572) Bancos (desembolsado) o (103) Socios por desembolsos no exigidos (pendiente). Efecto: Aumenta PN y Activo C (o PN).
 103 Socios por desembolsos no exigidos
Deudora
Balance (PN)
Evento: Desembolso de capital pendiente. Lógica: Cuenta transitoria que registra un derecho de cobro sobre los socios. Asiento de Cancelación: Crédito a (103) contra Débito a (572) Bancos. Efecto: Aumenta Activo C y disminuye el derecho de cobro en PN.
11. RESERVAS






 112 Reserva legal
Acreedora
Balance (PN)
Evento de Cierre: Aplicación del resultado. Disparador: Resultado del ejercicio (129) con saldo acreedor. Lógica: Recibe un traspaso obligatorio desde (129) por un porcentaje del beneficio. Asiento: Débito a (129) contra Crédito a (112). Efecto: Reclasificación dentro del PN.
 113 Reservas voluntarias
Acreedora
Balance (PN)
Evento de Cierre: Aplicación del resultado. Lógica: Acumula la parte del beneficio no distribuida ni asignada a otras reservas. Asiento: Débito a (129) contra Crédito a (113). Efecto: Reclasificación dentro del PN.
12. RESULTADOS PENDIENTES DE APLICACIÓN






 129 Resultado del ejercicio
Mixta
Balance (PN)
Evento: Cierre de ejercicio (Regularización). Lógica: Agregador final. Recibe el saldo neto de todas las cuentas de los Grupos 6 (Débito) y 7 (Crédito). Su saldo final determina el beneficio o pérdida. Nota de Juego: Indicador clave del rendimiento del jugador en el periodo. Un saldo deudor persistente debe activar advertencias.
13. SUBVENCIONES, DONACIONES Y AJUSTES






 130 Subvenciones oficiales de capital
Acreedora
Balance (PN)
Evento: Concesión de subvención. Asiento de Concesión: Crédito a (130) contra Débito a (572) Bancos. Disparador de Fin de Periodo: Imputación a resultados en proporción a la amortización del activo financiado. Asiento de Imputación: Débito a (130) contra Crédito a (746).
14. PROVISIONES






 141 Provisión para impuestos
Acreedora
Balance (Pasivo NC)
Evento: Estimación de obligación fiscal futura. Lógica: Cubre contingencias fiscales probables. Asiento de Dotación: Crédito a (141) contra Débito a (6300) Impuesto corriente. Efecto: Aumenta Pasivo NC y Gasto.
17. DEUDAS A L/P






 170 Deudas a l/p con entidades de crédito
Acreedora
Balance (Pasivo NC)
Evento: Obtención de préstamo. Asiento Principal: Crédito a (170) contra Débito a (572) Bancos. Disparador de Fin de Periodo: Reclasificar porción circulante a (520). Efecto: Aumenta Activo C y Pasivo NC.
## Grupo 2: ACTIVO NO CORRIENTE






20. INMOVILIZACIONES INTANGIBLES






 206 Aplicaciones informáticas
Deudora
Balance (Activo NC)
Evento: Adquisición de software. Asiento Principal: Débito a (206) y (472) contra Crédito a (523). Efecto: Aumenta Activo NC y Pasivo C. Lógica de Ciclo de Vida: Sujeta a amortización periódica (680) contra (280).
21. INMOVILIZACIONES MATERIALES






 211 Construcciones
Deudora
Balance (Activo NC)
Evento: Adquisición o finalización de obra. Asiento Principal: Débito a (211) y (472) contra Crédito a (523) o (173). Efecto: Aumenta Activo NC y Pasivo. Lógica de Ciclo de Vida: Se amortiza anualmente (681) contra (2811).
 213 Maquinaria
Deudora
Balance (Activo NC)
Evento: Adquisición de activo. Asiento Principal: Débito a (213) y (472) contra Crédito a (523) o (173). Efecto: Aumenta Activo NC y Pasivo. Lógica de Ciclo de Vida: Se amortiza anualmente (681) contra (2813).
 218 Elementos de transporte
Deudora
Balance (Activo NC)
Evento: Adquisición de vehículo. Asiento Principal: Débito a (218) y (472) contra Crédito a (523) o (173). Efecto: Aumenta Activo NC y Pasivo. Lógica de Ciclo de Vida: Se amortiza anualmente (681) contra (2818).
28. AMORTIZACIÓN ACUMULADA






 281 Amortización Acumulada del Inmovilizado Material
Acreedora
Balance (Activo NC -)
Evento de Cierre: Dotación periódica. Lógica: Cuenta correctora que acumula la depreciación de activos. Asiento Principal: Crédito a (281) contra Débito a (681) Amortización del inmovilizado material. Efecto: Disminuye el valor neto del Activo NC y aumenta el Gasto.
29. DETERIORO DE VALOR DEL INMOVILIZADO






 291 Deterioro de valor del inmovilizado material
Acreedora
Balance (Activo NC -)
Evento: Test de deterioro negativo. Lógica: Cuenta correctora para pérdidas de valor no sistemáticas. Asiento Principal: Crédito a (291) contra Débito a (691) Pérdidas por deterioro. Efecto: Disminuye el valor neto del Activo NC y aumenta el Gasto.
## Grupo 3: EXISTENCIAS






30. COMERCIALES






 300 Mercaderías
Deudora
Balance (Activo C)
Evento de Cierre: Regularización de inventario. Lógica: Su saldo refleja el valor final del inventario. Se ajusta mediante (610) Variación de existencias. Asiento: Cargo a (300) por existencias finales y Abono a (610); Abono a (300) por existencias iniciales y Cargo a (610).
## Grupo 4: ACREEDORES Y DEUDORES






40. PROVEEDORES






 400 Proveedores
Acreedora
Balance (Pasivo C)
Evento: Compra a crédito. Asiento Principal: Crédito a (400) contra Débito a (600) Compras y (472) IVA Soportado. Evento de Liquidación: Pago a proveedor. Asiento: Débito a (400) contra Crédito a (572).
43. CLIENTES






 430 Clientes
Deudora
Balance (Activo C)
Evento: Venta a crédito. Asiento Principal: Débito a (430) contra Crédito a (700) Ventas y (477) IVA Repercutido. Evento de Liquidación: Cobro de cliente. Asiento: Crédito a (430) contra Débito a (572).
47. ADMINISTRACIONES PÚBLICAS






  472 Hacienda Pública, IVA soportado
Deudora
Balance (Activo C)
Evento: Compra de bien/servicio. Lógica: Acumula el IVA deducible de las compras (Grupo 6). Efecto: Aumenta el activo corriente. Su saldo se compensa en la liquidación de IVA.
  477 Hacienda Pública, IVA repercutido
Acreedora
Balance (Pasivo C)
Evento: Venta de bien/servicio. Lógica: Acumula el IVA recaudado de las ventas (Grupo 7). Efecto: Aumenta el pasivo corriente. Disparador: Liquidación de IVA trimestral. Asiento: Débito a (477) y Crédito a (472), con el neto a (4750) o (4700).
49. DETERIORO DE VALOR DE CRÉDITOS COMERCIALES






 490 Deterioro valor créditos por oper. comer.
Acreedora
Balance (Activo C -)
Evento: Estimación de impago de cliente. Lógica: Cuenta correctora para clientes de dudoso cobro. Asiento de Dotación: Crédito a (490) contra Débito a (694) Pérdidas por deterioro. Efecto: Disminuye el valor neto del Activo C y aumenta el Gasto.
## Grupo 5: CUENTAS FINANCIERAS






52. DEUDAS A C/P






 520 Deudas a c/p con entidades de crédito
Acreedora
Balance (Pasivo C)
Evento: Reclasificación de deuda a L/P. Asiento Principal: Débito a (170) contra Crédito a (520). Evento de Liquidación: Amortización de principal. Asiento: Débito a (520) contra Crédito a (572).
57. TESORERÍA






 572 Bancos e instituciones de crédito c/c vista, euros
Deudora
Balance (Activo C)
Lógica: Sumidero y fuente de liquidez. Estado final para la mayoría de flujos de caja. Disparadores: Eventos de cobro de (430) Clientes, pagos a (400) Proveedores, aportaciones de capital (100), obtención de préstamos (170), pago de nóminas (465), etc.
## Grupo 6: COMPRAS Y GASTOS






60. COMPRAS






 600 Compras de mercaderías
Deudora
P&G
Evento: Compra de existencias. Asiento Principal: Débito a (600) y (472) H.P., IVA soportado, contra Crédito a (400) Proveedores o (572) Bancos. Efecto: Aumenta Gasto y Pasivo/disminuye Activo.
62. SERVICIOS EXTERIORES






 621 Arrendamientos y cánones
Deudora
P&G
Evento: Pago de alquiler periódico. Asiento Principal: Débito a (621) y (472) contra Crédito a (410) Acreedores o (572) Bancos. Efecto: Aumenta Gasto. Introduce un coste fijo recurrente en el modelo de negocio del jugador.
 627 Publicidad, propaganda y rel. públicas
Deudora
P&G
Evento: Contratación de campaña de marketing. Asiento Principal: Débito a (627) y (472) contra Crédito a (410) o (572). Efecto: Aumenta Gasto. Representa una inversión variable para impulsar ventas.
 628 Suministros
Deudora
P&G
Evento: Recepción de factura de luz/agua. Asiento Principal: Débito a (628) y (472) contra Crédito a (410) Acreedores por prest. de servicios. Efecto: Aumenta Gasto y Pasivo C.
64. GASTOS DE PERSONAL






 640 Sueldos y salarios
Deudora
P&G
Evento: Devengo de nómina mensual. Asiento Principal: Débito a (640) y (642) contra Crédito a (476) Org. Seg. Social, (4751) H.P. acreedora por retenciones y (465) Remuneraciones pend. de pago. Efecto: Aumenta Gasto y Pasivo C.
68. DOTACIONES PARA AMORTIZACIONES






 681 Amortización del inmovilizado material
Deudora
P&G
Evento de Cierre: Registro de depreciación anual. Lógica: Gasto no monetario que refleja el consumo de activos fijos. Asiento Principal: Débito a (681) contra Crédito a (281) Amortización Acumulada. Efecto: Aumenta Gasto y disminuye valor neto de Activo NC.
## Grupo 7: VENTAS E INGRESOS






70. VENTAS






 700 Ventas de mercaderías
Acreedora
P&G
Evento: Venta de producto. Asiento Principal: Crédito a (700) y (477) H.P., IVA repercutido, contra Débito a (430) Clientes o (572) Bancos. Efecto: Aumenta Ingreso y Activo C.
 705 Prestaciones de servicios
Acreedora
P&G
Evento: Finalización y facturación de un servicio. Asiento Principal: Crédito a (705) y (477) contra Débito a (430) o (572). Efecto: Aumenta Ingreso. Permite modelar negocios de servicios.
 708 Devoluciones de ventas y operaciones similares
Deudora
P&G
Evento: Cliente devuelve producto. Lógica: Cuenta correctora de ingresos. Asiento Principal: Débito a (708) y (477), contra Crédito a (430) o (572). Efecto: Disminuye el ingreso neto y el Activo C.
 709 "Rappels" sobre ventas
Deudora
P&G
Evento: Concesión de descuento por volumen a cliente. Lógica: Cuenta correctora de ingresos. Asiento Principal: Débito a (709) contra Crédito a (430). Efecto: Disminuye el ingreso neto y el Activo C.
75. OTROS INGRESOS DE GESTIÓN






 752 Ingresos por arrendamientos
Acreedora
P&G
Evento: Cobro de alquiler de un activo. Asiento Principal: Crédito a (752) y (477) contra Débito a (440) Deudores o (572) Bancos. Efecto: Aumenta Ingreso y Activo C.
76. INGRESOS FINANCIEROS






 762 Ingresos de créditos
Acreedora
P&G
Evento: Devengo de intereses de un préstamo concedido. Asiento Principal: Crédito a (762) contra Débito a (547) Intereses a c/p de créditos o (572) Bancos. Efecto: Aumenta Ingreso y Activo C.
## Grupos 8 y 9: GASTOS E INGRESOS IMPUTADOS AL PATRIMONIO NETO






80. GASTOS FINANCIEROS POR VALORACIÓN






 800 Pérdidas de activos financieros a valor razonable con cambios en el patrimonio neto.
Deudora
ECPN
Lógica (PGC Normal): Registra pérdidas de valor no realizadas en ciertos activos financieros. Asiento Principal: Débito a (800) contra Crédito a la cuenta de activo correspondiente. Evento de Cierre: Su saldo se traspasa a una cuenta del subgrupo (13).
90. INGRESOS FINANCIEROS POR VALORACIÓN






 900 Beneficios en activos financieros a valor razonable con cambios en el patrimonio neto.
Acreedora
ECPN
Lógica (PGC Normal): Registra ganancias de valor no realizadas. Asiento Principal: Crédito a (900) contra Débito a la cuenta de activo correspondiente. Evento de Cierre: Su saldo se traspasa a (133) Ajustes por valoración.

Esta estructura de datos, que modela fielmente la taxonomía y las relaciones del Plan General Contable, proporciona una base sólida y precisa para el desarrollo del motor de simulación contable.

Copyright (c) 2026 Patricia Rocio Bustos Paco TODOS LOS DERECHOS RESERVADOS. Este software y toda la documentación asociada, incluyendo la estructura de datos del Plan General Contable (PGC) contenida en este repositorio, son propiedad exclusiva de Patricia Rocio Bustos Paco. Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier parte de este código o de su arquitectura de datos, por cualquier medio o procedimiento, sin la autorización previa, expresa y por escrito de la titular del copyright. El uso de este software se limita exclusivamente a fines de consulta y revisión dentro de la plataforma GitHub. El uso comercial o la implementación de esta estructura de datos en otros proyectos educativos o financieros está estrictamente prohibido. Registrado en Safe Creative.
Obligaciones Fiscales y Contables para PYMES en España (Ejercicio 2024-2025)
Introducción: El Ecosistema Fiscal y Contable de la PYME
Este informe técnico establece la arquitectura fiscal y contable de referencia para el desarrollo de un simulador educativo de gestión de PYMES en España. El cumplimiento normativo de una PYME es un proceso cíclico y riguroso que integra dos marcos fundamentales: el Plan General de Contabilidad (PGC), que establece las normas para el registro y valoración de todas las operaciones económicas, y la normativa de la Agencia Estatal de Administración Tributaria (AEAT), que dicta los procedimientos para la liquidación de impuestos. Este documento desglosa las principales obligaciones fiscales, sus plazos de presentación y su inseparable reflejo contable, basándose exclusivamente en la normativa oficial. A continuación, se procederá a clasificar los distintos tipos de impuestos para establecer un marco conceptual claro.
--------------------------------------------------------------------------------
1. Clasificación de las Obligaciones Fiscales
La clasificación de los impuestos no es un mero ejercicio académico; es una necesidad estratégica para cualquier PYME. Entender si un impuesto es directo, indirecto o puramente informativo permite a la dirección planificar la tesorería, anticipar la carga fiscal real sobre sus beneficios y comprender el flujo de información que se comparte con la Administración Pública. Esta distinción es fundamental, pues impacta directamente en la modelización del flujo de caja (IVA), el cálculo de la rentabilidad neta (Sociedades) y la gestión de las relaciones con el capital humano y los proveedores (retenciones del IRPF). Esta sección provee un marco conceptual para las obligaciones que se detallarán posteriormente.
1.1. Impuestos Indirectos (El IVA)
Un impuesto indirecto es aquel que grava el consumo de bienes y servicios, no la riqueza o renta de la persona. El ejemplo principal para una PYME es el Impuesto sobre el Valor Añadido (IVA). En este sistema, la empresa no soporta el coste final del impuesto, sino que actúa como un intermediario recaudador para la Hacienda Pública. Liquida periódicamente la diferencia entre el IVA que repercute a sus clientes en las ventas y el IVA que soporta al adquirir bienes y servicios de sus proveedores.
1.2. Impuestos Directos (IRPF y Sociedades)
Un impuesto directo grava la obtención de renta, beneficios o patrimonio. Para una PYME, las principales obligaciones de este tipo se dividen en dos categorías bien diferenciadas:
Retenciones a cuenta del IRPF: Son pagos que la PYME realiza a Hacienda en nombre de terceros. Al pagar nóminas a sus trabajadores, facturas a profesionales independientes o el alquiler de sus oficinas, la empresa "retiene" una parte de dicho pago y la ingresa en la AEAT como un adelanto del Impuesto sobre la Renta de las Personas Físicas (IRPF) de dichos perceptores.
Impuesto sobre Sociedades: Es el tributo que grava el beneficio neto obtenido por la propia sociedad al final de su ejercicio fiscal. A diferencia de las retenciones, este impuesto recae directamente sobre la renta generada por la actividad de la empresa.
1.3. Declaraciones Informativas
Las declaraciones informativas no implican el pago de un impuesto. Su propósito es exclusivamente proporcionar a la AEAT datos detallados sobre operaciones económicas con terceros (clientes, proveedores, empleados, arrendadores, etc.). Esta información es crucial para que la Administración pueda cruzar datos y verificar que todas las partes implicadas en una transacción están cumpliendo correctamente con sus respectivas obligaciones tributarias.
Comprendida esta clasificación teórica, es posible analizar cómo estas obligaciones se materializan en la práctica a lo largo de un año natural.
--------------------------------------------------------------------------------
2. El Calendario Fiscal Anual de una PYME
El calendario fiscal es la hoja de ruta que guía el cumplimiento tributario de una PYME. Lejos de ser eventos aislados, las obligaciones fiscales constituyen un ciclo recurrente de liquidaciones periódicas (generalmente trimestrales) que culminan en la presentación de resúmenes anuales que consolidan la información de todo el ejercicio. Este cronograma impone un ritmo operativo a la PYME, marcado por picos de trabajo administrativo en los cierres trimestrales (abril, julio, octubre) y una fase intensiva de consolidación y planificación al inicio del año (enero-febrero). La siguiente sección simula el cronograma de un año fiscal estándar, destacando los plazos críticos que toda empresa debe respetar.
2.1. Obligaciones Trimestrales
Primer Trimestre (Enero-Marzo): Plazo de presentación del 1 al 20 de abril.
Modelo 303: Autoliquidación trimestral de IVA.
Modelo 111: Liquidación de retenciones a cuenta del IRPF de trabajadores y profesionales.
Modelo 115: Liquidación de retenciones a cuenta del IRPF sobre alquileres.
Modelo 202: Primer pago fraccionado a cuenta del Impuesto sobre Sociedades.
Segundo Trimestre (Abril-Junio): Plazo de presentación del 1 al 20 de julio.
Presentación de las liquidaciones periódicas: Modelo 303, 111 y 115.
Tercer Trimestre (Julio-Septiembre): Plazo de presentación del 1 al 20 de octubre.
Presentación de las liquidaciones periódicas: Modelo 303, 111 y 115.
Modelo 202: Segundo pago fraccionado del Impuesto sobre Sociedades.
Cuarto Trimestre (Octubre-Diciembre):
Modelo 202: Tercer y último pago fraccionado del Impuesto sobre Sociedades. El plazo de presentación es del 1 al 20 de diciembre.
Las liquidaciones trimestrales correspondientes a este periodo (Modelos 303, 111 y 115) se presentan en el mes de enero del año siguiente, junto con los resúmenes anuales.
Nótese que los plazos del Modelo 202 (abril, octubre, diciembre) no coinciden con los del resto de liquidaciones trimestrales. Esto se debe a que su cálculo se basa en el resultado del ejercicio anterior, siguiendo una pauta específica para los pagos a cuenta del Impuesto sobre Sociedades.
2.2. Cierre del Ejercicio y Obligaciones Anuales
Una vez finalizado el año natural el 31 de diciembre, la PYME debe preparar y presentar una serie de declaraciones que consolidan toda la información fiscal del ejercicio.
Enero: Presentación de las liquidaciones del 4º Trimestre y los resúmenes anuales correspondientes.
Modelos 303, 111, 115: Liquidaciones correspondientes al 4º Trimestre. El plazo para el Modelo 303 se extiende hasta el 30 de enero.
Modelo 390: Resumen anual de IVA, que consolida todas las operaciones declaradas en los Modelos 303 del año.
Modelo 180: Resumen anual de retenciones de alquileres, consolidando la información de los Modelos 115.
Febrero: Presentación de resúmenes informativos clave.
Modelo 190: Resumen anual de retenciones a trabajadores y profesionales, consolidando los Modelos 111. El plazo es del 1 de enero al 2 de febrero.
Modelo 347: Declaración anual de operaciones con terceras personas.
Julio: Cierre del ciclo del Impuesto sobre Sociedades.
Modelo 200: Declaración anual del Impuesto sobre Sociedades, donde se liquida el impuesto definitivo sobre los beneficios. El plazo es del 1 al 25 de julio para empresas cuyo ejercicio fiscal coincide con el año natural.
Para facilitar la consulta y la programación de una herramienta educativa, es fundamental disponer de una tabla consolidada que relacione cada modelo con su propósito, periodicidad y, crucialmente, su registro contable.
--------------------------------------------------------------------------------
3. Tabla Maestra de Referencia Fiscal para PYMES
La siguiente tabla constituye el núcleo de este informe técnico. Ha sido diseñada para servir como una referencia rápida y precisa para el motor del juego educativo, consolidando cada obligación fiscal, su propósito, la periodicidad, las fechas clave y su anclaje en el Plan General de Contabilidad.
Modelo
Descripción
Cuentas Contables Implicadas
Periodicidad
Fechas Clave
Impuesto sobre el Valor Añadido (IVA)








303
Autoliquidación trimestral del IVA. Liquida la diferencia entre el IVA repercutido en ventas y el soportado en compras.
(477) HP, IVA repercutido, (472) HP, IVA soportado, (4750) HP, acreedora por IVA, (4700) HP, deudora por IVA, (572) Bancos.
Trimestral
1-20 de abril, julio y octubre. <br> 1-30 de enero para el 4º Trimestre.
390
Declaración informativa de resumen anual de todas las operaciones relativas a la liquidación del IVA presentadas en el Modelo 303.
N/A (Consolida la información de las cuentas utilizadas en el Modelo 303).
Anual
Durante el mes de enero del año siguiente.
Retenciones a Cuenta del IRPF








111
Autoliquidación trimestral de las retenciones del IRPF practicadas sobre rendimientos del trabajo (nóminas) y de actividades económicas (facturas de profesionales).
Generación de la obligación: (640) Sueldos y salarios, (623) Servicios de profesionales independientes. <br> Liquidación: (4751) HP, acreedora por retenciones practicadas, (572) Bancos.
Trimestral
1-20 de abril, julio, octubre y enero.
115
Autoliquidación trimestral de las retenciones del IRPF sobre rendimientos procedentes del arrendamiento de inmuebles urbanos (ej. alquiler de oficinas o locales).
Generación de la obligación: (621) Arrendamientos y cánones. <br> Liquidación: (4751) HP, acreedora por retenciones practicadas, (572) Bancos.
Trimestral
1-20 de abril, julio, octubre y enero.
Impuesto sobre Sociedades








202
Pago fraccionado a cuenta del Impuesto sobre Sociedades. Es un adelanto del impuesto anual calculado sobre los beneficios del ejercicio en curso.
(473) HP, retenciones y pagos a cuenta, (572) Bancos. En caso de aplazamiento: (4752) HP, acreedora por Imp. Sociedades.
Trimestral (3 pagos)
1-20 de abril, octubre y diciembre.
200
Declaración anual del Impuesto sobre Sociedades. Liquida el impuesto definitivo sobre los beneficios obtenidos por la empresa durante el ejercicio fiscal.
(6300) Impuesto corriente, (4752) HP, acreedora por Imp. Sociedades, (473) HP, retenciones y pagos a cuenta, (4709) HP, deudora por devolución de impuestos, (4745) Crédito por pérdidas a compensar.
Anual
1-25 de julio (para ejercicios que coinciden con el año natural).
Declaraciones Informativas Anuales








190
Resumen anual de las retenciones del IRPF (Modelo 111). Se identifica a cada perceptor (trabajador o profesional) y el total de las retenciones practicadas.
N/A (Consolida la información de las cuentas utilizadas en el Modelo 111).
Anual
Del 1 de enero al 2 de febrero del año siguiente.
180
Resumen anual de las retenciones sobre alquileres (Modelo 115). Se identifica a cada arrendador y el total de las retenciones practicadas.
N/A (Consolida la información de las cuentas utilizadas en el Modelo 115).
Anual
Durante el mes de enero del año siguiente.
347
Declaración anual de operaciones con terceras personas (clientes o proveedores) cuyo importe total durante el año natural haya superado los 3.005,06 euros.
N/A (Modelo informativo para cruce de datos).
Anual
Durante el mes de febrero del año siguiente.

--------------------------------------------------------------------------------
4. Análisis Contable de las Operaciones Fiscales Clave
Más allá de conocer los modelos y sus plazos, el núcleo del aprendizaje contable reside en comprender cómo se registran estas obligaciones en los libros de la empresa. Cada modelo tributario liquidado no es un mero trámite administrativo, sino un hecho contable que exige un registro preciso y sistemático conforme al PGC. Esta sección analizará la mecánica contable de las dos liquidaciones más significativas para una PYME: el IVA y el Impuesto sobre Sociedades.
4.1. La Mecánica de la Liquidación del IVA (Modelo 303)
El proceso contable para la liquidación trimestral del IVA sigue una secuencia lógica y estandarizada:
Cierre de Cuentas de IVA: Al final de cada trimestre, se procede a saldar las cuentas que han acumulado el IVA de las operaciones: la cuenta (477) HP, IVA repercutido (que recoge el IVA de las ventas) y la cuenta (472) HP, IVA soportado (que recoge el IVA deducible de las compras y gastos).
Determinación del Resultado: Se comparan los saldos de ambas cuentas para determinar la posición de la empresa frente a Hacienda, dando lugar a dos posibles escenarios:
IVA a Pagar: Si el saldo de la cuenta (477) es mayor que el de la (472), la empresa ha recaudado más IVA del que ha soportado. La diferencia se abona en la cuenta (4750) HP, acreedora por IVA, reflejando una deuda con la Administración.
IVA a Devolver o Compensar: Si el saldo de la cuenta (472) es mayor que el de la (477), la empresa ha soportado más IVA del que ha repercutido. La diferencia se carga en la cuenta (4700) HP, deudora por IVA, reflejando un crédito a favor de la empresa que podrá solicitar en devolución o compensar en futuras liquidaciones. En ambos casos, el asiento de liquidación vacía por completo las cuentas (477) y (472), dejando el resultado neto del trimestre perfectamente periodificado en una única cuenta de balance (la 4750 o la 4700), listo para su liquidación o compensación.
Registro del Pago: En el caso de una liquidación a pagar, el asiento contable final se realiza en el momento del pago a Hacienda. Este asiento cancela la deuda registrada en la cuenta (4750) contra una cuenta de tesorería, típicamente la (572) Bancos.
4.2. La Contabilización del Impuesto sobre Sociedades (Modelo 200)
El registro contable del Impuesto sobre Sociedades se realiza al cierre del ejercicio, una vez conocido el resultado contable del año.
Cálculo del Gasto: Tras determinar el beneficio contable antes de impuestos y aplicar los ajustes fiscales pertinentes, se calcula la cuota íntegra del impuesto. Este importe se registra como un gasto del ejercicio en la cuenta (6300) Impuesto corriente.
Registro de la Deuda: La contrapartida de este gasto es el reconocimiento de una deuda con Hacienda. Este pasivo se registra en la cuenta (4752) HP, acreedora por impuesto sobre sociedades.
Aplicación de Pagos a Cuenta: A lo largo del año, la empresa ha realizado pagos fraccionados (Modelo 202) que se han ido acumulando en la cuenta (473) HP, retenciones y pagos a cuenta. El saldo de esta cuenta se utiliza para disminuir la deuda final registrada en la cuenta (4752), reflejando los adelantos que ya han sido satisfechos.
Asiento de Liquidación: El asiento contable, a 31 de diciembre, que consolida la operación es el siguiente (suponiendo un gasto por impuesto de 2.000 € y pagos a cuenta acumulados de 1.080 €):
Debe
Haber
(6300) Impuesto corriente 2.000 €




(473) HP, retenciones y pagos a cuenta 1.080 €


(4752) HP, acreedora por Imp. Sociedades 920 €

Este único asiento refleja el gasto total del ejercicio, cancela el activo que representaban los adelantos, y reconoce la deuda neta pendiente de liquidar en julio del año siguiente.
En definitiva, cada obligación fiscal genera una transacción contable precisa, demostrando la interconexión inseparable que existe entre la disciplina fiscal y la contable.
--------------------------------------------------------------------------------
5. Conclusión
Este informe técnico demuestra que el cumplimiento fiscal de una PYME en España es un sistema estructurado y predecible, articulado en torno a un calendario de obligaciones periódicas, liquidatorias e informativas. La correcta gestión de este sistema depende de forma crítica de un registro contable riguroso, ejecutado conforme a las directrices del Plan General de Contabilidad. Como se ha detallado, cada modelo tributario presentado a la AEAT tiene un reflejo directo y específico en las cuentas de la empresa, vinculando de manera inseparable la salud financiera con el cumplimiento normativo. En consecuencia, este documento constituye el blueprint técnico indispensable, proveyendo la arquitectura de datos y la lógica de negocio requeridas para construir un motor de simulación fiscal y contable riguroso, preciso y de alto valor formativo.


