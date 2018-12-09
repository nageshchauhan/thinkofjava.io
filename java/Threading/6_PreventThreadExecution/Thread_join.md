[Back to Threading](../README.md)
# Prevent Thread Execution

## Thread.join()

If a thread wants to wait until completing some other thread, then we should go for `join()` method.
For example, if thread `t1` executes `t2.join()` then `t1` thread will enter into waiting state until `t2` completes. Once thread `t2` completes then `t1` will start its execution.

### Overloaded `join()` method signature

- `public final void join() throws InterruptedException;`<br>
- `public final void join(long milisecond) throws InterruptedException;`<br>
- `public final void join(long milisecond, int nanosecond) throws InterruptedException;`<br>

`join()` method is overloaded and every `join()` throws `InterruptedException`. Hence whenever we are using `join()` method compulsary we should handle `InterruptedException`, either by try-catch or by throws clause, otherwise we will get compile time error.

Example:
```java
class MyThread extends Thread{
    public void run() {
        for(int i=0;i<5;i++){
            System.out.println("MyThread class: "+i);
        }
    }
}
public class SynchronizedBlock {

    public static void main(String[] args) throws InterruptedException{
        MyThread t = new MyThread();
        t.start();
        t.join();
     
        for(int i=0;i<5;i++){
            System.out.println("Main thread: "+i);
        }
    }

}
```
The output of above code will always predictable as below:
```
MyThread class: 0
MyThread class: 1
MyThread class: 2
MyThread class: 3
MyThread class: 4
Main thread: 0
Main thread: 1
Main thread: 2
Main thread: 3
Main thread: 4
```

If we comment `t.join()` line, then both threads(main and t) will execute simultaneously, and we can not predict exact execution order. 

If we are not commenting `t.join()` line, then main thread will wait because main thread is executing `t.join()` line. main thread will wait until thread `t` doesn't complete its execution.

If the pass some argument in join method as `t.join(5000)`, then main thread will wait for 5seconds and after which it will start execution even though thread `t` complete its execution or not.

### Parameterized join method example:

```java
class MyThread extends Thread{
    public void run() {
        try{
            Thread.sleep(5000);
            System.out.println("MyThread completes execution");
        }catch(InterruptedException e){
            e.printStackTrace();
        }
    }
}
public class SynchronizedBlock {

    public static void main(String[] args) throws InterruptedException{
        MyThread t = new MyThread();
        t.start();
        t.join(4000);
     
        System.out.println("main thread completes execution");
    }

}
```
Output: 
```
main thread completes execution
MyThread completes execution
```
## Lifecycle of thread in Thread.join()

<img src="../../../assets/images/threading/thread_join.png" alt="Thread join hierarchy" height="800" width="500"/>