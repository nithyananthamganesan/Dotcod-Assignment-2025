// 7. How do you toggle a boolean value (e.g., show/hide a modal) using useState?

import { useState } from "react";

const Question7 = () => {
    const [active, setActive] = useState(false);

    const changeActive = () => {
        setActive((prevState)=> !prevState)
    }

  return (
    <div>
        <p>7. How do you toggle a boolean value (e.g., show/hide a modal) using useState?</p>
        <div>
            <p>State: {active.toString()}</p>
            <button type="button" onClick={changeActive}>Change State</button>
        </div>
        {active && 
            <div> This is a modal </div>
        }
      
    </div>
  )
}

export default Question7
