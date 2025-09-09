import { CodeBlock, dracula } from 'react-code-blocks';

function EllipticIntegral() {

  const code = `
      def elliptic_integral(self,h=None):
          """
          calculates the complete elliptic integral of the first kind
          for a given cpw geometry as part of a conformal mapping strategy.

          :type h: float
          :params h: substrate thickness (opt)
          """
          if not self.__h:
              k = self.__w / (self.__w + 2*self.__s)
              kp = np.sqrt(1-k**2)
          elif self.__h:            
              k = ( np.sinh((np.pi*self.__w)/(4*self.__h)) 
                  / np.sinh( (np.pi*(self.__w+2*self.__s)) 
                            / (4*self.__h) ) )
              kp = np.sqrt(1-k**2)
          Kk = ellipk(k)
          Kkp = ellipk(kp)
          return (Kk,Kkp)
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

export default EllipticIntegral;