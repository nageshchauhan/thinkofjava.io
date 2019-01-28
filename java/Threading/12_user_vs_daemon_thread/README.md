[Back to Threading](../README.md)

# User Thread Vs Daemon Thread

There are two types of threads in java. One is **User Thread** and another one is **Daemon Thread**. User threads are high priority threads which always run in foreground. Whereas Daemon threads are low priority threads which always run in background. User threads are designed to do some specific task whereas daemon threads are used to perform some supporting tasks.

**JVM doesn’t wait for daemon thread to finish but it waits for User Thread:** First and foremost difference between daemon and user threads is that JVM will not wait for daemon thread to finish its task but it will wait for any active user thread.

**Thread Priority :** The User threads are high priority as compare to daemon thread means they won’t get CPU as easily as a user thread can get.

**Creation of Thread :** User thread is usually created by the application for executing some task concurrently. On the other hand, daemon thread is mostly created by JVM like for some garbage collection job.

**Termination of Thread :** JVM will force daemon thread to terminate if all user threads have finished their execution but The user thread is closed by application or by itself. A user thread can keep running by the JVM running but a daemon thread cannot keep running by the JVM. This is the most critical difference between user thread and daemon thread.

**Usage :** The daemons threads are not used for any critical task. Any important task is done by user thread. A daemon thread is generally used for some background tasks which are not critical task.

We can check whether the thread is daemon or not by using **isDaemon()** method.<br>
`public final boolean isDaemon();`

We can change the daemon nature of thread by using `setDaemon()` method</br>
`public final void setDaemon(boolean b);`

We can change the daemon nature of thread before starting of thread. If we are trying to change after starting, it will throw runtime exception saying `IllegalThreadStateException`.

Main thread is always non-daemon and its not possible to change it's daemon nature.

**Default nature:** By default main thread is non-daemon, but for all remaining threads, daemon nature is inherited from its parent. For example, if parent thread is daemon then child thread will also be daemon.

Whenever the last non-daemon thread terminates, all the daemon are forced to terminate by JVM.</br>
### Example
```java
class MyThread extends Thread{
@Override
    public void run() {
        for(int i=0;i<10;i++){
            System.out.println("Lazy thread executing");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class Introduction{

    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.setDaemon(true);
        t.start();
        System.out.println("End of main thread");
    }
}
```

In the above example, the main thread is non-daemon and child thread is daemon. Hence whenever main thread terminates, child thread will also be terminated by JVM.


<Br>

[<-- Deadlock](../11_deadlock/README.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: ThreadGroup -->](../13_threadgroup/README.md)

<br>