
## `break`
We can use `break` statement at the following place

1. Inside switch to stop fall through
```java linenums="1"
int x = 0;
switch(x) {
     case 0:
         System.out.println(0);
     case 1:
         System.out.println(1);
         break;
     default:
         System.out.println("Default");
}
```

2. Inside loop to break its execution based on some condition.
```java linenums="1"
for(int i=0; i<10; i++) {
     if(i==5){
         break;
     }
     System.out.println(i);
}
```

3. Inside labeled block to break block execution based on some condition.
```java linenums="1"
class Test {
   public static void main(String[] args) {
      int x = 10;
      label1:{
          System.out.println("begin");
          if(x==10) {
              break label1;
          }
      }
      System.out.println("Hello");
   }
}

//Output:
begin
end
```

These are the only places where we can use break statement.
If we use anywhere else, compile time error will be raised saying 'break outside switch or loop'.
```java linenums="1"
class Test {
   static void main(String[] args) {
      int x = 10;
      if(x==10) {
          break;    //CE: break outside switch or loop
      }
      System.out.println("Hello");
   }
}
```

## `continue`
We can use `continue` statement inside loop to skip current iteration and continue for the next iteration.
```java linenums="1"
for (int i=0; i<10; i++) {
     if(i%2==0){
         continue;
     }
     System.out.println(i);
}

//output:
1
3
5
7
9
```

If we are using continue outside of loop, we will get compile time error stating, 'continue outside of loop'

## labeled break and continue statement
We can use labeled break and continue to break or continue a particular loop in nested loop.

```java linenums="1"
label1:
for(int i=0; i<3; i++) {
    for(int j=0; j<3; j++) {
        if(i==j) {
            break;
        }
        System.out.println(i+"-"+j);
    }
}
```

If we relace line number 5 in above program with following statement then output will be:

1. replacing with `break`
   ```java
    1 - 0
    2 - 0
    2 - 1
   ```
2. replacing with `break label1`
   ```java
   //no output
   ```
3. replacing with `continue`
   ```java
    0 - 1
    0 - 2
    1 - 0
    1 - 2
    2 - 0
    2 - 1
   ```
5. replacing with `continue lable1`
   ```java
    1 - 0
    2 - 0
    2 - 1
   ```