export type Episode = {
  number: number;
  title: string;
  service: string;
  kidWord: string;
  summary: string;
  official: boolean;
  episodeId?: string;
};

export const series: Episode[] = [
  {
    number: 1,
    title: 'The town map',
    service: 'S3',
    kidWord: 'big toy box',
    summary: 'Sammy keeps the town files safe in a giant toy box.',
    official: true,
    episodeId: 'episode-1-town-map'
  },
  {
    number: 2,
    title: 'The busy boxes',
    service: 'EC2',
    kidWord: 'little helper wheels',
    summary: 'Eddie zips around town on helpful little wheels.',
    official: true,
    episodeId: 'episode-2-busy-boxes'
  },
  {
    number: 3,
    title: 'The lamb wiggle',
    service: 'Lambda',
    kidWord: 'lamb wiggle',
    summary: 'Lulu helps when a tiny idea needs a quick wiggle.',
    official: true,
    episodeId: 'episode-3-lamb-wiggle'
  },
  {
    number: 4,
    title: 'The road fence',
    service: 'VPC',
    kidWord: 'neighborhood fence',
    summary: 'Vivi builds the roads and keeps the town safe inside.',
    official: true,
    episodeId: 'episode-4-road-fence'
  },
  {
    number: 5,
    title: 'The badge lock',
    service: 'IAM',
    kidWord: 'badge lock',
    summary: 'Nat checks badges so the right friend can enter.',
    official: true,
    episodeId: 'episode-5-badge-lock'
  },
  {
    number: 6,
    title: 'The cloud bridge',
    service: 'Route 53',
    kidWord: 'map bridge',
    summary: 'Dot points friends to the right little street.',
    official: true,
    episodeId: 'episode-6-cloud-bridge'
  },
  {
    number: 7,
    title: 'The tidy notebook',
    service: 'RDS',
    kidWord: 'tidy notebook',
    summary: 'The town keeps sorted notes in a tidy notebook.',
    official: true,
    episodeId: 'episode-7-tidy-notebook'
  },
  {
    number: 8,
    title: 'The vaults',
    service: 'RDS',
    kidWord: 'vaults',
    summary: 'The town vaults are where the database stories are stacked.',
    official: true,
    episodeId: 'episode-8-the-vaults'
  },
  {
    number: 9,
    title: 'The little helper',
    service: 'DynamoDB',
    kidWord: 'bouncy backpack',
    summary: 'DynamoDB is a bouncy backpack full of quick ideas.',
    official: true,
    episodeId: 'episode-9-little-helper'
  },
  {
    number: 10,
    title: 'The snack cache',
    service: 'ElastiCache',
    kidWord: 'minty snack cache',
    summary: 'ElastiCache is a minty snack cache for quick town answers.',
    official: true,
    episodeId: 'episode-10-snack-cache'
  },
  {
    number: 11,
    title: 'The page map',
    service: 'DocumentDB',
    kidWord: 'paper map',
    summary: 'DocumentDB is a paper map full of stories and pages.',
    official: true,
    episodeId: 'episode-11-page-map'
  },
  {
    number: 12,
    title: 'The super notebook',
    service: 'Aurora',
    kidWord: 'super notebook',
    summary: 'Aurora is a super notebook that keeps lots of stories in order.',
    official: true
  },
  {
    number: 13,
    title: 'The bouncy backpack',
    service: 'DynamoDB',
    kidWord: 'bouncy backpack',
    summary: 'DynamoDB is a bouncy backpack for fast, fun data.',
    official: true
  },
  {
    number: 14,
    title: 'The minty snack cache',
    service: 'ElastiCache',
    kidWord: 'minty snack cache',
    summary: 'ElastiCache is a minty snack cache that helps the town sip fast.',
    official: true
  },
  {
    number: 15,
    title: 'The paper map',
    service: 'DocumentDB',
    kidWord: 'paper map',
    summary: 'DocumentDB is a paper map that stores big stories in neat pages.',
    official: true
  },
  {
    number: 16,
    title: 'The big star notebook',
    service: 'Neptune',
    kidWord: 'big star notebook',
    summary: 'Neptune is a big star notebook for graphy roads and linked ideas.',
    official: true
  },
  {
    number: 17,
    title: 'The tiny key basket',
    service: 'Keyspaces',
    kidWord: 'tiny key basket',
    summary: 'Keyspaces is a tiny key basket for fast, sorted rows.',
    official: true
  }
];

export const nextEpisode = (): Episode | undefined =>
  series.find((episode) => !episode.episodeId);

export const officialEpisodeCount = (episodes: Episode[] = series): number =>
  episodes.filter((episode) => episode.official).length;

export const findEpisodeByService = (
  service: string,
  episodes: Episode[] = series
): Episode | undefined => episodes.find((episode) => episode.service === service);
