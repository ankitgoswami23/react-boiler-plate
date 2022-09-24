# CMS Frontend Project:


## Things to Know:


#### Never Call API/Async-Await in useEffect directly : [Link](https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret) [Link2](https://www.robinwieruch.de/react-hooks-fetch-data)


#### Always keep one space between local import and library import. Always keep library import at the top
##### All env variables to start with "REACT_APP_" i.e "REACT_APP_ENV"

##### Below is the wrong way to do it
``` 
import React from "react";
import ABC from "../ABC/ABC";
```

##### Below is the right way to do it
``` 
import React from "react";

import ABC from "../ABC/ABC";
```


##### Never call eventListeners like below:

``` 
onClick={()=>setState(123)}

```

##### Above causes build size to increase every click, Site will become slower on every click


##### Right way to do it:

```
const setStateOnClick = (value)=>{
    setState(value)
}

onClick={()=>setStateOnClick(123)}
```


##### Avoid uncessary prop drilling. Only pass pros one level down.

```
<Component 1 >
  <Component 2 props={component1Props}>
    <Component3 props={component1and2Props}>
```
In above case, debugging will become tedious. So use Redux in this case





