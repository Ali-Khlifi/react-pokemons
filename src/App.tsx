import React, { useState } from 'react';

const App: React.FC = () => {
    
    const [name, setName] = useState<String>('React')
       
    return (
     <h1>Hello, {name} !</h1>
    )
   }
     
   export default App;