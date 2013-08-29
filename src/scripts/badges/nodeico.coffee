
badges.nodeico =

  embed: (data) ->

    baseUrl = 'https://nodei.co/npm/'
    data.link = "#{baseUrl}#{data.package}/"
    data.img = "#{baseUrl}#{data.package}.png"

    return "[![NPM](#{data.img})](#{data.link})"

  preview: (data, code) ->
    return """
      <a href="#{data.link}"><img src="#{data.img}"></img></a>
    """