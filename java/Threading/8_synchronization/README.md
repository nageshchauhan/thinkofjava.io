[Back to Threading](../README.md)
# Synchronization

`synchronized` is the modifier applicable only for method and block level. We cannot use this modifier for class or variable level.

If a method or block declared as synchronized then at a time only one thread is allowed to execute that method or block on the given object.

The main advantage of `synchronized` keyword is that we can resolve data inconsistent problem.

The main limitation of `synchronized` keyword is it increases waiting time of thread and effects the performance of the system. Hence if there is no specific requirement, it's never recommended to use `synchronized` keyword.

Every object in java has a unique synchronization concept, internally implemented by using Lock concept. Whenever we use synchronized keyword then the lock concept gets enabled. By default it is disabled.

If a thread wants to execute any synchronized method on the given object, then first it has to get the lock of that object. Once a thread gets lock then it is allowed to execute any synchronized method on that object. Once execution of synchronized method completes then automatically lock will be released.

**While a thread executing any synchronized method on the given object, the remaining threads are not allowed to execute any synchronized method on the given object simultaneously. But remaining threads are allowed to execute any non-synchronized methods simultaneously(lock concept is implemented based on object but not based on method).** 

Example of synchronized method:

```java
class Display{

    public synchronized void wish(String name){
        for(int i=0;i<2;i++){
            System.out.print("Good morning: ");

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(name);
        }
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
public class SynchronizedDemo extends Thread{

    public static void main(String[] args) {
        Display d = new Display();

        MyThread t1 = new MyThread(d,"John");
        MyThread t2 = new MyThread(d,"Johny");
        t1.start();
        t2.start();

    }
}

```

If we are **not declaring wish method as synchronized** then both threads will be executing simultaneously and we cannot predict the exact output, we will also get irregular output in above case.

Possible Output:

```
Good morning: Good morning: Johny
Good morning: John
Good morning: Johny
John
```

If we **declare wish method as synchronized** then threads will be executed one by one so that we will get regular output.

In the above example, there is only one object (`d`) on which both threads(`t1` and `t2`) wants to call wish method. Since wish method is synchronized so only one thread will get chance at a time for execution. Suppose there are two Display class object present and two threads operating on each object as shown below:

```java
Display d1 = new Display();
Display d2 = new Display();

MyThread t1 = new MyThread(d1,"John");
Mythread t2 = new MyThread(d2,"Johny");
t1.start();
t2.start();
```

In this case, even though `wish()` method is synchronized we will get irregular output because threads are operating on different objects. So whenever multiple threads are operating on same object then synchronization will play the role. If multiple threads are operating on multiple objects then there is no impact of synchronization.

******

## Synchronized block

If few lines of code require synchronization then it is never recommended to declare entire method as synchronized. We can declare those lines of code inside synchronized block. The main advantage of synchronized block over synchronized method is, it reduces waiting time of threads and improve performance of the system. 

1. We can declare synchronized block to get current object lock as follows:

```java
synchronized(this){

    //lines to be executed in synchronized
    
}
```

If thread got lock of current object then only it is allowed to execute this block.

2. To get lock of particular **object b**, we can declare synchronized block as follows:

```java
synchronized(b){

    //lines to be executed in synchronized
    
}
```
If thread got lock of `b` object then only it is allowed to execute this block.

3. To get class level lock, we can declare synchronized block as follows:

```java
synchronized(ClassName.class){
    
    //lines to be executed in synchronized
    
}
```

4. synchronized block concept is only application for object and classes but not for primitives, otherwise we will get compile time error.

```java
int x=10;
synchronized(x){

}
```

It will give compile time error saying unexpected type.

5. Every object in java has unique lock, but a thread can acquire more than one lock at a time(ofcourse from different object).

```java
class Y{
    public void synchronized m2(){
    
    }
}
class X{
    public void synchronized m1(){
        Y y = new Y();
        y.m2();
    }
}
```

<br>

<div style="float:left">
  <a href="../7_Interruption_of_thread/README.md" style=""> <-- Interruption of Thread </a>
</div>


<div style="float:right">
  <a href="../9_class_level_vs_object_level_lock/README.md" style="">Next: Class level vs Object level lock --> </a>
</div>

<br>