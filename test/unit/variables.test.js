describe('Test Variables, Arguments, Values, and References', () => {

  
  it('changes value of variable when reassigned with a new one', () => {
    var x = 11;
    expect(x).toBe(11);
    x = 22;
    expect(x).toBe(22);
  });

  it('changes value of variable that holds an object when reassigned with a new one', () => {
    var flower = {
      name: 'Bird of Paradise'
    };
    expect(flower).toEqual({ name: 'Bird of Paradise' });
    flower = { name: 'Daffodil' } ;
    expect(flower).not.toEqual({ name: 'Bird of Paradise' });  
  });

  it('does not change value of variable that holds an object when property is assigned a value', () => {
    var flower = {
      name: 'Bird of Paradise'
    };
    var flowerVar = flower.name;
    flower.name = 'Daffodil';
    expect(flowerVar).toBe('Bird of Paradise');
  });

  it('test when passing a variable that holds a number as an argument to a function copies the value to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable value.', () => {
    var num = 2;
    function sum(a, b) {
      return a = a + b; 
    } 
    let answer = sum(num, 5);
    expect(answer).toBe(7);
    expect(num).toBe(2);
  });

  it('test when passing a variable that holds an object as an argument to a function and then assigning a property to the object inside the function will alter the original object to have the new property value', () => {
    var flower = {
      name: 'Bird of Paradise',
      color: 'orange'
    };
    var animal = {
      name: 'Lion',
      sound: 'roar',
      number: 2
    };
    function overwriteObj(obj1, obj2) {
      return obj1 = obj2; 
    } 
    overwriteObj(flower, animal);
    expect(animal).not.toBe(flower);
  });

  it('test when passing a variable that holds an object as an argument to a function and then assigning a property to the object inside the function will alter the original object to have the new property value', () => {
    var animal = {
      name: 'Lion',
      sound: 'roar',
      number: 2
    };
    function sum(a, b) {
      return a.number = a.number + b; 
    } 
    sum(animal, 5);
    expect(animal.number).toBe(7);
  });


});  