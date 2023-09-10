# Singleton Design Pattern

Ensure that a class has only one instance and provide a global point of access to it.

Implementation

- Make sure that there is only one instance. restrict construction - make constructor private and let the class manage its instance
- Provide a global point of access - a static method to get the sole instance.

```java
//Program-1
class Singleton{
    private static Singleton soleInstance = new Singleton();
    private Singleton(){
        System.out.println("creating instance");
    }
    
    public static Singleton getInstance(){
        return soleInstance;
    }
}

//Program-2
class Singleton{
    private static Singleton soleInstance = null;
    private Singleton(){
        System.out.println("creating object");
    }
    public static Singleton getInstance(){
        if(soleInstance == null){
            soleInstatnce = new Singleton();
        }
        return soleInstance;
    }
}
```

- In the above two program both are singleton class which has private constructor and a global method for getting the instance of class.
- Program-1 is known as Eager initialization whereas Program-2 is Lazy initialization menas whenever the instance is requested then only it will create object. 
- In program-1, it will create object even though not requested.
- Lets consume both program and see whether both are creating the same object. If the hashcode of object is same then we can mostly say that two objects are having same reference.


```java
class TestClass{
    public static void main(String []args){
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();
        
        print("s1", s1);
        print("s2", s2);
    }
    
	static void print(String name, Singleton object){
		System.out.println(String.format("Object : %s, hashcode : %d", name, object.hashcode()));
	}
}
```

output:

```java
Object : s1, hashcode : 1242329239
Object : s2, hashcode : 1242329239
```

<hr>

Now lets see what are the hidden issue in Singleton class and why it is hard to create singleton class.

### Reflection

Java has reflection API, which can be used to get class and its member, etc. By reflection, the soleInstance creation can be violated. Let's see how can it be violated.

```java
class TestClass{
    static void print(String name, Singleton object){
       	System.out.println(String.format("Object : %s, hashcode : %d", name, object.hashcode()));
   	}
		
    public static void main(String []args){
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();
        
        print("s1", s1);
        print("s2", s2);
        
        //The reflection way to create instance
        
        Class clazz = Class.forName("Singleton");
        java.lang.reflect.Contructor contr = clazz.getDeclaredConstructor();
        cotr.setAccessible(true);
        
        Singleton s3 = (Singleton)cotr.newInstance();
        
        print("s3",s3);
    }
}
```

Output:

```java
Object : s1, hashcode : 1234567
Object : s2, hashcode : 1234567
Object : s3, hashcode : 4567891
```

By using Reflection APIs, we have set allowed access to constructor so that constructor can be invoked.

<strong>Solution:</strong> To prevent singleton failure while due to reflection, we have to throw a runtime exception in constructor if the constructor is already initialized.

```java
class Singleton{
    private static Singleton soleInstance = null;
    private Singleton(){
        if(soleInstance != null){
            throw new RuntimeException("Cannot create instance, use getInstance()");
        }
    }
    
    public static Singleton getInstance(){
        if(soleInstance == null){
            soleInstance = new Singleton();
        }
        return soleInstance;
    }
}
```

Now if we used Reflection API to create object, the constructor will throw Exception which will let users to prevent using reflection.

<hr>

### Serialization/Deserialization

Create serializable singleton class

```java
public class Singleton implements Serializable{
    private static Singleton soleInstance = null;
    private Singleton(){
    }
    
    public static Singleton getInstance(){
        if(soleInstance == null){
            soleInstance = new Singleton();
        }
        return soleInstance;
    }
}

class TestClass{
    static void print(String name, Singleton object){
        System.out.println(String.format("Object : %s, hashcode : %d", name, object.hashcode()));
   	}
   	
    public static void main(String []args){
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();
        
        print("s1",s1);
        print("s2",s2);
        
        ObjectOutputString oos = new ObjectOutputStream(new FileOutputStream("s2.ser"));
        oos.writeObject(s2);
        
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("s2.ser"));
        
        Singleton s3 = (Singleton)ois.readObject();
        print("s3",s3);
    }
}
```

Output:

```java
Object ; s1, hashcode : 12345678
Object ; s2, hashcode : 12345678
Object ; s3, hashcode : 45678943
```
As we can see in output, the hashcode of s3 object is different that s2 which means they are referring to different reference.

<strong>Solution: </strong>

```java
public class Singleton implements Serializable{
    private static Singleton soleInstance = null;
    private Singleton(){
    }
    
    public static Singleton getInstance(){
        if(soleInstance == null){
            soleInstance = new Singleton();
        }
        return soleInstance;
    }
    
    private Object readResolve(){
        return soleInstance;
    }
}
```

The `readResolve()` method will be called when deserialization happen. So before deserialization it mapped the object into Singleton class and return the same reference.

<hr>

### Clone

If in the earlier Program-2 of singleton class when we implement `Cloneable` interface to access clone method in Test class, we need to override clone method of Object class which will have default statement as `super.clone()`

```java
class Singleton implements Cloneable{
    private static Singleton soleInstance = null;
    private Singleton(){
    }
    
    public static Singleton getInstance(){
        if(soleInstance == null){
            soleInstance = new Singleton();
        }
        return soleInstance;
    }
    
    protected Object clone() throws CloneNotSupportedException{
        return super.clone();
    }
}

class TestClass{
    static void print(String name, Singleton object){
        System.out.println(String.format("Object : %s, hashcode : %d", name, object.hashcode()));
   	}
   	
   	public static void main(String []args){
   	    Singleton s1 = Singleton.getInstance();
   	    Singleton s1 = Singleton.getInstance();

   	    print("s1", s1);
   	    print("s2", s2);
   	    
   	    Singleton s3 = s2.clone();
   	    print("s3",s3);
   	}
}
```

Output:

```java
Object : s1, hashcode : 12345678
Object : s2, hashcode : 12345678
Object : s3, hashcode : 56772134
```

As we can see in the output, the clone object is not as the soleInstnace. To make cloneable object as singleton, there are two ways:

1. Inside clone method throw Clone not supported exception, which is ideal for singleton class.

```java
protected Object clone() throws CloneNotSupportedException{
    throw new CloneNotSupportedException("clonning is not supported in singleton");
}
```

2. Return the soleInstance from `clone()`, so that there will be only one instance.

```java
protected Object clone() throws CloneNotSupportedException{
    return soleInstance;
}
```

<hr>

### Multi-threaded access

In multi threaded environment, if multiple thread trying to getInstance then it may possible that they will end up with two objects or more. And it may also be possible that only one object will be created.

Lets see with example:

```java
class TestClass{
    static void print(String name, Singleton object){
        System.out.println(String.format("Object : %s, hashcode : %d", name, object.hashcode()));
   	}
   	
    static void getInstance(){
        Singleton singleton = Singleton.getInstance();
        print("singleton", singleton);
    }
    
    public static void main(String []args){
        ExecutorService service = Executors.newFixedThreadPool(2);
        service.submit(new Runnable(){
            public void run(){
                TestClass.getInstance();
            }
        });
        service.submit(new Runnable(){
            public void run(){
                TestClass.getInstance();
            }
        });
        
        service.shutdown();
    }
}
```

Just by making the `getInstance()` method of singleton class as `synchronized`, it will create only singleton object even for multi threaded environment.

### Multiple class loaders
### Garbage collection