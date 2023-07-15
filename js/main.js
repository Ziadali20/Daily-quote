var qoutes=[
    {
        author:'--Winston Churchill',
        quote: '"The positive thinker sees the invisible, feels the intangible, and achieves the impossible."'
        },
        {
        author:'--Oprah Winfrey',
        quote: '"The greatest discovery of all time is that a person can change his future by merely changing his attitude."'
        },
        {
        author:'--Christian D. Larson',
        quote: '"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."'
        },
        {
        author:'--Nelson Mandela',
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."'
        },
        {
        author:'--C.S. Lewis',
        quote: '"You are never too old to set another goal or to dream a new dream."'
        },
        {
        author:'--Zig Ziglar',
        quote: '"Positive thinking will let you do everything better than negative thinking will."'
        },
        {
        author:'--Winston Churchill',
        quote: '"Attitude is a little thing that makes a big difference."'
        },
        {
        author:'--Mahatma Gandhi',
        quote: '"Be the change you wish to see in the world."'
        },
        {
        author:'--Elbert Hubbard',
        quote: '"Positive anything is better than negative nothing."'
        },
        {
        author:'--Abraham Lincoln',
        quote: '"The best way to predict your future is to create it."'
        },
        {
        author:'--Joyce Meyer',
        quote: '"The only way to have a good day is to start it with a positive attitude."'
        },
        {
        author:'--Les Brown',
        quote: '"In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact."'
        },
        {
        author:'--Napoleon Hill',
        quote: '"A positive mind finds a way it can be done; a negative mind looks for all the ways it can\'t be done."'
        },
        {
        author:'--Matt Cameron',
        quote: '"Live life to the fullest, and focus on the positive."'
        },
        {
        author:'--Harvey Mackay',
        quote: '"Positive thinking is more than just a tagline. It changes the way we behave. And I firmly believe that when I am positive, it not only makes me better, but it also makes those around me better."'
        },
        {
        author:'--Stephen Covey',
        quote: '"I am not a product of my circumstances. I am a product of my decisions."'
        },
        {
        author:'--Franklin D. Roosevelt',
        quote: '"The only limit to our realization of tomorrow will be our doubts of today."'
        },
        {
        author:'--Jim Rohn',
        quote: '"Beware of what you become in pursuit of what you want."'
        },
        {
        author:'--Robert Frost',
        quote: '"In three words I can sum up everything I have learned about life: it goes on."'
        },
        {
        author:'--Wayne Gretzky',
        quote: '"You miss 100% of the shots you don\'t take."'
        },
        {
        author:'--Eleanor Roosevelt',
        quote: '"The future belongs to those who believe in the beauty of their dreams."'
        },
        {
        author:'--Albert Einstein',
        quote: '"Strive not to be a success, but rather to be of value."'
        },
        {
        author:'--Shiv Khera',
        quote: '"Your positive action combined with positive thinking results in success."'
        },
        {
        author:'--Helen Keller',
        quote: '"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."'
        },
        {
        author:'--Ron Jaworski',
        quote: '"Positive thinking is the key to success in business, education, pro football, anything that you can mention. I go out there thinking that I\'m going to complete every pass."'
        },
        {
        author:'--Germany Kent',
        quote: '"Positive thinking is powerful thinking. If you want happiness, fulfillment, success and inner peace, start thinking you have the power to achieve those things. Focus on the bright side of life and expect positive results."'
        },
        {
        author:'--Robert H. Schuller',
        quote: '"The only place where your dream becomes impossible is in your own thinking."'
        },
        {
        author:'--Willie Nelson',
        quote: '"Once you replace negative thoughts with positive ones, you\'ll start having positive results."'
        },
        {
        author:'--J.M. Power',
        quote: '"If you think you can do a thing or think you can\'t do a thing, you\'re right."'
        },
        {
        author:'--Ralph Waldo Emerson',
        quote: '"The only person you are destined to become is the person you decide to be."'
        },
        {
        author:'--Norman Vincent Peale',
        quote: '"Change your thoughts and you change your world."'
        },
        {
        author:'--Lou Holtz',
        quote: '"Ability is what you\'re capable of doing. Motivation determines what you do. Attitude determines how well you do it."'
        },
        {
        author:'--Denis Waitley',
        quote: '"Happiness cannot be traveled to, owned, earned, or worn. It is the spiritual experience of living every minute with love, grace & gratitude."'
        },
        {
        author:'--John Wooden',
        quote: '"Things turn out best for people who make the best of the way things turn out."'
        },
        {
        author:'--Vince Lombardi',
        quote: '"Winning isn\'t everything, but wanting to win is."'
        },
        {
        author:'--Earl Nightingale',
        quote: '"We become what we think about most of the time, and that\'s the strangest secret."'
        }
];

var preVQouteIndex=-1;
function showQuote() {
    var i=Math.floor((Math.random()*qoutes.length));
    if(preVQouteIndex!=i)
    {
    document.getElementById('qoute').innerHTML=(qoutes[i].quote);
    document.getElementById('author').innerHTML=(qoutes[i].author);
    preVQouteIndex=i;
    }
    else{   
        showQuote();
    }
}
