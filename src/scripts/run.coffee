
$ ->

  update = (elem) ->
    container = elem.closest '.badge-container'
    api = container.data 'api'

    data = {}
    container.find('input').each ->
      data[$(@).attr 'id'] = $(@).val()

    code = api.embed data

    outputCont = container.find('.output')
    outputCont.toggle !!code
    outputCont.find('textarea').val code

    html = api.preview? data, code

    previewCont = container.find('.preview')
    previewCont.find('.preview-box').html html
    previewCont.toggle !!html
    
  $(".badge-container").each ->
    id = $(@).attr 'id'
    console.log 'init', id
    api = badges[id]
    return unless api
    $(@).data 'api', api
    update $(@)

  $(document).on 'keyup', 'input', ->
    update $(@)

  $(document).on 'click', '.title', ->
    $(@).closest('.badge-container').toggleClass 'active'

  $(".output textarea").attr "readonly", "readonly"

  $(document).on 'click', '.output textarea', ->
    @.select()







