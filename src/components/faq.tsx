'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: `What is the function of the sigil?`,
    answers: [
      `A sigil is like a special symbol that you create using a specific phrase that holds a strong desire for you. It's basically a picture that represents what you really want.`,
      `Even though the whole idea of sigils and seals has been around for a while, the technique called "Sigilization" for making magical sigils was developed in the 20th century by a guy named Austin Osman Spare, who was into occult stuff.`,
      `His way, which is still popular today, takes the words you want to focus on and turns them into a kind of abstract design. This special sigil then gets charged up with your determination and activated, sending out its energy into the universe to make things happen.`,
    ],
  },
  {
    question: `How does it work?`,
    answers: [
      `Looking at sigils from a psychological angle, they take on an interesting twist. When you make a sigil, it's like you're having a chat with your own subconscious. You craft a symbol that talks to your deeper thoughts and wishes. Then, your subconscious takes on the role of a co-pilot, guiding you towards what you truly want when you're awake. It's almost like a form of self-hypnosis, where your inner self helps steer you in the right direction.`,
    ],
  },
  {
    question: `How to choose my word for statement of desire?`,
    answers: [
      `This is the thing you're aiming to bring into your life, something you wish to make happen.`,
      `There are a few tips to keep in mind. First off, write your phrase in the present tense, as if it's already true. Imagine you're creating a sigil to own a home. Instead of saying "I want to own a home" or "I wanted a house," go with "I am a homeowner."`,
      `Avoid using negative words like "don't," "won't," or "not." For instance, "I won't tolerate unfair treatment" can turn into "I am fair and mindful of how I'm treated." Positive, uplifting words tend to work better for sigils. Your statement should make you feel good and motivated, rather than focusing on the past or what you want to avoid. So, instead of "I don't fail my exam," go with "I am dedicated to my studies" or "I succeed in my exams."`,
      `Lastly, aim for specificity without making things overly complex. It might seem tricky, but the key is to keep your statement brief yet meaningful. For instance, "I hold love and appreciation for my body around others." Keep it clear and concise, and you're on the right track.`,
    ],
  },
  {
    question: `How this simple app can help me?`,
    answers: [
      `This app is designed to assist you in eliminating all the vowels and reducing double consonants. For instance, let's say your starting phrase is "Bringing Joy." After the app does its thing, you'd have "BRNGNGJY." Then, to keep things neat, the app trims away any repeated letters, giving you "BRJY."`,
      `Using the resulting characters, you'll be all set to craft your simplified sigil symbol. This symbol can be used for charging or even as a tattoo if you like.`,
    ],
  },
  {
    question: `Why you create this simple app?`,
    answers: [
      `I had this idea to design my very first tattoo, and I've always had a soft spot for line art because it's both simple and stylish. In Indonesia, we have something called "rajah," and I thought it would be great to create a rajah design to ink on my body. But it seemed like starting from scratch might be the way to go. That's how I got into the world of Sigils.`,
      `Given that I have a bit of coding know-how, I figured I could just create the generator myself. It's a way for me to experiment with the concept of my upcoming tattoo design.`,
    ],
  },
];

export default function FAQ() {
  return (
    <div className="w-full px-4">
      <div className="w-full mx-auto rounded-2xl">
        {faqs.map((faq, i) => {
          const questionKey = `question-key-${i}`;
          return (
            <Disclosure key={questionKey}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 my-2 text-sm font-medium text-left bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm">
                    {faq.answers.map((answer, i) => {
                      return (
                        <div
                          key={`${questionKey}-answer-key-${i}`}
                          className="mb-2"
                        >
                          {answer}
                        </div>
                      );
                    })}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
