# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseBadRequest

import subprocess as sp
import json

def vmh01_index(request):
    return render(request, 'index.html')

def list_vm(request):
    get_vm_list = sorted(filter(None, sp.check_output(["virsh", "list", "--name"]).split('\n')))
    vm_list_key = [ 'data' + j for j in map(str, [ i for i in range(len(get_vm_list)) ]) ]
    res = dict(zip(vm_list_key, get_vm_list))
    return render(request, 'vscs.html', res)

@csrf_exempt
def disk_control(request):
    res = 'do nothing'

    if request.method == 'POST':
        data = json.loads(request.body)

        if 'disk_ctl' not in data:
            return HttpResponse('operation not allowd')
        
        if data['disk_ctl'] == 'open':
            ctl_cmd = 'attach-disk'
            res = sp.Popen(['virsh', ctl_cmd, str(data['vm_name']), str(data['path']), str(data['target']), '--persistent', '--type', 'lun', '--cache', 'none'], stdout=sp.PIPE, stderr=sp.PIPE)
            if res.wait() == 1:
                return HttpResponseBadRequest(res.communicate())
            else:
                return HttpResponse(res.communicate())
        elif data['disk_ctl'] == 'close':
            ctl_cmd = 'detach-disk'
            res = sp.Popen(['virsh', ctl_cmd, str(data['vm_name']), str(data['target']), '--persistent'], stdout=sp.PIPE, stderr=sp.PIPE)
            if res.wait() == 1:
                return HttpResponseBadRequest(res.communicate())
            else:
                return HttpResponse(res.communicate())
        else:
            return HttpResponse(res)
    else:
        return HttpResponse(res)

@csrf_exempt
def get_disk_status(request):
    data = json.loads(request.body)