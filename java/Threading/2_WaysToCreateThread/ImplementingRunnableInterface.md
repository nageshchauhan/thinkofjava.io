[Back to Threading](../README.md)
# By implementing Runnable Interface
We can define a thread by implmenting Runnable interface. Runnable interface present in java.lang package and contains only one method that is **run()**.

![Threading Hierarchy](../../../assets/images/threadHierarchy.png)

**Example:**

```java
class MyRunnable imlements Runnable{
    public void run(){
        System.out.println("Child thread");
    }

    public static void main(String []args){
        MyRunnable r = new MyRunnable();
        Thread t = new Thread(r);
        t.start();
        System.out.println("Main thread executed");
    }
}
```
Output will be
```
Child thread
Main thread executed
```
Or

```
Main thread executed
Child thread
```

Suppose in the above program, if situation is like

```java
MyRunnable r = new MyRunnable();
Thread t1 = new Thread();
Thread t2 = new Thread(r);
```

### Case 1:
```t1.start();``` ---> A new thread will be created which will be responsible for execution of Thread class run() method.

### Case 2:
```t1.run();``` ---> No new thread will be created, this will simply call the run method of thread class.

### Case 3:
```t2.start();``` ---> A new Thread will be created which will be responsible for execution of MyRunnable class run() method.

### Case 4:
```t2.run()``` ---> No new thread will be created, MyRunnable run() method will be executed just like a normal method call.

### Case 5:
```r.start();``` ---> We will get compile time error saying that start() method is not available in MyRunnable class.

### Case 6:
```r.run();``` ---> No new thread will be created, and MyRunnable run() method will be executed just like a normal method call.


# Best Approach to define a Thread

Among the two ways of defining thread, implements Runnable interface mechanism is recommended.<br>
In the first approach, our class always extends Thread class, hence there is no chance of extending any other class. But in the second approach, we can extends other class 

# Constructors present in Thread class
1. Thread t = new Thread();
2. Thread t = new Thread(Runnable r);
3. Thread t = new Thread(String name);
4. Thread t = new Thread(Runnable r, String name);
5. Thread t = new Thread(ThreadGroup g, String name);
6. Thread t = new Thread(ThreadGroup g, Runnable r);
7. Thread t = new Thread(ThreadGroup g, Runnable r, String name);
8. Thread t = new Thread(ThreadGroup g, Runnable r, String name, long stackSize);
