section .data
    hello db 'Hello, World!', 0    ; The string "Hello, World!"

section .text
    global _start

_start:
    ; Write the string to stdout (the screen)
    mov eax, 4        ; system call for write
    mov ebx, 1        ; file descriptor 1 is stdout
    mov ecx, hello    ; message to write
    mov edx, 13       ; length of the message
    int 0x80          ; call the kernel

    ; Exit the program
    mov eax, 1        ; system call for exit
    xor ebx, ebx      ; return code 0
    int 0x80          ; call the kernel
