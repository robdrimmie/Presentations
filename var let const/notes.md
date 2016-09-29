# var let const

## Acts:
- var behaviour esp hoisting and why it's weird.
- let behaviour and why it's neat
- const behaviour and why there's a controversy

## references/research
https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.j62sj63th
https://mathiasbynens.be/notes/es6-const
http://www.ecma-international.org/ecma-262/6.0/#sec-variable-statement
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/var

https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/

## 2016 09 19 Thoughts and rambling

If possible, I'd like to experiment with my deck-as-character notion but I'm not sure I'm going to put it all together in time. First I need to get a few minutes of content that is interesting then I can experiment with style.

The core message that I want to deliver in this presentation is: "Stop using `var`. Use `const` for constants. Use `let` for variables." 

The bulk of the presentation is taken up with why, and the core why is: "Behaviour of `let` and `const` is more consistant with other languages and therefore leads to code that is easier to understand which is better code."

The simple argument in favour of that is that var is hoisted and that is weird. Let 

## 2016 09 26 Thoughts and rambling

Down to the wire, sort-of. Thursday is the real wire but it would be nice to have things in place before that point. Pretty much scrapping the notions of the deck as participant/conversation as presentation blah blah blah stuff but who knows maybe something magic will happen.  For now I'm just going to start writing and see how much time I think it all takes up.

Hi, my name is Rob Drimmie. 

I've been writing applications in a professional context since about 1994, but about 5 years ago I switched paths a bit into a managerial role and somehow ended up becoming Director of IT for a mid-sized organization for amost two years. Last year I jumped back into development at a local consultancy.

This is relevant to tonight because I ended up being away from coding for the bulk of that period. Before I stepped away from a full-time focus on coding, JS6 was largely discussed as something that was slowly becomming available in shims, and now ES2015 is not only reality but out there and in use with all its fat arrows and promises and whatever elses and I was, even moreso than usual, lost and alone.

I can figure out how to make use of tools without fully understanding them.  Knowledge of good conventions and a long history of faking it makes it reasonably straight-forward to ship workable code, but it's not until I start peeling things back that I'm really able to feel comfortable so that's what I've been doing. Very, very slowly.

I suspect most of you here have a pretty good understanding of `var`, `let` and `const` but until fairly recently I didn't. I knew `let` and `const` were introduced and sort of understood the conventions of where and when to use them but beyond a shallow understanding I didn't really know much else. I know much more - though still not everything, there's a lot of javascript's internals that I really don't understand at any level - and now I'm going to share what I know with all of you.

Spoilers first: `var` is obsolete, starting tonight and forever more (until it is changed again) use `let` to define variables and `const` to define constants. 

Perhaps surprisingly, this is a controversial assertion but this is also the language and community where people have written reams of content regarding the use or lack thereof of semi-colons, so.

So: Why? Well, it's because let and const are better and most semantically appropriate for those two cases, but this is the shallow understanding I mentioned earlier.

To get to a deep understanding it's helpful to discuss  LexicalEnvironments. A LexicalEnvironment is more conceptual than it is a specific mechanic that you can interact with directly. 

Lexical Environment have two properties: An Environment Record and an Outer Environment Reference. I'm going to start with the second first. According to the specifications:

> The outer reference of a (inner) Lexical Environment is a reference to the Lexical Environment that logically surrounds the inner Lexical Environment.

I believe it is sufficiently correct for the purposes of this presentation to rephrase this as "a pointer to the parent". My prediliction towards thinking of everything as a graph is likely showing here. 

Back to the specs: 

> An Environment Record records the identifier bindings that are created within the scope of its associated Lexical Environment.

Identifier Bindings are the names that we developers create to hold onto things: Variable names, function names... I'd give more examples but in Javascript that's basically everything. 

Again, it's sufficiently correct for my purposes to say that an Environment Record is the place where scope ends up being explicitly described. I create a variable and it is bound to the Environment Record. 

When I use an identifier in some statement there's an explicit test in the Environment Record instance, `HasBinding(N)` where N is a string containing the identier. 

From here you can sniff out much of the logic around identifier resolution, but lets run through a quick example. 

https://gist.github.com/robdrimmie/4042ff7b71c4bf97a06186819e38610c

Note to self: Explore how this example goes, figure out a way to gradually disclose new lines and whatnots in the slide deck well. Take some time on it!

https://gist.github.com/robdrimmie/4042ff7b71c4bf97a06186819e38610c

There's actually quite a bit deeper we could go into Environment Records. Environment Record can be thought of an as abstract class, from which a total of 5 specific implementations descend but for the purposes of understanding our three little keywords we have almost  gone deep enough. Almost.

There are two functions described by the ES2015 Specifications to bind identifiers to an EnvironmentRecord: `CreateMutableBinding(N,D)` and `CreateImmutableBinding(N,S)`. There are several more functions for bindings relating to setting, deleting, retrieving values etc but for our purposes it's these two that matter and I am going to risk stating the obvious by summarizing that mutable bindings are for variables and immutable bindings are for constants.

Okay, so now we understand that as programmers we use identifiers on a regular basis. Identifiers are bound to an Environment Record which is a property of an Environment Context. Environment Contexts also have a reference to their containing Context. 

We can infer reasonably well at this point that scope resolution works by examining the current Environment Record for an identifier. If it does not exist, use the Outer Environment Reference to search the containing Environment Context's Environment Record for the identifier. We continue up through containing Contexts until an identifier is found or we run out of containing contexts, at which point we throw a Reference Error.

So what does this have to do with when to use `var`, `let` and `const`? Um, not all that much actually. For the most part, identifiers created with all three keywords behave in very similar ways inside their Environment Records. The differences are in the way they are bound and when they can be used.


==========
Okay this is a fuzzy but really important bit for me. There are VariableEnvironments, which are a specific type of LexicalEnvironments, to which `var`-declared identifiers are bound, and there are just LexicalEnvironments to which `let` and `const` identifiers are bound.

I *think* and really need to confirm, that a function in javascript is created with a lexicalenvironment and a variable environment. Blocks in javascript also get lexicalenvironments but use the containing function's variableenvironment and therefore share scope/scope is bound to functions. 

Since Let and Const identifiers are bound to the LexicalEnvironment they are block-scoped. 

I'm not sure all that's the case, and it's not clear in the specifications how functions get scoped or whatever. I want to see the line in the specifications that are all "figure out the function and get the list of var identifiers and initialize them all" and I don't. 

http://stackoverflow.com/questions/29410249/how-is-block-scope-managed-in-the-lexical-environment

states that a change introduced es6 gives blocks their own lexicalenvironment. that's reflected a bit in the specs, so back to chatting away on content:


======================



But there's still two more pieces to this puzzle: Blocks and Variable Environments. 

A block statement is any group of statements contained within braces. You see blocks most in control structures like branches or loops: 

if(foo) {
  content.log('this is a block');
  console.log('this block has two statements');
} else {
 console.log('this is another block');
 console.log('this block has three statements');
 console.log('this statement only exists to make the above statement true');
}

Until es6, blocks had no bearing on scope, but now they create a new LexicalEnvironment when they're created.

> let and const declarations define variables that are scoped to the running execution context’s LexicalEnvironment.

> A var statement declares variables that are scoped to the running execution context’s VariableEnvironment.

Everything about Lexical Contexts and Environments has brought us to this point, being able to understand this simple difference in scoping and it totally makes sense because I am a completely clear and competent presenter: 

let and const bind identifiers to the execution context's LexicalEnvironment and blocks create new LexicalEnvironments in es6, whereas they didn't before. 

var binds identifiers to the exeuction context's Variable Environment so the very last thing we need to understand is Variable Environments and they're actually pretty easy: Variable Environments are Lexical Environments, but new ones are only created under certain conditions and the one we care about most is when a new function is created. 

So, a function is declared. A new VariableEnvironment is created. The function is scanned for any variable identifiers - `var` - which are created and initialized in the Variable Environment - they are hoisted.

A new LexicalEnvironment is then created which starts as just a copy of the VariableEnvironment. Any let and const declarations inside this block scope are created - hoisting still occurs! - but are not yet accessible until after the actual binding is evaluated in the code.

When a block is declared, a new LexicalEnvironment is created with its Outer Environment Reference set to the containing Lexical Environment, and and any let and consts are created inside this one.

The last difference in implementation is that between let and const, and it's really just the way they are bound to the LexicalEnvironment. lets are bound using `CreateMutableBinding` and consts with `CreateImmutableBinding`. 

When a change is made to an identifer, the appropriate LexicalEnvironment is found by bubbling up through the stack of execution contexts and SetMutableBinding is called on the identifier with the new value. If the identifier was created with CreateImmutableBinding, a TypeError is thrown.  

Here's one last quirk of Javascript to point out. If a const is initalized with an object, the value that is stored is the object itself, not any of the object's properties, so: 

const foo = {};
foo = 2; // fail
foo = {}; //fail
foo.someProperty = 3; // success

So constants are not deeply immutable.

========

That's all the content I want to get in, but not at all organized well. Much too rambling and not enough detail about much too late and any sense of narrative crumbles by the very end. HOWEVER I have all the technical content and understanding in place now, so another rewrite will get me much closer. 






