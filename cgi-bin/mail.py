import smtplib, ssl

def send_mail(p_nome,p_from,p_oggetto,p_messaggio):
    port = 465
    smtp_server = ''
    sender_email = 'proprio_account' ##tanto poi la mail arriva con From: e il valore di p_from  
    receiver_email = 'mail_del_sito'
    password = ''
    message = f"""\
From: {p_nome} <{p_from}>    
Subject: {p_oggetto}

{p_messaggio}"""


    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message)