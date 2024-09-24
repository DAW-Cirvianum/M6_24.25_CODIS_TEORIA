### **1. Introducció a l'Àmbit de Variable (Scope)**
- **Què és l'àmbit de variable?**  
  En JavaScript, una variable té un àmbit que determina on és accessible. A JavaScript, cada bloc, funció o script té el seu àmbit.

- **Àmbit global vs. àmbit local**  
  Variables declarades fora de qualsevol funció o bloc tenen àmbit **global** i són accessibles des de qualsevol lloc. Variables declarades dins d'una funció o bloc tenen àmbit **local** i només són accessibles dins d'aquest bloc o funció.


### **2. Bloc de Codi i Block Scope**
- **Bloc de codi**  
  Quan declarem una variable dins d'un bloc de codi `{...}`, només és accessible dins d'aquest bloc.

- **Exemple**: 
  ```javascript
  {
    let missatge = 'Hola';
    console.log(missatge); // Funciona
  }
  console.log(missatge); // Error: missatge no està definit
  ```

- **Per què és important?**  
  Ens permet declarar variables dins d'un bloc de codi sense que interfereixin amb altres variables amb el mateix nom fora del bloc.

### **3. Àmbit de Funcions (Function Scope)**
Les variables declarades dins d'una funció només són accessibles dins d'aquesta funció.
  
- **Exemple de funcions niades (nested functions):**
  ```javascript
  function dirHolaAdéu(nom, cognom) {
    function obtenirNomComplet() {
      return nom + ' ' + cognom;
    }
    console.log('Hola, ' + obtenirNomComplet());
  }
  dirHolaAdéu('Joan', 'Garcia');
  ```

### **4. Àmbit Lèxic (Lexical Scope)**
L'àmbit lèxic (o **lexical scope**) és un concepte clau en JavaScript (i altres llenguatges) que defineix **on es pot accedir a les variables segons on han estat declarades en el codi**. El funcionament de l'àmbit lèxic és més fàcil d'entendre quan es veu com les funcions "recorden" l'entorn on han estat creades.

### Exemple bàsic d'àmbit lèxic

```javascript
function exterior() {
  let variableExterior = 'Estic fora';

  function interior() {
    console.log(variableExterior); // Té accés a 'variableExterior'
  }

  return interior;
}

const funcInterior = exterior();
funcInterior(); // Mostra 'Estic fora'
```

#### Com funciona?

1. **Funció exterior**: Quan es crida la funció `exterior()`, es defineix una variable local anomenada `variableExterior` amb el valor `'Estic fora'`.

2. **Funció interior**: Dins de `exterior()` hi ha una altra funció anomenada `interior()` que accedeix a `variableExterior` (que està definida a la funció "pare" `exterior()`).

3. **Àmbit lèxic**: Quan `exterior()` retorna la funció `interior()`, aquesta funció **recorda l'entorn en el qual va ser creada**, que inclou la variable `variableExterior`. Això significa que encara que `interior()` s'executi fora de la funció "pare", pot accedir a `variableExterior`.

### Àmbit intern i extern

Cada vegada que es defineix una funció, es crea un **àmbit lèxic** per aquesta funció. Aquest àmbit defineix quines variables són accessibles dins de la funció. Si una funció està definida dins d'una altra funció, tindrà accés a les variables de la funció "pare" (l'àmbit extern). Això permet a la funció interna accedir a les variables de la funció on ha estat creada, fins i tot si aquesta funció "pare" ha acabat d'executar-se.
#### Exemple d'àmbits múltiples:

```javascript
function exterior() {
  let variableExterior = 'fora';

  function interior() {
    let variableInterior = 'dins';
    console.log(variableExterior); // Pot accedir a "variableExterior"
    console.log(variableInterior); // Pot accedir a "variableInterior"
  }

  interior();
  console.log(variableInterior); // Error! "variableInterior" només existeix dins de "interior()"
}

exterior();
```

### Conclusions:

1. **Cada funció té el seu propi àmbit (lexical scope)**. Les variables declarades dins d'una funció no són accessibles des de fora d'aquesta funció.
  
2. **Funcions niades**: Si una funció està dins d'una altra funció, pot accedir a les variables de la funció "pare" gràcies a l'àmbit lèxic.

3. **Closures**: Quan una funció és retornada des d'una altra funció (com en l'exemple de `makeCounter`), continua tenint accés a les variables del seu àmbit original.

Això és el que fa que el **closure** funcioni: la funció "recorda" les variables de l'entorn on va ser creada, fins i tot quan es fa servir més tard. Això és l'essència de l'àmbit lèxic.