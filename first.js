  
 
  function includes(){

    const text = "<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugit repudiandae reprehenderit fuga nisi necessitatibus officiis illum accusantium quae, cumque expedita inventore, unde ab pariatur. Nobis ullam rem praesentium eveniet"

     const text1  = (text.includes(search = prompt("which words you wan to find") ))
      
      const text2 = text + text1 ;
       
      if ( text2 ) {

        document.write( `${text2}"word is found "`)

      }
      else {
 
         dooucment.write("word is not found ")

      }
    
   


  }