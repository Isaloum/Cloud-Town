import { describe, expect, it } from 'vitest';

import { findEpisodeByService, nextEpisode, officialEpisodeCount, series } from '../src/lib/series.js';
import { defaultLesson, lessonForEpisode } from '../src/lib/lesson.js';

describe('Cloud Town series', () => {
  it('keeps the next episode at episode 12', () => {
    const next = nextEpisode();

    expect(next).toBeDefined();
    expect(next?.number).toBe(12);
    expect(next?.service).toBe('Aurora');
    expect(next?.episodeId).toBeUndefined();
  });

  it('tracks official AWS service names while leaving feature names uncounted', () => {
    expect(officialEpisodeCount()).toBe(series.filter((episode) => episode.official).length);
    expect(findEpisodeByService('Aurora')?.service).toBe('Aurora');
  });

  it('builds kid-friendly lesson metadata for the next cartoon', () => {
    const lesson = lessonForEpisode({
      number: 12,
      title: 'The super notebook',
      service: 'Aurora',
      kidWord: 'super notebook',
      summary: 'Aurora keeps lots of town stories in one bright notebook.',
      official: true
    });

    expect(lesson.kidLine).toBe('Aurora is a super notebook.');
    expect(lesson.quiz[0].answer).toBe('super notebook');
    expect(defaultLesson.service).toBe('Aurora');
  });
});
