import React from 'react';

const About9 = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Hi, were a team of developers with a passion for building scalable and efficient web
            applications.
          </h1>

          <div className="mb-8 flex justify-center">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/nubelson-fernandes-tAJYoec13xk-unsplash.jpg"
              alt="Team at work"
              className="w-full rounded-sm object-cover"
            />
          </div>

          <div className="mx-auto mb-16 flex w-full max-w-6xl flex-col justify-between gap-12 md:flex-row">
            <div className="text-base font-medium">
              <span className="text-muted-foreground block">Full Stack Developer</span>
              <span className="text-foreground font-semibold">
                San Francisco CA
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/flags/united-states.png"
                  alt="United States"
                  className="h-4 w-4"
                />
              </span>
            </div>

            <div className="mt-8 w-full md:mt-0 md:w-2/3">
              <p className="text-muted-foreground font-base w-full text-lg leading-[28px] md:w-3/4">
                I am a passionate and innovative Full Stack Developer with over 6 years of
                experience in building scalable web applications. My journey began with a
                fascination for problem-solving and a deep interest in emerging technologies.
                <br />
                <br />
                Specializing in React, Node.js, and cloud technologies, I've helped startups and
                enterprises build robust digital solutions. From e-commerce platforms to SaaS
                applications, I focus on creating user-centric experiences with clean, maintainable
                code architecture.
              </p>

              <div className="mt-12">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
                  alt="Work environment"
                  className="w-full rounded-sm object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About9 };
