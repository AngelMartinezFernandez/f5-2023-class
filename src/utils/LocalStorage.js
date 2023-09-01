export default class LocalStorage {
   static get (key) {
      try{
         let data = window.localStorage.getItem(key);
         if(data && typeof(data) === 'object'){
            return JSON.parse(data);
         }else{
            return data;
         }
      }catch(e){
         return null;
      }
   }

   static set (key, value) {
      try{
         window.localStorage.setItem(key, value);
      }catch(e){
         return null;
      }
   }

   static remove (key) {
      try{
         window.localStorage.removeItem(key);
      }catch(e){
         return null;
      }
   }

   static clearAll () {
      try{
         window.localStorage.clear();
         return true;
      }catch(e){
         return false;
      }
   }
}
