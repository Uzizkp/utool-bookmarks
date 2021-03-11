utools.onPluginEnter(({code, type, payload}) => {
    document.body.className = utools.isDarkColors() ? 'dark-mode' : ''
  })