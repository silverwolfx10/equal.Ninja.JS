/**
 * $equal
 * 
 * Testa se dois items sao iguais a funcao curry
 * 
 * @module $equal
 * @author Cleber de Moraes Gonçalves <cleber.programmer>
 * @example
 * 
 *        [1, 2, 3].some($equal(2));
 * 
 */
Ninja.module('$equal', ['$curry'], function ($curry) {
  
  /**
   * Testa se dois items sao iguais
   * 
   * @public
   * @method equal
   * @param {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} a Primeiro parametro
   * @param {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} b Segundo parametro
   * @return {Boolean} Resultado da comparacao dos parametros
   * @example
   * 
   *        [1, 2, 3].some($equal(2));
   * 
   */
  function equal(a, b) {
    return a == b;
  }
  
  /**
   * Revelacao do servico $equal, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(equal);
  
});
