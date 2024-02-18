const Text = () => {
  return (
    <div className="flex flex-col items-center text-center tracking-wide font-josefin-sans">
      <h1 className="p-10 uppercase text-5xl tracking-widest ">
        <span className="text-red-desaturated font-light">We&apos;re</span>{" "}
        <span className="text-black">coming soon</span>
      </h1>

      <p className="text-red-desaturated px-5" >
        Hello fellow shoppers! We&apos;re currently building our new fashion
        store. Add your email below to stay up-to-date with announcements and
        our launch deals.
      </p>
    </div>
  );
};

export default Text;
