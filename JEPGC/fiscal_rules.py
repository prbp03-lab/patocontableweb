
"""
Lógica Fiscal PatoContable v2.1
Autor: PatoContable (Patricia Rocio Bustos Paco)
Repositorio: el-desafio-pato-contable
"""

CALENDARIO_FISCAL = {
    "303": {
        "nombre": "Autoliquidación IVA",
        "meses": [4, 7, 10, 1],
        "cuentas": ["477", "472", "4750", "4700", "572"],
        "sancion": 100
    },
    "111": {
        "nombre": "Retenciones IRPF",
        "meses": [4, 7, 10, 1],
        "cuentas": ["4751", "640", "623", "572"],
        "sancion": 75
    },
    "200": {
        "nombre": "Impuesto Sociedades",
        "meses": [7],
        "cuentas": ["6300", "4752", "473", "4709", "4745"],
        "sancion": 500
    }
}

def verificar_obligacion(mes, dia):
    activas = []
    for uid, config in CALENDARIO_FISCAL.items():
        if mes in config["meses"]:
            rango = (1, 30) if uid == "303" and mes == 1 else (1, 20)
            if rango[0] <= dia <= rango[1]:
                activas.append(config["nombre"])
    return activas

def validar_asiento(modelo_id, cuentas):
    if modelo_id not in CALENDARIO_FISCAL:
        return False, "Modelo no registrado"
    
    validas = CALENDARIO_FISCAL[modelo_id]["cuentas"]
    for c in cuentas:
        if not any(c.startswith(v) for v in validas):
            return False, f"Cuenta {c} no válida para el Modelo {modelo_id}"
    
    return True, "Asiento fiscalmente correcto"
