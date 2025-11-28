function handleClick() {
      alert('O botão foi clicado!');
}
   document.addEventListener('DOMContentLoaded', function () {
      const button = document.getElementById('clickButton');
      const box = document.getElementById('box');

      // Evento de clique
      button.addEventListener('click', function () {
        alert('Botão clicado!');
      });

      // Evento de mouseover
      box.addEventListener('mouseover', function () {
        box.style.backgroundColor = 'purple';
        box.textContent = 'Mouse está aqui!';
      });

      // Evento de mouseout
      box.addEventListener('mouseout', function () {
        box.style.backgroundColor = 'teal';
        box.textContent = 'Passe o mouse aqui';
      });
    });
    document.addEventListener('DOMContentLoaded', function () {
      const inputBox = document.getElementById('inputBox');
      const feedback = document.getElementById('feedback');

      inputBox.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          feedback.textContent = 'Você pressionou Enter!';
          event.preventDefault(); // Impede que o Enter cause outra ação, como enviar um formulário
        }
      });

      inputBox.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
          this.value = ''; // Limpa o input quando o Escape é pressionado
          feedback.textContent = 'Input limpo com a tecla Escape.';
        }
      });
    });
    document.addEventListener('DOMContentLoaded', function () {
      const formulario = document.getElementById('meuFormulario');
      const mensagem = document.getElementById('mensagem');

      formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede a submissão do formulário para demonstração

        // Validação simples
        const username = formulario.querySelector('#username').value;
        const email = formulario.querySelector('#email').value;

        if (username.length < 4) {
          mensagem.textContent = 'O nome de usuário deve ter pelo menos 4 caracteres.';
          mensagem.style.color = 'red';
          return;
        }

        if (!email.includes('@')) {
          mensagem.textContent = 'Por favor, insira um email válido.';
          mensagem.style.color = 'red';
          return;
        }

        // Caso passe nas validações
        mensagem.textContent = 'Formulário válido, documento enviado!';
        mensagem.style.color = 'green';

        // Aqui você poderia realmente submeter o formulário
        // formulario.submit();
      });
    });
     document.addEventListener('DOMContentLoaded', function () {
      // Evento load
      window.addEventListener('load', function () {
        console.log('Página completamente carregada!');
      });

      // Evento resize
      window.addEventListener('resize', function () {
        const resizeInfo = document.getElementById('resizeInfo');
        resizeInfo.textContent = 'Tamanho da janela: ' + window.innerWidth + ' x ' + window.innerHeight;
      });

      // Evento beforeunload
      window.addEventListener('beforeunload', function (event) {
        // Pode adicionar uma mensagem de confirmação, mas nem todos os navegadores suportam
        event.returnValue = 'Tem certeza que deseja sair?';
      });
    });
    document.addEventListener('DOMContentLoaded', function () {
      const video = document.getElementById('videoPlayer');
      const playButton = document.getElementById('playButton');
      const pauseButton = document.getElementById('pauseButton');

      playButton.addEventListener('click', function () {
        video.play();
      });

      pauseButton.addEventListener('click', function () {
        video.pause();
      });

      video.addEventListener('play', function () {
        console.log('O vídeo começou a ser reproduzido.');
      });

      video.addEventListener('pause', function () {
        console.log('O vídeo foi pausado.');
      });

      video.addEventListener('ended', function () {
        console.log('O vídeo foi concluído.');
      });
    });
    document.addEventListener('DOMContentLoaded', function () {
      const message = document.getElementById('message');
      message.textContent = 'O DOM está totalmente carregado e analisado!';
    });
    const emailField = document.getElementById('userEmail');

    emailField.addEventListener('input', function () {
      // Verifique se o campo contém um endereço de email válido
      if (this.validity.typeMismatch) {
        this.setCustomValidity('Por favor, insira um endereço de email válido (ex: usuario@email.com).');
      } else {
        this.setCustomValidity(''); // Limpa a mensagem personalizada se não houver erros
      }
    });
    import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
  imports: [ReactiveFormsModule],
})
export class NameEditorComponent {
  name = new FormControl('');
}