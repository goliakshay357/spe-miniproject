#!/bin/sh

echo "Ansible Entrypoint"

ansible-playbook ansible/playbook.yml --user ubuntu