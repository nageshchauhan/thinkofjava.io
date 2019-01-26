[Back to Threading](../README.md)

# Thread Local

ThreadLocal class provides thread local variable. Thread local class maintain values par thread basis. Each thread local object maintains a separate value like userId, transactionId etc for each thread that accesses that object. Thread can access its local value, can manipulate its value and even can remove its value. In every part of the code which is executed by thread, we can access its local variable.

Example: Consider a servlet which invokes some business method, we have a requirement to generate unique transaction id for every request and we have to pass generated transaction id to the business methods. For this requirement, we can use ThreadLocal to maintain a separate trasaction id for every request ie for every thread

Note: ThreadLocal class introduced in 1.2 version and enhanced in 1.5 version. ThreadLocal can be associated with thread scope. Total code which is executed by the thread has access to the corresponding thread local variables.
A thread can access its own local variables and cann't access other threads local variables. Once thread entered into dead state, all its local variables are by default eligible for garbage collection.

### Constructor for ThreadLocal

`ThreadLocal tl = new ThreadLocal()`<br>
Creates a thread local variable.

### Methods

1) `Object get()`<br>
Returns the value of thread local variable associated with current thread.

2) `Object initialValue()`<br>
Returns initial value of thread local variable associated with current thread. The default implementation of this method returns `null`. To customize our own initial value, we have to override this method.

3) `void set(Object newValue)`<br>
To set a new value.

4) `void remove()`<br>
To remove the value of thread local variable associated with current thread. This method introduced in 1.5 version. After removal if we are trying to access, it will be re-initialized once again by invoking its `initialValue()` method.

#### Example:

```java
public class ThreadLocalExample1 {

    public static void main(String[] args) {
        ThreadLocal tl = new ThreadLocal();
        System.out.println(tl.get());
        tl.set("thinkofjava");
        System.out.println(tl.get());
        tl.remove();
        System.out.println(tl.get());
    }
}
```

Output: 

```
null
thinkofjava
null
```

#### Overriding of initialValue() method

```java
public class OverrideInitialValue {

    public static void main(String[] args) {
        ThreadLocal tl = new ThreadLocal(){
            @Override
            protected Object initialValue() {
                return "ThisIsDefaultValue";
            }
        };
        System.out.println(tl.get());
        tl.set("thinkofjava");
        System.out.println(tl.get());
        tl.remove();
        System.out.println(tl.get());
    }
}
```

Output

```
ThisIsDefaultValue
thinkofjava
ThisIsDefaultValue
```

#### Uses of ThreadLocal class for multiple threads

```java
class CustomerThread extends Thread{
    
    static Integer custId=0;
    
    private static ThreadLocal tl = new ThreadLocal(){
        protected Integer initialValue(){
            return ++custId;
        }
    };
    
    public CustomerThread(String name){
        super(name);
    }
    
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName()+" executing with customer id : "+tl.get());
    }
}
public class ThreadLocalDemo {

    public static void main(String[] args) {
        CustomerThread t1 = new CustomerThread("CustomerThread-1");
        CustomerThread t2 = new CustomerThread("CustomerThread-2");
        CustomerThread t3 = new CustomerThread("CustomerThread-3");
        CustomerThread t4 = new CustomerThread("CustomerThread-4");
        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}
```

Possible output:

```
CustomerThread-1 executing with customer id : 1
CustomerThread-3 executing with customer id : 3
CustomerThread-2 executing with customer id : 2
CustomerThread-4 executing with customer id : 4
```

In the above program for every customer thread a separate customer id will be maintained by Thread local object.

## ThreadLocal vs Inheritance

Parent threads thread local variable by default not available to child thread. If we want to make parent threads thread local variable value available to the child thread then we should go for `InheritableThreadLocal` class. By default child threads value is exactly same as parent threads value but we can provide customized value for child thread by overriding `childValue()` method.

#### Constructor
`InheritableThreadLocal tl = new InheritableThreadLocal();`


#### Methods
`InheritableThreadLocal` is child class of `ThreadLocal`, hence all methods present in thread local by default available to `InheritableThreadLocal`. In addition to these methods, it contains only one method 'public Object childValue(Object parentValue)'.

### Example:

```java
class ParentThread extends Thread{
    public static InheritableThreadLocal tl = new InheritableThreadLocal(){
        public Object childValue(Object parentValue){
            return "providedByParentThread";
        }
    };
    
    public void run(){
        tl.set("parentValue");
        System.out.println("Parent Thread value: "+tl.get());
        ChildThread ct = new ChildThread();
        ct.start();
    }
}

class ChildThread extends Thread{
    @Override
    public void run() {
        System.out.println("Child thread value: "+ParentThread.tl.get());
    }
}
public class InheritanceExample {

    public static void main(String[] args) {
        ParentThread p = new ParentThread();
        p.start();
    }
}
```

Possible output: 

```
Parent Thread value: parentValue
Child thread value: providedByParentThread
```

In the above program, if we replace `InheritableThreadLocal` with `ThreadLocal` and if we are not overriding `childValue()` method then the output will be

```
Parent Thread value: parentValue
Child thread value: null
```

If we are mainitaining InheritableThreadLocal and not overriding `childValue()` method, then output will be:

```
Parent Thread value: parentValue
Child thread value: parentValue
```


<br>

<div style="float:left">
  <a href="../15_thread_pool/README.md" style=""> <-- Thread Pool</a>
</div>


<br>