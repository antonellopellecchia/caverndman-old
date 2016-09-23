---
layout: post
title:  "How I wish complex numbers were taught"
date:   2016-08-27
category: mathematics
excerpt: In his 1946 essay «The metaphysical principles of the infinitesimal calculus», the philosopher René Guénon asserts that any number wich is not a positive integer is not an actual number. His argumentation rises from noticing that natural numbers, the first to be introduced (or discovered, but there may be a whole other chapter of discussion around which is the correct verb) by humans, contain the purest idea of «quantity». Two serves to indicate a precise quantity of objects, and there is no other characteristic that we can associate with the number two.
---

*In this article, I will assume I'm talking with some person who has an average understanding of mathematics but does not know what complex numbers are; however, this does not limit the scope of this post. Instead, I see this trick as a way to pretend you see the imaginary unit for the first time, trying to define and think of it differently from what the usual tradition wants us to. Therefore, ultimately my reader should be someone who already knows complex algebra but would like to have a look at my point of view.*

*Lately, the way to teach complex numbers has become slightly more clever, since they're now presented as couples of real numbers rather than the sum of a real number and an imaginary one -- that association should come later. Hovever, I believe more could be done to turn an often misinterpreted topic to the evident conclusion of a simple geometric consideration on the nature of numbers. Taught this way, the topic -- maybe in a different language or with some simplification -- should be theoretically simple enough to be understood by a middle school student.*

In his 1946 essay *The metaphysical principles of the infinitesimal calculus*, the philosopher René Guénon asserts that any number wich is not a positive integer is not an actual number. His argumentation rises from noticing that natural numbers, the first to be introduced (or discovered, but there may be a whole other chapter of discussion around which is the correct verb) by humans, contain the purest idea of «quantity». *Two* serves to indicate a precise quantity of objects, and there is no other characteristic that we can associate with the number *two*.

Science - and people in their daily life, too - has been working with different numerical sets for three centuries; these useful instruments can be gradually introduced in mathematics by means of subsequent generalizations starting from the set of natural numbers: as Guénon reasons, generalizing the concept of natural number would mean to consider one of the characteristics affecting natural numbers and to extend its definition, creating a more loosely defined mathematical object. On the other hand, natural numbers' only characteristic is quantity, which cannot be generalized, since it is a primitive idea. For example, rational numbers are built by breaking apart integers in pieces smaller than the unit number 1, but the unit number can't be divided by its own definition of «unity»; therefore, every would-be «non-natural number» does not exist. Q.E.D. Guénon than happily proceeds proving that calculus is inconsistent[^1], our ideas of zero and infinity are biased and black is white.

Although one can easily dispose of this approach as ridiculous for a 20th century man, real numbers (and particularly negative ones) have been suffering a similar treatment until the invention of calculus in late 1600, when they became too useful for practical purposes to be ignored on behalf of some metaphysical reasons. Number sets were more formally defined and justified during the last two centuries; however, for our modest aims we just need to notice the isomorphism between real numbers and a straight line.

Prelude: from natural to real
-----------------------------

An isomorphism $$\phi$$ is a function, i.e. a correspondence between two sets, which satisfies these two properties:

1. if $$A$$ and $$B$$ are the two sets between which $$\phi$$ is defined, each element from $$A$$ corresponds to one element from $$B$$ only, and vice versa;

2. $$\phi$$ preserves the structures (form) of the two sets passing between $$A$$ and $$B$$.

The second, concise statement may require some clarification, and I'll explain it in the case of natural numbers. In fact, we can represent them by associating to each integer a point on a straight line on the same distance from one another, like this:

![Natural line](/images/how-i-wish-complex-numbers-were-taught/natural_line.png)
{:style="text-align: center"}

A correspondence between the set of the natural number and the set of the points that can be aligned in the figure above is obvious; moreover, we could also draw a dot on the line for each natural number, so the correspondence surely verifies the first part of the definition of isomorphism. As for the second part, the «structure» of a number set is given by its algebraic operations; a function is an isomorphism if it preserves the result of the algebraic operations between the two sets. Assuming we know which operations are defined for natural numbers, we need to define equivalent ones between the points on the line.

Since this is not very important for the aims of this article, I shall only show how to do that for addition: if you want to sum two points $$a$$ and $$b$$, starting from $$a$$ on the line move as many dots to the right as the number represented by $$b$$. For example, for the points 2 and 3:

![Sum of two natural numbers on the line](/images/how-i-wish-complex-numbers-were-taught/natural_addition.png)
{:style="text-align: center"}

The result is the point representing the number 5 (where «representing» means «in correspondence with, according to the function we defined»), which is also the sum of 2 and 3. The operation gives the same result for the two sets, and it does so for each couple of numbers/points.

By now, you should have understood that we can define the other arithmetic operations for the points on the line in similar clever ways to get the same results as with natural numbers: the two sets are then isomorphous, since we can associate the numbers to the points in a fashion that preserves its algebraic operations. However, it is clear we estabilished an isomorphism only between the set $$\mathbb{N}$$ of natural numbers and a subset of the straight line (which is a set of points); the whole line would be isomorphous to a larger numeric set. This, and not the wish to generalize such an abstract notion as the one of «quantity», is the true reason to define other types of numbers[^2].

I won't dedicate too much time to the definition of real numbers, since this should be intended as a summary. First you notice that points can also be placed on the line in the opposite way with respect to the zero: you are representing the negative numbers.

![Negative numbers on the line](/images/how-i-wish-complex-numbers-were-taught/negative_line.png)
{:style="text-align: center"}

Even if now this class of numbers is understood and recognized useful by 10-year-old kids all over the world, negative numbers where surely the last to be accepted in the history of mathematics before complex ones, as their name itself shows. Ancient Greeks were in quite a good relationship with fractions, compared with how they refused to accept any meaning for -1[^3]; up to Leibniz, negative solutions to algebraic equations were simply rejected.

By introducing relative numbers, we can move in any of the two ways on the line, but we can't reach any of the points between two consecutive numbers. I can divide the unit segment in two, three or more parts to reach the intermediate points, thus defining rational numbers,

![Rational numbers on the line](/images/how-i-wish-complex-numbers-were-taught/rational_line.png)
{:style="text-align: center"}

but then I'll find there are points on the line (or, equivalently, lengths on a plane) that cannot be represented as ratios, like the diagonal of a square of length 1, or that cannot be obtained by purely algebraic operations at all, like the length of a circumference of radius 1. I will represent them on the line, too:

![All real numbers on the line!](/images/how-i-wish-complex-numbers-were-taught/real_line.png)
{:style="text-align: center"}

The real numbers are all the numbers defined so far: natural integers, negative integers, ratios and irrational numbers. Is the set of real numbers, $$\mathbb{R}$$, isomorphous with the class of the points on a straight line? In other words, can we associate each point on the line to a real number (and vice versa) and can we define some geometric operations among the points that are compatible with this association?

The second part of the question is easy to solve: we can define the algebraic operations for all the points on the line the same way we did for the subset representing natural numbers, e.g. for the sum by adding the length of the segments together. The structure is then preserved and the second part of the definition of isomorphism is satisfied.

As for the first part, we know there are at least as many points on the line as real numbers; the interesting question is the opposite, i.e. whether there are points on the line which do not correspond to real numbers. Our experience says there aren't: after all, we measure distances with real numbers every day, and measuring a distance means associating a real number to two points in a plane (one of which can be considered the zero). Pretty much all classic science is based on the assumption that there are as many real numbers as points on a line, too (even though modern physics, from quantum mechanics on, may not).

Yet, someone proved this conjecture is independent from the axioms of algebra, which means it is undecidable - it can't be proved. Therefore, because of its importance for many applications of mathematics - it would be crazy to refuse such a statement - it has been raised as **Cantor-Dedekind's axiom**: the set of real numbers $$\mathbb{R}$$ is isomorphous to any straight line in a plane.

By accepting Cantor-Dedekind's axiom, we got the line occupied by real numbers; any further generalization should imply some kind of leap. The first attempt, the one which mathematicians have always followed in history, is a formal one: the algebraic operations aren't complete. More precisely, we can't divide any number by zero and we can't take the square root (or fourth, sixth etc.) of any negative number; this means there are still some algebraic equations we cannot solve. Trying to solve the first problem is concern of infinitesimal calculus, while the second one led mathematics to introduce imaginary numbers.

However, this approach has a massive disadvantage: it is counterintuitive. It's the reason why complex numbers, as negative numbers before them, have been seen as an invention for centuries and still look suspicious to students meeting them for the first time today. A true solution to the question should follow from seeing some pictures and having a geometrical intuition; we need to look in a different direction. Literally.

Two-dimensional numbers
-----------------------

What does it mean, in practice, that real numbers can be represented on a straight line? It means you can fix a point on the line (any point will do the trick, since a line is infinitely long) and call it zero or «the origin». Then, you can measure the distance of any point from the origin, and that point will represent the value of the distance itself. The measure unit you choose (meters, inches, feet etc.) doesn't really matter, since the scale isn't important in a infinitely long line. In other words, a coordinate system can be built on a straight line, associating to any point of the line a real number, called abscissa, representing its distance from the chosen origin.

A straight line is a one-dimensional space, which means starting from zero we can only move in one direction (in two opposite ways). Under this point of view, the next generalization seems obvious! Numbers should also be able to spread in two dimensions.

A two-dimensional space is a plane: if we draw a straight line prependicular to the real line and intersecting it on the origin, we can build a two-dimensional coordinate system.

![Complex plane](/images/how-i-wish-complex-numbers-were-taught/complex_plane.png)
{:style="text-align: center"}

In this plane, each point needs two real numbers to be identified: for example, the point $$(-2,3)$$ is the one of abscissa $$-2$$ and ordinate $$3$$. The abscissa is also called *real part* of the couple, because it corresponds to a number on the real, horizontal line; the ordinate is called *imaginary part* for historical reasons, since the ordinate axis does not correspond to the ordinary real one. Each couple of this $$(x,y)$$ form is called *complex number* and is a regular number, although differently from real numbers complex ones are represented by points in a plane instead of a line. For similarity with the idea of real line, this plane is called *complex plane*.

Surely, a complex number can have imaginary part zero: in this case, as shown by $$(\pi,0)$$ in the picture, its corresponding point in the complex plane lies on the real line (also called real axis). But, as we discussed earlier, a point on the real line corresponds to a real number, which means the green point in the picture corresponds to both the real number $$\pi$$ *and* the complex number $$(\pi,0)$$: we can then identify the two numbers as the same one, which means that for any real number $$x$$ the complex number $$(x,0)$$ is also a real number and the equality $$x = (x,0)$$ holds.

Similarly, any complex number with real part zero corresponds to a point lying on the imaginary axis, as $$\left(0,-\frac{9}{4}\right)$$ in the picture: therefore we shall call a number of the form $$(0,y)$$ *imaginary number*. The origin of the axes $$(0,0)$$ is then both a real number and an imaginary one, although one prefers to identify it with the good old symbol $$0$$. The number $$(0,1)$$ is quite important (again, mainly for historical reasons, but it also improves practical calculations); it also has a fancy name, *imaginary unit*, and his symbol is $$i$$.

These newly defined numbers would be completely useless without the most important tool in algebra, operations; we shall then extend the algebraic operations from the real set, starting with addition and multiplication: this road will also grant us a deeper insight in the nature of such numbers, and will also justify their historically first definition.

Another representation will be useful to us in this process: as you might notice from the picture of the complex plane, any point can be also considered as the tip of an arrow joining the origin of the axis and the point itself.

![Complex number in polar form](/images/how-i-wish-complex-numbers-were-taught/complex_polar.png)
{:style="text-align: center"}

Since any arrow can be uniquely identified by its length $$A$$ (also called *magnitude*) and the angle (or *phase*) $$\alpha$$ it forms with the real axis, we can also write any complex number in the form $$A\angle\alpha$$. This is called **polar representation**, since the magnitude-angle system is called *polar coordinate system*, while the $$(x,y)$$ form is called carthesian representation. It's clear that any real number has phase $$0$$ (if it's positive) or $$\pi$$ if it's negative, and their magnitude coincides with its value.

Operations in two dimensions and algebraic representation
---------------------------------------------------------

The definition of addition is very straightforward for complex numbers, and it will also result evident to you if you're already familiar with the sum of vectors. Given two complex numbers $$x=(a,b)$$ and $$y=(c,d)$$, their addition is the number
$$x+y=(a+c,b+d)$$. Seeing the complex numbers as arrows shall help us get an intuitive repesentation, the famous so-called parallelogram rule:

![Complex number in polar form](/images/how-i-wish-complex-numbers-were-taught/complex_parallelogram.png)
{:style="text-align: center"}

If we build a parallelogram having sides $$x$$ and $$y$$, the arrow along the diagonal represents the number $$x+y$$. This definition is evidently consistent, since it reduces to the old result for real numbers: in fact, if two complex numbers have imaginary part equal to zero their sum has imaginary part zero, too:

\\[
	\forall ~ a, b \in \mathbb{R} ~ a+b = (a,0)+(b,0) = (a+b,0) = a+b
\\]

The same observation follows from noticing that in this case the two arrows are both horizontal and lie on the real line, so their sum has the same direction (i.e. the corresponding number is still a real one) and has length equal to the sum of the two lengths, which are also equal to the real parts of the addenda. On the other hand, of course, the sum of two imaginary numbers is also imaginary, since $$(0,a) + (0,b) = (0,a+b)$$.

The multiplication in $$\mathbb{C}$$ involves instead the polar representation. We define the product of two numbers $$a=A\angle\alpha$$ and $$b=B\angle\beta$$ as the number $$a\cdot b = (A\cdot B)\angle(\alpha+\beta)$$: this means the phase of the result is the sum of the two phases, while its magnitude is the product of the two magnitudes. An useful way to imagine this is to represent a complex number as a triangle whose cathetuses are the real and imaginary part:

![Product of two complex numbers](/images/how-i-wish-complex-numbers-were-taught/complex_product.png)
{:style="text-align: center"}

The blue triangle (which represents $$ab$$) is actually the red one turned around so that its basis lies on the hypotenuse of the $$a$$ triangle and scaled so that its hypotenuse measures $$A\cdot B$$: this meets the definition. Notice that the multiplication is a commutative operation in $$\mathbb{C}$$, too. For real numbers, let's distinguish between three cases:

1. if both factors are positive, they both have phase $$0$$: the result still has phase $$0$$, so it's still a real number;

2. if the factors have different signs, the result has phase $$\pi$$, so it's still real and negative;

3. if both factors are negative, the sum of their phases is $$-2\pi$$, which means the result still lies on the real axis.

In all cases, the result coincides with its own real part, which in turn is equal to its magnitude, i.e. the product of the values of the two factors. The multiplication proves to be consistent as well.

What happens if one of the factors is a real number, while the other one isn't? In this case, the real number has phase zero, but the second factor has not, so the result will have the same phase as the complex factor; in other words, the arrow will point in the same direction as the arrow of the complex factor.

![Product of a complex and a real number](/images/how-i-wish-complex-numbers-were-taught/complex_real_product.png)
{:style="text-align: center"}

As for the magnitude, it will be the equal to the magnitude of the complex number times the value of the real number: the arrow is simply scaled by a term equal to the real factor, and so are the cathetuses, whose lengths coincide with the real and imaginary part of the result. In formulas,

\\[
	\forall ~ a \in \mathbb{R} ~ \forall ~ (x,y) \in \mathbb{C} ~ a \cdot (x,y) = (ax,ay)
\\]

This is certainly the most natural definition for this kind of operation, which we couldn't have obtained if we had defined the multiplication another way.

The last result will also let us find a third way to represent complex numbers. If we consider the special case discussed above (real number times complex number) where the complex number is actually an *imaginary* one, we still get an imaginary number (the arrow points in the same direction as the complex factor) scaled by the real factor. In particular, if we multiply the imaginary unit $$i=(0,1)$$ by a real number $$y$$ we obtain:

\\[
	iy = y\cdot(0,1) = (0,y)
\\]

Which means every imaginary number $$(0,y)$$ can be written as $$iy$$. Let's combine this idea with two other ones we have recently treated:

1. any complex number with no imaginary part $$(x,0)$$ is a real number $$x$$;

2. any complex number with no real part $$(0,y)$$ is an imaginary number $$iy$$;

3. the sum of two complex numbers $$(a,b)$$ and $$(c,d)$$ is the complex number $$(a+c,b+d)$$.

Therefore, for any complex number $$z=(a,b)$$ we can write:

\\[
	z = (a+0, 0+b) = (a,0) + (0,b) = a + b\cdot(0,1) = a+ib
\\]

This is the so-called **algebraic notation**, the first to be used in history: a complex number can be written as the sum of its real part and its imaginary part multiplied by $$i$$. Its practical importance resides in the fact that it makes calculations with complex numbers almost identical to the ones with real numbers. For example, a sum written in algebraic notation becomes an immediate consequence of the commutative and associative properties:

\\[
	(a,b) + (c,d) = (a+ib) + (c+id) = a+c+ib+id = (a+c) + i(b+d) = (a+c,b+d)
\\]

There's a similar formula for complex multiplication, which can be proved with some trigonometrical calculations starting from its definition; however, the algebraic representation gives us a simpler and more instructive way: the product of $$(a,b)$$ by $$(c,d)$$ is

\\[
	(a,b)\cdot(c,d) = (a+ib)(c+id) = ac + iad + ibc + i^2bd = ac + i^2bd + i(ad+bc)
\\]

To write the result in algebraic or cartesian form, we need to know $$i^2$$, and we'll do it in a graphical way. $$i$$ has magnitude $$1$$ and phase $$\frac{\pi}{2}$$, so the product of $$i$$ by itself will have still unit magnitude and phase $$\frac{\pi}{2}+\frac{\pi}{2}=\pi$$:

![i squared](/images/how-i-wish-complex-numbers-were-taught/i_squared.png)
{:style="text-align: center"}

Which proves that $$i^2=-1$$. This identity is the first one people meeting complex numbers almost always learn, in a mystical, «axiomatic» way, yet it is actually the result of a precise geometric construction.

With this last piece of the puzzle, the formula for the product in algebraic representation takes its final form:

\\[
	(a,b)\cdot(c,d) = ac-bd + i(ad+bc) = (ac-bd,ad+bc)
\\]

and the picture of complex algebra becomes complete[^4].

There's some room to sum up the construction we described:

1. we realized natural numbers can be ordered as scattered points on a straight line;

2. starting with the most strict concept of number, we defined a more generalized set, the real number set, isomorphous to the set of the points on a line;

3. seeking for a further generalization, we added a dimension to the line, getting the complex plane; we defined the complex field as the set of the couples of real numbers, isomorphous to the set of points in a plane;

4. we defined the two fundamental operations (addition and multiplication) in the complex field so that they were consistent with their definition in the real field;

5. from the fundamental properties of algebraic operations, we finally managed to put complex numbers in their algebraic form, finding the fundamental equality which historically led to the very definition of the complex field.

There's also another point I probably did not stress enough in this article, but its importance might make it necessary to mention. Basically, complex numbers are just two real numbers put next to each other. Of course, there is nothing special in them: the set of the couples of real numbers, also denoted as $$\mathbb{R}^2$$, doesn't usually look so powerful and doesn't frighten people who first meet it. What makes complex numbers so different and useful in mathematics, making everything more complete and allowing a deeper understanding of the idea of number, is the *structure* of the set $$\mathbb{C}$$. As we saw at the beginning of this article, the structure of a set is a sort of epiphenomenon rising from the operations defined on it. The definitions of addition and multiplication in $$\mathbb{C}$$ were completely arbitrary; their only constraint was that they had to be coherent with the ones already defined in the subset $$\mathbb{R}$$. Yet, only by those definitions we chose earlier we got to the result that $$i^2 = -1$$, on which the speciality of these concepts lies and from which many ideas (like [Euler's identity](/2016/06/16/another-intuitive-approach-eulers-formula.html)) come.

[^1]: By the way, Guénon strangely focused only on Leibniz and Newton's foundations of infinitesimal calculus, which had already been proven contradictory by Berkeley two centuries earlier.
[^2]: At least from a mathematical point of view; science is another engine giving thrust for mathematical discoveries working on a whole different level.
[^3]: Irrational numbers were even more problematic to them since they violated the perfection of a universe built on geometric figures, but in that case the name is not to be intended as derogatory; it rather means they cannot be written as a ratio.
[^4]: We have not discussed subtraction and division. However, these operations do not differ from how they are defined in any other algebraic field and, in my opinion, do not offer any deeper understanding of the subject.