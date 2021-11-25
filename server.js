const express = require('express')
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express()
let issue = require('./src/database/db.json')
const port = 3000

const reallyData = {
    desc: String(),
    todo: Boolean(),
    doing: Boolean(),
    done: Boolean()
}

const save = () => {
    fs.writeFile(
      "./src/database/db.json",
      JSON.stringify(issue, null, 2),
      (error) => {
        if (error) {
          throw error;
        }
      }
    );
  };

app.get('/issues', (req, res) => {
    res.send({
        statusCode: 200,
        body: issue
    })
})

app.get('/issues/:id', (req, res) => {
    const data = issue.filter(x => x.id === Number(req.params.id));
    res.send({
        statusCode: 200,
        body: data
    })
})

app.post('/issues', bodyParser.json(), (req, res) => {
    const datas = []
    issue.map((user) => {
        datas.push({
            id: user.id,
            desc: user.desc,
            create_at: user.create_at,
            todo: user.todo,
            doing: user.doing,
            done: user.done
        })
    })
        var oneId = 0;
        for(let j = 1; j <= datas.length; j++){
            oneId = j + 1
        }
        var reqs = false;
        for(var i = 1; i <= datas.length; i++){
        reqs = oneId > i;
        }
    if(req.body.id == 0 || req.body.id < 0){
        res.status(500).send({
            statusCode: 500,
            message: "O id específico é inválido!!!"
        })
    }else{
        if(reqs == true || datas.length == 0 || datas.length == undefined){
            const dateCreated = new Date();
            const dateFormatada = ((dateCreated.getUTCDate()) + "/" + (dateCreated.getUTCMonth() + 1) + "/" + (dateCreated.getUTCFullYear()))
            const reqss = req.body
            const data = [];
            const desc = String(reqss.desc)
            const todo = Boolean(reqss.todo)
            const doing = Boolean(reqss.doing)
            const done = Boolean(reqss.done)
            if(datas.length == 0 || datas.length == undefined){
                if(Object.keys(reallyData).toString() == Object.keys(reqss).toString()){
                data.push({
                    id: 1,
                    desc: desc,
                    create_at: dateFormatada,
                    todo: todo,
                    doing: doing,
                    done: done
                })
                issue.push(data[0]);
            }else{
                return res.status(500).send({
                    statusCode: 500,
                    message: "Token Inválido!!!"
                })
            }
            }else{
                if(Object.keys(reallyData).toString() == Object.keys(reqss).toString()){
                    data.push({
                        id: oneId,
                        desc: desc,
                        create_at: dateFormatada,
                        todo: todo,
                        doing: doing,
                        done: done
                    })
                    issue.push(data[0]);
                }else{
                    return res.status(500).send({
                        statusCode: 500,
                        message: "Token Inválido!!!"
                    })
                }
            }
            save();
            res.status(200).send({
                        statusCode: 200,
                        body: data[0]
            })
        }else{
            res.status(500).send({
                statusCode: 500,
                message: "O id já existe!!!"
            })
        }
    }
})

app.put('/issues/:id', bodyParser.json(), (req, res) => {
    const datass = []
    issue.map((user) => {
        datass.push({
            id: user.id,
            desc: user.desc,
            create_at: user.create_at,
            todo: user.todo,
            doing: user.doing,
            done: user.done
        })
    })
        var numb = false;
        for(var i = 1; i <= datass.length; i++){
        if(Number(req.params.id) == i){
            numb = true
            break;
        }else{
            numb = false
        }
        }
    if(req.body.id == 0 || req.body.id < 0){
        res.status(500).send({
            statusCode: 500,
            message: "O id específico é inválido!!!"
        })
    }else{
        if(numb == true){
            const reqss = req.body
            const todo = Boolean(reqss.todo)
            const doing = Boolean(reqss.doing)
            const done = Boolean(reqss.done)
            var data = {}
            issue = issue.map((datas) => {
                if(datas.id === Number(req.params.id)){
                    data = {
                        id: Number(req.params.id),
                        desc: reqss.desc,
                        create_at: datas.create_at,
                        todo: todo,
                        doing: doing,
                        done: done
                    }
                    return data
                }else{
                    return datas
                }
            })
            save();
            res.status(200).send({
                        statusCode: 200,
                        body: data
            })
        }else{
            res.status(500).send({
                statusCode: 500,
                message: "Não foi possivel atualizar!!!"
            })
        }
    }
});

app.listen(port, () => {
    console.log(`O exemplo está rodando na porta ${port}`)
})