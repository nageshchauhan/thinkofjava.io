[Back to Threading](../README.md)

# java.util.concurrent package

The problem with traditional `synchronized` keyword<br>
1) We are not having any flexibility to try for a lock without waiting.<br>
2) There is no way to specify maximum waiting time for a thread to get lock, so that thread will wait until getting the lock which may create performance problem which may cause deadlock.<Br>
3) If a thread releases lock then which waiting thread will get that lock, we are not having any control on this.<br>
4) There is no API to list down all waiting threads for lock.
5) `synchronized` keyword compulsory have to use either method level or within method and it is not possible to use across multiple methods.

To overcome these problems, sun people introduced `java.util.concurrent.locks` package in 1.5 version. It also provides several enhancement to the programmer to provide more control on concurrency.

### Lock interface
Lock object is similar to implicit lock acquired by a thread to execute synchronized method or block. Lock implementations provide more extensive operations than traditional implicit lock.

### Important methods of Lock interface

1) `void lock()` <br>
We can use this method to acquired a lock. If lock is available then immediately current thread will get that lock. If lock is not available then it will wait until getting the lock. It has exactly same behavior as traditional synchronized keyword.

2) `boolean trylock()`<br>
To acquire the lock without waiting. If the lock is available then thread acquires the lock and return true. If lock is not available then it returns false and continue its execution without waiting. In this case thread never be entered into waiting state.

3) `boolean trylock(long time, TimeUnit unit)`<br>
If lock is available then thread will get the lock and continue its execution. Else thread will wait until specified amount of time. Still if the lock is not available then thread can continue its execution.
TimeUnit is an enum present in `java.util.concurrent` package.

4) `void lockInterruptibly()`<br>
Acquires the lock if it is available and returns immediately.

If the lock is not available then the current thread becomes disabled for thread scheduling purposes and lies dormant until one of two things happens:<br>
-The lock is acquired by the current thread; or<br>
-Some other thread interrupts the current thread, and interruption of lock acquisition is supported.

If the current thread:<Br>
-has its interrupted status set on entry to this method; or
-is interrupted while acquiring the lock, and interruption of lock acquisition is supported,

then InterruptedException is thrown and the current thread's interrupted status is cleared.

5) `void unlock()`<br>
To releases the lock. To call this method, compulsory current thread should be owner of the lock otherwise we will get runtime exception saying `IllegalMonitorStateException`.

### ReentrantLock class

ReentrantLock class implements Lock interface. It is direct child of object class. Reentrant means a thread can acquire same lock multiple times without any issue. Internally reentrant lock increment threads personal count whenever we call lock method and decrement count value on calling unlock method. And lock will be released whenever hold count reaches zero.

### Constructores
1) `ReentrantLock l =  new ReentrantLock();`<Br>
Creates an instance of reentrant lock.

2) `ReentrantLock l = new ReentrantLock(boolean f);`<br>
Creates reentrant lock with the given fairness policy. If the fairness is true then longest waiting thread can get the lock if it is available ie it follows FCFS policy. If fairness is false then which waiting thread will get chance we cannot predict. The default value for fairness is false.

### Methods of ReentrantLock class

1) `void lock()`<br>
2) `boolean tryLock()` <br>
3) `boolean tryLock(long t, TimeUnit unit)`<br>
4) `void lockInterruptibly()`<br
5) `void unlock()`<br>
6) `int getHoldCount()`<br> 
 Returns the number of holds on this lock by current thread.
 
7) `boolean isHeldByCurrentThread()`<br>
Returns true if and only if lock is hold by current thread.

8) `int getQueueLength()` <br>
Returns number of threads waiting for lock.

9) `Collection getQueuedThreads()` <br>
It returns a collection of threads which are waiting to get the lock.

10) `boolean hasQueuedThreads()` <br>
Returns true if any thread waiting to get the lock.

11) `boolean isLocked()`<br>
Returns true if lock is acquired by some thread.

12) `boolean isFair()` <br>
Returns true if the fairness policy is set with true value.

13) `Thread getOwner()` <br>
Returns the thread which acquires the lock.

### Example 1

```java
import java.util.concurrent.locks.ReentrantLock;

public class ReentrantLockEx1{

    public static void main(String[] args) throws InterruptedException {
        ReentrantLock lock = new ReentrantLock();
        lock.lock();
        lock.lock();
        System.out.println("isLocked: "+lock.isLocked());
        System.out.println("isHeldByCurrentThread: "+lock.isHeldByCurrentThread());
        System.out.println("QueueLength: "+lock.getQueueLength());
        lock.unlock();
        System.out.println("HoldCount after first unlock "+lock.getHoldCount());
        System.out.println("isLocked: "+lock.isLocked());
        lock.unlock();
        System.out.println("isLocked: "+lock.isLocked());
        System.out.println("isFair: "+lock.isFair());
    }
}
```

Output:

```
isLocked: true
isHeldByCurrentThread: true
QueueLength: 0
HoldCount after first unlock 1
isLocked: true
isLocked: false
isFair: false
```

### Example 2

```java
import java.util.concurrent.locks.ReentrantLock;

class Display{
	
    ReentrantLock l = new ReentrantLock();

    public void wish(String name){
        l.lock();
        for(int i=0;i<2;i++){
            System.out.print("Welcome ");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(name);
        }
        l.unlock();
    }
}
class MyThread extends Thread{
	
    Display d;
    String name;

    public MyThread(Display d, String name){
        this.d = d;
        this.name = name;
    }

    @Override
    public void run() {
        d.wish(name);
    }
}

public class ReentrantLockEx2{

    public static void main(String[] args) throws InterruptedException {
        Display d = new Display();
        MyThread t1 = new MyThread(d,"FirstThread");
        MyThread t2 = new MyThread(d,"SecondThread");
        t1.start();
        t2.start();
    }
}
```

Output:

```
Welcome FirstThread
Welcome FirstThread
Welcome SecondThread
Welcome SecondThread
```

### Example 3

```java
import java.util.concurrent.locks.ReentrantLock;

class MyThread extends Thread{
	
    static ReentrantLock l = new ReentrantLock();
	
    public MyThread(String name){
        super(name);
    }
	
    @Override
    public void run() {
        if(l.tryLock()){
            System.out.println(Thread.currentThread().getName()+" got the lock and performing safe operation");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }else{
            System.out.println(Thread.currentThread().getName()+" unable to get lock and hence performing alternate operation");
        }
    }
}

public class ReentrantLockEx3{

    public static void main(String[] args) {
        MyThread t1 = new MyThread("FirstThread");
        MyThread t2 = new MyThread("SecondThread");
        t1.start();
        t2.start();
    }
}
```

Possible output:

```
FirstThread got the lock and performing safe operation
SecondThread unable to get lock and hence performing alternate operation
```

### Example 4

```java
import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.TimeUnit;

class MyThread extends Thread{
	
    static ReentrantLock l = new ReentrantLock();

    public MyThread(String name){
        super(name);
    }
	
    @Override
    public void run() {
        do{
            try {
                if(l.tryLock(1,TimeUnit.SECONDS)){
                    System.out.println(Thread.currentThread().getName()+" got the lock");
                    Thread.sleep(3000);
                    l.unlock();
                    System.out.println(Thread.currentThread().getName()+" released lock");
                    break;
                }else{
                    System.out.println(Thread.currentThread().getName()+" unable to get lock trying again");
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }while(true);
    }
}

public class ReentrantLockEx4{

    public static void main(String[] args) {
        MyThread t1 = new MyThread("FirstThread");
        MyThread t2 = new MyThread("SecondThread");
        t1.start();
        t2.start();
    }
}
```

Possible output:

```
FirstThread got the lock
SecondThread unable to get lock trying again
SecondThread unable to get lock trying again
FirstThread released lock
SecondThread got the lock
SecondThread released lock
```
