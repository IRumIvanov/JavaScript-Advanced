function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}
Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = +likes;
            this.dislikes = +dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        comment() {
            return this.comments.join('\n');
        }

        toString() {

            const result = [

                super.toString(),

                `Rating: ${this.likes - this.dislikes}`,

            ];

            if (this.comments.length > 0) {

                result.push('Comments:');

                this.comments.forEach(c => result.push(` * ${c}`));

            }



            return result.join('\n');

        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = +views;
        }
        view() {
            return this.views++;

        }

        toString() {

            const result = [

                super.toString(),

                `Views: ${this.views}`

            ];

            return result.join('\n');

        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());

let scm2 = new classes.BlogPost("TestTitle2", "TestContent2", 1);
scm2.view();
console.log(scm2)
console.log(scm2.toString())