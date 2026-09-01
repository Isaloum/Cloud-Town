import type { Episode } from './series.js';

export type HelperCard = {
  title: string;
  body: string;
  service: string;
  official: boolean;
};

export type QuizQuestion = {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type Lesson = {
  episodeNumber: number;
  title: string;
  service: string;
  kidLine: string;
  helperCards: HelperCard[];
  quiz: QuizQuestion[];
  trailChecklist: string[];
};

export const lessonForEpisode = (episode: Episode): Lesson => {
  const kidLine = `${episode.service} is a ${episode.kidWord}.`;

  return {
    episodeNumber: episode.number,
    title: episode.title,
    service: episode.service,
    kidLine,
    helperCards: [
      {
        title: 'Big idea',
        body: `Cloud Town learns that ${episode.service} helps friends keep things tidy and ready for the next town task.`,
        service: episode.service,
        official: episode.official
      },
      {
        title: 'Kid phrase',
        body: `${episode.service} is a ${episode.kidWord}.`,
        service: episode.service,
        official: episode.official
      }
    ],
    quiz: [
      {
        prompt: `What is the kid-friendly idea for ${episode.service}?`,
        options: [episode.kidWord, 'a loud drum', 'a sleepy cloud', 'a rainbow road'],
        answer: episode.kidWord,
        explanation: `${episode.service} is the AWS word, and the kid word makes the idea easy to remember.`
      }
    ],
    trailChecklist: [
      `Say, “${episode.service} is a ${episode.kidWord}.”`,
      'Name the AWS service out loud.',
      'Finish the quiz with a perfect score.'
    ]
  };
};

export const nextLesson = (episode: Episode): Lesson => lessonForEpisode(episode);

export const defaultLesson = lessonForEpisode({
  number: 12,
  title: 'The super notebook',
  service: 'Aurora',
  kidWord: 'super notebook',
  summary: 'Aurora keeps lots of town stories in one bright notebook.',
  official: true
});
