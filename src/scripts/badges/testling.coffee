
badges.testling =

  embed: (data) ->

    baseUrl = 'https://ci.testling.com'
    data.link = "#{baseUrl}/#{data.username}/#{data.project}"
    data.img = "#{data.link}.png"

    "[![browser support](#{data.img})](#{data.link})"

  preview: (data, code) ->
    return """
      <a href="#{data.link}"><img src="#{data.img}"></img></a>
    """