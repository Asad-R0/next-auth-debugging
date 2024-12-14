
export const metadata = {
  title: "next-auth debugging",
  description: "I want to kill myself why is next auth not working",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
