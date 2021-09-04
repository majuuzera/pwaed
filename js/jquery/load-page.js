// Leitura completa do nosso documento HTML
$(document).ready(function () {

    // Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML
  
    $('a').click(function (e) {
      e.preventDefault()
  
      //Criar uma variável local que receba o atributo href do link
      let page = $(this).attr('href')
  
      $('.modal-title').empty()
      $('.modal-body').empty()

    // Verificar qual conteúdo eu devo carregar
    switch (page) {
    //Se for para abrir a página sobre mim....
    case 'about':
      $('.modal-title').append('Sobre mim')
      $('.modal-body').append(`<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro quaerat voluptas doloremque molestiae dolore libero quae cumque beatae, magnam autem in similique. Sunt nisi veritatis dolorem dicta magnam. Accusamus!</p>
      <p>Iusto voluptas molestiae, consequatur corrupti sunt quos enim dolores porro ea reiciendis placeat magni est, vitae, unde debitis numquam? Quasi at voluptas cupiditate fugit debitis pariatur porro suscipit exercitationem repellendus.</p>
      <p>Autem deserunt doloribus eveniet atque esse enim iste doloremque. Unde doloremque quis provident molestias esse quaerat reprehenderit aperiam enim harum fuga rem incidunt consectetur repellat, quibusdam nostrum a, adipisci id.</p>
      <p>Impedit, sapiente rem facilis distinctio eius esse temporibus, consequuntur eum ratione et cumque repellat explicabo, ex provident aspernatur voluptas neque vitae animi aperiam modi cupiditate expedita iusto atque optio. Doloribus.</p>
      <p>Dolore, explicabo placeat beatae doloribus aut autem ab ea dolor consequatur ex quisquam possimus, esse sunt! Perspiciatis obcaecati rem officia dolores eligendi, consectetur ad tempora ab blanditiis praesentium ullam id.</p>`)
      $('#modal-info').modal('show')
      break  
      //Se for para abrir a página trabalhos....
      case 'work': 
        $('.modal-title').append('Meus trabalhos')
        $('.modal-body').append('Aqui será carregado meus trabalhos realizados')
        $('#modal-info').modal('show')
        break
      //Se for para abrir a página trabalhos....
      case 'client': 
        $('.modal-title').append('Meus Clientes')
        $('.modal-body').append('Aqui será carregado meus clientes')
        $('#modal-info').modal('show')
        break
      //Se for para abrir a página trabalhos....
      case 'contact': 
        $('.modal-title').append('Meus contatos')
        $('.modal-body').append('Aqui será carregado meus contatos')
        $('#modal-info').modal('show')
        break
      default: alert('Link não encontrado')
    }

  })

})