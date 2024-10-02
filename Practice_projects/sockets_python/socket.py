#Sockets -It can be used to connect two nodes together.
import socket

HOST='127.0.0.1'
PORT=7777
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM) #af_inet is your ipv4,sock_stream is just a port.
s.connect((HOST,PORT))

nc-nvlp 7777 #netcat tool to open the port 7777 to connect to ourself making it listening on that port.

python socket.py #to run this python script.

check your tab which has netcat running.

