FROM alpine 

ENV ANSIBLE_HOST_KEY_CHECKING=False

RUN apk add ansible gcc python3-dev libc-dev libffi-dev openssl-dev
RUN apk add python3 py3-pip openssh-client
RUN pip3 install --upgrade paramiko

COPY hosts /hosts
COPY ansible.cfg /etc/ansible/ansible.cfg

COPY ubuntu.pem /ubuntu.pem

RUN chmod 400 /ubuntu.pem

COPY entrypoint.sh /entrypoint.sh

CMD ["sh", "/entrypoint.sh"]