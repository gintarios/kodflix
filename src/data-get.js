import Movie1 from "./img/blackmirror.jpg";
import Movie2 from "./img/breakingbad.jpg";
import Movie3 from "./img/deathnote.jpg";
import Movie4 from "./img/got.jpg";
import Movie5 from "./img/walkingdead.jpg";
import Movie6 from "./img/thewire.jpg";

const blackmirror = "Featuring stand-alone dramas -- sharp, suspenseful, satirical tales that explore techno-paranoia -- \"Black Mirror\" is a contemporary reworking of \"The Twilight Zone\" with stories that tap into the collective unease about the modern world. Each story features its own cast of unique characters, including stars like Bryce Dallas Howard (\"The Help\"), Alice Eve, Gugu Mbatha-Raw, Tom Cullen and Jerome Flynn (\"Game of Thrones\"). Joe Wright, Dan Trachtenberg, and James Watkins are among the featured directors.";
const breakingbad = "Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer. Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels.";
const deathnote = "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.";
const gameofthrones = "George R.R. Martin's best-selling book series `A Song of Ice and Fire' is brought to the screen as HBO sinks its considerable storytelling teeth into the medieval fantasy epic. It's the depiction of two powerful families - kings and queens, knights and renegades, liars and honest men - playing a deadly game for control of the Seven Kingdoms of Westeros, and to sit atop the Iron Throne. Martin is credited as a co-executive producer and one of the writers for the series, which was filmed in Northern Ireland and Malta.";
const walkingdead = "Based on the comic book series written by Robert Kirkman, this gritty drama portrays life in the months and years that follow a zombie apocalypse. Led by former police officer Rick Grimes, his family and a group of other survivors find themselves constantly on the move in search of a safe and secure home. But the pressure each day to stay alive sends many in the group to the deepest depths of human cruelty, and Rick discovers that the overwhelming fear of the survivors can be more deadly than the zombies walking among them.";
const thewire = "This series looks at the narcotics scene in Baltimore through the eyes of law enforcers as well as the drug dealers and users. Other facets of the city that are explored in the series are the government and bureaucracy, schools and the news media. The show was created by former police reporter David Simon, who also wrote many of the episodes.";

const movies = [
    { url: "/black-mirror", movietitle: "Black Mirror", movieimg: Movie1, synopsis: blackmirror },
    { url: "/breaking-bad", movietitle: "Breaking Bad", movieimg: Movie2, synopsis: breakingbad },
    { url: "/death-note", movietitle: "Death Note", movieimg: Movie3, synopsis: deathnote },
    { url: "/game-of-thrones", movietitle: "Game of Thrones", movieimg: Movie4, synopsis: gameofthrones },
    { url: "/walking-dead", movietitle: "Walking Dead", movieimg: Movie5, synopsis: walkingdead },
    { url: "/the-wire", movietitle: "The Wire", movieimg: Movie6, synopsis: thewire }
]

export default movies;