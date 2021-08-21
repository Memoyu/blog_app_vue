const Formats: any = {}

Formats.formatHyperLink = (value: string) => {
    let reg = /(http[s]?:\/\/([\w-]+.)+([:\d+])?(\/[\w-./?%&=]*)?)/gi;
    let result = value.replace(reg, function (a) {
      let text = a
      // let text = a.replace("http://", "").replace("https://");
      if (text.length > 22) {
        text = text.substring(0, 22) + "...";
      }
      return '<a href="' + a + '" target=_blank style="text-decoration: underline;">' + text + '</a>';
    });
    return result
  }
  
  Formats.formatHtml = (xhtml: string) => {
    return xhtml != undefined ? xhtml.replace(/\n|\r\n/g, '<br/>') : '';
  }

  export default Formats