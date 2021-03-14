#!/bin/sh

echo "Ansible Entrypoint"

ansible-playbook -i ansible/hosts ansible/playbook.yml --user ubuntu