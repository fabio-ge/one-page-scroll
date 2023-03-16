#!/usr/bin/env python

import json
import cgi
from mail import send_mail

form = cgi.FieldStorage()
json_response = None

try:
    send_mail(form.getvalue('nome'),form.getvalue('email'),form.getvalue('oggetto'),form.getvalue('messaggio'))
    json_response = json.dumps({'result': 1}, separators=(',',':'))
except RuntimeError as e:
    json_response = json.dumps({'result': 0, 'errore': str(e)}, separators=(',',':'))

print("Content-type: text/html\n")
print(json_response)