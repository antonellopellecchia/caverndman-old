---
layout: post
title:  "Taylor's exponential function series: an intuitive interpretation"
date:   2015-12-31
category: mathematics
---

Understanding how the exponential function works is like putting the last piece
in the middle of a puzzle: everything in calculus and algebra makes sense.
Not only do a lot of things in real and complex analysis come from the very
definition of Euler's number and its consequent magic properties, but also
things everybody uses in his mathematical life, like taking a real number-power
of something, have their ultimate definition in \\(e^x\\).

For example, how do you calculate \\(2^\sqrt{2}\\) or \\(3^\pi\\) without knowing
how the power operation with a non-rational exponent is defined?

<!--break-->

Some definitions involve series expansion of any number: you define the succession
\\[ 
	\\{t_k\\} = \\{1, 1.4, 1.41, 1.414, \dots\\}
\\] 

which converges to \\(\sqrt{2} = 1.4142\dots\\); then you define
\\[
	a^\sqrt{2} := \lim_{k \to \infty} a^{t_k}
\\]

Every \\(t_k\\) is rational, so we know how to compute each term turning it in a
fraction (\\(a^{b/c} = \sqrt[c]{a^b}\\)). No issue.

However, I feel quite embarassed with that \\(\\{t_k\\}\\) succession defined so
explicitly (even though it explains perfectly how to practically compute that power:
by approximation). What if we could define everything in term of another known
function? Well, here it is:
\\[
	a^b := e^{b\log a}
\\]

And that's all, isn't it? We know the logarithm of a is the number x such that e
to the power of x equals a, and we can multiply it by b. Except at this point in
our minimalistic algebra/analysis we don't know what an exponential function is yet.

Let's remedy with a definition: as you are supposed to know, Euler's number was 
historically defined as the limit
\\[
	e := \lim_{m \to \infty} \left(1 + \frac{1}{m}\right)^m
\\]

From this definition we get directly the exponential function \\(e^x = \lim_{m \to \infty}
(1 + 1/m)^{mx} \\); obviously, almost nobody stops at this point: in fact, noticing that
when \\(m\\) tends to infinity the product \\(mx\\) also goes to infinity for any \\(x\\),
by means of the substitution \\(n = mx\\) we obtain the (quite) more tractable form

\\[
	e^x = \lim_{n \to \infty} \left(1 + \frac{x}{n}\right)^n
\\]

Notice that we know how to calculate this power, since n is a natural number; the previous definition would force us, instead, to define the power function for irrational exponents *before* even thinking of "exponential function".

(At this point of the proof, my pen stopped working; this will lead us to the most exciting conclusion in the post.)

Almost nobody stops here, too: the form we actually encounter most in our mathematical life is Taylor's expansion; the point of this post is to show a way to derive that formula without any background in Taylor's series theory. We will instead use the good old Newton's bynomial formula, which in our case applies like this:

\\[
	e^x = \lim\_{n \to \infty} \sum\_{k=0}^n {n \choose k} \left( \frac{x}{n} \right)^k 1^{n-k} = \lim\_{n \to \infty} \sum_{k=0}^n \frac{n!}{n^k(n-k)!} \frac{x^k}{k!}
\\]

(Then my second pen left me; she had been hiccupping for weeks.)

The last expression can be put in a more illuminating form if we write the factorial explicitly, thus getting the coefficient
\\[
	c_n = \frac{n!}{n^k(n-k)!} = \frac{n(n-1)\dotsm (n-k+1)(n-k)!}{n^k(n-k)!} = \frac{n(n-1)\dotsm (n-k+1)}{n^k}
\\]

Let's think a moment about the last quotient: how many factors are there in the numerator, for constant \\(m\\)? It evidently depends on \\(k\\): for \\(k=1\\), the numerator is equal to \\(m\\) itself[^1]; for \\(k=2\\), the numerator equals \\(m(m-1)\\) and so on: therefore, there are \\(k\\) terms in the numerator; but there are \\(k ~ m\\)'s in the denominator, too!

[^1]: In case you are wondering about what happens when \\(k=0\\) (because it happens, since the sum starts from 0), hold on your curiosity: I'll try to explain it later.

\\[
	\lim\_{n \to \infty} c\_n = \lim\_{n \to \infty} \frac{\overbrace{n(n-1)\dotsm (n-k+1)}^{k~\textrm{times}}}{\underbrace{n\cdot n \dotsm n}\_{k~\textrm{times}}} = 1
\\]

(The third pen died here.)

When \\(m\\) tends to infinity, the terms simply cancel out and 1 remains.

We can now return, much wiser, to the original series, replacing the asimptotically neutral term:
\\[
	e^x = \lim\_{n \to \infty} \sum\_{k=0}^n \frac{x^k}{k!} = \sum\_{k=0}^\infty \frac{x^k}{k!}
\\]

Which is Taylor's series of the exponential function in the form we all know and love. The most suspicious of you, or those who understood I'm just an amateur - or, alternatively, those who bothered to read the notes -, might argue that the reasoning followed to show that \\(c_n \to 1\\) only applies for \\(k \neq 0\\), otherwise strange things may happen. Simply note that since, for any \\(n\\), \\({n \choose 0} = 1\\) and \\(n^0 = 1\\), the \\(c_n\\) coefficient is 1 without need to explicitly develop the factorial: as usual, 0 is different - and actually easier, if you take care enough.

I hope this informal proof[^2] may have been simpler than other ones requiring a better knowledge of infinite series: I've always wondered why bothering demonstrating Taylor's series converges and such sleepy things, when it's obvious it converges, since its sum is \\(e^x\\). But I also simply wanted to share a proof that seemed to me very elegant indeed.

But these are all pretexts; in my heart I am tragically aware I just wanted to get rid of some old pens.

[^2]: I'm sure you understood in which passage is the *informality* hidden.