# kibana_dashboard_custom_css 
> A Plugin for Kibana 5.x that allows to inject a custom css file as query param to style dashboards.

* To load a custom css add:
```custom_css=domain/to/file.css```
as query param to your browser url.
*  domain address without https://

**Caution:** Custom style does not append for Kibana Plugins. CSS file must be hosted on a SSL domain.