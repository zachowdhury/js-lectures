#### Connecting to a ssh host with ***SSH-keybased*** authentication : 
- Local computer (***your computer***) [A] connects with target host computer [B]
- Both needs to have ssh installed, if needed open-ssh or putty installed. 
- Asuming we are using linux -
check if you have already a private and public key -

- local machine [A] public key is usually located ***~/home/username/.ssh/id_rsa.pub***.
  - If you do not have a key, run the following command in a local terminal / command prompt to generate an SSH key pair:

```javascript
ssh-keygen -t rsa -b 4096
```

- Add the content of id_rsa.pub from [A] to the computer [B] to get access without password.
  - this will copy content of the file id_rsa.pub to the remote comptuer's authorized_keys file located computer [B]
***~/home/user/.ssh/*** folder
command prompt on the local machine [A] type :
```javascript
ssh-copy-id YourLogin-name@host-FQDN or Remote-ipaddress
```
  - replace YourLogin-name with your actual login userId 
and Remote-ipaddress with actual ip address of fully qualified domain name.
