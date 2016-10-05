'use strict'

class EperController {
   * eper(req,res){
        res.send('Eper')
    }

    * hello(req,res){
        yield res.sendView('Hello',{ name: 'Marci'})
    }
}

module.exports = EperController
