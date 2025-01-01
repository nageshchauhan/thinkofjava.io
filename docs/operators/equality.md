# Equality operators (==, !=)

- We can apply equality operators for every primitive type, including boolean.
  ```java linenums="1"
  System.out.println(10 == 20); //false
  System.out.println('a' == 'b'); //false
  System.out.println('a' == 97.0); //true
  System.out.println(false == false); //true
  ```
  
- We can apply equality operators for an object type as well.
- For object reference `r1` and `r2` returns true if and only if both references pointing to the same object. (reference comparison/address comparison)
  ```java linenums="1"
  Thread t1 = new Thread();
  Thread t2 = new Thread();
  Thread t3 = t1;
  
  System.out.println(t1 == t2); //false
  System.out.println(t1 == t3); //true
  ```
  
- If we apply this operator for an object type, then compulsory there should be some relation between argument types 
  (either child to parent, parent to child or same type) otherwise compile time error will be raised.
  ```java linenums="1"
  Thread t = new Thread();
  Object o = new Object();
  String s = new String("Java");
  
  System.out.println(t == o); //false
  System.out.println(o == s); //false
  System.out.println(s == t); 
  //CE: incompatible types, java.lang.String & java.lang.Thread
  ```
  
- We can use `==` operator for reference comparison (address comparison) and equals() method for content comparison.
  ```java linenums="1"
  String s1 = new String("java");
  String s2 = new String("java");
  System.out.println(s1 == s2); //false
  System.out.println(s1.equals(s2)); //true
  ```
  
- For any object reference `r`, `r == null` is always false, otherwise r contains `null` value. `null == null` is always true.
  ```java linenums="1"
  String s = new String("java");
  System.out.println(s == null); //false
  
  String s = null;
  System.out.println(s == null); //true
  System.out.println(null == null); //true
  ```