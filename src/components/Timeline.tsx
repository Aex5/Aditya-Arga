type TimelineProps = {
  aboutMe: {
    things: {
      title: string;
      description: string;
      date: string;
    }[];
  };
};

function Timeline({ aboutMe }: TimelineProps) {
  return (
    <ol className="relative border-l border-gray-200">
      {aboutMe.things.map((item, index) => (
        <li key={index} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <p className="text-sm leading-7 font-normal text-gray-500 dark:text-gray-400">
            {item.description}
          </p>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {item.date}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
