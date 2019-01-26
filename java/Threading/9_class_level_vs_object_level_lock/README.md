[Back to Threading](../README.md)
# Class level lock vs Object level lock in java

In Java, a synchronized block of code can only be executed by one thread at a time. Also, java supports multiple threads to be executed concurrently. This may cause two or more threads to access the same fields or objects at same time.

Synchronization is the process which keeps all concurrent threads in execution to be in sync. Synchronization avoids memory consistence errors caused due to inconsistent view of shared memory. When a method is declared as synchronized; the thread holds the monitor or lock object for that method’s object. If another thread is executing the synchronized method, your thread is blocked until that thread releases the monitor.

## 1. Object level lock 
**Object level lock** is mechanism when we want to synchronize a **non-static method** or **non-static code** block such that only one thread will be able to execute the code block on given instance of the class. This should always be done **to make instance level data thread safe**.

### Object level locking can be done as below :

```java
class DemoClass{
    public synchronized void demoMethod(){
        //Thread safe code comes here
    }
}
```

OR

```java
class DemoClass{
    public void demoMethod(){
        synchronized(this){
            //Thread safe code comes here
        }
    }
}
```

OR

```java
class DemoClass{
    private final Object lock = new Object();
    public void demoMethod(){
        synchronized(lock){
            //Thread safe code comes here
        }
    } 
}
```
## 2. Class level lock

**Class level lock** prevents multiple threads to enter in synchronized block in any of all available instances of the class on runtime. This means if in runtime there are 100 instances of **DemoClass**, then only one thread will be able to execute **demoMethod()** in any one of instance at a time, and all other instances will be locked for other threads.

Class level locking should always be done **to make static data thread safe**. As we know that `static` keyword associate data of methods to class level, so use locking at static fields or methods to make it on class level.

### Various ways for class level locking

```java
class DemoClass{
    //Method is static
    public synchronized static void demoMethod(){
        //Thread safe code comes here.
    }
}
```

OR

```java
class DemoClass{
    public void demoMethod(){
        //Acquire lock on .class reference
        synchronized(DemoClass.class){
            //Thread safe code comes here.
        }
    }
}
```

OR

```java
class DemoClass{
    private final static Object lock = new Object();
    //lock object is static
    public void demoMethod(){
        //Thread safe code comes here.
    }
}
```
***************

## Important notes
1. Synchronization in Java guarantees that no two threads can execute a synchronized method, which requires same lock, simultaneously or concurrently.
2. `synchronized` keyword can be used only with methods and code blocks. These methods or blocks can be static or non-static both.
3. When ever a thread enters into Java `synchronized` method or block it acquires a lock and whenever it leaves synchronized method or block it releases the lock. Lock is released even if thread leaves synchronized method after completion or due to any Error or Exception.
4. Java `synchronized` keyword is re-entrant in nature it means if a synchronized method calls another synchronized method which requires same lock then current thread which is holding lock can enter into that method without acquiring lock.
5. Java synchronization will throw `NullPointerException` if object used in synchronized block is null. For example, in above code sample if lock is initialized as null, the “synchronized (lock)” will throw NullPointerException.
6. Synchronized methods in Java put a performance cost on your application. So use synchronization when it is absolutely required. Also, consider using synchronized code blocks for synchronizing only critical section of your code.
7. **It’s possible that both static synchronized and non static synchronized method can run simultaneously or concurrently because they lock on different object.**
8. According to the Java language specification you can not use synchronized keyword with constructor. It is illegal and result in compilation error.


<br>

<div style="float:left">
  <a href="../8_synchronization/README.md" style=""> <-- Synchronization </a>
</div>


<div style="float:right">
  <a href="../10_Inter_thread_comm/README.md" style=""> Next: Inter Thread communication --> </a>
</div>

<br>