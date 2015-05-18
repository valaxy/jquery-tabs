var http = require('http'),
    express = require('express'),
    fs = require('fs'),
    path = require('path'),
    jade = require('jade'),
    sass = require('node-sass')
    
     
var app = express()


var replaceExt = function(p, oldExt, newExt) {
    return p.replace(new RegExp(oldExt + '$'), newExt)
}

// compile jade return html
var onjade = function (req, res, next) {
    if (/\.html/.test(req.url)) {
        var p = path.join(__dirname, '..', replaceExt(req.url, 'html', 'jade'))
        var content = fs.readFileSync(p)
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        var fn = jade.compileFile(p)
        var content = fn()
        res.write(content)
        res.end()
    } else {
        next()
    }
}

// compile scss return css
var onscss = function (req, res, next) {
    if (/\.css/.test(req.url)) {
        var p = path.join(__dirname, '..', replaceExt(req.url, 'css', 'scss'))
        var content = fs.readFileSync(p, 'utf-8')
        sass.render({
            data: content
        }, function (err, result) {
            if (err) {
                console.error(err)
                res.writeHead(500)
            } else {
                res.writeHead(200, {
                    'content-type': 'text/css'
                })
                res.write(result.css.toString())
            }
            res.end()
        })
    } else {
        next()
    }
}

app.use(
    '/', 
    onjade, 
    onscss,
    express.static('../')
)

app.listen(process.env.PORT, process.env.IP)