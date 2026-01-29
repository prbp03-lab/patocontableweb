import json
import re

# Load the quiz data
with open('c:/Users/Toni/Desktop/pcweb/src/jepgc/data/quiz_engine.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Hint generation functions based on question patterns
def generate_hint_for_question(question):
    """Generate subtle hints based on question content"""
    q_id = question['id']
    text = question['text']
    
    # Extract account code if present
    account_match = re.search(r'\((\d+)\)', text)
    account_code = account_match.group(1) if account_match else None
    
    hints = {
        'hint': '',
        'hintCA': ''
    }
    
    # Level 1 (Junior) - Basic concepts
    if q_id.startswith('f') or q_id.startswith('n') or q_id.startswith('q'):
        if 'grupo' in text.lower() or 'pertenece' in text.lower():
            if account_code:
                first_digit = account_code[0]
                hints['hint'] = f"El primer dígito del código contable indica el grupo. ¿Qué representa el número {first_digit} en el PGC?"
                hints['hintCA'] = f"El primer dígit del codi comptable indica el grup. Què representa el número {first_digit} al PGC?"
            else:
                hints['hint'] = "Observa el código de la cuenta. El primer dígito te indica el grupo al que pertenece."
                hints['hintCA'] = "Observa el codi del compte. El primer dígit t'indica el grup al qual pertany."
        
        elif 'naturaleza' in text.lower():
            if 'proveedores' in text.lower() or 'acreedores' in text.lower():
                hints['hint'] = "Cuando compras a crédito, ¿aumenta tu obligación de pago? Piensa en qué lado del asiento se refleja."
                hints['hintCA'] = "Quan compres a crèdit, augmenta la teva obligació de pagament? Pensa en quin costat de l'assentament es reflecteix."
            elif 'clientes' in text.lower() or 'deudores' in text.lower():
                hints['hint'] = "¿Los clientes te deben dinero o tú les debes a ellos? Los derechos de cobro tienen una naturaleza específica."
                hints['hintCA'] = "Els clients et deuen diners o tu els deus a ells? Els drets de cobrament tenen una naturalesa específica."
            elif 'gasto' in text.lower() or 'sueldo' in text.lower() or 'suministro' in text.lower():
                hints['hint'] = "Las cuentas de gasto pertenecen al Grupo 6. ¿Cómo se comportan estas cuentas?"
                hints['hintCA'] = "Els comptes de despesa pertanyen al Grup 6. Com es comporten aquests comptes?"
            else:
                hints['hint'] = "Piensa si esta cuenta representa algo que tienes (activo), algo que debes (pasivo) o un gasto/ingreso."
                hints['hintCA'] = "Pensa si aquest compte representa alguna cosa que tens (actiu), alguna cosa que deus (passiu) o una despesa/ingrés."
        
        elif 'pérdidas y ganancias' in text.lower() or 'pyg' in text.lower():
            hints['hint'] = "Observa los códigos: ¿cuál empieza por 6 o 7? Esos grupos tienen algo especial."
            hints['hintCA'] = "Observa els codis: quin comença per 6 o 7? Aquests grups tenen alguna cosa especial."
        
        elif 'líquido' in text.lower() or 'liquidez' in text.lower():
            hints['hint'] = "¿Cuál de estos elementos no necesita ninguna transformación para ser utilizado como medio de pago?"
            hints['hintCA'] = "Quin d'aquests elements no necessita cap transformació per ser utilitzat com a mitjà de pagament?"
        
        elif 'iva repercutido' in text.lower():
            hints['hint'] = "Piensa: ¿tú pagas este IVA o lo cobras? La cuenta 472 y 477 tienen funciones opuestas."
            hints['hintCA'] = "Pensa: tu pagues aquest IVA o el cobres? El compte 472 i 477 tenen funcions oposades."
        
        elif 'iva soportado' in text.lower():
            hints['hint'] = "El IVA que tú pagas en tus compras es un derecho frente a Hacienda. ¿Qué cuenta lo refleja?"
            hints['hintCA'] = "L'IVA que tu pagues en les teves compres és un dret davant d'Hisenda. Quin compte ho reflecteix?"
        
        elif 'amortización acumulada' in text.lower():
            hints['hint'] = "Esta cuenta no aumenta el valor del activo, sino que lo corrige. ¿En qué sentido?"
            hints['hintCA'] = "Aquest compte no augmenta el valor de l'actiu, sinó que el corregeix. En quin sentit?"
        
        elif 'balance' in text.lower() and 'patrimonio' in text.lower():
            hints['hint'] = "Las reservas forman parte de los fondos propios de la empresa. ¿Dónde se clasifican?"
            hints['hintCA'] = "Les reserves formen part dels fons propis de l'empresa. On es classifiquen?"
        
        elif 'largo plazo' in text.lower() or 'l/p' in text.lower():
            hints['hint'] = "¿El plazo de vencimiento es superior o inferior a un año? Esto determina el grupo."
            hints['hintCA'] = "El termini de venciment és superior o inferior a un any? Això determina el grup."
        
        else:
            # More specific hints based on account code and question content
            if account_code:
                first_digit = account_code[0]
                
                # Group-specific hints
                if first_digit == '1':
                    hints['hint'] = "El Grupo 1 contiene cuentas de financiación básica y patrimonio neto. ¿Qué tipo de cuenta es esta?"
                    hints['hintCA'] = "El Grup 1 conté comptes de finançament bàsic i patrimoni net. Quin tipus de compte és aquest?"
                elif first_digit == '2':
                    hints['hint'] = "El Grupo 2 incluye activos no corrientes (inmovilizado). ¿Esta cuenta representa un bien duradero?"
                    hints['hintCA'] = "El Grup 2 inclou actius no corrents (immobilitzat). Aquest compte representa un bé durador?"
                elif first_digit == '3':
                    hints['hint'] = "El Grupo 3 contiene existencias. ¿Esta cuenta representa bienes destinados a la venta?"
                    hints['hintCA'] = "El Grup 3 conté existències. Aquest compte representa béns destinats a la venda?"
                elif first_digit == '4':
                    hints['hint'] = "El Grupo 4 incluye acreedores y deudores. ¿Esta cuenta representa un derecho u obligación a corto plazo?"
                    hints['hintCA'] = "El Grup 4 inclou creditors i deutors. Aquest compte representa un dret o obligació a curt termini?"
                elif first_digit == '5':
                    hints['hint'] = "El Grupo 5 contiene cuentas financieras. ¿Esta cuenta representa dinero o deudas a corto plazo?"
                    hints['hintCA'] = "El Grup 5 conté comptes financers. Aquest compte representa diners o deutes a curt termini?"
                elif first_digit == '6':
                    hints['hint'] = "El Grupo 6 incluye compras y gastos. ¿Esta cuenta reduce el beneficio de la empresa?"
                    hints['hintCA'] = "El Grup 6 inclou compres i despeses. Aquest compte redueix el benefici de l'empresa?"
                elif first_digit == '7':
                    hints['hint'] = "El Grupo 7 contiene ventas e ingresos. ¿Esta cuenta aumenta el beneficio de la empresa?"
                    hints['hintCA'] = "El Grup 7 conté vendes i ingressos. Aquest compte augmenta el benefici de l'empresa?"
                else:
                    hints['hint'] = "Observa el primer dígito del código contable. Cada grupo tiene una función específica en el PGC."
                    hints['hintCA'] = "Observa el primer dígit del codi comptable. Cada grup té una funció específica al PGC."
            elif 'representa' in text.lower() or 'qué es' in text.lower():
                hints['hint'] = "Piensa en la naturaleza económica de esta cuenta: ¿es un bien, un derecho, una obligación, un gasto o un ingreso?"
                hints['hintCA'] = "Pensa en la naturalesa econòmica d'aquest compte: és un bé, un dret, una obligació, una despesa o un ingrés?"
            elif 'clasifica' in text.lower() or 'dónde' in text.lower():
                hints['hint'] = "Analiza las características de la cuenta. ¿Es algo que la empresa posee, debe, gasta o ingresa?"
                hints['hintCA'] = "Analitza les característiques del compte. És alguna cosa que l'empresa posseeix, deu, gasta o ingressa?"
            else:
                # Last resort generic hint
                hints['hint'] = "Revisa la estructura básica del PGC y la función de cada grupo contable."
                hints['hintCA'] = "Revisa l'estructura bàsica del PGC i la funció de cada grup comptable."
    
    # Level 2 (Senior) - Accounting dynamics
    elif q_id.startswith('m') or q_id.startswith('o'):
        if 'cobra' in text.lower() or 'cobro' in text.lower():
            if 'banco' in text.lower():
                hints['hint'] = "¿Entra o sale dinero del banco? Recuerda la regla básica de las cuentas de activo."
                hints['hintCA'] = "Entra o surt diners del banc? Recorda la regla bàsica dels comptes d'actiu."
            elif 'cliente' in text.lower():
                hints['hint'] = "Al cobrar, ¿se cancela o se crea un derecho de cobro? ¿Qué movimiento implica esto?"
                hints['hintCA'] = "En cobrar, es cancel·la o es crea un dret de cobrament? Quin moviment implica això?"
        
        elif 'venta a crédito' in text.lower():
            hints['hint'] = "¿Se crea o se cancela un derecho de cobro? ¿Qué tipo de cuenta es Clientes?"
            hints['hintCA'] = "Es crea o es cancel·la un dret de cobrament? Quin tipus de compte és Clients?"
        
        elif 'compra' in text.lower() and 'proveedor' in text.lower():
            hints['hint'] = "¿La obligación de pago aumenta o disminuye? Piensa en la naturaleza de esta cuenta."
            hints['hintCA'] = "L'obligació de pagament augmenta o disminueix? Pensa en la naturalesa d'aquest compte."
        
        elif 'paga' in text.lower() and 'proveedor' in text.lower():
            hints['hint'] = "Al pagar, ¿tu deuda sube o baja? Aplica la lógica inversa a cuando compras."
            hints['hintCA'] = "En pagar, el teu deute puja o baixa? Aplica la lògica inversa a quan compres."
        
        elif 'gasto' in text.lower() or 'factura' in text.lower():
            hints['hint'] = "¿Aumenta o disminuye el gasto? Observa que es una cuenta del grupo 6."
            hints['hintCA'] = "Augmenta o disminueix la despesa? Observa que és un compte del grup 6."
        
        elif 'capital social' in text.lower() or 'aport' in text.lower():
            hints['hint'] = "¿El patrimonio neto aumenta o disminuye? Las cuentas del grupo 1 tienen naturaleza acreedora."
            hints['hintCA'] = "El patrimoni net augmenta o disminueix? Els comptes del grup 1 tenen naturalesa credora."
        
        elif 'amortización' in text.lower() and '281' in text:
            hints['hint'] = "Esta cuenta acumula la depreciación del activo. ¿Aumenta o disminuye con el tiempo?"
            hints['hintCA'] = "Aquest compte acumula la depreciació de l'actiu. Augmenta o disminueix amb el temps?"
        
        else:
            # Generic hint for Level 2
            hints['hint'] = "Identifica si la operación aumenta o disminuye la cuenta. Luego aplica su naturaleza."
            hints['hintCA'] = "Identifica si l'operació augmenta o disminueix el compte. Després aplica la seva naturalesa."
    
    # Level 3 (Executive) - Advanced cases
    elif q_id.startswith('a') or q_id.startswith('p'):
        if 'vende' in text.lower() and 'amortización' in text.lower():
            hints['hint'] = "Primero calcula cuánto vale el bien en libros hoy. Luego compara con lo que recibes."
            hints['hintCA'] = "Primer calcula quant val el bé en llibres avui. Després compara amb el que reps."
        
        elif 'periodific' in text.lower() or 'anticip' in text.lower():
            hints['hint'] = "¿Cuántos meses corresponden al ejercicio actual? Solo esos son gasto del año."
            hints['hintCA'] = "Quants mesos corresponen a l'exercici actual? Només aquests són despesa de l'any."
        
        elif 'reclasific' in text.lower() or ('largo plazo' in text.lower() and 'corto plazo' in text.lower()):
            hints['hint'] = "¿Sigue siendo 'largo plazo' si vence en menos de un año? Piensa en los grupos 1 y 5."
            hints['hintCA'] = "Continua sent 'llarg termini' si venç en menys d'un any? Pensa en els grups 1 i 5."
        
        elif 'provisión' in text.lower() or 'deterioro' in text.lower():
            hints['hint'] = "No se elimina directamente la cuenta original. Existe una cuenta correctora que empieza por 49 o 29..."
            hints['hintCA'] = "No s'elimina directament el compte original. Existeix un compte corrector que comença per 49 o 29..."
        
        elif 'modelo' in text.lower() and ('303' in text or '347' in text or '349' in text):
            hints['hint'] = "Cada modelo fiscal tiene un plazo y contenido específico. Piensa en qué operaciones declara."
            hints['hintCA'] = "Cada model fiscal té un termini i contingut específic. Pensa en quines operacions declara."
        
        elif 'regularización' in text.lower() or 'cierre' in text.lower():
            hints['hint'] = "Al cerrar el ejercicio, las cuentas de los grupos 6 y 7 se saldan contra una cuenta específica."
            hints['hintCA'] = "En tancar l'exercici, els comptes dels grups 6 i 7 es salden contra un compte específic."
        
        else:
            # Generic hint for Level 3
            hints['hint'] = "Analiza la operación completa paso a paso. Considera todas las cuentas afectadas."
            hints['hintCA'] = "Analitza l'operació completa pas a pas. Considera tots els comptes afectats."
    
    return hints

# Process all questions
total_questions = 0
for level_key in data['levels']:
    questions = data['levels'][level_key]
    for question in questions:
        hints = generate_hint_for_question(question)
        question['hint'] = hints['hint']
        question['hintCA'] = hints['hintCA']
        total_questions += 1

# Update metadata
data['metadata']['version'] = '2.1'
data['metadata']['description'] = 'Banco completo de preguntas de contabilidad basado en el PGC español con sistema de pistas'

# Save the updated file
with open('c:/Users/Toni/Desktop/pcweb/src/jepgc/data/quiz_engine.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Successfully added hints to {total_questions} questions!")
print(f"Updated quiz_engine.json to version 2.1")
