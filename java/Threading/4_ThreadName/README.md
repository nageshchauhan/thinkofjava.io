[Back to Threading](../README.md)
# Getting and setting Thread name

Every thread in java has some name. It may be provided by programmer or default name generated by JVM.

We can get and set name of thread by using following methods of thread class

- `public final String getName();`
- `public final void setName(String name);`

Example:

```java
class MyThread {

    public static void main(String []args){
        System.out.println(Thread.currentThread().getName());
        System.out.println("This line is executed by main Thread");
    }
}
```

Output:

```
main
This line is executed by main Thread
```

In the above example, only one thread is present and the name of that thread is **main**. This main thread is responsible to call the main method. We can change the name of thread at any point of time.

Lets change the name of main thread

```java
class MyThread{
    public static void main(String []args){
        System.out.println(Thread.currentThread().getName());
        Thread.currentThread().setName("MyThread");
        System.out.println(Thread.currentThread().getName());
        System.out.println(2/0);
    }
}
```
Output:

```
main
MyThread
Exception in thread "MyThread" java.lang.ArithmeticException: / by zero
	at MyThread.main(MyThread.java:6)
```

As we can see in the output, after changing the name of main thread, I was intentionally carried out Arithmetic error to demonstrate the exception message.
In the exception message, it is printing the custom name(MyThread) given to main thread instead of original name(main).

We saw about the main thread, lets see what is the name given to custom thread created by programmer.

Example:

```java
class MyThread extends Thread{
    public void run(){
        System.out.println("Child Thread name: "+Thread.currentThread().getName());
    }

    public static void main(String []args){
        MyThread t1 = new MyThread();
        t1.start();
        MyThread t2 = new MyThread();
        t2.start();
        System.out.println("This line executed by main thread");
    }
}
```
Possible Ouptut:

```
Child Thread name: Thread-0
This line executed by main thread
Child Thread name: Thread-1
```


In the above example, main thread is creating a new thread object **t1**, and this new thread will be the child thread of main. So the jvm will provide default name as **Thread-0, Thread-1 and so on** . The name of thread can be changed with the help of `setName` method of thread class.

<Br>

[<-- Thread Lifecylce](../3_ThreadLifecycle/README.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: Thread Priority -->](../5_ThreadPriority/README.md)

<br>