import  app from './app'
import './database'

app.listen(app.get('port'))
console.log('servidor corriendto en el puerto ',app.get('port'));