

 const button = document.getElementById('gerarLink');
        const copiarButton = document.getElementById('copiarLink');
        const numeroInput = document.getElementById('numero');
        const mensagemTextarea = document.getElementById('mensagem');
        const linkGerado = document.getElementById('linkGerado');

        button.addEventListener('click', () => {
            const numero = numeroInput.value.trim();
            const mensagem = encodeURIComponent(mensagemTextarea.value.trim());

            
         
            
            if (numero !== '') {
                const link = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
                linkGerado.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
                numeroInput.value = '';
                mensagemTextarea.value = '';
            } else {
                  linkGerado.innerText = 'Por favor, insira um número de telefone válido.';
            }
        });





         copiarButton.addEventListener('click', () => {
            const textArea = document.createElement('textarea');
            textArea.value = linkGerado.innerText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        });
           