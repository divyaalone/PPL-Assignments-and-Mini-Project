#include <stdio.h>
#include <unistd.h>
void exploit(void){
    char *args[2];
    args[0]="/bin/sh";
    args[1]=NULL;
    execve(args[0],args,NULL);
}
int overflow(void){
    int a[5];
    a[0]=1;
    a[1]=2;
    a[2]=3;
    a[3]=4;
    a[4]=5;
    a[5]=6;
    a[6]=7;
    a[7]=8;
    a[10]= 0x555546fa;
    a[11]= 0x00005555;
    return 0;
}

int main(){
    overflow();
    return 0;
}