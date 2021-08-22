---
layout: post
title: Reflecting Rays, Circular Mirrors and Points
date: 2021-08-12
reviewed: 2021-06-10
published: true
tags: non-professional "rotation matrix" maths vectors light rays matrices "dot product" "implicit differentiation" perpendicular 
excerpt: A self-generated problem that came to me after a specialist exam. It's a pretty problem to think about! Testing Mathjax. Took disproportionately long to make this post relative to how long it takes to solve it... Mathjax and formatting is a pain, huh?
comments: false
mathjax: true
---

# The Original Question
> Imagine a circular mirror with a radius of 5 that exists on an origin. 
A ray of light beings at 10i-10j and enters the mirror such that 
it intersects the point (-2, sqrt(21)). 
Assume that the mirror allows a ray to enter it before closing and thus trapping a light ray inside.

```
Imagine a circular mirror with a radius of 5 that exists on an origin. 
A ray of light beings at 10i-10j and enters the mirror such that 
it intersects the point (-2, sqrt(21)). 
Assume that the mirror allows a ray to enter it before closing and thus trapping a light ray inside.

If an incoming ray hits a surface at an angle, 
it is reflected off the surface at the same angle to the normal (the law of reflection).

What is the point where the first reflected ray 
collides with the circular mirror (excluding the reflected ray's initial position)?
```
Note on original question. [^1]

[An explanation of how this problem was generated, how it was solved, and how you can easily extend the questions into all sorts of fun areas!
Coming soon.]

<h2> Table of Contents </h2>

<ol>
</ol>
* Table of Contents (this text is replaced with the table of contents)
{:toc}

# Preface
I had the idea for this question just after my final internal specialist exam (specialist is equivalent to Maths C or whatever your extended x2 maths is). However, this question isn't really a specialis question as much as a question that involves some topics covered in the subject. I implore you to try it out! You can use google :)

This question actually has some old roots in a problem I was thinking about in 2019 -- ray reflection --. There's a quick conclusion I wrote somewhere: I'll upload some pictures if I can find the papers.

Anyways, let's delve into this one! Don't ask me why, but this question brings me joy: Easy to understand and interpret yet relies on execution or 'elegance' to achieve. If you figured out a different / better way of solving it, please tell me on one of my contacts!

The way I will solve it is by actually explaining the concepts before using them, which is useful for learning but takes much more space.

# Solving
Firstly, let's understand what's actually going on here by drawing a nice diagram. I'm going to be using desmos here with some very nice snipping tool skills (it was either that or my hand-drawn items, and here's an example of one(LINK IT HERE). Maybe it's not too bad?). 

![Diagram of circle and rays (unsolved)](/assets/maths/unknowncircle.png)

Now we know what's actually going on.

Firstly, there's the light ray $$r_0$$ which enters the mirror (imagine there's a hole that closes once the light enters) and collides with the circular mirror at Point A $$(-2, \sqrt21)$$. It is then reflected by some $$\theta$$ and the first reflected ray $$r_1$$ collides with the mirror at Point B, which is what we're trying to find. We are solving for Point B.

From the question (and the law of reflection), we know that $$r_0$$ reflects with some $$\theta$$ with respect to the normal $$m_n$$. But how can we find it? Well, if we can somehow find the tangent $$m_T$$ at Point A, we'll be able to find $$m_n$$.

We can get to Point B and figure out the solution in a few simple steps. Working backwards, we need $$r_1$$ so we want to somehow create a new vector $$\theta$$ away from $$m_n$$. We can work out $$\theta$$ with $$m_n$$ and $$r_0$$. We can get $$m_n$$ with the tangent and $$r_0$$ is relatively easy to find. Thus:

## The steps

#### 1. Find the direction vector of $$r_0$$ (i.e so it collides with A from the initial point).
#### 2. Find the tangent @ Point A
#### 3. Get to the ~~chopper~~ normal ($$\frac{-1}{m_T}$$)
#### 4. Find $$\theta$$
#### 5. Generate the reflected ray $$r_1$$
#### 6. Find the reflected ray's intersection with the circle => Point B.

I made some calculation errors on some steps, but Step 5 was the one that stumped me for a bit when I was trying to solve it; kept gettin nonsense $$r_1$$'s.
Anyways, let's solve it.

## 1. Find the direction vector of $$r_1$$
Let's get the diagram back.
[DIAGRAM OF JUST CIRCLE + R1]

$$r_0$$ being in i,j components is not really ideal, and in this case we want (x,y). So we'll just convert it. The ray starts at $$(10, -10)$$ and we have to reach $$(-2, \sqrt21)$$.

Well, let's get the ray equation $$\vec{r} = \vec{a} + k\vec{d}$$. 

$$\vec{a}$$ is the initial position, $$\vec{d}$$ is the direction vector, k is a constant that changes the length of the ray. We don't really care about k here.

Of course, the direction vector is the direction it's going: towards Point A, $$(-2, \sqrt21)$$ from $$(10, -10)$$. Thus, the direction is just:

[IMAGE OF SIMPLE TRIG THING]

$$\begin{aligned}
\vec{d} &= Final - Init \\
&= A - Init \\
&= -2i+ \sqrt21j -(10i - 10j) \\  
d &= -8i+(\sqrt21 +10)j
\end{aligned}$$

I was going to do the calculations in column vector form but we're going to stick with i,j notation right now because it's easier to type up. I might switch it over eventually. Maybe. Probably not.

So it's going backwards in x, upwards in y. Makes sense to me! Note: it doesn't matter if $$\vec{d}$$ is $$-8i+(\sqrt21 +10)j$$ or $$-80i+(10\sqrt21 +100)j$$, they still point in the same direction (e.g <--, <----) (same gradient). They just have different lengths; k is the scaling factor.

So: 

$$\vec{r} = \begin{pmatrix} 10 \\ 10 \end{pmatrix} + \begin{pmatrix} -8 \\ \sqrt21 + 10 \end{pmatrix}k $$
<!-- The above is how you can do matrices. I.e begin with pmatrix, and then the double backslash is when you want to go next line. -->

Cool.

We already know it hits at Point A, so now let's find the normal! But first, we need to find the tangent as an intermediary step.

## 2. Find the Tangent at Point A 
[DIAGRAM]

I'm going to assume you have knowledge of derivatives & implicit differnetiation here (sorry). Now, a derivative is literally just a 'gradient function'. Instead of doing annoying $$\frac{\delta y}{\delta x}$$ every time, we do a sneaky calculus and say 2 points reaching infinitesimmaly close at Point X have gradient $$ m = f'(x) $$. 3blue1brown has good animations of these.

![Moving gif of derivative. Points moving together at Point X.](/assets/maths/derivative.gif)

Thus, a derivative simply maps a point -> gradient.

Using implicit differentiation, the derivative at Point A is just:

$$\begin{aligned}
\frac{d}{dx} (x^2 + y^2) &= \frac{d}{dx} 5^2 \\
2x + 2y\frac{dy}{dx} &= 0 \\ 
\frac{dy}{dx} &= \frac{-x}{y} 
\end{aligned}$$

Note that unlike the simple derivatives, you have both x and y to input to get the gradient. I.e, it's not $$f(x)$$ but $$f(x,y)$$. 
Specifically:
$$f(x,y) = x^2 + y^2 = 5^2$$

$$f'(x,y) = \frac{-x}{y} = \frac{dy}{dx}$$

[IMAGE OF INPUT THINGY]

Thus, for Point A $$(-2, \sqrt21)$$: 

$$\begin{aligned} f'(x,y) &=  f'(-2, \sqrt21) \\
m_T &= -\frac{2}{\sqrt21}  \end{aligned}$$

We'll call it $$m_T$$ as a nickname for 'tangent gradient'.

Now, our diagram looks like this:

 [DIAGRAM THINGY; circle, ray, tangent]

## 3. Find the normal 

Easiest one. Just flip it $$90^o$$. There's a few ways to know that $$m_n = \frac{-1}{m_T}$$, and I actually only know one of them (figured it out when writing the post, actually!) If you assume knowledge of the dot product $$ a \dot b$$, and know that when $$ a \dot b = 0$$, a is perpendicular to b => $$a \perp b$$. And really, the $$\frac{-1}{m_T}$$ is flipping the tangent, and then making it x-1 so that when you dot product them they become 0. Thus, they are perpendicular! Cool. So,

$$\begin{aligned}
 m_n = \frac{-1}{m_T} &= \frac{-1}{\frac{2}{\sqrt21}} \\
m_n &= \frac{-\sqrt21}{2} 
\end{aligned}$$

Oh yeah, our diagram's coming together.
 [meme image?]

![DIAGRAM](link)

I can't help but draw the next thing here: humans have foresight, we can plan, so use it! We'll cal the first reflected ray $$r_1$$.

## 4. find $$\theta$$

[image]

How can we find $$\theta$$? Well..

Dot product!

$$ \vec{a} \dot \vec{b} = |a||b|cos(\theta)$$

But our $$m_n$$ is in cartesian form and not vector, oh noes! Is there a way to convert a gradient into a direction vector? 🤔

Well, if a gradient is in $$ m = \frac{\Delta y}{\Delta x}$$ and $$\vec{d} = \begin{pmatrix} x \\ y \end{pmatrix} $$ and our $$ m_n = \frac{-sqrt21}{2} = \frac{\Delta y}{\Delta x}$$...
HMMMMM.

See where I'm going?

Flip the lil thingy!

$$\begin{aligned}
m_n &\to \vec{d} \\ 
\frac{\Delta y}{\Delta x} &\to \begin{pmatrix} x \\ y \end{pmatrix} \\ 
\frac{-\sqrt21}{2} &\to \begin{pmatrix} 2 \\ -\sqrt21 \end{pmatrix} = \vec{d_n} 
% Dn deez NU-
\end{aligned}$$

I'm just gonna call it $$m_n$$ even though it's technically $$\vec{d_n}$$. Take it or leave it.
So now we have our $$m_n = \begin{pmatrix} 2 \\ -\sqrt21 \end{pmatrix} $$, going right an down. $$\vec{d_0} goes \begin{pmatrix} -8 \\ \sqrt21 + 10 \end{pmatrix} $$ so the diagram looks like:

[DIAGRAM]

So, doing [dot product]


...


//// Below is random stuff.

% $$\mathit{Testsitgnng}$$


% \mathit{ABCDEFGHIJKLMNOPQRSTUVWXYZ}


% $$mean = \frac{\displaystyle\sum_{i=1}^{n} x_{i}}{n}$$

% $$ x = y^2 $$


If you look back in history, this problem actually has some ancestry roots in a problem I was thinking about in grade 10 involving the reflection of  <a href="#" class="tooltip">light in a mirror <span> took me way too long to notice the simplest thing - I blame missing a lesson + only being taught a 'fixed' set of cases instead of the general system). </span> </a> Huh!


[^1]: Originally, the question was -10i-10j and point -2, -sqrt(29). There's a few errors with this (I had the wrong diagram in my head which caused me to get the wrong angle and be thoroughly confused for an hour or two until it clicked): 1) The point that the ray intersects is actually on the same side as the ray initialisation point, i.e it 'hits' the circle on the outside (which I then demand it to bounce off). I.e it never got inside. Lmao. 

https://matthew-brett.github.io/teaching/rotation_2d.html
https://en.wikipedia.org/wiki/Rotation_matrix
https://www.wolframalpha.com/widgets/view.jsp?id=bd71841fce4a834c804930bd48e7b6cf