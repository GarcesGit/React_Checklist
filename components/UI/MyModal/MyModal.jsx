import React from 'react';
import cl from './MyModal.module.css';

 function MyModal ({children, visible, setVisible})  {
     const rootClasses = [cl.myModal]
     if(visible){
         rootClasses.push(cl.active);
     }

    return (
      <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}> {/*объединяем классы, скрываем модалку принажатии на темное*/}
        <div className={cl.myModalContent} onClick={(event) => event.stopPropagation()}> {/* отменяет всплатие чтобы модалка не скрывалась при нажатии на форму*/}
            {children}
        </div>
      </div>
)
}

export default MyModal;
