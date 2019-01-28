[Back to Threading](../README.md)

# Deadlock

If two or more threads are waiting for each other for ever, such type of situation is called deadlock. There is no resolution technique for it but several prevention techniques are available.

### Deadlock Example

```java
class A{
    public synchronized void method1(B b){
        System.out.println(Thread.currentThread().getName()+" is calling method1 ");
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName()+" is trying to call last() of class A");
        b.last();
    }
	
    public synchronized void last(){
        System.out.println("Classs A | last() called");
    }
}
class B{
    public synchronized void method2(A a){
        System.out.println(Thread.currentThread().getName()+" is calling method2 ");
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName()+" is trying to call last() of class B");
        a.last();
    }

    public synchronized void last(){
        System.out.println("Classs B | last() called");
    }
}
public class DeadlockEx extends Thread{

    A a = new A();
    B b = new B();

    public void myMethod(){
        this.start();
        a.method1(b);
    }

    @Override
    public void run() {
        b.method2(a);
    }

    public static void main(String[] args) {
        DeadlockEx thread = new DeadlockEx();
        thread.myMethod();
    }

}
```

In the above example, there are two threads present in main method ie `main` and `thread`. main thread creates child thread, and main thread is responsible to call myMethod of thread object.

The `myMethod()` of `DeadlockEx` class starts the thread and also calls the method1 with object a.

After starting thread, there are two threads running. main thread is executing method1 of class A, whereas child thread is executing method2 of class B.

Since main and child thread have acquired lock on class A and class B object respectively. 

method1 of class A is calling another synchronized method of class B, but main thread doesn't have lock of class B object, so main method will wait for acquiring lock of object b.

Whereas, method2 of class B is calling another synchronized method of class A, but child thread doesn't have lock of class A object, so child thread will also entered into waiting state for acquiring lock of object A.

Both threads are waiting for each other to acquire lock, this situation is called deadlock.

**`synchronized` keyword is the only one reason for deadlock, hence while using synchronized keyword we have to take much care.**


<Br>

[<-- Inter Thread communication](../10_Inter_thread_comm/README.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: User vs Daemon Thread -->](../12_user_vs_daemon_thread/README.md)

<br>