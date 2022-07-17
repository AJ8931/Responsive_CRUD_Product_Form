function validate(){
    event.preventDefault();
    var productname=document.getElementById('PName').value;
    var productcategory=document.getElementById('ProductCategory').value;
    var manufacturer=document.getElementById('Manufacturer').value;
    var brandname=document.getElementById('BrandName').value;
    var productid=document.getElementById('Product-ID').value;
    var manufacturedate=document.getElementById('Manufacture-Date').value;
    var expirydate=document.getElementById('Expiry-Date').value;
    var discription=document.getElementById('discrip').value;

    console.log(productname);
    if(productname==null||productname==""){
        alert( "provide product name" );
        document.myForm.PName.focus() ;
        return false;}
        if(isNaN(productname)!=true){
            alert("Enter Words Not Numbers in Product Name");
            document.myForm.PName.focus() ;
        }
    if(productcategory==null||productcategory==""){
            alert( "provide your product category" );
            document.myForm.ProductCategory.focus() ;
            return false;
        }
     if(manufacturer==null||manufacturer==""){
                alert( "provide your Manufacturer" );
                document.myForm.Manufacturer.focus() ;
                return false;
            }
        if(isNaN(manufacturer)!=true){
                    alert("provive your Manufacturer in Words");
                    document.myForm.Manufacturer.focus() ;
                    return false;
                }
                
     if(brandname==null||brandname==""){
            alert( "provide your Brand Name" );
            document.myForm.BrandName.focus() ;
            return false;
        }
     if( productid==null|| productid=="") {
              alert( "provide your Product ID" );
              document.myForm.Product-ID.focus() ;
              return false;
           }
    if( manufacturedate==null||manufacturedate=="") {
               alert( "provide your cManufacture Date" );
               return false;
            }
        if( expirydate==null||expirydate=="") {
                 alert( "provide your Expiry Date" );
                 return false;
              }
    if( discription==null|| discription=="") {
                  alert( "provide your Discription" );
                  document.myForm.discrip.focus() ;
                  return false;
               }
               if(discription.length<10){
                   alert("provide your discription with minimum 10 words");
                   document.myForm.discrip.focus();
                   return false;
               }
            return true;
}