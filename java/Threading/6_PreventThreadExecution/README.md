[Back to Threading](../README.md)
# Prevent Thread Execution

Prevent thread execution means to pause the execution of a particular thread in multithreaded environment.

Following are the methods which we can use to prevent execution of a thread

1. `yield()`
2. `join()`
3. `sleep()`

## `yield()` method
Theoretically, to yield means to let go, to give up, to surrender. A yielding thread tells the virtual machine that it's willing to let other threads be scheduled in its place.

yield tells the currently executing thread to give a chance to the thread that have equal priority in the Thread pool.

There is no guarantee that Yield will make the currently executing thread to runnable state immediately

[Click here to read in detail](Thread_yield.md)

## `join()` method

If a thread wants to wait until completing some other thread, then we should go for join() method. For example, if thread t1 executes t2.join() then t1 thread will enter into waiting state until t2 completes. Once thread t2 completes then t1 will start its execution.

[Click here to read in detail](Thread_join.md)

## `sleep()` method

If a thread don’t want to perform any operation for a particular amount of time(just pausing) then we should go for sleep().

[Click here to read in detail](Thread_sleep.md)


<Br>

[<-- Thread Priority](../5_ThreadPriority/README.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: yield() -->](../6_PreventThreadExecution/Thread_yield.md)

<br>