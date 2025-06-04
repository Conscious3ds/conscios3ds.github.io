document.addEventListener('DOMContentLoaded', function () {
    // --- Quotes Database ---
    const quotes = [
        { quote: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
        { quote: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius" },
        { quote: "You have power over your mind – not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
        { quote: "It is not death that a man should fear, but he should fear never beginning to live.", author: "Marcus Aurelius" },
        { quote: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius" },
        { quote: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
        { quote: "We suffer more often in imagination than in reality.", author: "Seneca" },
        { quote: "It is not the man who has too little, but the man who craves more, that is poor.", author: "Seneca" },
        { quote: "Wherever there is a human being, there is an opportunity for a kindness.", author: "Seneca" },
        { quote: "No man is free who is not master of himself.", author: "Epictetus" },
        { quote: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" },
        { quote: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
        { quote: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus" },
        { quote: "He who laughs at himself never runs out of things to laugh at.", author: "Epictetus" },
        { quote: "The key is to keep company only with people who uplift you, whose presence calls forth your best.", author: "Epictetus" },
        { quote: "The universe is change; our life is what our thoughts make it.", author: "Marcus Aurelius" },
        { quote: "Begin at once to live, and count each separate day as a separate life.", author: "Seneca" },
        { quote: "If you want to improve, be content to be thought foolish and stupid.", author: "Epictetus" },
        { quote: "What is the point of dragging up sufferings that are over, of being miserable now because you were miserable then?", author: "Seneca" },
        { quote: "To be evenminded is the greatest virtue.", author: "Heraclitus" },
        { quote: "The willing soul Fate guides, the unwilling drags.", author: "Cleanthes" },
        { quote: "Associate with people who are likely to improve you.", author: "Seneca" },
        { quote: "The art of living is more like wrestling than dancing.", author: "Marcus Aurelius" },
        { quote: "Be tolerant with others and strict with yourself.", author: "Marcus Aurelius" },
        { quote: "A gem cannot be polished without friction, nor a man perfected without trials.", author: "Seneca" },
        { quote: "He who is brave is free.", author: "Seneca" },
        { quote: "Focus on your sphere of control: your own thoughts and actions.", author: "Epictetus" },
        { quote: "Live in agreement with nature.", author: "Zeno of Citium" },
        { quote: "The obstacle is the way.", author: "Marcus Aurelius" },
        { quote: "Service to others is the rent you pay for your room here on Earth.", author: "Muhammad Ali" },
        { quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius" },
        { quote: "When you arise in the morning, think of what a precious privilege it is to be alive—to breathe, to think, to enjoy, to love.", author: "Marcus Aurelius" },
        { quote: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
        { quote: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius" },
        { quote: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius" },
        { quote: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.", author: "Marcus Aurelius" },
        { quote: "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.", author: "Marcus Aurelius" },
        { quote: "Our life is what our thoughts make it.", author: "Marcus Aurelius" },
        { quote: "Look back over the past, with its changing empires that rose and fell, and you can foresee the future too.", author: "Marcus Aurelius" },
        { quote: "The best revenge is not to be like your enemy.", author: "Marcus Aurelius" },
        { quote: "Choose not to be harmed—and you won’t feel harmed. Don’t feel harmed—and you haven’t been.", author: "Marcus Aurelius" },
        { quote: "It is time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.", author: "Marcus Aurelius" },
        { quote: "External things are not the problem. It's your assessment of them. Which you can erase right now.", author: "Marcus Aurelius" },
        { quote: "You could leave life right now. Let that determine what you do and say and think.", author: "Marcus Aurelius" },
        { quote: "Life is neither good nor evil, but only a place for good and evil.", author: "Marcus Aurelius" },
        { quote: "Settle on the type of person you want to be and stick to it, whether alone or in company.", author: "Marcus Aurelius" },
        { quote: "Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions - not outside.", author: "Marcus Aurelius" },
        { quote: "He who lives in harmony with himself lives in harmony with the universe.", author: "Marcus Aurelius" },
        { quote: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.", author: "Marcus Aurelius" },
        { quote: "Receive without pride, let go without attachment.", author: "Marcus Aurelius" },
        { quote: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
        { quote: "All cruelty springs from weakness.", author: "Seneca" },
        { quote: "Sometimes even to live is an act of courage.", author: "Seneca" },
        { quote: "If one does not know to which port one is sailing, no wind is favorable.", author: "Seneca" },
        { quote: "It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult.", author: "Seneca" },
        { quote: "No tree becomes rooted and sturdy unless many a wind assails it.", author: "Seneca" },
        { quote: "As is a tale, so is life: not how long it is, but how good it is, is what matters.", author: "Seneca" },
        { quote: "Hang on to your youthful enthusiasms -- you’ll be able to use them better when you’re older.", author: "Seneca" },
        { quote: "It is the power of the mind to be unconquerable.", author: "Seneca" },
        { quote: "He who fears death will never do anything worth of a man who is alive.", author: "Seneca" },
        { quote: "True happiness is to enjoy the present, without anxious dependence upon the future.", author: "Seneca" },
        { quote: "While we wait for life, life passes.", author: "Seneca" },
        { quote: "Every new beginning comes from some other beginning's end.", author: "Seneca" },
        { quote: "The mind that is anxious about future events is miserable.", author: "Seneca" },
        { quote: "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.", author: "Seneca" },
        { quote: "It is a rough road that leads to the heights of greatness.", author: "Seneca" },
        { quote: "To wish to be well is a part of becoming well.", author: "Seneca" },
        { quote: "No man was ever wise by chance.", author: "Seneca" },
        { quote: "The greatest remedy for anger is delay.", author: "Seneca" },
        { quote: "We learn not in school, but in life.", author: "Seneca" },
        { quote: "If you live in harmony with nature you will never be poor; if you live according what others think, you will never be rich.", author: "Seneca" },
        { quote: "Fire tests gold, suffering tests brave men.", author: "Seneca" },
        { quote: "The part of life we really live is small. For all the rest of existence is not life, but merely time.", author: "Seneca" },
        { quote: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca" },
        { quote: "Life, if well lived, is long enough.", author: "Seneca" },
        { quote: "The important thing about a problem is not its solution, but the strength we gain in finding the solution.", author: "Seneca" },
        { quote: "

To bear trials with a calm mind robs misfortune of its strength and burden.", author: "Seneca" },
        { quote: "I judge you unfortunate because you have never lived through misfortune. You have passed through life without an opponent.", author: "Seneca" },
        { quote: "Only the educated are free.", author: "Epictetus" },
        { quote: "Don't explain your philosophy. Embody it.", author: "Epictetus" },
        { quote: "We cannot choose our external circumstances, but we can always choose how we respond to them.", author: "Epictetus" },
        { quote: "Circumstances don't make the man, they only reveal him to himself.", author: "Epictetus" },
        { quote: "Man is not worried by real problems so much as by his imagined anxieties about real problems.", author: "Epictetus" },
        { quote: "People are not disturbed by things, but by the views they take of them.", author: "Epictetus" },
        { quote: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.", author: "Epictetus" },
        { quote: "The greater the difficulty, the more glory in surmounting it.", author: "Epictetus" },
        { quote: "Make the best use of what is in your power, and take the rest as it happens.", author: "Epictetus" },
        { quote: "If you want to live a free life, do not desire anything that depends on others.", author: "Epictetus" },
        { quote: "Seek not the good in external things; seek it in yourselves.", author: "Epictetus" },
        { quote: "No great thing is created suddenly.", author: "Epictetus" },
        { quote: "Attach yourself to what is spiritually superior, regardless of what other people think or do.", author: "Epictetus" },
        { quote: "Control your passions, lest they take vengeance on you.", author: "Epictetus" },
        { quote: "It is impossible for a man to learn what he thinks he already knows.", author: "Epictetus" },
        { quote: "The world turns aside to let any man pass who knows where he is going.", author: "Epictetus" },
        { quote: "To accuse others for one's own misfortunes is a sign of want of education.", author: "Epictetus" },
        { quote: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.", author: "Epictetus" },
        { quote: "Practice yourself, for heaven's sake, in little things; and thence proceed to greater.", author: "Epictetus" },
        { quote: "If you wish to be an orator, be an orator; if you wish to be a philosopher, be a philosopher.", author: "Epictetus" },
        { quote: "Do not seek for things to happen the way you want them to; rather, wish that what happens happen the way it happens: then you will be happy.", author: "Epictetus" },
        { quote: "What concerns me is not the way things are, but rather the way people think things are.", author: "Epictetus" },
        { quote: "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.", author: "Epictetus" },
        { quote: "First learn the meaning of what you say, and then speak.", author: "Epictetus" },
        { quote: "Fortify yourself with contentment, for this is an impregnable fortress.", author: "Epictetus" },
        { quote: "Small-minded people blame others. Average people blame themselves. The wise see all blame as foolishness.", author: "Epictetus" },
        { quote: "Don't be concerned with other people's impressions of you. They are dazzled and deluded by appearances.", author: "Epictetus" },
        { quote: "A ship should not ride on a single anchor, nor life on a single hope.", author: "Epictetus" },
        { quote: "The trials you encounter will introduce you to your strengths.", author: "Epictetus" },
        { quote: "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.", author: "Epictetus" },
        { quote: "Curb your desire—don’t set your heart on so many things and you will get what you need.", author: "Epictetus" },
        { quote: "Keep silence for the most part, and speak only when you must, and then briefly.", author: "Epictetus" },
        { quote: "Man conquers the world by conquering himself.", author: "Zeno of Citium" },
        { quote: "Well-being is attained by little and little, and nevertheless is no little thing itself.", author: "Zeno of Citium" },
        { quote: "Steel your sensibilities, so that life shall hurt you as little as possible.", author: "Zeno of Citium" },
        { quote: "The goal of life is living in agreement with nature.", author: "Zeno of Citium" },
        { quote: "All the good are friends of one another.", author: "Zeno of Citium" },
        { quote: "A bad feeling is a commotion of the mind repugnant to reason, and against nature.", author: "Zeno of Citium" },
        { quote: "No evil is honorable: but death is honorable; therefore death is not evil.", author: "Zeno of Citium" },
        { quote: "If you lay violent hands on me, you’ll have my body, but my mind will remain with Stilpo.", author: "Zeno of Citium" },
        { quote: "Happiness is a good flow of life.", author: "Zeno of Citium" },
        { quote: "Better to trip with the feet than with the tongue.", author: "Zeno of Citium" },
        { quote: "Follow where reason leads.", author: "Socrates" },
        { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { quote: "An unexamined life is not worth living.", author: "Socrates" },
        { quote: "Be kind, for everyone you meet is fighting a harder battle.", author: "Plato" },
        { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
        { quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { quote: "Patience is bitter, but its fruit is sweet.", author: "Aristotle" },
        { quote: "He who has overcome his fears will truly be free.", author: "Aristotle" },
        { quote: "The energy of the mind is the essence of life.", author: "Aristotle" },
        { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { quote: "What is a friend? A single soul dwelling in two bodies.", author: "Aristotle" },
        { quote: "Hope is a waking dream.", author: "Aristotle" },
        { quote: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
        { quote: "To live a good life: We have the potential for it. If we can learn to be indifferent to what makes no difference.", author: "Marcus Aurelius" },
        { quote: "How much more grievous are the consequences of anger than the causes of it.", author: "Marcus Aurelius" },
        { quote: "The nearer a man comes to a calm mind, the closer he is to strength.", author: "Marcus Aurelius" },
        { quote: "Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.", author: "Marcus Aurelius" },
        { quote: "Your days are numbered. Use them to throw open the windows of your soul to the sun. If you do not, the sun will soon set, and you with it.", author: "Marcus Aurelius" },
        { quote: "Begin. To begin is half the work. Let half still remain; again begin this, and thou wilt have finished.", author: "Marcus Aurelius" },
        { quote: "Do every act of your life as if it were your last.", author: "Marcus Aurelius" },
        { quote: "Let not your mind run on what you lack as much as on what you have already.", author: "Marcus Aurelius" },
        { quote: "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.", author: "Marcus Aurelius" },
        { quote: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.", author: "Marcus Aurelius" },
        { quote: "Nothing happens to any man that he is not formed by nature to bear.", author: "Marcus Aurelius" },
        { quote: "Adapt yourself to the life you have been given; and truly love the people with whom destiny has surrounded you.", author: "Marcus Aurelius" },
        { quote: "That which is not good for the bee-hive, cannot be good for the bee.", author: "Marcus Aurelius" },
        { quote: "The happiness of those who want to be popular depends on others; the happiness of those who seek pleasure fluctuates with moods outside their control; but the happiness of the wise grows out of their own free acts.", author: "Marcus Aurelius" },
        { quote: "Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours.", author: "Marcus Aurelius" },
        { quote: "Time is a sort of river of passing events, and strong is its current; no sooner is a thing brought to sight than it is swept by and another takes its place, and this too will be swept away.", author: "Marcus Aurelius" },
        { quote: "A man's worth is no greater than the worth of his ambitions.", author: "Marcus Aurelius" },
        { quote: "It is not events that disturb people, it is their judgements concerning them.", author: "Epictetus" },
        { quote: "If you seek tranquility, do less. Or (more accurately) do what’s essential.", author: "Marcus Aurelius" },
        { quote: "Be like the promontory against which the waves continually break, but it stands firm and tames the fury of the water around it.", author: "Marcus Aurelius" },
        { quote: "The mind is everything. What you think you become.", author: "Buddha" },
        { quote: "He suffers more than necessary, who suffers before it is necessary.", author: "Seneca" },
        { quote: "It does not matter what you bear, but how you bear it.", author: "Seneca" },
        { quote: "Throw me to the wolves and I will return leading the pack.", author: "Seneca" },
        { quote: "The bravest sight in the world is to see a great man struggling against adversity.", author: "Seneca" },
        { quote: "There is no easy way from the earth to the stars.", author: "Seneca" },
        { quote: "Every difficulty in life presents us with an opportunity to turn inward and invoke our own inner resources.", author: "Epictetus" },
        { quote: "The true man is revealed in difficult times.", author: "Epictetus" }
    ];

    // --- Create DOM Elements ---
    const container = document.createElement('div');
    container.style.cssText = `
        width: 100%;
        max-width: 672px;
        padding-left: 16px;
        padding-right: 16px;
        margin-left: auto;
        margin-right: auto;
    `;

    const title = document.createElement('h1');
    title.textContent = 'Stoic Wisdom';
    title.style.cssText = `
        font-size: 36px;
        font-weight: 700;
        color: #111827;
        margin-bottom: 32px;
        text-align: center;
    `;

    const quoteCard = document.createElement('div');
    quoteCard.style.cssText = `
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        padding: 32px;
        width: 100%;
        max-width: 600px;
        text-align: center;
        transition: all 0.3s ease-in-out;
    `;
    quoteCard.addEventListener('mouseenter', () => {
        quoteCard.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    });
    quoteCard.addEventListener('mouseleave', () => {
        quoteCard.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    });

    const quoteText = document.createElement('p');
    quoteText.id = 'quote-text';
    quoteText.textContent = 'Loading your daily dose of wisdom...';
    quoteText.setAttribute('aria-live', 'polite');
    quoteText.style.cssText = `
        font-size: 24px;
        line-height: 32px;
        font-weight: 500;
        margin-bottom: 16px;
        min-height: 120px;
        color: #374151;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    `;

    const quoteAuthor = document.createElement('p');
    quoteAuthor.id = 'quote-author';
    quoteAuthor.style.cssText = `
        font-size: 18px;
        font-style: italic;
        color: #6b7280;
        margin-bottom: 24px;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    `;

    const newQuoteButton = document.createElement('button');
    newQuoteButton.id = 'new-quote-btn';
    newQuoteButton.textContent = 'Generate New Quote';
    newQuoteButton.style.cssText = `
        background-color: #3b82f6;
        color: #ffffff;
        font-weight: 500;
        padding: 12px 24px;
        border-radius: 8px;
        transition: background-color 0.3s ease;
        border: none;
        cursor: pointer;
        margin-top: 16px;
        margin-right: 8px;
    `;
    newQuoteButton.addEventListener('mouseenter', () => {
        newQuoteButton.style.backgroundColor = '#2563eb';
    });
    newQuoteButton.addEventListener('mouseleave', () => {
        newQuoteButton.style.backgroundColor = '#3b82f6';
    });
    newQuoteButton.addEventListener('focus', () => {
        newQuoteButton.style.outline = '2px solid transparent';
        newQuoteButton.style.outlineOffset = '2px';
        newQuoteButton.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.5)';
    });
    newQuoteButton.addEventListener('blur', () => {
        newQuoteButton.style.boxShadow = 'none';
    });

    const shareQuoteButton = document.createElement('button');
    shareQuoteButton.id = 'share-quote-btn';
    shareQuoteButton.textContent = 'Share Quote';
    shareQuoteButton.style.cssText = `
        background-color: #10b981;
        color: #ffffff;
        font-weight: 500;
        padding: 12px 24px;
        border-radius: 8px;
        transition: background-color 0.3s ease;
        border: none;
        cursor: pointer;
        margin-top: 16px;
        margin-left: 8px;
    `;
    shareQuoteButton.addEventListener('mouseenter', () => {
        shareQuoteButton.style.backgroundColor = '#059669';
    });
    shareQuoteButton.addEventListener('mouseleave', () => {
        shareQuoteButton.style.backgroundColor = '#10b981';
    });
    shareQuoteButton.addEventListener('focus', () => {
        shareQuoteButton.style.outline = '2px solid transparent';
        shareQuoteButton.style.outlineOffset = '2px';
        shareQuoteButton.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.5)';
    });
    shareQuoteButton.addEventListener('blur', () => {
        shareQuoteButton.style.boxShadow = 'none';
    });

    // --- Append Elements ---
    quoteCard.appendChild(quoteText);
    quoteCard.appendChild(quoteAuthor);
    quoteCard.appendChild(newQuoteButton);
    quoteCard.appendChild(shareQuoteButton);
    container.appendChild(title);
    container.appendChild(quoteCard);
    document.body.appendChild(container);

    // --- Set Body Styles ---
    document.body.style.cssText = `
        font-family: 'Inter', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f3f4f6;
        color: #1f2937;
        padding: 16px;
        overflow-x: hidden;
    `;

    // --- Load Google Fonts ---
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // --- Responsive Styles ---
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 640px) {
            #quote-card {
                padding: 24px;
            }
            #quote-text {
                font-size: 20px;
                line-height: 28px;
            }
            #quote-author {
                font-size: 16px;
            }
            .app-title {
                font-size: 30px;
                margin-bottom: 24px;
            }
            #new-quote-btn, #share-quote-btn {
                padding: 10px 20px;
                font-size: 14px;
            }
        }
    `;
    document.head.appendChild(style);

    // --- Functions ---
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function displayRandomQuote() {
        if (!quotes || quotes.length === 0) {
            quoteText.textContent = 'No quotes available.';
            quoteAuthor.textContent = '';
            return;
        }

        const randomIndex = getRandomInt(0, quotes.length);
        const randomQuote = quotes[randomIndex];

        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';

        setTimeout(() => {
            quoteText.textContent = `"${randomQuote.quote}"`;
            quoteAuthor.textContent = `- ${randomQuote.author}`;
            quoteText.style.opacity = '1';
            quoteAuthor.style.opacity = '1';
        }, 200);
    }

    function shareQuote() {
        const quote = quoteText.textContent;
        const author = quoteAuthor.textContent;
        const shareText = `${quote} ${author}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Quote copied to clipboard!');
        }).catch(() => {
            alert('Failed to copy quote. Please try again.');
        });
    }

    // --- Event Listeners ---
    newQuoteButton.addEventListener('click', displayRandomQuote);
    shareQuoteButton.addEventListener('click', shareQuote);

    // --- Initial Load ---
    displayRandomQuote();
});