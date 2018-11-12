[Back to Threading](../README.md)
# Thread Priority

Every thread in java has some priority and the range of Thread priorities is **1 to 10** (1 is least and 10 is highest). **By default, a thread inherits the priority of its parent thread**. 

You can increase or decrease the priority of any thread with the `setPriority` method. You can set the priority to any value between MIN\_PRIORITY (defined as 1 in the Thread class) and MAX\_PRIORITY (defined as 10). NORM\_PRIORITY is defined as 5.

Whenever the thread-scheduler has a chance to pick a new thread, it generally picks the highest-priority thread that is currently runnable.

What happens if there is more than one runnable thread with the same (highest) priority? 

One of the highest priority threads gets picked. It is completely up to the thread scheduler how to arbitrate between threads of the same priority. The Java programming language gives no guarantee that all of the threads get treated fairly. Of course, it would be desirable if all threads of the same priority are served in turn, to guarantee that each of them has a chance to make progress. But it is at least theoretically possible that on some platforms a thread scheduler picks a random thread or keeps picking the first available thread. This is a weakness of the Java programming language, and it is difficult to write multithreaded programs that are guaranteed to work identically on all virtual machines.

#### Default priority
The default priority only for main thread is 5, and the remaining thread inherits the priority of its parent thread.

Thread class defines following two methods to get and set priority of thread

- `public final int getPriority();`
- `public final void setPriority(int priority);`

The allowed value for `setPriority` method is from 1 to 10, otherwise we will get runtime exception saying `IllegalArgumentException`. 

We can change the thread priority at any point of time.

Example:

```
class MyThread extends Thread{
    public void run(){
        System.out.println("This line executed by "+Thread.currentThread().getName());
    }

    public static void main(String []args){
        MyThread t = new MyThread();
        t.setPriority(10);
        t.start();
        System.out.println("Main thread executed");
    }
}

```
If the underlying OS supports thread priority then possible output will be:

```
This line executed by Thread-0
Main thread executed
```
