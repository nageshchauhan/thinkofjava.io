# Relational Operators (<, <=, >, >=)

- We can apply relational operators to every primitive type except boolean.
  ```java linenums="1"
  System.out.println(10 < 20); //true
  System.out.println('a' < 10); //false
  System.out.println('a' < 99.7); //true
  System.out.println('a' < 'A'); //true
  
  System.out.println(true > false); 
  //CE: operator > cannot be applied to boolean, boolean
  ```

- We can't apply relational operators for object types.
  ```java linenums="1"
  System.out.println("java123" > "java"); 
  //CE: operator > cannot be applied to
  // java.lang.String, java.lang.String
  ```
  
- Nesting of relational operator is not allowed otherwise compile time error will be raised.
  ```java linenums="1"
  System.out.println( 10 < 20 < 30); 
  //CE: operator < cannot be applied to boolean, int 
  ```