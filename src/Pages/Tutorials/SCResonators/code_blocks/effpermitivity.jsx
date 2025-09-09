import { CodeBlock, dracula } from 'react-code-blocks';

function EffectivePermittivity() {

  const code = `
      def effective_permittivity(self):
          """
          calculates the effective permittivity by performing complete 
          elliptic integral of the first kind 
          """
          Kk1,Kkp1 = self.elliptic_integral()
          Kk2,Kkp2 = self.elliptic_integral(h=self.__h)
          
          eeff = 1 + .5*(self.__er-1) * Kk2/Kkp2 * Kkp1/Kk1
          return eeff
  `

  return (
    <CodeBlock
      language={'python'}
      showLineNumbers={true}
      theme={dracula}
      text={code}
    />
  );
}

export default EffectivePermittivity;