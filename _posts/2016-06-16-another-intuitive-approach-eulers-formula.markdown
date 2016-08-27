---
layout: post
title:  "Another intuitive approach: Euler's formula for complex numbers"
date:   2016-06-16 19:07:00 +0200
tags: [mathematics, intuition]
---

Complex numbers do exist.

That said, I keep meeting people who think imaginary numbers are just an artificial instrument to solve differential equations: you get a $$\sqrt{-1}$$ somewhere, pretend it is something instead of a nonsensical symbol, do your calculations and take the real part of the result. And even though the true mathematicians now might be struggling with hyperreal or transfinite numbers, we normal people are still having trouble with the good old $$i$$.

Much of the sense of mistery imaginary numbers carry with themselves is related with the esoteric aura surrounding Euler's identity:

<!--break-->

\\[
	e^{\pi i} + 1 = 0
\\]

The first time I saw this formula I thought I would never understand this profound -- albeit apparently random -- connection between the four most important constants in our mathematics[^1]. But then I kept studying, until I arrived to the point when I could see the links between those objects -- at least for how much a normal person is able to: seen with the right interpretation and premises, Euler's identity (as Euler's formula, of which the identity is just a special case) is a clear and evident geometrical relation.

It all starts with the right definition: what is the complex exponential function? Some people more clever than us decided to define it the same way as for real numbers (and I must admit I agree with them): if $$z$$ is a complex number,

\\[
	e^z = \lim_{n\to\infty} \left( 1 + \frac{z}{n} \right)^n
\\]

As explained [in a previous post](/2015/12/31/taylors-exponential-function-series-an-intuitive-interpretation.html), one can choose a different definition that can easily be proved equivalent to this one, but although people always seem to prefer the former I think for the aims of our explanation the original one will be far more illuminating.

Before going on, we should just make a small change to this equality. Supposing $$z = s+it$$ is a complex number, obviously $$ e^z = e^s e^{it} $$ (the property of the product of two powers stands for real numbers and there's no way it shouldn't be valid for complex ones, since it can be demonstrated the same way; there's no need to do that now). But we already know how to calculate $$e^s$$, because $$s$$ is a real number: we just have to understand what is $$e^{it}$$, the exponential of a purely imaginary number. Let's put it this way: if x is a real number,

\\[
	e^{ix} = \lim_{n\to\infty} \left( 1 + \frac{ix}{n} \right)^n
\\]

First of all, let's make sense of the expression $$ \left( 1 + \frac{ix}{n} \right)^n $$: the first thing we need to interpret the correct way is the meaning of the $$n$$-th power of the complex number $$ 1 + ix/n $$; since a power is just a repeated product, we should get a simple image of how complex product works. Sure, there's a simple rule to multiply complex numbers given their algebric form, but in order to truly understand things in mathematics you must know a way to get a result just by manipulating images. So, here is an image encouraging us:

![Complex product](/images/another-intuitive-approach-eulers-formula/complexproduct.png)
{:style="text-align: center"}

To summon briefly, complex numbers are points in Gauss's plane, whose two axis indicate the real part and the imaginary part. If $$ a = s+it $$, in the plane $$a$$ will be represented by a point with x-coordinate $$s$$ and y-coordinate $$t$$. But a complex number can also be represented in polar coordinates as 
$$ A\angle\alpha $$, where $$A$$ is the length of the segment linking $$a$$ to the origin and $$\alpha$$ is the angle it forms with the x-axis. When two numbers $$ A\angle\alpha $$ and $$ B\angle\beta $$ are multiplied, the result is the number $$ C\angle\gamma = (A\cdot B) \angle (\alpha+\beta) $$. This means the product of two complex numbers has magnitude equal to the product of the two magnitudes and angle (also called *phase*) equal to the sum of the two phases[^2].

The figure also shows a fun graphical way to draw the product of two numbers that will be useful for us later: the green and the red triangle represent $$a$$ and $$b$$, the two catheti's length being the real and imaginary part of the two numbers. The blue triangle lying on the hypotenuse of $$a$$, instead, is simply the red triangle rotated by an angle $$\alpha$$ ($$a$$'s phase) and expanded to let its basis coincide with $$a$$'s hypotenuse. The resulting triangle's hypotenuse represents the product of $$a$$ and $$b$$.

If the two terms $$a$$ and $$b$$ are equal, their product is equal to $$ a^2 = A^2 \angle 2\alpha $$; repeating this process we get the first rule we'll need to understand Euler's formula (de Moivre's equality):

$$ a^n = A^n \angle n\alpha $$

If you want to determine the $$n$$-th power of a complex number, take its magnitude's $$n$$-th power and $$n$$ times its phase.

Back to our problem, now. The first step is to visualize the number $$1+ix/n$$ in Gauss's plane; we shall begin by visualizing just $$1+ix$$, which would be easier. Its real part is 1 and its imaginary part is x, so its representation is this:

![1+ix](/images/another-intuitive-approach-eulers-formula/complexnumber.png)
{:style="text-align: center"}

You might have noticed I drew a circle of radius one in the complex plane: this will be useful later, but for now you should remember that any number of magnitude 1 will have the tip of its arrow on the circle.

The next step consists of finding $$(1+ix)^n$$ on the complex plane using de Moivre's equality: starting from 1, I'm going to draw a triangle with its longer cathetus lying on the hypotenuse of $$1+ix$$'s triangle; in order for the cathetus to coincide with the hypotenuse, the second triangle will have to be slightly expanded with respect to the first one, but the two will be similar. Then I'll do the same thing lying a third triangle on the second one's hypotenuse, and I'll repeat until I get $$n$$ triangles lying on one another:

![Complex power of 1+ix](/images/another-intuitive-approach-eulers-formula/complexpower.png)
{:style="text-align: center"}

It is straightforward that as $$n$$ rises the phase and magnitude of the result rise indefinitely, since we're stacking more and more triangles; for $$n\to\infty$$, then, the power will go to infinity as well (in the sense that the magnitude *and* the phase of the complex power both go to infinity). This is definitely not helpful for us.

Let us now complicate this a little bit by replacing $$1+ix$$ with $$1+\frac{ix}{n}$$: in our drawing, this means the triangle representing the complex number has the vertical cathetus $$x/n$$ long. The figure will look similar too:

![Complex power of 1+ix/n](/images/another-intuitive-approach-eulers-formula/euler1.png)
{:style="text-align: center"}

The difference is now the length of the vertical cathetus decreases as $$n$$ rises, a fact which gives birth to something much more interesting. This is the crucial moment, so we will understand it slowly. As $$n$$ rises,

- The number of the triangles rises, going to infinity as $$n\to\infty$$; this also happened earlier.
- The length of the vertical cathetus goes to 0: this definitely wasn't happening earlier.
- As the length of the cathetus drops, the length of the hypotenuse tends to the length of the larger cathetus (you can easily see that from Pythagora's theorem); but the horizontal cathetus has length 1, so also the hypotenuse approaches 1 in length! As we saw before, this means both the hypotenuse and the cathetus tend to lie on the unit-radius circle.
- For the second triangle lying on the first triangle, its expansion tends to 1: this means that for $$n\to\infty$$ the second triangle (and then the third, the fourth and so on) are not expanded at all; each hypotenuse has the length of the larger cathetus, which is 1. You can see where we are directed: the magnitude of the power $$(1+ix/n)^n$$ stays limited.
- As the length of the cathetus drops, the phase $$\alpha$$ of the complex number $$1+ix/n$$ also decreases; more precisely, since two out of three vertices of the triangle lie on the unit-radius circle, the phase (in radians) measures
\\[ \alpha = \frac{l}{R} \\]
where $$l$$ is the corresponding circumference arc and $$R$$ is the radius of the circle. But the circle has radius 1, while the arc approaches the length $$x/n$$ of the smaller cathetus as $$n$$ increases: this means that $$\alpha\approx x/n$$, the approximation getting more and more precise as $$n$$ gets higher and higher.
- Our last step is to determine what happens to the fase of the power as $$n\to\infty$$. This will be easy: we have to multiply the phase of the base for the exponent n. If $$\theta$$ is the phase of the result,
\\[ \theta = n\alpha \approx n\cdot\frac{x}{n} = x \\]
As earlier, here the approximation becomes an equality as $$n$$ goes to infinity.

This means the phase of the power $$\lim_{n\to\infty}(1+ix/n)^n$$ is $$x$$ itself! Its magnitude, instead, is the length of the $$n$$-th hypotenuse, which is 1. Here is another image to help us get confident with that:

![The power as n rises](/images/another-intuitive-approach-eulers-formula/euler2.png)
{:style="text-align: center"}

These are the magnitude and the phase of $$e^{ix}$$: we can then write:

\\[ e^{ix} = 1\angle x \\]

The effect of the exponential function of $$ix$$ is to get the complex number with magnitude 1 and phase $$x$$. We can also go further: if a complex number $$z$$ has length $$\rho$$ and phase $$\theta$$, the trigonometric representation gives us:

\\[ z = \rho(\cos\theta+i\sin\theta) \\]

If we apply this rule to the number $$e^{ix}$$, as $$\rho = 1$$ and $$\theta=x$$ we can write:

\\[ e^{ix} = \cos x+i\sin x \\]

Which is Euler's formula - or rather its mathematical formulation -, that we could explain just by looking at some drawings. Proofs will persuade you that's true, but imagination will teach you *why* it is.

Euler's identity should have a much clearer meaning now: under a "complex" point of view, -1 is the number with magnitude 1 and phase $$\pi$$: therefore, it is the result of the complex exponential function of $$\pi i$$: $$e^{\pi i}=-1$$.

Let us generalize our definition a bit. As we said earlier, if $$z=s+it$$ we can calculate the exponential function as follows:

\\[ e^z = e^se^{it} = e^s(\cos t+i\sin t) \\]

This is, of course, Euler's formula in its most general form. But instead of thinking of its mathematical formulation, it is much more useful and insightful to think of the exponential function as a combination of a growth (the $$s$$ part) and a rotation in the complex plane.

[^1]: For what I know, if the history of science had gone another way - no Euclid and no geometry, no Newton and no calculus, no Gauss and no complex numbers - we could have found another identity involving our other most important constants. I think this is a topic worth investigating.
[^2]: The notation $$A\angle\alpha$$ I'm adopting here is a slightly modified version of the so-called *phasor angle notation*, which is mainly used in electrical engineering to manipulate sinusoidal time-dependent physical quantities of the form $$ A e^{i(\omega t+\phi)} $$ as complex numbers; here I will use it just as a brief way to write numbers in polar form, before I can use the exponential notation.