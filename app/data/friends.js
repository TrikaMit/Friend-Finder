var Friends = [
    total = 0,
    Monica = {
        "name": "Monica",
        "photo": "./images/Monica.png",
        "scores": [
            5,
            5,
            2,
            4,
            5,
            5,
            1,
            1,
            1,
            5
        ],
        "sumScore": function (){
            this.total=0;
            for (var i = 0; i < this.scores.length; i++) {
                this.total += this.scores[i];
            };
            return(this.total);
        },
    },
    Joey = {
        "name": "Joey",
        "photo": "./images/Joey.jpg",
        "scores": [
            1,
            1,
            3,
            5,
            1,
            5,
            1,
            1,
            5,
            1 
        ],
        "sumScore": function (){
            this.total=0;
            for (var i = 0; i < this.scores.length; i++) {
                this.total += this.scores[i];
            };
            return(this.total);
        }
        
    },
    Chandler = {
        "name": "Chandler",
        "photo": "./images/Chandler.png",
        "scores": [
            1,
            1,
            1,
            3,
            4,
            2,
            5,
            1,
            1,
            1
        ],
        "sumScore": function (){
            this.total=0;
            for (var i = 0; i < this.scores.length; i++) {
                this.total += this.scores[i];
            };
            return(this.total);
        }
    },
    Rachel = {
        "name": "Rachel",
        "photo": "./images/Rachel.png",
        "scores": [
            1,
            3,
            5,
            2,
            2,
            2,
            1,
            4,
            1,
            1
        ],
        "sumScore": function (){
            this.total=0;
            for (var i = 0; i < this.scores.length; i++) {
                this.total += this.scores[i];
            };
            return(this.total);
        }
    },
    Phoebe = {
        "name": "Phoebe",
        "photo": "./images/Phoebe.jpg",
        "scores": [
            1,
            1,
            1,
            3,
            3,
            2,
            1,
            5,
            5,
            1
        ],
        "sumScore": function (){
            this.total=0;
            for (var i = 0; i < this.scores.length; i++) {
                this.total += this.scores[i];
            };
            return(this.total);
        }
    },
    Ross = {
        "name": "Rachel",
        "photo": "./images/Rachel.png",
        "scores": [
            1,
            4,
            4,
            2,
            5,
            1,
            1,
            1,
            1,
            4
        ],
        "sumScore": function (){
            this.total=0;
            for (var i = 0; i < this.scores.length; i++) {
                this.total += this.scores[i];
            };
            return(this.total);
        }
    }
]

console.log(Friends);
module.exports = Friends;

