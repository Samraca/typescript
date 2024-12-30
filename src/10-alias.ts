(()=>{
  type UserID = string | number; //Alias Type
  let userId: UserID;

  // Literal types (Enums)
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';
  // shirtSize = 's'; -> case sensitive

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let jeanSizes: Sizes;
  jeanSizes = 'M';
  jeanSizes = 'L';
  jeanSizes = 'XL';
  jeanSizes = 'S';

  function greeting(userId: UserID, size: Sizes){
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(1111, 'S');
  greeting('1111', 'S');
})();
