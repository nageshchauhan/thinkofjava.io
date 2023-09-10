# Non access Modifiers

1. `final`
2. `static`
3. `abstract`
4. `strictfp`
5. `synchronized`
6. `native`
7. `transient`
8. `volatile`

### `final` modifier
- Interface can't be declared as final
- final class can't be extended by another class
- A final variable can't be reassigned a value, it can be assigned a value only once.
- If a reference variable is defined as a final variable, you can't reassign another object to it, but you can call methods on this variable that modify its state.

E.g.

```java
class Person{
    final StringBuilder sb = new StringBuilder("sh");
    Person(){
        sb.append("reya"); // will work
        sb = new StringBuilder(); // won't compile
    }
}
```
- A final method defined in a base class can't be overridden by a derived class.

<hr>

### `static` modifier
- It can be applied to the declaration of variables, methods, classes and interfaces.
- static variables belong to a class. They're common to all instances of a class  and aren't unique to any instance of the class have been created.
- static methods aren't associated with objects and can't use any of the instance variables of a class. We can define static methods to access or manipulate static variables.
- We can't override the static members in a derived class, but we can redefine them.
- non-static variables and methods can access static variables and methods because the static members of a class exist even if no instance of the class exist.
- static members are forbidden from accessing instance methods and variables.
- You can access static variables and methods using null reference

E.g.

```java
class Employee{
    String name;
    static int bankVault;
    static int getBankVaultValue(){
        return bankVault;
    }
}
class Office{
    public static void main(String []args){
        Employee emp = null;
        System.out.println(emp.bankVault); //print 0
        System.out.println(emp.getBankVaultValue()); //print 0
    }
}
```
Static keyword CAN be used with:

- Methods
- Variable
- Class nested within another class
- Initialization block

Static keyword CAN'T be used with:

- Class (not nested)
- Constructor
- Interfaces
- Method local inner class (Difference than nested class)
- Inner class method
- Instance variables
- local variables
<hr>

### `abstract` modifier

- An abstract class can't be instantiated.
- An abstract class may or may not define an abstract method, but a concrete class can't define an abstract method.
- An interface is an abstract entity by default.
- An abstract method doesn't have a body. Usually an abstract method is implemented by a derived class.
- Variables can't be defined as an abstract otherwise compilation error will occur.

<hr>

### `strictfp` modifier

- classes, interfaces and methods defined using this keyword ensure that calculations using floating-point numbers are identical on all platforms.