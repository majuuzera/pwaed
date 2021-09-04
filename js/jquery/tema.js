$(document).ready(function(){

    $('a').addClass('text-white')
  
    $('.btn-light').click(function(e){
      e.preventDefault()
  
      // Remover o CSS existente do nosso tema .... (jumbotron)
      // Seleciono o jumbotrom e excluo o CSS existente
      $('.jumbotron').removeClass('bg-adriano-castro')
      $('.jumbotron').removeClass('bg-dark')
      // Aplicar a classe CSS que eu desejo
      $('.jumbotron').addClass('bg-light')
      $('a').removeClass('text-white')
      $('a').addClass('text-dark')
    })
    $('.btn-dark').click(function(e){
        e.preventDefault()
    
        // Remover o CSS existente do nosso tema .... (jumbotron)
        // Seleciono o jumbotrom e excluo o CSS existente
        $('.jumbotron').removeClass('bg-adriano-castro')
        $('.jumbotron').removeClass('bg-light')
        // Aplicar a classe CSS que eu desejo
        $('.jumbotron').addClass('bg-dark')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')
      })
      $('.btn-primary').click(function(e){
        e.preventDefault()
    
        // Remover o CSS existente do nosso tema .... (jumbotron)
        // Seleciono o jumbotrom e excluo o CSS existente
        $('.jumbotron').removeClass('bg-dark')
        $('.jumbotron').removeClass('bg-light')
        // Aplicar a classe CSS que eu desejo
        $('.jumbotron').addClass('bg-adriano-castro')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')
      })
    })