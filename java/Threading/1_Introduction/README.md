[Back to Threading](../README.md)

# Introduction to Threading
## Multitasking
Executing several tasks simultneously is called multitasking. It is divided into two category:<br><br>

**1. Process based multitasking:**
  Executing several tasks simultaneously, where each task is a separate independent process, is called process based multitasking.<br>
    **Ex:** In computer system, while typing a java program in text editor, we can listen audio songs by using media player, at the same time we can download file from internet using browser. All these tasks are executing simultaneously and independent of each other.<br><br>
  Process based multitasking is best suitable at OS level.<br><br>

**2. Thread based multitasking:**
  Executing several tasks simultaneously, where each task is a separate independent part of the same program. Each independent task is called Thread.<br><br>
  It is based suitable at Programatic level.<br><br>
  
  Whether it is process based or thread based, the main objective of multitasking is to improve the performance of the system by reducing response time.<br><br>
  
  The important application areas of multitasking are developing video games, multimedia graphics, implementing animations etc.<br><br>
  
  Java provides inbuilt support for multitasking by introducing a rich API(Thread, Runnable, ThreadGroup, ThreadLocal, etc). Being a programmer we have to know, how to use this API and we are not responsible to define that API. Hence, developing multithreading program is easy in java when compared with c++. <br><br>
  
