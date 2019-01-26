[Back to Threading](../README.md)
# Interruption of Thread

A thread can interrupt another sleeping or waiting thread. For doing this, Thread class defines `interrupt()` method.

### Signature of `interrupt()` method
`public void interrupt()`

### Example:
```java
class MyThread extends Thread{
  public void run() {
    try{
      for(int i=0;i<5;i++){
          System.out.println("MyThread executing");
          Thread.sleep(1000);
      }
    }catch(InterruptedException e){
        System.out.println("MyThread got interrupted");
    }
  }
}
public class InterruptionEx {

  public static void main(String[] args){
    MyThread t = new MyThread();
    t.start();
    t.interrupt();
    System.out.println("End of main");
  }
}
```

Possible output of above program is
```
End of main
MyThread executing
MyThread got interrupted
```

If main thread got first chance then above output will get. If we comment `t.interrupt()` method then both thread(main and MyThread) will be executed till its completion.

`t.interrupt()` is executed by main thread, so main thread will interrupt its child ie MyThread and it will raise InterruptedException.

Whenever we are calling `interrupt()` method, if the target thread is not in sleeping or waiting state then there is no impact immediately. interrupt call will wait until target thread entered into sleeping or waiting state. Once target thread entered into sleeping or waiting state, the interrupt call will impact the target thread.


<br>

<div style="float:left">
  <a href="../6_PreventThreadExecution/Thread_sleep.md" style=""> <-- sleep() </a>
</div>


<div style="float:right">
  <a href="../8_synchronization/README.md" style=""> Next: Synchronization --> </a>
</div>

<br>