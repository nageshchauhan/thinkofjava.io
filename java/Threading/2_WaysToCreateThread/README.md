[Back to Threading](../README.md)
# The ways to define Thread
A Thread can be defined in two ways<br>
## **1. By extending Thread class:**
```java
class MyThread extends Thread{
  public void run{
    System.out.println("Inside run method");
  }
  
  public static void main(String []args){
    MyThread t = new MyThread(); // Instantiating the thread object
    t.start(); //This line will start the thread
    System.out.println("This line will be executed by main thread");
  }
}
```
Statements written in run() method is known as Job of Thread. Whereas statements written in main method is known as Job of main thread.<br>
main thread is responsible to call main method.

[Read in detail](ExtendingThreadClass.md)

## **2. By implementing Runnable interface:**
We can define a thread by implmenting Runnable interface. Runnable interface present in java.lang package and contains only one method that is **run()**.

![Threading Hierarchy](../../../assets/images/threading/ways_thread_created.png)

[Read in detail](ImplementingRunnableInterface.md)
