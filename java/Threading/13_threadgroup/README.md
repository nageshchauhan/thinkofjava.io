[Back to Threading](../README.md)

# ThreadGroup

Based on functionality, we can group threads into a single unit which is nothing but ThreadGroup ie, ThreadGroup contains a group of threads. In addition to threads, ThreadGroup can also contain sub thread groups.

The main advantage of maintaining threads in the form of thread group is we can perform common operations very easily.

Every thread in java belongs to some group. main thread belongs to main ThreadGroup. Every thread group in java is a child group of system group either directly or indirectly. Hence system group act as root for all thread groups in java.

ThreadGroup class present in java.lang package, and it is direct child of Object class.

### How to get current executing thread's group and its parent thread group

```java
public class ThreadGroupName{

    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getThreadGroup().getName());

        ThreadGroup mainGroup = Thread.currentThread().getThreadGroup(); 
        System.out.println(mainGroup.getParent().getName());
    }
}
```

Output:

```
main
system
```

System group contains several system level threads like finalizer, reference handler, signal dispatcher, attach listener, etc.

## Constructors of ThreadGroup

1) `ThreadGroup g = new ThreadGroup(String gname);`

Suppose we are writing the above statement in main method by passing thread group name as 'myGroup'. Then this group will be created under main group(since main thread belongs to main group). In short 'myGroup' will be the child group of main group.

2) `ThreadGroup g = new ThreadGroup(ThreadGroup pg, String gname);`

Creates a new thread group with specified group name. The parent of this new thread group is specified parent group.

## Important methods of ThreadGroup

1) `String getName();` <br>
It returns the name of thread group.

2) `int getMaxPriority();` <br>
Returns the maximum priority of this thread group. Threads that are part of this group cannot have a higher priority than the maximum priority.

3) `void setMaxPriority(int p);`<br>
Sets the maximum priority of the group. Threads in the thread group that already have a higher priority are not affected. The default max priority for thread group is Thread.MAX_PRIORITY

### Example:
```java
public class ThreadGroupPriority{

    public static void main(String[] args) {
        ThreadGroup tg = new ThreadGroup("tg");
        Thread t1 = new Thread(tg,"FirstThread");
        Thread t2 = new Thread(tg,"SecondThread");
        tg.setMaxPriority(3);
        Thread t3 = new Thread(tg,"ThirdThread");
        System.out.println(t1.getPriority());
        System.out.println(t2.getPriority());
        System.out.println(t3.getPriority());
    }
}
```

Output:

```
5
5
3
```
Only the newly added thread in thread group gets affected if max priority conflict occurs.
 
4) `ThreadGroup getParent();`<br>
Returns the parent of this thread group. The top-level thread group is the only thread group whose parent is null.

5) `void list();`<br>
Prints information about this thread group to the standard output. This method is useful only for debugging.

6) `int activeCount();`<br>
Returns an estimate of the number of active threads in this thread group and its subgroups. Recursively iterates over all subgroups in this thread group.

The value returned is only an estimate because the number of threads may change dynamically while this method traverses internal data structures, and might be affected by the presence of certain system threads. This method is intended primarily for debugging and monitoring purposes.

7) `int activeGroupCount();`<br>
Returns an estimate of the number of active groups in this thread group and its subgroups. Recursively iterates over all subgroups in this thread group.

The value returned is only an estimate because the number of thread groups may change dynamically while this method traverses internal data structures. This method is intended primarily for debugging and monitoring purposes.

### Example:
```java
class MyThread extends Thread{
	
    public MyThread(ThreadGroup g, String name){
        super(g,name);
    }

    @Override
    public void run() {
        System.out.println("Child thread -"+Thread.currentThread().getName());
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

public class ThreadGroupCounts{

    public static void main(String[] args) throws InterruptedException {
        ThreadGroup parent = new ThreadGroup("ParentThreadGroup");
        ThreadGroup child = new ThreadGroup(parent,"ChildThreadGroup");

        MyThread t1 = new MyThread(parent,"Thread1");
        MyThread t2 = new MyThread(parent,"Thread2");
        t1.start();
        t2.start();
        System.out.println("Active thread count of parent group : "+parent.activeCount());
        System.out.println("Active thread group count of parent group: "+parent.activeGroupCount());
        parent.list();

        Thread.sleep(3000);

        System.out.println("Active thread count of parent group : "+parent.activeCount());
        System.out.println("Active thread group count of parent group: "+parent.activeGroupCount());
        parent.list();
    }
}
```

Possible output:

```
Child thread -Thread2
Child thread -Thread1
Active thread count of parent group : 2
Active thread group count of parent group: 1
java.lang.ThreadGroup[name=ParentThreadGroup,maxpri=10]
    Thread[Thread1,5,ParentThreadGroup]
    Thread[Thread2,5,ParentThreadGroup]
    java.lang.ThreadGroup[name=ChildThreadGroup,maxpri=10]
Active thread count of parent group : 0
Active thread group count of parent group: 1
java.lang.ThreadGroup[name=ParentThreadGroup,maxpri=10]
    java.lang.ThreadGroup[name=ChildThreadGroup,maxpri=10]
```
8) `int enumerate(Thread[] array);`<br>
Copies into the specified array every active thread in this thread group and its subgroups.

9) `int enumerate(ThredGroup[] array);`<br>
Copies into the specified array references to every active subgroup in this thread group and its subgroups.

10) `boolean isDaemon();`<br>
Tests if this thread group is a daemon thread group. A daemon thread group is automatically destroyed when its last thread is stopped or its last thread group is destroyed.

11) `void setDaemon(boolean flag);`<br>
Changes the daemon status of this thread group.

12) `void interrupt();`<br>
Interrupts all threads in this thread group.

13) `void destroy();`<br>
Destroys this thread group and all of its subgroups. This thread group must be empty, indicating that all threads that had been in this thread group have since stopped.

## Program to get all the threads present in system thread group and its sub group.

```java
public class ListThreads{

    public static void main(String[] args) throws InterruptedException {
        ThreadGroup system = Thread.currentThread().getThreadGroup().getParent();
        Thread [] threads = new Thread[system.activeCount()];
        system.enumerate(threads);

        for(Thread t : threads){
            System.out.println(t.getName()+" -- "+t.isDaemon());
        }
    }
}
```

Output:

```
Reference Handler -- true
Finalizer -- true
Signal Dispatcher -- true
main -- false
```

**Note:** Output may vary from system to system. 


<br>

<div style="float:left">
  <a href="../12_user_vs_daemon_thread/README.md" style=""> <-- User vs Daemon Thread</a>
</div>


<div style="float:right">
  <a href="../14_java_util_concurrent_package/README.md" style=""> Next: java.util.concurrent package --> </a>
</div>

<br>