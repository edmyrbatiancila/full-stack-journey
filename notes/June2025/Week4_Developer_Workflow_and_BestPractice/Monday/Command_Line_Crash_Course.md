#  Command Line Crash Course

## Exercise 9: Making Empty Files (Touch, New-Item)

- In this exercise you learn how to make an empty file using the touch (new-item on Windows) command.


---


## Exercise 10: Copy a File (cp)

- In this exercise you learn how to copy a file from one location to another with the cp command.

- **Linux/OSX**

    ```powershell
        $ cd temp
        $ cp iamcool.txt neat.txt
        $ ls
        iamcool.txt neat.txt
        $ cp neat.txt awesome.txt
        $ ls
        awesome.txt iamcool.txt neat.txt
        $ cp awesome.txt thefourthfile.txt
        $ ls
        awesome.txt  iamcool.txt  neat.txt  thefourthfile.txt
        $ mkdir something
        $ cp awesome.txt something/
        $ ls
        awesome.txt iamcool.txt  neat.txt  something  thefourthfile.txt
        $ ls something/
        awesome.txt
        $ cp -r something newplace
        $ ls newplace/
        awesome.txt
        $
    ```

- **Windows**

    ```powershell
        > cd temp
        > cp iamcool.txt neat.txt
        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        -a---        12/22/2011   4:49 PM          0 iamcool.txt
        -a---        12/22/2011   4:49 PM          0 neat.txt


        > cp neat.txt awesome.txt
        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        -a---        12/22/2011   4:49 PM          0 awesome.txt
        -a---        12/22/2011   4:49 PM          0 iamcool.txt
        -a---        12/22/2011   4:49 PM          0 neat.txt


        > cp awesome.txt thefourthfile.txt
        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        -a---        12/22/2011   4:49 PM          0 awesome.txt
        -a---        12/22/2011   4:49 PM          0 iamcool.txt
        -a---        12/22/2011   4:49 PM          0 neat.txt
        -a---        12/22/2011   4:49 PM          0 thefourthfile.txt


        > mkdir something


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        d----        12/22/2011   4:52 PM            something


        > cp awesome.txt something/
        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        d----        12/22/2011   4:52 PM            something
        -a---        12/22/2011   4:49 PM          0 awesome.txt
        -a---        12/22/2011   4:49 PM          0 iamcool.txt
        -a---        12/22/2011   4:49 PM          0 neat.txt
        -a---        12/22/2011   4:49 PM          0 thefourthfile.txt


        > ls something


            Directory: C:\Users\zed\temp\something


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        -a---        12/22/2011   4:49 PM          0 awesome.txt


        > cp -recurse something newplace
        > ls newplace


            Directory: C:\Users\zed\temp\newplace


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        -a---        12/22/2011   4:49 PM          0 awesome.txt

        >
    ```



---


## Exercise 11: Moving a File (mv)

- In this exercise you learn how to move a file from one location to another using the mv command.


- **Linux/OSX**

    ```powershell
        $ cd temp
        $ mv awesome.txt uncool.txt
        $ ls
        newplace    uncool.txt
        $ mv newplace oldplace
        $ ls
        oldplace    uncool.txt
        $ mv oldplace newplace
        $ ls
        newplace   uncool.txt
        $
    ```

- **Windows**

    ```powershell
        > cd temp
        > mv awesome.txt uncool.txt
        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        d----        12/22/2011   4:52 PM            newplace
        d----        12/22/2011   4:52 PM            something
        -a---        12/22/2011   4:49 PM          0 iamcool.txt
        -a---        12/22/2011   4:49 PM          0 neat.txt
        -a---        12/22/2011   4:49 PM          0 thefourthfile.txt
        -a---        12/22/2011   4:49 PM          0 uncool.txt


        > mv newplace oldplace
        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        d----        12/22/2011   4:52 PM            oldplace
        d----        12/22/2011   4:52 PM            something
        -a---        12/22/2011   4:49 PM          0 iamcool.txt
        -a---        12/22/2011   4:49 PM          0 neat.txt
        -a---        12/22/2011   4:49 PM          0 thefourthfile.txt
        -a---        12/22/2011   4:49 PM          0 uncool.txt


        > mv oldplace newplace
        > ls newplace


            Directory: C:\Users\zed\temp\newplace


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        -a---        12/22/2011   4:49 PM          0 awesome.txt


        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        d----        12/22/2011   4:52 PM            newplace
        d----        12/22/2011   4:52 PM            something
        -a---        12/22/2011   4:49 PM          0 iamcool.txt
        -a---        12/22/2011   4:49 PM          0 neat.txt
        -a---        12/22/2011   4:49 PM          0 thefourthfile.txt
        -a---        12/22/2011   4:49 PM          0 uncool.txt


        >
    ```

    - **You Learned this**

        - Moving files or, rather, renaming them. It's easy: give the old name and the new name.


---


## Exercise 12: View a File (less, MORE)

- To do this exercise you're going to do some work using the commands you know so far. You'll also need a text editor that can make plain text (.txt) files. Here's what you do:

    - Open your text editor and type some stuff into a new file. On OSX this could be TextWrangler. On Windows this might be Notepad++. On Linux this could be gedit. Any editor will work.

    - Save that file to your desktop and name it test.txt.

    - In your shell use the commands you know to copy this file to your temp directory that you've been working with.


- Once you've done that, complete this exercise.

- **Linux/OSX**

    ```powershell
        $ less test.txt
        [displays file here]
        $
    ```

- **Windows**

    ```powershell
        > more test.txt
        [displays file here]
        >
    ```


---


## Exercise 13: Stream a File (cat)

- You're going to do some more setup for this one so you get used to making files in one program and then accessing them from the command line. With the same text editor from the last exercise, create another file named test2.txt but this time save it directly to your temp directory.

- **Linux/OSX**

    ```powershell
        $ less test2.txt
        [displays file here]
        $ cat test2.txt
        I am a fun guy.
        Don't you know why?
        Because I make poems,
        that make babies cry.
        $ cat test.txt
        Hi there this is cool.
        $
    ```

- **Windows**

    ```powershell
        > more test2.txt
        [displays file here]
        > cat test2.txt
        I am a fun guy.
        Don't you know why?
        Because I make poems,
        that make babies cry.
        > cat test.txt
        Hi there this is cool.
        >
    ```


---


## Exercise 14: Removing a File (rm)

- Exercise 14: Removing a File (rm)
In this exercise you learn how to remove (delete) a file using the rm command.

- **Linux**

    ```powershell
        $ cd temp
        $ ls
        uncool.txt  iamcool.txt  neat.txt  something  thefourthfile.txt
        $ rm uncool.txt
        $ ls
        iamcool.txt  neat.txt  something  thefourthfile.txt
        $ rm iamcool.txt neat.txt thefourthfile.txt
        $ ls
        something
        $ cp -r something newplace
        $
        $ rm something/awesome.txt
        $ rmdir something
        $ rm -rf newplace
        $ ls
        $
    ```

- **Windows**

    ```powershell
        > cd temp
        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        d----        12/22/2011   4:52 PM            newplace
        d----        12/22/2011   4:52 PM            something
        -a---        12/22/2011   4:49 PM          0 iamcool.txt
        -a---        12/22/2011   4:49 PM          0 neat.txt
        -a---        12/22/2011   4:49 PM          0 thefourthfile.txt
        -a---        12/22/2011   4:49 PM          0 uncool.txt


        > rm uncool.txt
        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        d----        12/22/2011   4:52 PM            newplace
        d----        12/22/2011   4:52 PM            something
        -a---        12/22/2011   4:49 PM          0 iamcool.txt
        -a---        12/22/2011   4:49 PM          0 neat.txt
        -a---        12/22/2011   4:49 PM          0 thefourthfile.txt


        > rm iamcool.txt
        > rm neat.txt
        > rm thefourthfile.txt
        > ls


            Directory: C:\Users\zed\temp


        Mode                LastWriteTime     Length Name
        ----                -------------     ------ ----
        d----        12/22/2011   4:52 PM            newplace
        d----        12/22/2011   4:52 PM            something


        > cp -r something newplace
        > rm something/awesome.txt
        > rmdir something
        > rm -r newplace
        > ls
        >
    ```