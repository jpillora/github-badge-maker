
$ ->
  $("#GA").on 'keyup', '#username,#project', ->
    user = $('#GA #username').val()
    proj = $('#GA #project').val()
    $('#GA #page').val "https://github.com/#{user}/#{proj}"

badges.GA =

  embed: (data) ->

    baseUrl = 'https://www.google-analytics.com/collect?'

    query =
      v:"1",
      a:"257770996",
      t:"pageview",
      dl:data.page,
      ul:"en-us",
      de:"UTF-8",
      cid:"978224512.1377738459",
      tid: data.tid,
      z:"887657232"

    img = "![ga tracker](#{baseUrl}#{$.param query} \"ga tracker\")"

    return img