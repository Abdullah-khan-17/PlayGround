const WORDS = {
  Animals: `Elephant, Penguin, Octopus, Giraffe, Dolphin, Hedgehog, Flamingo, Kangaroo, Chameleon, Peacock, Jellyfish, Raccoon, Tortoise, Squirrel, Cheetah, Koala, Crocodile, Platypus, Hummingbird, Porcupine, Walrus, Meerkat, Piranha, Llama, Seahorse, Badger, Parrot, Leopard, Mantis, Otter, Tiger, Red Panda, Sloth, Armadillo, Bison, Moose, Wolf, Fox, Beaver, Bat, Camel, Hippo, Rhino, Zebra, Ostrich, Toucan, Eagle, Swan, Pelican, Puffin, Alligator, Gecko, Komodo Dragon, Sea Turtle, Stingray, Lobster, Crab, Butterfly, Ladybug, Dragonfly, Honeybee`,
  Food: `Pancake, Avocado, Sushi, Popcorn, Lasagna, Watermelon, Croissant, Dumpling, Cheesecake, Pineapple, Burrito, Pretzel, Blueberry, Tiramisu, Broccoli, Nachos, Coconut, Waffle, Meatball, Strawberry, Hummus, Cupcake, Spaghetti, Pickle, Donut, Mango, Omelette, Marshmallow, Taco, Cucumber, Ramen, Paella, Curry, Falafel, Pad Thai, Gnocchi, French Toast, Ice Cream, Brownie, Macaron, Pita Bread, Spring Roll, Empanada, Pierogi, Churro, Lemonade, Hot Chocolate, Milkshake, Espresso, Green Tea, Pear, Peach, Pomegranate, Pumpkin, Corn on the Cob, Artichoke, Bell Pepper, French Fries, Grilled Cheese, Fried Rice`,
  Countries: `Japan, Brazil, Iceland, Morocco, Australia, Greece, Canada, Thailand, Kenya, Portugal, Mexico, Norway, India, Argentina, Egypt, Vietnam, Ireland, Peru, Finland, Jamaica, Turkey, Chile, New Zealand, Spain, South Korea, Madagascar, Switzerland, Colombia, Nepal, South Africa, France, Italy, China, Indonesia, Philippines, Malaysia, Singapore, Cambodia, Laos, Mongolia, Pakistan, Bangladesh, Sri Lanka, Saudi Arabia, Jordan, Tanzania, Ethiopia, Ghana, Nigeria, Senegal, Tunisia, Croatia, Sweden, Denmark, Poland, Austria, Netherlands, Belgium, Ukraine, Cuba, Costa Rica`,
  Cities: `Paris, Tokyo, New York, Barcelona, Cairo, Amsterdam, Rio de Janeiro, Seoul, London, Venice, Istanbul, Sydney, Kyoto, Marrakech, Busan, Lisbon, Vancouver, Mumbai, Reykjavík, Florence, Mexico City, Bangkok, Cape Town, Chicago, Havana, Prague, Dubai, Athens, Nairobi, Buenos Aires, Rome, Berlin, Madrid, Shanghai, Beijing, Hong Kong, Taipei, Osaka, Brisbane, Kuala Lumpur, Jakarta, Manila, Delhi, Jaipur, Jerusalem, Petra, Porto, Accra, Lagos, Zanzibar City, Stockholm, Copenhagen, Edinburgh, Dublin, Vienna, Budapest, Warsaw, Kraków, Santorini, Honolulu, San Francisco, New Orleans, Lima, Cusco, Santiago, Medellín, Montreal, Quebec City, Auckland, Melbourne, Doha, Abu Dhabi`,
  Movies: `Jaws, Toy Story, The Matrix, Titanic, Jurassic Park, Finding Nemo, The Lion King, Home Alone, Inception, Frozen, Shrek, The Godfather, Coco, Avatar, The Wizard of Oz, Ghostbusters, Rocky, Ratatouille, E.T., Black Panther, Interstellar, The Incredibles, Mean Girls, Up, Gladiator, Barbie, Spider-Man, Casablanca, Moana, Paddington, Back to the Future, The Sound of Music, Raiders of the Lost Ark, The Breakfast Club, The Shawshank Redemption, Pulp Fiction, The Truman Show, The Lord of the Rings, Harry Potter, Spirited Away, My Neighbor Totoro, Parasite, Crouching Tiger Hidden Dragon, Slumdog Millionaire, Amélie, Life Is Beautiful, Cinema Paradiso, The Grand Budapest Hotel, La La Land, Get Out, The Help, Hidden Figures, Everything Everywhere All at Once, The Princess Bride, The Karate Kid, The Muppet Movie, Kung Fu Panda, The Iron Giant, The Little Mermaid, The Jungle Book, The Incredibles 2, Encanto`,
  Sports: `Basketball, Tennis, Surfing, Fencing, Figure skating, Baseball, Rock climbing, Volleyball, Archery, Rugby, Snowboarding, Badminton, Boxing, Skateboarding, Golf, Rowing, Gymnastics, Table tennis, Marathon, Hockey, Diving, Cricket, Wrestling, Skiing, Cycling, Taekwondo, Soccer, Bowling, Canoeing, Pickleball, Swimming, Track and Field, Horse Racing, Polo, Squash, Handball, Water Polo, Synchronized Swimming, Weightlifting, Judo, Karate, Javelin, Disc Golf, Ultimate Frisbee, Sailing, Windsurfing, Kitesurfing, Bobsled, Luge, Curling, Speed Skating, Paddleboarding, Triathlon, Cross-Country Skiing, Motocross, Parkour, Darts, Snooker, Chess Boxing, Dragon Boat Racing, Netball`,
  Technology: `Smartphone, Drone, Robot, Headphones, 3D printer, Game controller, Satellite, Electric car, Laptop, Virtual reality, Smartwatch, Microchip, Camera, Keyboard, Smart thermostat, Solar panel, Wi-Fi router, E-reader, Microphone, Projector, Selfie stick, Calculator, Flash drive, Touchscreen, Barcode scanner, Robot vacuum, Podcast, Video game, Bluetooth speaker, Space station, Tablet, Smart TV, Digital camera, GPS tracker, Fitness tracker, Electric scooter, Self-driving car, Motion sensor, Wireless charger, Smart speaker, Search engine, Video call, Cloud storage, Password, Emoji, QR code, Fiber-optic cable, Quantum computer, Space telescope, Mars rover, Weather satellite, 3D scanner, E-book, Streaming service, Operating system, Artificial intelligence, Hologram, Digital wallet, Noise-canceling headphones, Portable battery, E-bike`,
  Objects: `Umbrella, Key, Mirror, Suitcase, Candle, Backpack, Scissors, Toothbrush, Compass, Pillow, Sunglasses, Hourglass, Ladder, Teapot, Wallet, Fountain pen, Magnet, Doormat, Thermos, Ruler, Binoculars, Stapler, Balloon, Hammock, Wrench, Snow globe, Feather duster, Alarm clock, Origami, Soap, Typewriter, Microscope, Thermometer, Lantern, Parachute, Sewing machine, Violin, Tambourine, Paintbrush, Easel, Skateboard helmet, Flashlight, Padlock, Pocket watch, Canteen, Lunchbox, Rolling pin, Colander, Frying pan, Sewing kit, First-aid kit, Fishing rod, Birdhouse, Wind chime, Record player, Snow shovel, Garden hose, Measuring tape, Chessboard, Carving knife, Luggage tag`,
  Professions: `Astronaut, Chef, Detective, Architect, Firefighter, Photographer, Beekeeper, Dentist, Pilot, Magician, Gardener, Sculptor, Teacher, Lifeguard, Meteorologist, Baker, Veterinarian, Cartographer, Zookeeper, Drummer, Journalist, Tailor, Paramedic, Archaeologist, Florist, Sailor, Animator, Judge, Locksmith, Park ranger, Marine Biologist, Astronomer, Nurse, Surgeon, Electrician, Plumber, Carpenter, Pastry Chef, Librarian, Translator, Game Designer, Film Director, Musician, Fashion Designer, Farmer, Urban Planner, Coach, Flight Attendant, Oceanographer, Wildlife Photographer, Forensic Scientist, Civil Engineer, Museum Curator, Graphic Designer, Choreographer, Tour Guide, Train Conductor, Sound Engineer, Interpreter, Climatologist, Search and Rescue Worker`,
  Celebrities: `Taylor Swift, Beyoncé, Keanu Reeves, Zendaya, Dwayne Johnson, Billie Eilish, Tom Hanks, Rihanna, Pedro Pascal, Dolly Parton, Emma Stone, Bad Bunny, Oprah Winfrey, Ryan Reynolds, Serena Williams, Snoop Dogg, Lady Gaga, Jackie Chan, Adele, LeBron James, Emma Watson, Bruno Mars, Gordon Ramsay, Shakira, Chris Hemsworth, Dua Lipa, Morgan Freeman, Lionel Messi, Miley Cyrus, Harry Styles, Elton John, Stevie Wonder, Celine Dion, Ariana Grande, Yo-Yo Ma, David Bowie, Jennifer Aniston, Meryl Streep, Viola Davis, Daniel Radcliffe, Priyanka Chopra, Shah Rukh Khan, Lupita Nyong'o, Riz Ahmed, Bruce Lee, Michelle Yeoh, BTS, BLACKPINK, Malala Yousafzai, David Attenborough, Jane Goodall, Stephen Hawking, Neil deGrasse Tyson, Michelle Obama, Nelson Mandela, Cristiano Ronaldo, Simone Biles, Naomi Osaka, Shohei Ohtani, Greta Thunberg, Kylian Mbappé`,
  Nature: `Waterfall, Volcano, Rainbow, Glacier, Coral reef, Thunderstorm, Desert, Redwood, Aurora, Moonlight, Wildflower, Canyon, Tidal wave, Fossil, Sand dune, Mushroom, Snowflake, Hot spring, Eclipse, Bamboo forest, Seashell, Lightning, Mountain peak, Pinecone, River delta, Moss, Comet, Tide pool, Redwood forest, Firefly, Rainforest, Mangrove, Oasis, Cave, Geyser, Meadow, Prairie, Savanna, Salt flat, Fjord, Peninsula, Iceberg, Northern Lights, Meteor shower, Solar eclipse, Wildfire, Tornado, Hailstorm, Monsoon, Bioluminescence, Kelp forest, Mangrove swamp, Redwood grove, Flowering cactus, Venus flytrap, Lily pad, Sea anemone, Geode, Amber, Stalactite, Mud volcano`,
  Transportation: `Hot air balloon, Subway, Sailboat, Tractor, Helicopter, Tandem bicycle, Cable car, Canoe, Motorcycle, Spaceship, Tram, Cable ferry, Rickshaw, Ferry, Snowmobile, Electric train, Train, Segway, Gondola, Double-decker bus, Glider, Jet ski, Delivery van, Horse-drawn carriage, Rocket, Scooter, Cargo ship, Unicycle, Taxi, Airplane, Submarine, Bulldozer, Tractor-trailer, Electric bus, Limousine, Ambulance, Fire engine, School bus, Speedboat, Kayak, Rowboat, Cruise ship, Container ship, Hovercraft, Dog sled, Autogyro, Funicular, Maglev train, Trolleybus, Moped, Snowplow, Cement mixer, Forklift, Road roller, Gondola lift, Space shuttle, Lunar rover, Paraglider, Bicycle taxi, Velocipede, Monorail`,
  'Random Mix': `Karaoke, Birthday cake, Treasure map, Pillow fort, Snowman, Roller coaster, Secret agent, Time machine, Campfire, Magic trick, School dance, Haunted house, Treasure chest, Costume party, Soap bubbles, Photo booth, Paper airplane, Secret handshake, Sleepover, Board game, Sandcastle, Fortune cookie, Puppet show, Fireworks, Diary, Water balloon, Pirate ship, Treehouse, Traffic jam, Magic carpet, Lemonade stand, Scavenger hunt, Costume, Birthday card, Paper crown, Picnic basket, Secret passage, Puppet, Magic wand, Campground, Road trip, Movie night, Talent show, Parade, Carnival, Hide-and-seek, Treasure hunt, Pillow fight, Book club, Bake sale, Rainy day, Backyard, Camp badge, Friendship bracelet, Paper lantern, Mystery box, Time capsule, Bubble bath, Kite festival, Family reunion, Surprise party`
};
const CURATED_HINT_DATA = {
  Animals: `
Lion|A powerful animal associated with grasslands
Elephant|A huge animal known for its memory
Penguin|A bird adapted to extremely cold environments
Giraffe|An animal that feeds high above the ground
Dolphin|An intelligent creature found in the ocean
Kangaroo|An animal famous for carrying its young
Tiger|A solitary hunter with distinctive markings
Zebra|A grazing animal with a striking pattern
Owl|A bird strongly associated with nighttime
Crocodile|A powerful reptile found near water
Panda|A bear that has a very specialised diet
Cheetah|A land animal famous for speed
Camel|An animal adapted to dry environments
Peacock|A bird known for its elaborate display
Wolf|A wild animal that often lives in groups
Fox|A clever animal found in many habitats
Koala|A tree-dwelling animal with a specialised diet
Gorilla|A powerful primate with complex social behaviour
Flamingo|A bird often seen standing in shallow water
Octopus|An ocean creature with remarkable problem-solving abilities
Shark|A major predator in marine ecosystems
Eagle|A bird associated with excellent eyesight
Hedgehog|A small animal with natural protective spines
Sloth|A tree-dwelling animal known for slow movement
Chameleon|A reptile famous for changing its appearance
Rhinoceros|A large mammal with thick skin
Hippopotamus|A massive animal that spends much time in water
Bat|A flying mammal that often navigates in darkness
Squirrel|A small animal that stores food for later
Polar Bear|A large predator adapted to icy regions`,
  Food: `
Pizza|A popular shared meal with many toppings
Sushi|A traditional dish associated with Japanese cuisine
Burger|A handheld meal often served with fries
Pasta|A staple food with countless shapes and sauces
Strawberry|A sweet fruit often used in desserts
Chocolate|A popular treat made from a tropical crop
Pancake|A breakfast favourite often served with syrup
Biryani|A fragrant rice dish with regional variations
Tacos|A handheld meal associated with Mexican cuisine
Sandwich|A convenient meal built between slices of bread
Ice Cream|A frozen dessert available in many flavours
Popcorn|A snack strongly associated with cinemas
Noodles|A versatile food found in many Asian cuisines
Croissant|A flaky baked item popular at breakfast
Doughnut|A sweet bakery treat often topped or filled
Lasagna|A layered baked dish with pasta
Mango|A tropical fruit known for its sweetness
Watermelon|A refreshing fruit with high water content
Cheese|A dairy product made in many varieties
Waffle|A breakfast food with a patterned surface
Dumplings|Small filled parcels cooked in different ways
Samosa|A savoury snack with a crisp outer layer
Ramen|A Japanese meal centred around a warm broth
Cupcake|A small individual baked dessert
French Fries|A popular side dish made from a vegetable
Coconut|A tropical fruit with a hard outer shell
Doner Kebab|A popular street food made with seasoned meat
Pudding|A dessert that can be creamy or baked
Garlic Bread|A savoury baked side with a strong aroma
Cheesecake|A dessert with a rich dairy-based filling`,
  Countries: `
Japan|An island nation known for advanced technology and tradition
Brazil|A South American nation famous for football and festivals
Canada|A large country known for forests and cold winters
Egypt|A North African nation with ancient monuments
Australia|A country and continent surrounded by ocean
France|A European nation associated with fashion and fine cuisine
India|A South Asian nation with many languages and cultures
Germany|A European nation with a strong engineering tradition
Italy|A European nation known for art and regional cuisine
China|An East Asian nation with a very long history
Mexico|A North American nation with rich food traditions
Spain|A European nation known for lively festivals
Norway|A northern European nation associated with fjords
Kenya|An East African nation known for wildlife reserves
Greece|A Mediterranean nation linked to ancient philosophy
Switzerland|A European nation known for alpine landscapes
South Korea|An East Asian nation influential in entertainment and electronics
New Zealand|An island nation known for dramatic natural scenery
Argentina|A South American nation with a strong football culture
Thailand|A Southeast Asian nation known for tropical destinations
Turkey|A nation connecting Europe and Asia
Iceland|A northern island nation with volcanic landscapes
Portugal|A European nation with a long maritime history
Nepal|A Himalayan nation with dramatic mountain terrain
South Africa|A nation at the southern end of the African continent
Indonesia|An island nation spread across a vast archipelago
Sweden|A Nordic nation associated with design and innovation
Saudi Arabia|A Middle Eastern nation with vast desert regions
Ireland|An island nation known for its green countryside
Peru|A South American nation with ancient mountain settlements`,
  Cities: `
Tokyo|A huge East Asian metropolis with a famous rail network
Paris|A European city associated with art and romance
London|A historic capital divided by a famous river
New York|A major city known for its skyline and busy streets
Dubai|A desert metropolis known for ambitious architecture
Rome|A European city filled with ancient history
Mumbai|A coastal Indian metropolis and film industry centre
Delhi|A major Indian city with layers of historical architecture
Sydney|An Australian coastal city with a famous harbour
Istanbul|A historic city spanning two continents
Barcelona|A Mediterranean city famous for distinctive architecture
Cairo|A major African city near ancient monuments
Seoul|A modern Asian capital with a major pop-culture influence
Bangkok|A Southeast Asian capital known for temples and markets
Amsterdam|A European city with canals and cycling culture
Venice|An Italian city built around waterways
Berlin|A European capital associated with major historical events
Toronto|Canada's largest city with a diverse population
Los Angeles|A major American city closely linked to filmmaking
Kyoto|A Japanese city known for traditional architecture
Jaipur|An Indian city associated with royal heritage
Istanbul|A historic meeting point of European and Asian cultures
Rio de Janeiro|A Brazilian coastal city known for dramatic scenery
Moscow|A major city with famous historic squares
Cape Town|A South African city beside a distinctive mountain
Madrid|Spain's capital and a major cultural centre
Auckland|A New Zealand city surrounded by harbours
Lisbon|A European coastal capital known for steep streets
Agra|An Indian city famous for a major marble monument`,
  Movies: `
Titanic|A romantic drama centred on a famous maritime disaster
Avatar|A science-fiction adventure set on an extraordinary moon
Jurassic Park|An adventure involving prehistoric creatures brought back to life
The Lion King|An animated story about family and leadership in the wild
Finding Nemo|An underwater adventure about a parent's search
Frozen|An animated fantasy involving two royal sisters
Harry Potter|A fantasy film series set in a school of magic
The Dark Knight|A superhero story set in a crime-filled city
Inception|A science-fiction thriller involving layered dreams
Interstellar|A space adventure focused on humanity's future
Toy Story|An animated adventure about toys with secret lives
The Avengers|A superhero team unites against major threats
Spider-Man|A young hero balances ordinary life with extraordinary abilities
Jaws|A suspense film involving danger beneath the ocean
Home Alone|A comedy about a child defending a house
Coco|An animated story exploring family and remembrance
Shrek|A fairy-tale comedy featuring an unlikely hero
Moana|An ocean adventure involving a young island navigator
Up|An animated adventure involving an unusual flying home
The Matrix|A science-fiction story questioning perceived reality
Gladiator|A historical drama involving an arena fighter
Black Panther|A superhero story involving an advanced African kingdom
Coco|A family adventure centred on music and memory
Dune|A science-fiction epic involving a desert planet
The Incredibles|An animated family adventure about hidden super abilities
Ratatouille|An animated story about an unexpected kitchen talent
Inside Out|An animated film exploring emotions and memories
Kung Fu Panda|A comedy about an unlikely martial arts student
Mission: Impossible|An action series involving dangerous secret missions
The Jungle Book|An adventure about a child growing up among animals`,
  Sports: `
Football|A team sport played with a ball and goals
Cricket|A bat-and-ball game with wickets
Basketball|A team game involving hoops and bouncing a ball
Tennis|A racket sport played across a net
Badminton|A racket game using a lightweight flying object
Volleyball|A team sport involving a net and airborne ball
Swimming|A competitive activity performed in water
Boxing|A combat sport involving gloves and timed rounds
Wrestling|A sport focused on grappling and control
Rugby|A physical team game involving an oval ball
Golf|A precision sport involving clubs and small holes
Hockey|A team game played with sticks and a puck or ball
Table Tennis|A fast racket game played on a small table
Athletics|A collection of running, jumping and throwing events
Cycling|A competitive sport involving two-wheeled machines
Gymnastics|A sport involving balance, strength and controlled movement
Archery|A precision sport using a bow
Fencing|A competitive sport involving protective gear and blades
Formula One|A motor racing championship with specialised cars
Skiing|A winter sport performed on snow-covered slopes
Surfing|A water sport using moving ocean waves
Baseball|A bat-and-ball sport with bases and innings
Marathon|A long-distance running event
Kabaddi|A South Asian team sport involving tagging and breath control
Chess|A competitive strategy game played on a board
Judo|A Japanese martial art focused on throws and control
Taekwondo|A Korean martial art known for kicking techniques
Rowing|A water sport involving coordinated oar movement
Skateboarding|A sport performed on a wheeled board
Shooting|A precision sport involving target accuracy`,
  Technology: `
Smartphone|A handheld device combining communication and computing
Laptop|A portable computer designed for personal use
Artificial Intelligence|Technology that enables machines to perform intelligent tasks
Robot|A programmable machine capable of physical actions
Drone|An aircraft that can operate without an onboard pilot
Virtual Reality|Technology that creates an immersive digital environment
3D Printer|A machine that creates physical objects from digital designs
Satellite|A machine placed in orbit for communication or observation
Supercomputer|A machine built for extremely demanding calculations
Microchip|A tiny electronic component used in computing
Blockchain|A digital record system organised into linked data blocks
Cloud Computing|A way to use remote computing resources over networks
Cybersecurity|The practice of protecting digital systems and information
Quantum Computer|A specialised computer based on principles of quantum physics
GPS|A system that helps determine location using satellites
Solar Panel|A device that converts sunlight into electricity
Electric Vehicle|A vehicle powered by stored electrical energy
Operating System|Software that manages a computer's hardware and applications
Database|An organised collection of information
3D Scanner|A device that captures the shape of real objects digitally
Touchscreen|A display that responds to physical contact
Wi-Fi|A wireless way to connect devices to a network
Bluetooth|A short-range wireless communication technology
Processor|A computer component responsible for executing instructions
Graphics Card|Hardware designed to process visual information
Hologram|A visual representation that appears three-dimensional
Biometric Scanner|Technology that recognises people using physical characteristics
Smartwatch|A wearable device with digital features
Fibre Optics|Technology that sends information using light
Machine Learning|A field where computer systems learn patterns from data`,
  Objects: `
Umbrella|An everyday item used during wet weather
Backpack|A portable container carried on the shoulders
Telescope|An instrument used to observe distant objects
Microscope|An instrument used to examine very small things
Compass|A navigation tool that helps identify direction
Mirror|A household item that reflects an image
Clock|An object used to track the passage of time
Suitcase|A container designed for carrying travel belongings
Flashlight|A portable device that produces a beam of light
Thermometer|An instrument used to measure temperature
Binoculars|An optical tool for viewing distant subjects
Lantern|A portable light source often used outdoors
Water Bottle|A reusable container for carrying drinks
Padlock|A portable device used to secure belongings
Scissors|A handheld tool used for cutting materials
Stapler|An office tool that fastens sheets together
Magnifying Glass|An optical tool that makes small details easier to see
Hourglass|A timekeeping object that uses flowing sand
Thermos|An insulated container that helps maintain drink temperature
Paintbrush|A tool used to apply colour to surfaces
Suit|A formal set of clothing worn together
Helmet|Protective equipment worn on the head
Tripod|A three-legged support for cameras or equipment
Remote Control|A handheld device used to operate equipment from a distance
Globe|A model representing the shape of Earth
Wallet|A small item used to organise payment cards and cash
Pad|A small surface used for writing or drawing`,
  Professions: `
Doctor|A professional who diagnoses and treats illness
Teacher|Someone who helps others gain knowledge
Engineer|A professional who designs and solves technical problems
Architect|Someone who plans buildings and spaces
Chef|A professional responsible for preparing meals
Pilot|A professional trained to operate aircraft
Astronaut|Someone trained to work beyond Earth's atmosphere
Scientist|A person who investigates questions through research
Photographer|Someone who creates images using cameras
Journalist|A professional who reports news and events
Lawyer|Someone who advises or represents people in legal matters
Dentist|A healthcare professional focused on oral health
Pharmacist|A professional who prepares and supplies medicines
Firefighter|Someone trained to respond to fires and emergencies
Police Officer|A public professional responsible for enforcing laws
Electrician|A skilled worker who installs and maintains electrical systems
Plumber|A professional who works with water and drainage systems
Mechanic|Someone who repairs and maintains machines or vehicles
Software Developer|A professional who builds computer programs
Data Scientist|Someone who studies information to discover useful patterns
Designer|A professional who plans how products or visuals should look and work
Farmer|Someone who grows crops or raises livestock
Veterinarian|A healthcare professional who treats animals
Musician|Someone who performs or creates music
Actor|A performer who portrays characters
Accountant|A professional who manages financial records
Fashion Designer|Someone who creates clothing concepts and styles
Translator|Someone who converts information between languages
Psychologist|A professional who studies human behaviour and mental processes
Researcher|Someone who investigates questions to develop new knowledge`,
  Celebrities: `
Shah Rukh Khan|A Bollywood star often called the King of Romance
Amitabh Bachchan|An iconic Indian actor with a distinctive deep voice
Virat Kohli|An Indian sports star known for aggressive batting
MS Dhoni|An Indian cricket figure famous for calm leadership
Sachin Tendulkar|A legendary batter celebrated across generations
Lionel Messi|An Argentine football icon known for exceptional dribbling
Cristiano Ronaldo|A Portuguese football star famous for athletic discipline
Neymar|A Brazilian footballer known for creative attacking play
Taylor Swift|A global singer known for storytelling in songs
Ed Sheeran|A singer-songwriter often associated with acoustic performances
Beyoncé|A celebrated performer known for powerful vocals and choreography
Rihanna|A music star who also built a major beauty business
Justin Bieber|A singer who became famous at a young age
Billie Eilish|A singer known for a distinctive alternative pop style
Adele|A singer recognised for powerful emotional ballads
Dwayne Johnson|A former wrestling star who became a major film actor
Tom Cruise|An actor known for performing many of his own action stunts
Leonardo DiCaprio|An actor associated with several acclaimed dramatic films
Robert Downey Jr.|An actor famous for portraying a genius superhero
Emma Watson|An actor who became famous in a fantasy film series
Jackie Chan|An actor known for combining comedy with martial arts
Priyanka Chopra|An Indian actor who also built an international career
Deepika Padukone|An Indian film star known for major dramatic roles
Alia Bhatt|An Indian actor who began performing at a young age
Zendaya|A performer known for television, film and fashion
Ariana Grande|A singer recognised for an extensive vocal range
Drake|A Canadian artist known for blending rap and singing
Eminem|A rapper celebrated for complex lyrical techniques
Mark Zuckerberg|A technology entrepreneur associated with a major social platform
Elon Musk|A business figure linked to electric vehicles and space technology`,
  Nature: `
Waterfall|Flowing water dropping from a height
Volcano|A geological formation that can release molten material
Glacier|A huge mass of slowly moving ice
Rainbow|A colourful arc that can appear after rainfall
Tornado|A violently rotating column of air
Earthquake|Sudden movement within Earth's crust
Desert|A region that receives very little rainfall
Rainforest|A dense ecosystem with abundant rainfall
Coral Reef|An underwater ecosystem built by tiny organisms
Northern Lights|Colourful atmospheric displays near polar regions
Mountain|A major raised landform
Valley|Low land situated between higher areas
Canyon|A deep narrow landform carved by erosion
Ocean|A vast body of salt water
River|A natural flowing body of water
Island|Land completely surrounded by water
Cave|A natural underground or rock opening
Sand Dune|A hill of loose material shaped by wind
Hot Spring|Naturally heated water emerging from the ground
Mangrove|A coastal ecosystem with trees adapted to salty water
Savanna|A grassland ecosystem with scattered trees
Wetland|An ecosystem where land is regularly saturated with water
Meteor Shower|A series of bright streaks appearing in the night sky
Eclipse|An astronomical event involving one body blocking another
Tsunami|A series of powerful ocean waves caused by displacement
Fossil|Preserved evidence of ancient life
Bamboo Forest|A woodland dominated by a fast-growing plant
Tidal Wave|A powerful movement of ocean water linked to changing tides
Sandstorm|A weather event involving airborne dust and sand
Aurora|A colourful light display in the upper atmosphere`,
  Transportation: `
Airplane|Used for travelling long distances through the sky.
Helicopter|Can hover in one place and is often used for rescue missions.
Bicycle|A two-wheeled vehicle powered by human effort.
Motorcycle|A motor-powered two-wheeler commonly used on roads.
Scooter|A compact personal vehicle popular for short journeys.
Bus|Carries many passengers along regular routes.
Taxi|A vehicle hired to take passengers to their destination.
Train|Travels along fixed metal tracks between stations.
Subway|An urban transport system that often travels underground.
Tram|A passenger vehicle that usually runs on tracks along city streets.
Ship|A large vessel designed for travelling across oceans.
Boat|A watercraft commonly used on rivers and lakes.
Ferry|Transports passengers and sometimes vehicles across water.
Yacht|A recreational vessel associated with luxury and leisure.
Submarine|Designed to travel beneath the ocean's surface.
Hot Air Balloon|Floats through the atmosphere using heated air.
Rocket|Used to carry spacecraft beyond Earth's atmosphere.
Spaceship|Designed for journeys beyond our planet.
Ambulance|Specially equipped to transport people needing urgent medical care.
Fire Engine|Carries emergency equipment to help firefighters reach incidents.
Police Car|Used by law enforcement officers while on duty.
Truck|Often transports heavy goods and large loads.
Tractor|Commonly used on farms for pulling equipment.
Bulldozer|A powerful machine used to move earth and clear land.
Forklift|Used in warehouses to lift and move heavy pallets.
Skateboard|A small board with wheels used for riding and tricks.
Roller Skates|Worn on the feet and used for rolling across smooth surfaces.
Cable Car|Carries passengers suspended from cables.
Rickshaw|A small passenger vehicle commonly seen in busy streets.
Monorail|A train system that travels along a single supporting rail.`,
  'Random Mix': `
Sunflower|A tall flowering plant whose large yellow head follows the sunlight.
Snowman|A figure made by stacking snow into a human-like shape.
Bookshelf|Furniture designed to store and display books.
Starfish|A marine animal commonly recognised by its star-shaped body.
Lighthouse|A coastal structure that guides ships using a powerful light.
Raincoat|Clothing designed to keep someone dry during wet weather.
Mailbox|A container where letters and deliveries are placed.
Airport|A place where aircraft take off, land and carry passengers.
Bedroom|A private room mainly used for sleeping.
Keychain|A small accessory used to hold and organise keys.
Hairbrush|A personal grooming tool used to arrange and smooth hair.
Handshake|A greeting made by briefly holding another person's hand.
Newspaper|A printed publication containing news and current events.
Doorbell|A device that makes a sound when someone visits a home.
Wristwatch|A small timekeeping device worn around the wrist.`
};
const normalizeWordKey = word => String(word).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const CURATED_HINTS = Object.fromEntries(Object.entries(CURATED_HINT_DATA).map(([category, data]) => {
  const hints = new Map();
  for (const line of data.trim().split('\n')) {
    const separator = line.indexOf('|');
    const word = normalizeWordKey(line.slice(0, separator));
    if (!hints.has(word)) hints.set(word, line.slice(separator + 1));
  }
  return [category, hints];
}));
for (const [category, hints] of Object.entries(CURATED_HINTS)) {
  const existing = new Set(WORDS[category].split(',').map(word => normalizeWordKey(word)));
  for (const word of hints.keys()) if (!existing.has(word)) {
    const sourceLine = CURATED_HINT_DATA[category].trim().split('\n').find(line => normalizeWordKey(line.slice(0, line.indexOf('|'))) === word);
    WORDS[category] += `, ${sourceLine.slice(0, sourceLine.indexOf('|'))}`;
    existing.add(word);
  }
}
const BASE_CATEGORIES = Object.keys(WORDS);
const DEFAULT_NAMES = ['Alex','Sam','Jordan','Taylor'];
function readStore(key,fallback){try{const value=JSON.parse(localStorage.getItem(key));return value===null?fallback:value}catch{return fallback}}
function makeParty(name,players=[]){return{id:`party-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name,players:[...players],scores:{},stats:{},history:[]}}
const savedPlayers=readStore('imposter.players',[...DEFAULT_NAMES]);
const savedScores=readStore('imposter.scores',{});
const savedSettings=readStore('imposter.settings',{});
const storedSettings=Object.fromEntries(Object.entries(savedSettings).filter(([key])=>key!=='typedClues'));
const savedParties=readStore('imposter.parties',[]);
const hasSavedParties=localStorage.getItem('imposter.parties')!==null;
const parties=Array.isArray(savedParties)?savedParties.filter(p=>p&&p.id&&Array.isArray(p.players)).map(p=>({...p,scores:p.scores||{},stats:p.stats||{},history:Array.isArray(p.history)?p.history:[]})):[];
if(!parties.length&&!hasSavedParties)parties.push({...makeParty('My Party',savedPlayers),scores:savedScores});
const selectedParty=parties.find(p=>p.id===localStorage.getItem('imposter.activeParty'))||parties[0]||null;
const state = {
  parties,activePartyId:selectedParty?.id||null,players:selectedParty?.players||[],scores:selectedParty?.scores||{},
  settings:{imposters:1,timer:60,guess:true,categories:['Random Mix'],hints:false,...storedSettings},

  usedWords: [], round: 1, phase: 'setup', roleIndex: 0, voteIndex: 0,
  roles: [], eliminated: [], voteRounds: [], word: '', wordCategory:'', hint:'', matchId:'', startingPlayer:'', previousStartingPlayer:'', verbalStarted:false, votes: {}, selectedVote: null, seconds: 0, interval: null,
  result: null, sound: true, revealed: false, editing: -1, selectedStatPlayer:null
};
const app = document.querySelector('#app');
const toastEl = document.querySelector('#toast');
function save(){const party=state.parties.find(p=>p.id===state.activePartyId);if(party){party.players=state.players;party.scores=state.scores}localStorage.setItem('imposter.players',JSON.stringify(state.players));localStorage.setItem('imposter.scores',JSON.stringify(state.scores));localStorage.setItem('imposter.settings',JSON.stringify(state.settings));localStorage.setItem('imposter.parties',JSON.stringify(state.parties));if(state.activePartyId)localStorage.setItem('imposter.activeParty',state.activePartyId);else localStorage.removeItem('imposter.activeParty')}
function esc(s){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function toast(msg){toastEl.textContent=msg;toastEl.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>toastEl.classList.remove('show'),2100)}
function randomize(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function maxImposters(){return Math.max(0,state.players.length-2)}
function recommendedImposters(){return state.players.length<3?0:Math.min(Math.floor((state.players.length-3)/5)+1,maxImposters())}
function normalizeImposterCount(){const max=maxImposters();const current=Number(state.settings.imposters);const next=max<1?1:Math.min(max,Math.max(1,Number.isInteger(current)?current:1));if(next===state.settings.imposters)return false;state.settings.imposters=next;return true}
function allCategories(){return BASE_CATEGORIES}
function wordsFor(category){return(WORDS[category]||'').split(',').map(word=>word.trim()).filter(Boolean)}
function chooseWord(categories,usedWords){
 const pick=()=>{
  const available=categories.map(category=>({category,words:[...new Set(wordsFor(category))].filter(word=>!usedWords.includes(word))})).filter(group=>group.words.length);
  if(!available.length)return null;
  const group=available[Math.floor(Math.random()*available.length)];
  return{word:group.words[Math.floor(Math.random()*group.words.length)],category:group.category};
 };
 let selection=pick();if(!selection){usedWords.length=0;selection=pick()}return selection;
}
const HINT_RULES={
 Animals:{groups:[
  {words:'dolphin|octopus|jellyfish|walrus|piranha|seahorse|otter|platypus',hints:['It spends much of its life in or near water.','Look to rivers, lakes, or the sea for its home.']},
  {words:'penguin|flamingo|peacock|hummingbird|parrot',hints:['Its feathers make it hard to miss.','This creature is known for its striking plumage.']},
  {words:'tortoise|chameleon|crocodile|mantis',hints:['A patient observer might spot it blending into its surroundings.','It is well suited to a warm, sunny habitat.']},
  {words:'elephant|giraffe|kangaroo|cheetah|koala|porcupine|meerkat|llama|badger|leopard|raccoon|squirrel|hedgehog',hints:['Its distinctive body or behavior makes it easy to recognize.','It has a memorable way of moving through its habitat.']}
 ],fallback:['Think about a creature and the habitat it calls home.','Its natural behavior is a useful clue.']},
 Food:{groups:[
  {words:'avocado|watermelon|pineapple|blueberry|coconut|strawberry|pickle|mango|cucumber|broccoli',hints:['It grows on a plant and is often served fresh.','Its texture and freshness stand out at the table.']},
  {words:'pancake|croissant|cheesecake|tiramisu|waffle|cupcake|donut|marshmallow',hints:['It is often enjoyed as a sweet treat.','This is the sort of thing people save room for.']},
  {words:'sushi|lasagna|dumpling|burrito|meatball|spaghetti|omelette|taco|hummus|nachos',hints:['It can make a satisfying meal, often with other ingredients alongside it.','It is commonly served as part of a savory meal.']},
  {words:'popcorn|pretzel',hints:['It is a familiar snack for sharing.','This is easy to nibble between meals.']}
 ],fallback:['Think of how it is usually served or enjoyed.','Its place in a meal is a useful clue.']},
 Countries:{groups:[
  {words:'japan|thailand|india|vietnam|south korea|nepal',hints:['Look toward South or East Asia on a map.','Its traditions reflect a part of Asia.']},
  {words:'brazil|argentina|peru|chile|colombia',hints:['Look toward South America on a map.','Its landscapes and culture are associated with South America.']},
  {words:'kenya|egypt|madagascar|morocco|south africa',hints:['Look toward Africa for its location.','It is associated with the varied landscapes of Africa.']},
  {words:'greece|portugal|norway|ireland|finland|turkey|iceland|spain|switzerland',hints:['Look toward Europe and its surrounding region on a map.','It is part of a region with a long and varied history.']},
  {words:'canada|jamaica|mexico',hints:['Look toward North America and the Caribbean on a map.','It is found in the Americas.']},
  {words:'australia|new zealand',hints:['Look toward the southern Pacific for its location.','It is associated with the islands and lands of the southern Pacific.']}
 ],fallback:['A map can help place this nation in its wider region.','Its location is a useful place to start.']},
 Cities:{groups:[
  {words:'venice|amsterdam',hints:['Waterways are a memorable part of its cityscape.','Its canals are part of what makes the place distinctive.']},
  {words:'paris|florence|rome',hints:['Art, architecture, and history draw many visitors here.','Its historic streets and landmarks are widely admired.']},
  {words:'tokyo|seoul|kyoto|mumbai|bangkok|singapore',hints:['It is a major hub in Asia, with a lively urban pace.','Modern city life meets deep traditions here.']},
  {words:'cairo|marrakech|istanbul',hints:['Its markets and historic architecture are part of its character.','It sits at a crossroads of cultures and history.']},
  {words:'rio de janeiro|cape town|sydney|vancouver|lisbon|barcelona',hints:['Its setting near the coast is part of its appeal.','The surrounding landscape is a big part of its identity.']},
  {words:'london|prague|athens|madrid|reykjavík',hints:['Its old streets sit alongside a modern capital-city feel.','History and everyday city life meet here.']},
  {words:'new york|chicago|mexico city|bangkok|havana|dubai|nairobi|buenos aires',hints:['It is a large, energetic urban center.','A busy skyline and varied neighborhoods are part of its character.']}
 ],fallback:['Its landmarks and city life help set it apart.','Think about the setting and character of this urban place.']},
 Movies:{groups:[
  {words:'toy story|finding nemo|the lion king|frozen|shrek|coco|ratatouille|the incredibles|up|moana|paddington',hints:['Animation brings this story to life.','It is a family-friendly story told through animation.']},
  {words:'the matrix|inception|interstellar|avatar|e.t.|jurassic park',hints:['It takes audiences into an imaginative world beyond ordinary life.','Science fiction and extraordinary worlds are part of its appeal.']},
  {words:'jaws|ghostbusters|home alone|barbie|spider-man|black panther|gladiator|rocky',hints:['A memorable central character drives this crowd-pleasing story.','It is known for big moments and a distinctive lead.']},
  {words:'the godfather|casablanca|the wizard of oz|titanic|mean girls',hints:['It has become a much-quoted screen classic.','Its story and characters have stayed with audiences for years.']}
 ],fallback:['Think of the kind of story and mood it brings to the screen.','A memorable story or setting is at its heart.']},
 Sports:{groups:[
  {words:'surfing|diving|canoeing',hints:['Water is an essential part of the action.','Competitors rely on the water and their control of it.']},
  {words:'snowboarding|skiing|figure skating|hockey',hints:['Cold conditions and a slick surface are part of the challenge.','It is closely associated with winter and ice or snow.']},
  {words:'tennis|badminton|table tennis|pickleball',hints:['A racket or paddle is used to send something across a court.','Players face off across a net in this fast exchange.']},
  {words:'basketball|baseball|volleyball|rugby|soccer|cricket',hints:['Teamwork and scoring are central to the contest.','Players work together to move play toward a scoring opportunity.']},
  {words:'fencing|boxing|wrestling|taekwondo|archery',hints:['Precision and individual skill matter more than a team formation.','Training and control are key to performing well.']},
  {words:'rock climbing|gymnastics|marathon|cycling|rowing|golf|bowling|skateboarding',hints:['Control, practice, and physical technique are essential.','It rewards skill and steady practice.']}
 ],fallback:['Practice and technique are central to this competition.','Think about the skills an athlete needs to perform well.']},
 Technology:{groups:[
  {words:'smartphone|laptop|e-reader|smartwatch|game controller|keyboard|touchscreen|calculator',hints:['It is an everyday personal device with an interactive purpose.','People use it directly to get things done or stay entertained.']},
  {words:'drone|satellite|space station|telescope',hints:['It helps people observe or reach places beyond the ground.','It extends what people can see or do at a distance.']},
  {words:'solar panel',hints:['It captures energy from a natural source for practical use.','It turns sunlight into a useful source of power.']},
  {words:'microchip|flash drive|barcode scanner|wi-fi router|bluetooth speaker|microphone|projector|camera|selfie stick',hints:['It helps information, sound, or images move between people and devices.','It plays a supporting role in modern communication or media.']},
  {words:'electric car|robot|robot vacuum|3d printer',hints:['It uses automation or an electric system to perform a practical task.','Technology helps it do useful work with less manual effort.']},
  {words:'headphones|virtual reality|podcast|video game',hints:['It can draw you into an audio or digital experience.','It is often used for entertainment through sound or a screen.']}
 ],fallback:['It solves a modern task through an electronic or digital tool.','Think about the everyday problem this device helps with.']},
 Objects:{groups:[
  {words:'umbrella|sunglasses|backpack|suitcase|wallet|thermos',hints:['People often carry it when they leave home.','It is a practical companion for a day out or a trip.']},
  {words:'scissors|wrench|ruler|stapler|ladder|compass|binoculars',hints:['It is a useful tool for a specific hands-on task.','It helps with a practical job that is harder to do by hand alone.']},
  {words:'candle|hourglass|alarm clock|snow globe|balloon|origami',hints:['It can add a decorative or playful touch to a room.','It is often noticed for its appearance as much as its use.']},
  {words:'pillow|hammock|doormat|teapot|thermos|mirror',hints:['It is a familiar part of a home routine.','You might find it in an everyday household setting.']},
  {words:'soap|toothbrush|feather duster',hints:['It helps keep a person or a space clean.','It is a practical part of a cleaning routine.']},
  {words:'skateboard',hints:['It is a piece of gear for getting around in a playful way.','Balance and movement are part of using it.']},
  {words:'key|magnet|compass|binoculars|telescope|hourglass',hints:['Its purpose depends on a simple physical principle.','A small, distinctive function makes it useful.']}
 ],fallback:['It is a familiar item with a practical everyday purpose.','Think about where you might keep or use this item.']},
 Professions:{groups:[
  {words:'chef|baker|gordon ramsay',hints:['Preparing food is at the center of this work.','This role turns ingredients into something people can enjoy.']},
  {words:'astronaut|pilot|sailor|park ranger|lifeguard',hints:['This role involves working in demanding or unusual surroundings.','It calls for calm decisions away from an ordinary desk.']},
  {words:'detective|judge|archaeologist|cartographer|journalist',hints:['Careful research and making sense of evidence are important.','This work involves investigating, interpreting, or recording details.']},
  {words:'firefighter|dentist|veterinarian|paramedic|lifeguard',hints:['Helping people or animals stay safe and well is central.','This role is built around care and quick practical help.']},
  {words:'architect|sculptor|photographer|animator|florist|tailor',hints:['Creativity and making something tangible are part of the work.','This job combines imagination with skilled hands.']},
  {words:'teacher|meteorologist|beekeeper|gardener|zookeeper',hints:['Knowledge of a subject or living things guides this work.','Patience and careful observation are useful in this role.']},
  {words:'magician|drummer',hints:['Performing for an audience is a key part of this work.','This role uses practiced skills to entertain a crowd.']},
  {words:'locksmith',hints:['This skilled work helps people secure access to a place.','Careful hands and knowledge of locks are important in this trade.']}
 ],fallback:['This role depends on a particular set of skills and training.','Think about the kind of work and expertise this job requires.']},
 Celebrities:{groups:[
  {words:'taylor swift|beyoncé|billie eilish|rihanna|dolly parton|bad bunny|lady gaga|adele|bruno mars|shakira|dua lipa|miley cyrus|harry styles|snoop dogg',hints:['A recognizable voice and songs are central to this public figure’s work.','This person is widely known for performing music.']},
  {words:'keanu reeves|zendaya|tom hanks|pedro pascal|emma stone|ryan reynolds|jackie chan|emma watson|morgan freeman|chris hemsworth',hints:['Audiences recognize this person from screen roles.','Acting is a major part of this public figure’s career.']},
  {words:'dwayne johnson|serena williams|lebron james|lionel messi',hints:['This person is celebrated for elite athletic achievement.','A career in high-level sport made this person famous.']},
  {words:'oprah winfrey|gordon ramsay',hints:['This person is also known for a strong presence on television.','A distinctive media personality helped make this person famous.']}
 ],fallback:['A public career and a distinctive body of work made this person well known.','Think about the field where this person became a familiar name.']},
 Nature:{groups:[
  {words:'waterfall|tidal wave|river delta|tide pool|coral reef|hot spring',hints:['Water shapes this natural feature.','It is a place where water creates a striking landscape.']},
  {words:'volcano|glacier|desert|canyon|sand dune|mountain peak',hints:['Slow or powerful natural forces shape this landscape.','Its form reflects the long work of the elements.']},
  {words:'rainbow|thunderstorm|aurora|lightning|eclipse|comet|moonlight',hints:['The sky puts on a striking display connected to this phenomenon.','It is a memorable sight seen above the ground.']},
  {words:'wildflower|redwood|redwood forest|bamboo forest|mushroom|pinecone|moss|firefly',hints:['Living things are an essential part of this natural sight.','It belongs to the world of plants, fungi, or small wildlife.']},
  {words:'fossil|seashell|snowflake|mushroom',hints:['A close look reveals a distinctive natural pattern.','Small details make this natural object especially recognizable.']}
 ],fallback:['It is a natural feature or event shaped without human design.','Think about the landscape or conditions where it appears.']},
 Transportation:{groups:[
  {words:'hot air balloon|helicopter|spaceship|glider|rocket|airplane',hints:['It travels through the air rather than along a road.','This way of getting around leaves the ground behind.']},
  {words:'sailboat|canoe|ferry|gondola|jet ski|cargo ship',hints:['It carries people or goods over water.','A journey on water is what it is made for.']},
  {words:'subway|tram|monorail|train|cable car',hints:['It follows a fixed route as part of public transit.','This ride carries passengers along a set track or line.']},
  {words:'tandem bicycle|motorcycle|skateboard|rickshaw|snowmobile|segway|scooter|unicycle|taxi|delivery van|tractor|double-decker bus',hints:['It travels over land, usually on wheels.','This is a way to get around on roads or paths.']},
  {words:'horse-drawn carriage',hints:['A traditional ride uses an animal to pull it.','It belongs to an older era of personal travel.']}
 ],fallback:['It is designed to carry people or things from one place to another.','Its main purpose is getting a passenger or cargo to a destination.']},
 'Random Mix':{groups:[
  {words:'birthday cake|costume party|school dance|fireworks|photo booth|sleepover',hints:['It is often part of a group celebration.','People gather for this during a special occasion.']},
  {words:'treasure map|secret agent|secret handshake|treasure chest|fortune cookie|diary',hints:['A secret or a surprise is part of the fun.','It hints at something hidden, private, or waiting to be discovered.']},
  {words:'snowman|campfire|sandcastle|treehouse|pillow fort|haunted house',hints:['It is something people might build or experience for fun.','Making or exploring it can become an adventure.']},
  {words:'roller coaster|board game|magic trick|puppet show|karaoke',hints:['It is made for entertainment and shared enjoyment.','This is an activity people enjoy together.']},
  {words:'time machine|magic carpet|pirate ship|spaceship|magic trick',hints:['Imagination takes it beyond ordinary everyday life.','A touch of fantasy makes it memorable.']},
  {words:'water balloon|soap bubbles|paper airplane|traffic jam|school dance',hints:['It is a familiar part of play or everyday life.','You may have encountered it during a lively day.']}
 ],fallback:['It is tied to a familiar activity, place, or experience.','Think about when people might encounter or enjoy it.']}
};
const CATEGORY_HINT_FALLBACKS={
 Animals:['Its habits, diet, and natural surroundings can help describe it.','Think about the role it plays in its habitat and how it moves through the world.','Its size, features, and way of life are useful things to consider.','Different environments bring out distinctive animal adaptations.'],
 Food:['Consider its main ingredients, flavor, and how people usually serve it.','The way it is prepared or the occasion it is enjoyed can be a useful clue.','Think about whether it is a snack, a meal, or something saved for a treat.','Its texture and place in a meal help distinguish it from other dishes.'],
 Countries:['Its region, climate, and neighboring places help describe it.','Think about the landscapes and traditions found within its borders.','A map and the country’s wider region are useful starting points.','Its natural setting and cultural influences give it a distinct character.'],
 Cities:['Its setting, landmarks, and everyday pace help give it character.','Think about the region it belongs to and what visitors might notice there.','The local landscape and the way people use the city are useful clues.','Its history and modern city life both help set it apart.'],
 Movies:['Think about its genre, central story, and the kind of mood it creates.','Its setting, characters, or filmmaking style can help bring it to mind.','Consider what makes its story memorable to an audience.','The themes and cinematic world are useful clues about this film.'],
 Sports:['Consider the skills, equipment, and rules involved in the competition.','Think about how participants move and what they are trying to accomplish.','The playing environment and kind of challenge help distinguish it.','Practice and technique are shaped by the demands of this sport.'],
 Technology:['Think about the task it helps people do and how they interact with it.','Its inputs, outputs, or the problem it solves are useful clues.','Consider where it fits into everyday digital or electronic life.','The way it handles information, power, or communication helps describe it.'],
 Objects:['Its material, purpose, and usual setting can help describe it.','Think about when someone might reach for it and what it helps them do.','Its shape and practical use are useful clues.','Consider where it is kept and what everyday task it supports.'],
 Professions:['Think about the skills, training, and workplace this role involves.','The people or needs this work serves can help describe it.','Consider what a typical day in this line of work might include.','Its tools, expertise, and responsibilities are useful clues.'],
 Celebrities:['Think about the field, projects, or public work this person is known for.','A recognizable achievement or style can help place this public figure.','Consider where audiences are most likely to have encountered this person.','Their career and notable contributions are useful clues.'],
 Nature:['Think about the natural process, conditions, or landscape involved.','Its location and the forces that shape it can help describe it.','Consider what people might see or experience in this natural setting.','Weather, water, land, or living things may shape this feature.'],
 Transportation:['Think about what it carries, where it travels, and how it moves.','Its route, power source, or travel environment can be a useful clue.','Consider whether it is designed for local trips or longer journeys.','The way it moves people or cargo helps distinguish it.'],
 'Random Mix':['Think about the setting, activity, or occasion people associate with it.','Its purpose and the experience it creates can help describe it.','Consider when people might encounter it and what they do with it.','The people, place, or activity connected to it are useful clues.']
};
function hintContainsSecret(hint,word){
 const tokens=value=>String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
 const secret=tokens(word),clue=tokens(hint);
 if(!secret.length)return false;
 return clue.some((_,start)=>secret.every((token,index)=>clue[start+index]===token));
}
function hintHash(word,category){
 let hash=2166136261;
 for(const char of `${category}:${word}`){hash^=char.codePointAt(0);hash=Math.imul(hash,16777619)}
 return hash>>>0;
}
function generateHint(word,category){
 const curatedHint=CURATED_HINTS[category]?.get(normalizeWordKey(word));
 if(curatedHint)return curatedHint;
 const rules=HINT_RULES[category];
 const key=String(word||'').trim().toLowerCase();
 const group=rules?.groups.find(rule=>rule.words.split('|').includes(key));
 const dedicated=group?.hints||[];
 const fallback=CATEGORY_HINT_FALLBACKS[category]||rules?.fallback||['Think about the setting, purpose, or defining features associated with this kind of thing.'];
 const choices=dedicated.filter(hint=>hint&& !hintContainsSecret(hint,word));
 const safeChoices=choices.length?choices:fallback.filter(hint=>hint&& !hintContainsSecret(hint,word));
 if(!safeChoices.length){
  const emergency=['Its context and defining traits may help.','Consider its role and usual setting.','Look at the features, skills, or surroundings involved.','Think about how it is used or experienced.','Its setting and purpose offer a useful starting point.'].filter(hint=>!hintContainsSecret(hint,word));
  if(emergency.length)return emergency[hintHash(key,category)%emergency.length];
  return ['Look closer.','Explore further.','Consider the context.'].find(hint=>!hintContainsSecret(hint,word))||'Look closer.';
 }
 return safeChoices[hintHash(key,category)%safeChoices.length];
}
function render(){clearInterval(state.interval);if(state.phase==='setup')renderSetup();else if(state.phase==='deal')renderDeal();else if(state.phase==='startingPlayer')renderStartingPlayer();else if(state.phase==='verbalDiscussion')renderVerbalDiscussion();else if(state.phase==='vote')renderVote();else if(state.phase==='roundResult')renderRoundResult();else if(state.phase==='result')renderResult();else if(state.phase==='stats')renderStats()}
function renderSetup(){
 if(!state.parties.length){app.innerHTML=`<section class="hero-line"><div><div class="eyebrow">A party game for 3+ players</div><h1>One word.<br><em>One liar.</em></h1></div><p class="hero-copy">Everyone knows the word. Except the one person pretending they do.</p></section><section class="panel empty-parties"><div class="eyebrow">NO PARTIES YET</div><h2>Start a new party to keep playing.</h2><p class="phase-description">Each party keeps its own players, scores, match history, and statistics.</p><button id="newParty" class="primary-btn">＋ NEW PARTY</button></section>`;document.querySelector('#newParty').onclick=createParty;return}
 if(normalizeImposterCount())save();
 const categories=allCategories();if(!state.settings.categories.length)state.settings.categories=['Random Mix'];
 app.innerHTML=`<section class="hero-line"><div><div class="eyebrow">A party game for 3+ players</div><h1>One word.<br><em>One liar.</em></h1></div><p class="hero-copy">Everyone knows the word. Except the one person pretending they do.</p></section>
 <div class="party-bar"><div><label class="eyebrow" for="partySelect">PLAYING AS A PARTY</label><select id="partySelect" class="party-select">${state.parties.map(p=>`<option value="${esc(p.id)}" ${p.id===state.activePartyId?'selected':''}>${esc(p.name)}</option>`).join('')}</select></div><div class="party-actions"><button id="newParty" class="secondary-btn">＋ NEW PARTY</button><button id="partyStats" class="mini-link">PARTY STATS ↗</button><button id="deleteParty" class="mini-link delete-party">DELETE PARTY</button></div></div>
 <div class="setup-grid"><section class="panel players-panel"><div class="panel-heading"><h2>Who's playing?</h2><span class="count-pill"><strong>${state.players.length}</strong> PLAYERS</span></div>
 <form id="addForm" class="add-player"><input id="playerInput" class="text-input" maxlength="20" autocomplete="off" placeholder="Type a name and hit enter" aria-label="Player name"><button class="add-btn" type="submit">+ Add player</button></form>
 <div class="player-list">${state.players.length?state.players.map((name,i)=>`<div class="player-row"><span class="avatar">${esc(name.trim().charAt(0).toUpperCase()||'?')}</span>${state.editing===i?`<input class="edit-name" data-index="${i}" maxlength="20" value="${esc(name)}" aria-label="Edit player name">`:`<span class="player-name">${esc(name)}</span>`}<button class="row-action edit-action" data-index="${i}" title="Edit name" aria-label="Edit ${esc(name)}">✎</button><button class="row-action remove-action" data-index="${i}" title="Remove player" aria-label="Remove ${esc(name)}">×</button></div>`).join(''):'<div class="empty-note">Add at least 3 players to get the game going.</div>'}</div>
 <div class="player-footer"><span class="helper">${state.players.length<3?'You need at least 3 players.':'Add as many players as you like.'}</span><button class="text-btn" id="shufflePlayers">↻ &nbsp;Randomize order</button></div></section>
 <aside class="panel settings-panel"><h2 class="settings-title">Make it your game</h2>
 <div class="setting-group"><div class="setting-label"><span>Number of imposters</span><span class="setting-value">${state.settings.imposters} SELECTED</span></div><div class="imposter-stepper" role="group" aria-label="Number of imposters"><button id="decreaseImposters" type="button" aria-label="Decrease imposters" ${state.settings.imposters<=1?'disabled':''}>−</button><output class="imposter-count" aria-live="polite">${state.settings.imposters}</output><button id="increaseImposters" type="button" aria-label="Increase imposters" ${state.players.length<3||state.settings.imposters>=maxImposters()?'disabled':''}>+</button></div><button id="recommendImposters" class="mini-link recommendation" ${state.players.length<3?'disabled':''}>RECOMMENDED: ${recommendedImposters()} ${recommendedImposters()===1?'IMPOSTER':'IMPOSTERS'}</button></div>
 <div class="setting-group"><div class="toggle-line"><span>Final word guess</span><input id="guessToggle" class="switch" type="checkbox" ${state.settings.guess?'checked':''} aria-label="Enable imposter final guess"></div><div class="helper" style="margin-top:7px">Caught? Guess the word to steal the win.</div></div>
 <div class="setting-group new-game-setting"><div class="toggle-line"><span>Give Imposters word hints?</span><input id="hintsToggle" class="switch" type="checkbox" ${state.settings.hints?'checked':''} aria-label="Give Imposters word hints"></div><div class="helper" style="margin-top:7px">Give Imposters a small hint about the secret word to make the game easier.</div></div>
 <div class="setting-group"><div class="toggle-line"><span>Discussion timer</span><input id="timerToggle" class="switch" type="checkbox" ${state.settings.timer?'checked':''} aria-label="Enable discussion timer"></div><div id="timerOptions" style="margin-top:11px;${state.settings.timer?'':'display:none'}"><div class="segmented">${[30,60,90,120].map(n=>`<button data-timer="${n}" class="${state.settings.timer===n?'active':''}">${n}s</button>`).join('')}</div></div></div>
 <div class="setting-group"><div class="category-head"><div class="setting-label"><span>Word categories</span></div><button class="mini-link" id="toggleAll">${categories.every(c=>state.settings.categories.includes(c))?'CLEAR':'SELECT ALL'}</button></div><div class="category-grid">${categories.map(c=>`<button class="category-chip ${state.settings.categories.includes(c)?'selected':''}" data-category="${esc(c)}">${esc(c)}</button>`).join('')}</div></div>
 <div class="start-wrap"><button id="startGame" class="primary-btn">START GAME &nbsp;→</button><div class="validation" id="validation">${state.players.length<3?'Add '+(3-state.players.length)+' more player'+(3-state.players.length===2?'s':'')+' to start.':state.settings.imposters>=state.players.length?'Keep at least two players out of the imposter team.':''}</div></div>
 <div class="setup-footnote">PASS THE PHONE · NO PEEKING · NO TAKING IT PERSONALLY</div></aside></div>`;
 document.querySelector('#addForm').addEventListener('submit',e=>{e.preventDefault();addPlayer()});
 document.querySelectorAll('.remove-action').forEach(b=>b.onclick=()=>{state.players.splice(+b.dataset.index,1);state.editing=-1;save();render()});
 document.querySelectorAll('.edit-action').forEach(b=>b.onclick=()=>{state.editing=+b.dataset.index;render();const i=document.querySelector('.edit-name');i?.focus();i?.select()});
 const editInput=document.querySelector('.edit-name');if(editInput){editInput.onkeydown=e=>{if(e.key==='Enter'||e.key==='Escape')saveEdit(e.key==='Enter')};editInput.onblur=()=>saveEdit(true)}
 document.querySelector('#shufflePlayers').onclick=()=>{randomize(state.players);save();render();toast('Player order shuffled')};
 document.querySelector('#decreaseImposters').onclick=()=>{state.settings.imposters=Math.max(1,state.settings.imposters-1);save();render()};
  document.querySelector('#increaseImposters').onclick=()=>{state.settings.imposters=Math.min(maxImposters(),state.settings.imposters+1);save();render()};
 document.querySelector('#recommendImposters').onclick=()=>{if(state.players.length<3)return;state.settings.imposters=recommendedImposters();save();render()};
 document.querySelector('#guessToggle').onchange=e=>{state.settings.guess=e.target.checked;save()};
 document.querySelector('#hintsToggle').onchange=e=>{state.settings.hints=e.target.checked;save()};
 document.querySelector('#partySelect').onchange=e=>switchParty(e.target.value);
 document.querySelector('#newParty').onclick=createParty;
 document.querySelector('#partyStats').onclick=()=>{state.phase='stats';state.selectedStatPlayer=null;render()};document.querySelector('#deleteParty').onclick=confirmDeleteParty
 document.querySelector('#timerToggle').onchange=e=>{state.settings.timer=e.target.checked?(state.settings.timer||60):0;save();render()};
 document.querySelectorAll('[data-timer]').forEach(b=>b.onclick=()=>{state.settings.timer=+b.dataset.timer;save();render()});
 document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{const c=b.dataset.category;state.settings.categories=state.settings.categories.includes(c)?state.settings.categories.filter(x=>x!==c):[...state.settings.categories,c];save();render()});
 document.querySelector('#toggleAll').onclick=()=>{state.settings.categories=categories.every(c=>state.settings.categories.includes(c))?[]:[...categories];save();render()};

 document.querySelector('#startGame').onclick=startGame;
}
function switchParty(id){const current=state.parties.find(p=>p.id===state.activePartyId);if(current){current.players=state.players;current.scores=state.scores}const party=state.parties.find(p=>p.id===id);if(!party)return;state.activePartyId=party.id;state.players=party.players;state.scores=party.scores;save();render()}
function createParty(){app.insertAdjacentHTML('beforeend',`<div class="pack-modal" id="partyModal"><div class="modal-card"><h2>Start a fresh party</h2><p>This party gets its own players, scores, match history, and statistics.</p><label for="partyName">Party name</label><input id="partyName" class="text-input" maxlength="30" placeholder="My Friends"><div class="modal-actions"><button class="secondary-btn" id="cancelParty">Cancel</button><button class="primary-btn" id="saveParty">Create party</button></div></div></div>`);const close=()=>document.querySelector('#partyModal')?.remove();document.querySelector('#cancelParty').onclick=close;document.querySelector('#partyModal').onclick=e=>{if(e.target.id==='partyModal')close()};document.querySelector('#saveParty').onclick=()=>{const name=document.querySelector('#partyName').value.trim();if(!name){toast('Give your party a name first.');return}if(state.parties.some(p=>p.name.toLowerCase()===name.toLowerCase())){toast('A party with that name already exists.');return}const party=makeParty(name);state.parties.push(party);state.activePartyId=party.id;state.players=party.players;state.scores=party.scores;save();close();render();toast('Fresh party created!')}}
function confirmDeleteParty(){const party=state.parties.find(p=>p.id===state.activePartyId);if(!party)return;app.insertAdjacentHTML('beforeend',`<div class="pack-modal" id="deletePartyModal" role="dialog" aria-modal="true" aria-labelledby="deletePartyTitle"><div class="modal-card"><h2 id="deletePartyTitle">Delete ${esc(party.name)}?</h2><p>This permanently removes this party’s players, scores, match history, statistics, and starting-player rotation from this device.</p><div class="modal-actions"><button class="secondary-btn" id="cancelDeleteParty">Cancel</button><button class="danger-btn" id="confirmDeleteParty">Delete party</button></div></div></div>`);const close=()=>document.querySelector('#deletePartyModal')?.remove();document.querySelector('#cancelDeleteParty').onclick=close;document.querySelector('#deletePartyModal').onclick=e=>{if(e.target.id==='deletePartyModal')close()};document.querySelector('#confirmDeleteParty').onclick=()=>{const deletingId=party.id;const current=state.parties.find(p=>p.id===state.activePartyId);if(current){current.players=state.players;current.scores=state.scores}state.parties=state.parties.filter(p=>p.id!==deletingId);const storedRotation=readStore('imposter.startingPlayer',null);if(storedRotation&&typeof storedRotation==='object'){const byParty={...(storedRotation.byParty||{})};if(storedRotation.matchId&&storedRotation.partyId&&!byParty[storedRotation.partyId])byParty[storedRotation.partyId]={matchId:storedRotation.matchId,name:storedRotation.name};delete byParty[deletingId];if(Object.keys(byParty).length)localStorage.setItem('imposter.startingPlayer',JSON.stringify({byParty}));else localStorage.removeItem('imposter.startingPlayer')}if(state.activePartyId===deletingId){const next=state.parties[0]||null;state.activePartyId=next?.id||null;state.players=next?.players||[];state.scores=next?.scores||{}}save();close();state.phase='setup';render();toast(state.parties.length?'Party deleted.':'Party deleted. Start a new party to keep playing.')}}
function addPlayer(){const input=document.querySelector('#playerInput'),name=input.value.trim();if(!name)return;if(state.players.some(n=>n.toLowerCase()===name.toLowerCase())){toast('That name is already in the room.');input.focus();return}state.players.push(name);save();render();document.querySelector('#playerInput').focus()}
function saveEdit(commit){const input=document.querySelector('.edit-name');if(!input)return;const idx=+input.dataset.index;const name=input.value.trim();if(commit&&name&&!state.players.some((n,i)=>i!==idx&&n.toLowerCase()===name.toLowerCase()))state.players[idx]=name;else if(commit&&name)toast('Choose a name that’s not already taken.');state.editing=-1;save();render()}
function startGame(){const v=document.querySelector('#validation');if(state.players.length<3||state.settings.imposters<1||state.settings.imposters>maxImposters()){if(v)v.textContent=state.players.length<3?'Add at least 3 players to start.':'Leave at least two non-imposters in the game.';return}if(!state.settings.categories.length){if(v)v.textContent='Pick at least one word category.';return}
 const selection=chooseWord(state.settings.categories,state.usedWords);if(!selection){toast('No words available. Choose another category.');return}state.word=selection.word;state.usedWords.push(state.word);state.wordCategory=selection.category||'Uncategorized';state.hint=state.settings.hints?generateHint(state.word,state.wordCategory):'';state.matchId=`match-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;state.startingPlayer='';state.previousStartingPlayer='';state.verbalStarted=false;const imposters=randomize([...state.players]).slice(0,state.settings.imposters);state.roles=state.players.map(name=>({name,imposter:imposters.includes(name)}));state.votes={};state.voteRounds=[];state.eliminated=[];state.selectedVote=null;state.voteIndex=0;state.roleIndex=0;state.revealed=false;state.phase='deal';render()}
function renderDeal(){const p=state.roles[state.roleIndex];const last=state.roleIndex===state.roles.length-1;app.innerHTML=`<div class="phase-wrap"><div class="phase-head"><div class="eyebrow">ROUND ${state.round} <span>·</span> SECRET ROLE</div><span class="round-tag">${state.roleIndex+1} OF ${state.players.length}</span></div><section class="panel phase-card"><div class="step-count">PRIVATE SCREEN · ONLY ${esc(p.name.toUpperCase())} SHOULD LOOK</div><h1>Pass the phone<br>to <em>${esc(p.name)}.</em></h1><p class="phase-description">Make sure everyone else is looking away. Tap below when you’re ready to see your role.</p><div class="secret-box ${state.revealed?'':'hidden'}">${state.revealed?`${p.imposter?`<div class="secret-value">YOU ARE THE IMPOSTER</div><div class="secret-role danger">${state.settings.hints?`HINT: ${esc(state.hint)}`:'BLEND IN. YOU DO NOT KNOW THE WORD.'}</div>`:`<div class="secret-value">${esc(state.word.toUpperCase())}</div><div class="category-label">CATEGORY</div><div class="category-value">${esc(state.wordCategory||'Uncategorized').toUpperCase()}</div><div class="secret-role">YOU ARE IN THE KNOW · KEEP IT SECRET</div>`}`:`<div class="secret-value" style="color:#a7aaa0">••••••••</div><div class="secret-role">YOUR ROLE IS HIDDEN</div>`}</div><p class="hold-note">${state.revealed?'Memorize your role, then pass the phone to the next player.':'No peeking, everyone else 👀'}</p><div class="action-row">${state.revealed?`<button id="nextRole" class="primary-btn">${last?'EVERYONE’S READY':'PASS TO NEXT PLAYER'} &nbsp;→</button>`:`<button id="revealRole" class="primary-btn">REVEAL MY ROLE &nbsp;👁</button>`}</div><div class="progress-dots">${state.roles.map((_,i)=>`<span class="${i<=state.roleIndex?'done':''}"></span>`).join('')}</div></section><div class="setup-footnote">KEEP YOUR SCREEN TO YOURSELF — THE WHOLE GAME DEPENDS ON IT</div></div>`;
 const revealButton=document.querySelector('#revealRole');if(revealButton)revealButton.onclick=()=>{state.revealed=true;render()};if(state.revealed)document.querySelector('#nextRole').onclick=()=>{state.revealed=false;if(last){state.startingPlayer=getStartingPlayer();state.verbalStarted=false;state.phase='startingPlayer'}else state.roleIndex++;render()}
}
function activePlayers(){return state.players.filter(name=>!state.eliminated.includes(name))}
 function startVoting(){if(state.phase==='vote')return;const voters=activePlayers();if(!voters.length)return;clearInterval(state.interval);state.votes={};state.voteIndex=0;state.selectedVote=null;state.phase='vote';render()}
 function activeRoles(){const active=new Set(activePlayers());return state.roles.filter(p=>active.has(p.name))}
 function getStartingPlayer(){const roles=activeRoles();if(!roles.length)return'';const saved=readStore('imposter.startingPlayer',null);const history=saved?.byParty&&typeof saved.byParty==='object'?saved.byParty:{};if(saved?.matchId&&saved.partyId&&!history[saved.partyId])history[saved.partyId]={matchId:saved.matchId,name:saved.name};const partyPrevious=history[state.activePartyId];const firstRound=!state.previousStartingPlayer;const previous=state.previousStartingPlayer||(firstRound&&partyPrevious?.matchId!==state.matchId?partyPrevious?.name:'');const alternatives=previous?roles.filter(p=>p.name!==previous):roles;const pool=alternatives.length?alternatives:roles;const player=pool[Math.floor(Math.random()*pool.length)].name;state.previousStartingPlayer=player;if(firstRound){history[state.activePartyId]={matchId:state.matchId,name:player};localStorage.setItem('imposter.startingPlayer',JSON.stringify({byParty:history}))}return player}
 function renderStartingPlayer(){app.innerHTML=`<div class="phase-wrap"><div class="phase-head"><div class="eyebrow">ROUND ${state.round} · GAME START</div><span class="round-tag">VERBAL CLUES</span></div><section class="panel phase-card starting-player-card"><div class="eyebrow">WHO'S STARTING?</div><h1 class="starting-player-name">${esc(state.startingPlayer)}</h1><p class="phase-description">You’re the first to give a clue!</p><div class="verbal-instruction">Start the discussion by saying your clue out loud. <strong>No typing required.</strong></div><p class="verbal-status">The group can discuss the secret word and give clues verbally.</p><div class="action-row start-discussion-row"><button id="startVerbalGame" class="primary-btn">START VERBAL DISCUSSION &nbsp;→</button></div></section><div class="setup-footnote">KEEP THE WORD SECRET · EVERYONE GETS ONE VOTE</div></div>`;document.querySelector('#startVerbalGame').onclick=()=>{state.verbalStarted=true;state.phase='verbalDiscussion';if(state.settings.timer)state.seconds=state.settings.timer;render();if(state.settings.timer)startTimer()}}
 function renderVerbalDiscussion(){app.innerHTML=`<div class="phase-wrap"><div class="phase-head"><div class="eyebrow">ROUND ${state.round} · DISCUSSION</div><span class="round-tag">${state.settings.timer?'DISCUSSION TIMER':'GET TALKING'}</span></div><section class="panel phase-card starting-player-card"><div class="eyebrow">DISCUSSION HAS BEGUN</div><h1 class="starting-player-name">${esc(state.startingPlayer)} <em>starts.</em></h1><p class="phase-description">Give clues out loud, compare ideas, and decide who might be bluffing. No typing required.</p>${state.settings.timer?`<div class="timer" id="timerValue">${clock(state.seconds)}</div>`:''}<div class="action-row"><button id="continueToVote" class="primary-btn">CONTINUE TO VOTING &nbsp;→</button></div></section><div class="setup-footnote">EVERYONE HAS ONE VOTE · YOU CAN’T VOTE FOR YOURSELF</div></div>`;document.querySelector('#continueToVote').onclick=startVoting}
function startTimer(){clearInterval(state.interval);state.interval=setInterval(()=>{state.seconds--;if(state.seconds<=0){state.seconds=0;startVoting();toast('Time’s up! Time to vote.');return}const el=document.querySelector('#timerValue');if(el){el.textContent=clock(state.seconds);if(state.seconds<=10)el.classList.add('urgent')}},1000)}
function clock(s){return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`}
function renderVote(){const voters=activePlayers(),targets=activePlayers(),voter=voters[state.voteIndex];const final=state.voteIndex===voters.length-1;app.innerHTML=`<div class="phase-wrap"><div class="phase-head"><div class="eyebrow">ROUND ${state.round} <span>·</span> PRIVATE VOTE</div><span class="round-tag">VOTE ${state.voteIndex+1} OF ${voters.length}</span></div><section class="panel phase-card"><div class="step-count">SECRET BALLOT · ONLY ${esc(voter.toUpperCase())} SHOULD LOOK</div><h1>${esc(voter)},<br>who’s the imposter?</h1><p class="phase-description">Choose one person you think is bluffing, or skip your vote.</p><div class="vote-select">${targets.map((name,i)=>`<button class="vote-option ${state.selectedVote===String(i)?'selected':''}" data-vote="${i}" ${name===voter?'disabled':''}><span class="avatar">${esc(name.charAt(0).toUpperCase())}</span><strong>${esc(name)}</strong></button>`).join('')}<button class="vote-option ${state.selectedVote==='skip'?'selected':''}" data-vote="skip"><span class="avatar">—</span><strong>Skip Vote</strong></button></div><div class="action-row"><button id="castVote" class="primary-btn" style="max-width:320px" ${state.selectedVote===null?'disabled':''}>${final?'LOCK IN & REVEAL VOTES':'SUBMIT SECRET VOTE'} &nbsp;→</button></div></section><div class="setup-footnote">YOUR VOTE IS PRIVATE UNTIL EVERYONE HAS VOTED.</div></div>`;
 document.querySelectorAll('[data-vote]').forEach(b=>b.onclick=()=>{state.selectedVote=b.dataset.vote;render()});document.querySelector('#castVote').onclick=()=>{if(state.selectedVote===null)return;state.votes[voter]=state.selectedVote==='skip'?'Skip Vote':targets[Number(state.selectedVote)];state.selectedVote=null;if(final)resolveVotes();else{state.voteIndex++;render()}}}
function resolveVotes(){if(state.phase!=='vote')return;const players=activePlayers(),choices=[...players,'Skip Vote'],counts=Object.fromEntries([...state.players.map(name=>[name,0]),['Skip Vote',0]]);Object.values(state.votes).forEach(name=>{if(Object.hasOwn(counts,name))counts[name]++});const max=Math.max(...choices.map(name=>counts[name]));const leaders=choices.filter(name=>counts[name]===max);const eliminated=leaders.length===1&&leaders[0]!=='Skip Vote'?leaders[0]:null;if(eliminated&&!state.eliminated.includes(eliminated))state.eliminated.push(eliminated);const imposters=state.roles.filter(p=>p.imposter).map(p=>p.name),caught=state.eliminated.filter(name=>imposters.includes(name)),remainingImposters=players.filter(name=>!state.eliminated.includes(name)&&imposters.includes(name)).length,remainingPlayers=players.filter(name=>!state.eliminated.includes(name)&&!imposters.includes(name)).length;const winner=remainingImposters===0?'players':remainingImposters>=remainingPlayers?'imposters':null;state.result={round:state.round,counts,max,leaders,imposters,caught,eliminated,activePlayers:[...players],votes:{...state.votes},winner,reason:winner==='players'?'caught':'escaped'};state.voteRounds.push({round:state.round,counts:{...counts},leaders:[...leaders],eliminated,votes:{...state.votes}});if(winner==='players'&&state.settings.guess){state.phase='guess';renderGuess()}else if(winner)finishGame(winner);else{state.phase='roundResult';render()}}
function renderRoundResult(){const r=state.result;const voteHtml=r.activePlayers.map(name=>`<div class="result-player"><span>${esc(name)}${r.leaders.includes(name)?' <b>· TOP VOTE</b>':''}</span><strong>${r.counts[name]} vote${r.counts[name]===1?'':'s'}</strong></div>`).join('');const eliminated=r.eliminated?`<p class="phase-description"><strong>${esc(r.eliminated)}</strong> was eliminated.</p>`:'<p class="phase-description">Skip Vote or a tie won this round. Nobody was eliminated.</p>';app.innerHTML=`<div class="phase-wrap"><div class="phase-head"><div class="eyebrow">ROUND ${state.round} · THE REVEAL</div><span class="round-tag">ROUND OVER</span></div><section class="panel phase-card"><div class="step-count">VOTING RESULTS</div><h1>${r.eliminated?`${esc(r.eliminated)} is out.`:'No elimination.'}</h1>${eliminated}<div class="result-banner"><strong>Imposters still active: ${activePlayers().filter(name=>r.imposters.includes(name)).length}</strong></div><div class="result-grid">${voteHtml}<div class="result-player"><span>Skip Vote</span><strong>${r.counts['Skip Vote']} vote${r.counts['Skip Vote']===1?'':'s'}</strong></div></div><div class="action-row" style="margin-top:22px"><button id="continueRound" class="primary-btn" style="max-width:320px">CONTINUE TO ROUND ${state.round+1} &nbsp;→</button></div></section></div>`;document.querySelector('#continueRound').onclick=()=>{state.round++;state.votes={};state.voteIndex=0;state.selectedVote=null;state.startingPlayer='';state.verbalStarted=false;state.startingPlayer=getStartingPlayer();state.phase='startingPlayer';render()}}
function renderGuess(){const imposters=state.result.caught;app.innerHTML=`<div class="phase-wrap"><div class="phase-head"><div class="eyebrow">ONE LAST CHANCE</div><span class="round-tag">IMPOSTER GUESS</span></div><section class="panel phase-card"><div class="step-count">${imposters.map(n=>esc(n.toUpperCase())).join(' & ')}</div><h1>You’ve been found.<br><em>But do you know?</em></h1><p class="phase-description">The room got you. Guess the secret word correctly and steal the win for the imposter team.</p><form id="guessForm" class="clue-entry" style="max-width:400px;margin:0 auto"><input id="guessInput" class="text-input" maxlength="50" autocomplete="off" placeholder="Your final guess…"><button class="add-btn" type="submit">GUESS</button></form></section><div class="setup-footnote">ONE GUESS FOR THE IMPOSTER TEAM. TALK IT OVER.</div></div>`;document.querySelector('#guessForm').onsubmit=e=>{e.preventDefault();const guess=document.querySelector('#guessInput').value.trim();if(!guess){toast('Enter your guess first.');return}finishGame(guess.toLowerCase()===state.word.toLowerCase()?'imposters':'players',guess)}}
function finishGame(winner,guess=''){clearInterval(state.interval);if(!state.matchId||state.completedMatchId===state.matchId)return;state.completedMatchId=state.matchId;const party=state.parties.find(p=>p.id===state.activePartyId);if(!party)return;const imposters=[...state.result.imposters];state.players.forEach(name=>{const isImposter=imposters.includes(name),won=(winner==='imposters')===isImposter,reward=won?(isImposter?2:1):0;state.scores[name]=(state.scores[name]||0)+reward;const stat=party.stats[name]||{played:0,wins:0,playerWins:0,imposterRounds:0,imposterWins:0,points:0};stat.played++;if(isImposter)stat.imposterRounds++;if(won){stat.wins++;if(isImposter)stat.imposterWins++;else stat.playerWins++}stat.points+=reward;party.stats[name]=stat});state.result.winner=winner;state.result.guess=guess;party.history.unshift({id:state.matchId,date:new Date().toISOString(),word:state.word,winner,players:[...state.players],imposters,guess,votes:{...state.votes}});state.phase='result';save();render()}
function renderResult(){const r=state.result,playerWin=r.winner==='players';const reason=r.reason==='caught'?(playerWin?'The room found every imposter.':''):'The imposter team slipped through.';const voteHtml=state.players.map(n=>`<div class="result-player"><span>${esc(n)}${r.leaders.includes(n)?' <b>· TOP VOTE</b>':''}</span><strong>${r.counts[n]} vote${r.counts[n]===1?'':'s'}</strong></div>`).join('')+`<div class="result-player"><span>Skip Vote${r.leaders.includes('Skip Vote')?' <b>· TOP VOTE</b>':''}</span><strong>${r.counts['Skip Vote']||0} vote${r.counts['Skip Vote']===1?'':'s'}</strong></div>`;const scoreNames=[...state.players].sort((a,b)=>(state.scores[b]||0)-(state.scores[a]||0));app.innerHTML=`<div class="phase-wrap"><div class="phase-head"><div class="eyebrow">ROUND ${state.round} <span>·</span> THE REVEAL</div><span class="round-tag">GAME OVER</span></div><section class="panel phase-card"><div class="step-count">${playerWin?'THE ROOM WAS RIGHT':'THE IMPOSTER TAKES IT'}</div><h1>${playerWin?'Imposter caught.':'Nice bluff.'}<br><em>${playerWin?'Good eye, everyone.':'You had us.'}</em></h1><p class="phase-description">${esc(reason)}${r.guess?` Their final guess: “${esc(r.guess)}.”`:''}</p><div class="result-banner ${playerWin?'':'bad'}"><strong>The secret word was ${esc(state.word)}.</strong><br>Imposter${r.imposters.length>1?'s':''}: ${r.imposters.map(esc).join(', ')}${r.leaders.length>1?` · Tied top votes: ${r.leaders.map(esc).join(', ')}`:''}</div><div class="result-grid">${voteHtml}</div><div class="scoreboard"><h3>ROOM SCOREBOARD</h3>${scoreNames.map(n=>`<div class="score-row"><span>${esc(n)}${r.imposters.includes(n)?' <span class="role-tag imposter">IMPOSTER</span>':''}</span><strong>${state.scores[n]||0} pts</strong></div>`).join('')}</div><div class="action-row" style="margin-top:22px"><button id="nextRound" class="primary-btn" style="max-width:280px">PLAY ANOTHER ROUND &nbsp;↻</button><button id="backSetup" class="secondary-btn">BACK TO SETUP</button></div><div class="setup-footnote">NORMAL PLAYER WIN: +1 EACH · IMPOSTER WIN: +2 EACH</div></section></div>`;document.querySelector('#nextRound').onclick=()=>{state.round++;state.phase='setup';startGame()};document.querySelector('#backSetup').onclick=()=>{state.phase='setup';state.round=1;state.usedWords=[];render()}}
function renderStats(){const party=state.parties.find(p=>p.id===state.activePartyId);if(!party){state.phase='setup';renderSetup();return}const names=[...new Set([...party.players,...Object.keys(party.stats)])].sort((a,b)=>(party.stats[b]?.points||party.scores[b]||0)-(party.stats[a]?.points||party.scores[a]||0));const selected=state.selectedStatPlayer,stat=selected?party.stats[selected]||{played:0,wins:0,playerWins:0,imposterRounds:0,imposterWins:0,points:party.scores[selected]||0}:null;const history=party.history||[];app.innerHTML=`<div class="phase-wrap stats-wrap"><div class="phase-head"><div><div class="eyebrow">PARTY RECORD</div><h1>${esc(party.name)} <em>stats.</em></h1></div><span class="round-tag">${history.length} MATCH${history.length===1?'':'ES'}</span></div><section class="panel stats-panel"><div class="stats-toolbar"><div><h2 class="settings-title">${selected?`${esc(selected)}’s stats`:'Party leaderboard'}</h2><p class="phase-description">Completed matches only · stored on this device</p></div><button id="backStats" class="secondary-btn">BACK TO SETUP</button></div>${selected?`<div class="stats-metrics"><div><strong>${stat.played}</strong><span>GAMES PLAYED</span></div><div><strong>${stat.wins}</strong><span>TEAM WINS</span></div><div><strong>${stat.playerWins}</strong><span>ROOM WINS</span></div><div><strong>${stat.imposterRounds}</strong><span>IMPOSTER ROUNDS</span></div><div><strong>${stat.imposterWins}</strong><span>IMPOSTER WINS</span></div><div><strong>${stat.points}</strong><span>POINTS</span></div></div><button class="mini-link" id="clearPlayer">← ALL PLAYERS</button>`:`<div class="party-summary"><div><strong>${history.length}</strong><span>COMPLETED MATCHES</span></div><div><strong>${history.filter(m=>m.winner==='players').length}</strong><span>ROOM WINS</span></div><div><strong>${history.filter(m=>m.winner==='imposters').length}</strong><span>IMPOSTER WINS</span></div></div><div class="stats-list">${names.length?names.map((name,i)=>{const s=party.stats[name]||{played:0,wins:0,points:party.scores[name]||0};return`<button class="stats-row" data-stat-player="${esc(name)}"><span class="stats-rank">${i+1}</span><strong>${esc(name)}</strong><span>${s.played} games · ${s.wins} wins</span><b>${s.points} pts</b></button>`}).join(''):'<p class="empty-note">Play a completed match to start your party record.</p>'}</div>`}<div class="history-heading"><h3>MATCH HISTORY</h3><span>${history.length} COMPLETED</span></div><div class="history-list">${history.length?history.slice(0,30).map(m=>`<div class="history-row"><div><strong>${esc(m.word||'—')}</strong><small>${new Date(m.date).toLocaleDateString()} · ${m.players.length} players</small></div><span class="history-winner ${m.winner==='imposters'?'imposter':''}">${m.winner==='imposters'?'IMPOSTER WIN':'ROOM WIN'}</span><small>${m.imposters.map(esc).join(', ')}</small></div>`).join(''):'<p class="empty-note">No completed matches yet.</p>'}</div><div class="stats-footer"><button id="resetStats" class="text-btn danger-text">Reset party stats & history</button></div></section></div>`;document.querySelector('#backStats').onclick=()=>{state.phase='setup';state.selectedStatPlayer=null;render()};document.querySelectorAll('[data-stat-player]').forEach(b=>b.onclick=()=>{state.selectedStatPlayer=b.dataset.statPlayer;render()});document.querySelector('#clearPlayer')?.addEventListener('click',()=>{state.selectedStatPlayer=null;render()});document.querySelector('#resetStats').onclick=()=>{if(!window.confirm(`Reset all scores, stats, and match history for “${party.name}”? This cannot be undone.`))return;party.scores={};party.stats={};party.history=[];state.scores=party.scores;state.selectedStatPlayer=null;save();render();toast('Party stats and history reset.')}}
 document.querySelector('#soundToggle').onclick=()=>{state.sound=!state.sound;document.querySelector('#soundToggle').classList.toggle('muted',!state.sound);document.querySelector('#soundToggle').textContent=state.sound?'♫':'♪'};
render();
