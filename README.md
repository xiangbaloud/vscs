# VSCS - VM SSD Control System 
control your guest VM's disk from web

![Alt Text](https://raw.githubusercontent.com/xiangbaloud/vscs/master/vscs.gif)

## set django as a service by systemd

```
# add below into /usr/lib/systemd/system/vscs.service
[Unit]
Description=VM Disk Control System
After=network.target

[Service]
ExecStart=/root/vscs/vscs

# add below into /root/vscs/vscs
#!/bin/bash
/root/vscs/manage.py runserver youripaddress:80
```
