# The ways to define Thread
A Thread can be defined in two ways<br>
## **1. By extending Thread class:**
```
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

### ThreadScheduler
  Whenever multiple threads are waiting to get chance for execution, which thread will get chance first is decided by ThreadScheduler.<br>

Thread scheduler is part of the OS, that is responsible for sharing the available CPUs out between the various threads. So in our example, there are two threads, main and Thread-0, which thread will get chance first will be decided by ThreadScheduler. The algorithm used by ThreadSchduler is totally depends on underlying OS.<br>

So in case of multithreading, we cannot predict the exact output of program, we can only predict the possibilities.<br>

In the above example, possible outputs are<br>
**Possibility 1:**
```
This line will be executed by main thread
Inside run method
```
**Possibility 2:**
```
Inside run method
This line will be executed by main thread
```
### Difference between start() and run()
Both methods are present in Thread class. When we call t.start(), the start method present in **type t** will be executed. But in our case start method is not present in **t** object(MyThread class). So it will call the start method of its parent class ie Thread class.

start() method of Thread class is responsible to create thread and that thread will call the run method.

If we call run() method of MyThread class with t reference, no new thread will be created and run method will be executed just like normal method call.

In the above example, if we replace **t.start()** with **t.run()** then there will guranteed output as follows:
```
Inside run method
This line will be executed by main thread
```
This output will be produced by main thread

### Importance of start() method of Thread class
To start a Thread, the required mandatory activities (like registering thread with ThreadScheduler) will be performed automatically by Thread class start() method. Because of this facility, programmers need not to perform this operation and they are only responsible to define job for that thread. Hence Thread class start() method plays important role and without executing this there is no chance of starting a new thread.
```
class Thread{
  start(){
    //1. Register this thread with ThreadScheduler, and perform other initialization activities
    //2. call the run() method of target thread.
  }
}
```

### If we are not overriding run() method
If we are not overriding run() method, then Thread class run() method will be executed. run() method of Thread class has empty implementation, hence we won't get any output.
```
class MyThread extends Thread{
  public static void main(String []args){
    MyThread t = new MyThread();
    t.start();
  }
}
```
Ouput will be:
```
```
**Note:** It is highly recommended to override run() method to define our job.


### Overloading of run() method
Overloading of run() is possible, but Thread class start() method will always call no argument run() only. The other run method needs to be called explicitly.
```
class MyThread extends Thread{
  public void run(){
    System.out.println("no-args run method");
  }
  public void run(int i){
    System.out.println("int args run method");
  }
  
  public static void main(String []args){
    MyThread t = new MyThread();
    t.start();
  }
}
```
The output will be:
```
no-args run method
```

### Overriding of start() method
If we override start(), the start() method will be executed just like a normal method call and no new thread will be created.
```
class MyThread extends Thread{
  public void start(){
    System.out.println("start method called");
  }
  public void run(){
    System.out.println("run method called");
  }
  
  public static void main(String []args){
    MyThread t =  new MyThread();
    t.start();
  }
}
```
Output will be:
```
start method called
```
**Note:** It is not recommended to override start() method, otherwise there is no point of multi threading.

### Using super keyword to call start method
```
class MyThread extends Thread{
  public void start(){
    super.start();
    System.out.println("start method");
  }
  public void run(){
    System.out.println("run method");
  }
  
  public static void main(String []args){
    MyThread t = new MyThread();
    t.start();
    System.out.println("main method");
  }
}
```
**Possible output**
```
run method
start method
main method
```
Or
```
start method
main method
run method
```
Or
```
start method
run method
main method
```

In this example, a Thread will be created and it will start the job mentioned in run method. start() method of MyThread class will be executed by main thread whereas run() method of MyThread class is called by child thread of main ie Thread-0


## **2. By implementing Runnable interface:**
We can define a thread by implmenting Runnable interface. Runnable interface present in java.lang package and contains only one method run().

**Runnable**<br>
|          
|implements<br>
|             
**Thread**<br>
|             
|extends   
|        
**MyThread**<br>
**1st approach for defining thread**


**Runnable**<br>
|<br>
|implements<br>
|<br>
**MyThread**
**2nd approach for defining thread**
