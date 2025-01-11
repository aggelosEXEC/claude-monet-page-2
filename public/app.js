document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.top-nav a[data-menu]');
  const submenus = document.querySelectorAll('.submenu');
  const overlay = document.getElementById('overlay');

  // Function για να κλείνουν όλα τα menu
  function closeAllSubmenus() {
    submenus.forEach(submenu => {
      submenu.classList.remove('active');
    });
    overlay.classList.remove('active');
  }

  // Click Event για κάθε μία από τις επιλογές του κεντρικού menu
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const menu = link.getAttribute('data-menu');
      const submenu = document.getElementById(`${menu}-submenu`);

      if (submenu.classList.contains('active')) {
        // Αν είναι ανοιχτό το μενού στο οποίο έχουμε κάνει κλικ, κλείστο
        submenu.classList.remove('active');
        overlay.classList.remove('active');
      } else {
        // Κλέισε τα υπομενού
        closeAllSubmenus();
        // Άνοιξε το υπομενου που πάτησε ο χρήστης
        submenu.classList.add('active');
        overlay.classList.add('active');
      }
    });
  });

  overlay.addEventListener('click', () => {
    closeAllSubmenus();
  });

  submenus.forEach(submenu => {
    if (!submenu.querySelector('.close-btn')) {
      const closeBtn = document.createElement('div');
      closeBtn.classList.add('close-btn');
      closeBtn.innerHTML = '<a href="javascript:void(0)">&times;</a>';
      submenu.insertBefore(closeBtn, submenu.firstChild);

      closeBtn.addEventListener('click', () => {
        submenu.classList.remove('active');
        overlay.classList.remove('active');
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const mainMenuLinks = document.querySelectorAll(".top-nav a");
  const submenus = document.querySelectorAll(".submenu");

  // Κρύψε όλα τα υπομενού
  function hideAllSubmenus() {
    submenus.forEach((submenu) => submenu.classList.remove("active"));
  }

  mainMenuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const menuId = link.getAttribute("data-menu") + "-submenu";
      const submenu = document.getElementById(menuId);

      if (submenu && submenu.classList.contains("active")) {
        submenu.classList.remove("active");
      } else {
        hideAllSubmenus();
        if (submenu) submenu.classList.add("active");
      }
    });
  });

  // Κλείσε τα υπομενού αν πατήσουμε κάπου έξω
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".submenu") && !event.target.closest(".top-nav")) {
      hideAllSubmenus();
    }
  });

  const header = document.getElementById("header");
  const defaultContent = `
    <h2>Welcome to this page on painter Claude Monet</h2>
    <p>Select any option from the menu to begin</p>
  `;
  header.addEventListener("click", () => {
    const contentArea = document.getElementById("content-area");
    contentArea.innerHTML = defaultContent;
    hideAllSubmenus();
  });

  // Περιεχόμενο για κάθε επιλογή του υπομενού
  const content = {

    "early-years": `
      <div class="text">
        <h2>Early Years</h2>
          <div class="image-container">
          <img src="/images/claude-monet-1899.jpg" alt="Claude Monet in 1899">
          <div class="image-description">Claude Monet 1899</div>
          </div>


      <p>Claude Monet was born on 14 November 1840 on the fifth floor of 45 rue Laffitte, in the 9th arrondissement of Paris.
      He was the second son of Claude Adolphe Monet (1800–1871) and Louise Justine Aubrée Monet (1805–1857), both of them second-generation Parisians.
      On 20 May 1841, he was baptised in the local Paris church, Notre-Dame-de-Lorette, as Oscar-Claude, but his parents called him simply Oscar.
      Although baptised Catholic, Monet later became an atheist. In 1845, his family moved to Le Havre in Normandy. 
      His father, a wholesale merchant, wanted him to go into the family's ship-chandling and grocery business, but Monet wanted to become an artist. 
      His mother was a singer, and supported Monet's desire for a career in art. On 1 April 1851, he entered Le Havre secondary school of the arts.
      He was an apathetic student who, after showing skill in art from a young age, began drawing caricatures and portraits of acquaintances at age 15 for money.
      He began his first drawing lessons from Jacques-François Ochard, a former student of Jacques-Louis David.
      In around 1858, he met fellow artist Eugène Boudin, who would encourage Monet to develop his techniques, teach him the "en plein air" (outdoor) techniques for painting and take Monet on painting excursions.
      Monet thought of Boudin as his master, whom "he owed everything to" for his later success. In 1857, his mother died. He lived with his father and aunt, Marie-Jeanne Lecadre; 
      Lecadre would be a source of support for Monet in his early art career. From 1858 to 1860, Monet continued his studies in Paris, where he enrolled in Académie Suisse and met Camille Pissarro in 1859.
      He was called for military service and served under the Chasseurs d'Afrique (African Hunters), in Algeria, from 1861 to 1862. 
      His time in Algeria had a powerful effect on Monet, who later said that the light and vivid colours of North Africa "contained the gem of my future researches".
      Illness forced his return to Le Havre, where he bought out his remaining service and met Johan Barthold Jongkind, who together with Boudin was an important mentor to Monet. Upon his return to Paris, 
      with the permission of his father, he divided his time between his childhood home and the countryside and enrolled in Charles Gleyre's studio, where he met Pierre-Auguste Renoir and Frédéric Bazille.
      Bazille eventually became his closest friend. In search of motifs, they traveled to Honfleur where Monet painted several "studies" of the harbor and the mouth of the Seine. 
      Monet often painted alongside Renoir and Alfred Sisley, both of whom shared his desire to articulate new standards of beauty in conventional subjects. In 1867 his 
      then-mistress, Camille Doncieux—whom he had met two years earlier as a model for his paintings—gave birth to their first child, Jean. 
      Monet had a strong relationship with Jean, claiming that Camille was his lawful wife so Jean would be considered legitimate. He married Camille on 28 June 1870, 
      just before the outbreak of the Franco-Prussian War. During the war, he and his family lived in London and the Netherlands to avoid conscription. 
      Monet and Charles-François Daubigny lived in self-imposed exile. While living in London, Monet met his old friend Pissarro and the American painter 
      James Abbott McNeill Whistler, and befriended his first and primary art dealer, Paul Durand-Ruel, an encounter that would be decisive for his career. 
      There he saw and admired the works of John Constable and J. M. W. Turner and was impressed by Turner's treatment of light, especially in the works depicting the 
      fog on the Thames. He repeatedly painted the Thames, Hyde Park and Green Park. In the spring of 1871, his works were refused authorisation for inclusion in the 
      Royal Academy exhibition and police suspected him of revolutionary activities. That same year he learned of his father's death.</p>

      <div class="image-container-2">
          <img src="/images/claude-monet-1867.jpg" alt="Claude Monet in 1899">
          <div class="image-description">Claude Monet 1867 (Portrait by Carolus-Duran)</div>
          </div>


      <p> When Durand-Ruel's previous support of Monet and his peers began to decline, Monet, Renoir, Pissarro, Sisley, Paul Cézanne, Edgar Degas, and Berthe Morisot exhibited 
      their work independently; they did so under the name the Anonymous Society of Painters, Sculptors and Engravers for which Monet was a leading figure in its formation. 
      He was inspired by the style and subject matter of his slightly older contemporaries, Pissarro and Édouard Manet. The group, whose title was chosen to avoid association 
      with any style or movement, were unified in their independence from the Salon and rejection of the prevailing academicism. Monet gained a reputation as the foremost 
      landscape painter of the group. At the first exhibition, in 1874, Monet displayed, among others, Impression, Sunrise, The Luncheon and Boulevard des Capucines. 
      The art critic Louis Leroy wrote a hostile review. Taking particular notice of Impression, Sunrise (1872), a hazy depiction of Le Havre port and stylistic detour, 
      he coined the term "Impressionism". Conservative critics and the public derided the group, with the term initially being ironic and denoting the painting as unfinished.
      More progressive critics praised the depiction of modern life—Louis Edmond Duranty called their style a "revolution in painting". 
      Leroy later regretted inspiring the name, as he believed that they were a group "whose majority had nothing impressionist". The total attendance is estimated at 3500. 
      Monet priced Impression: Sunrise at 1000 francs but failed to sell it. The exhibition was open to anyone prepared to pay 60 francs and gave artists the opportunity to 
      show their work without the interference of a jury. Another exhibition was held in 1876, again in opposition to the Salon. Monet displayed 18 paintings, including 
      The Beach at Sainte-Adresse which showcased multiple Impressionist characteristics. For the third exhibition, on 5 April 1877, he selected seven paintings 
      from the dozen he had made of Gare Saint-Lazare in the past three months, the first time he had "synced as many paintings of the same site, carefully coordinating
       their scenes and temporalities". The paintings were well received by critics, who especially praised the way he captured the arrival and departures of the trains. 
       By the fourth exhibition, his involvement was by means of negotiation on Caillebotte's part. His last time exhibiting with the Impressionists was in 1882—four years 
       before the final Impressionist exhibition. Monet, Renoir, Pissarro, Morisot, Cézanne and Sisley proceeded to experiment with new methods of depicting reality. 
       They rejected the dark, contrasting lighting of romantic and realist paintings, in favour of the pale tones of their peers' paintings such as those by 
       Jean-Baptiste-Camille Corot and Boudin. After developing methods for painting transient effects, Monet would go on to seek more demanding subjects, 
       new patrons and collectors; his paintings produced in the early 1870s left a lasting impact on the movement and his peers—many of whom moved to Argenteuil 
       as a result of admiring his depiction.</p>

      </div>
    `,
    "middle-period": `


      <div class="text">
        <h2>Middle Period</h2>
          <div class="image-container">
          <img src="/images/claude-monet-1875.jpg" alt="Claude Monet in 1875">
          <div class="image-description">Claude Monet 1875 (Portrait by Pierre-Auguste Renoir)</div>
          </div>


      <p>In 1875, Monet returned to figure painting with Woman with a Parasol - Madame Monet and Her Son, after effectively abandoning it with The Luncheon. 
      His interest in the figure continued for the next four years—reaching its crest in 1877 and concluding altogether in 1890.
      In an "unusually revealing" letter to Théodore Duret, Monet discussed his revitalised interest: "I am working like never before on a new endeavour figures in plein air, 
      as I understand them. This is an old dream, one that has always obsessed me and that I would like to master once and for all. 
      But it is all so difficult! I am working very hard, almost to the point of making myself ill". In 1876, Camille Monet became seriously ill.
      Their second son, Michel, was born in 1878, after which Camille's health deteriorated further. In the autumn of that year, they moved to the village 
      of Vétheuil where they shared a house with the family of Ernest Hoschedé, a wealthy department store owner and patron of the arts who had commissioned 
      four paintings from Monet. In 1878, Camille was diagnosed with uterine cancer. She died the next year.
      Her death, alongside financial difficulties—once having to leave his house to avoid creditors—afflicted Monet's career; Hoschedé had recently purchased 
      several paintings but soon went bankrupt, leaving for Paris in hopes of regaining his fortune, as interest in the Impressionists dwindled.
      Pierre-Auguste Renoir, Portrait of the Painter Claude Monet, 1875, Musée d'Orsay Carolus-Duran, Alice Hoschedé, second wife of Claude Monet and mother 
      of Blanche Hoschedé Monet, 1878 The Monet and Hoschedé families c. 1880 from left to right: Claude Monet, Alice Hoschedé, Jean-Pierre Hoschedé, 
      Jacques Hoschedé, Blanche Hoschedé Monet, Jean Monet, Michel Monet, Martha Hoschedé, Germaine Hoschedé, Suzanne Hoschedé Monet made a study in oils of his late wife. 
      Many years later, he confessed to his friend Georges Clemenceau that his need to analyse colours was both a joy and a torment to him. He explained: 
      "I one day found myself looking at my beloved wife's dead face and just systematically noting the colours according to an automatic reflex".
      John Berger describes the work as "a blizzard of white, grey, purplish paint ... a terrible blizzard of loss which will forever efface her features.
       In fact there can be very few death-bed paintings which have been so intensely felt or subjectively expressive. Monet's study of the Seine continued. 
       He submitted two paintings to the Salon in 1880, one of which was accepted. He began to abandon Impressionist techniques as his paintings utilised darker 
       tones and displayed environments, such as the Seine River, in harsh weather. For the rest of the decade, he focused on the elemental aspect of nature.
       His personal life influenced his distancing from the Impressionists. He returned to Étretat and expressed in letters to Alice Hoschedé—who he would marry in 1892, 
       following her husband's death the preceding year—a desire to die. In 1881, he moved with Alice and her children to Poissy and again sold his paintings 
       to Durand-Ruel. Alice's third daughter, Suzanne, would become Monet's "preferred model", after Camille. In April 1883, looking out the window of the train between 
       Vernon and Gasny, he discovered Giverny in Normandy. That same year his first major retrospective show was held. In a letter sent to Monet in 1884, 
       Paul Durand-Ruel mentions Monet's financial worries, and tells him that both the stockbroker Theodore-Charles Gadala and Georges Clemenceau have purchased paintings.
       Monet's struggles with creditors ended following prosperous trips; he went to Bordighera in 1884, and brought back 50 landscapes.
       He travelled to the Netherlands in 1886 to paint the tulips. He soon met and became friends with Gustave Geffroy, who published an article on Monet. 
       Despite his qualms, Monet's paintings were sold in America and contributed towards his financial security. In contrast to the last two decades of his career, 
       Monet favoured working alone—and felt that he was always better when he did, having regularly "long[ed] for solitude, away from crowded tourist resorts and sophisticated 
       urban settings". Such a desire was recurrent in his letters to Alice.</p>


        <div class="image-container-2">
          <img src="/images/claude-monet-garden.jpg" alt="Claude Monet in his garden">
          <div class="image-description">Monet and his gardens</div>
          </div>



      <p>In 1883, Monet and his family rented a house and gardens in Giverny, which provided him with domestic stability he had not yet enjoyed. 
      The house was situated near the main road between the towns of Vernon and Gasny at Giverny. There was a barn that doubled as a painting studio, 
      orchards and a small garden. The house was close enough to the local schools for the children to attend, and the surrounding landscape provided numerous naturalareas 
      for Monet to paint. The family worked and built up the gardens, and Monet's fortunes began to change for the better as Durand-Ruel had increasing success in 
      selling his paintings. The gardens were Monet's greatest source of inspiration for 40 years. In 1890, Monet purchased the house. During the 1890s, Monet built 
      a greenhouse and a second studio, a spacious building well lit with skylights. Monet wrote daily instructions to his gardener, precise designs and layouts 
      for plantings, and invoices for his floral purchases and his collection of botany books. As Monet's wealth grew, his garden evolved. He remained its architect,
      even after he hired seven gardeners. Monet purchased additional land with a water meadow. White water lilies local to France were planted along with 
      imported cultivars from South America and Egypt, resulting in a range of colours including yellow, blue and white lilies that turned pink with age. In 1902, 
      he increased the size of his water garden by nearly 4000 square metres; the pond was enlarged in 1901 and 1910 with easels installed all around to allow different 
      perspectives to be captured. Dissatisfied with the limitations of Impressionism, Monet began to work on series of paintings displaying single subjects—haystacks, 
      poplars and the Rouen Cathedral—to resolve his frustration. These series of paintings provided widespread critical and financial success; in 1898, 61 paintings were 
      exhibited at the Petit Gallery. He also began a series of Mornings on the Seine, which portrayed the dawn hours of the river. In 1887 and 1889 he displayed a series
      of paintings of Belle Île to rave reviews by critics. Monet chose the location in the hope of finding a "new aesthetic language that bypassed learned formulas, 
      one that would be both true to nature and unique to him as an individual, not like anyone else. Monet at work in the large studio at his Giverny home
      In 1899, he began painting the water lilies that would occupy him continuously for the next 20 years of his life, being his last and "most ambitious" sequence of paintings.
      He had exhibited this first group of pictures of the garden, devoted primarily to his Japanese bridge, in 1900. He returned to London—now residing at 
      the prestigious Savoy Hotel—in 1899 to produce a series that included 41 paintings of Waterloo bridge, 34 of Charing Cross bridge and 19 of the House of Parliament.
      Monet's final journey would be to Venice, with Alice in 1908. Depictions of the water lilies, with alternating light and mirror-like reflections, became an 
      integral part of his work. By the mid-1910s Monet had achieved "a completely new, fluid, and somewhat audacious style of painting in which the water-lily 
      pond became the point of departure for an almost abstract art". Claude Roger-Marx noted in a review of Monet's successful 1909 exhibition of the first
      Water Lilies series that he had "reached the ultimate degree of abstraction and imagination joined to the real". This exhibition, entitled Waterlilies, 
      a Series of Waterscape, consisted of 42 canvases, his "largest and most unified series to date". He would ultimately make over 250 paintings of the Waterlilies.
      At his house, Monet met with artists, writers, intellectuals and politicians from France, England, Japan and the United States. In the summer of 1887, he met 
      John Singer Sargent whose experimentation with figure painting out of doors intrigued him; the pair went on to frequently influence each other.</p>

       </div>
    `,
    "late-life": `



      <div class="text">
        <h2>Late Life</h2>
          <div class="image-container">
          <img src="/images/claude-monet-studio.jpg" alt="Claude Monet in his studio, 1920">
          <div class="image-description">Monet in his studio, 1920</div>
          </div>



      <p>Monet refined his palette in the 1870s, consciously minimising the use of darker tones and favouring pastel colours. This coincided with his softer approach, 
      using smaller and more varied brush strokes. His palette would again undergo change in the 1880s, with more emphasis than before on harmony between warm and cold hues.
      Following his optical operation in 1923, Monet returned to his style from before a decade ago. He forwent garish colours or "coarse application" for emphasised
       colour schemes of blue and green. Whilst suffering from cataracts, his paintings were more broad and abstract—from the late 1880s onwards, he had simplified his 
       compositions and sought subjects that could offer broad colour and tone. He increasingly used red and yellow tones, a trend that first started following his 
       trip to Venice.Monet often travelled alone at this time—from France to Normandy to London; to the Rivera and Rouen—in search of new and more challenging subjects.
       The stylistic change was likely a by-product of the disorder and not an intentional choice.[85] Monet would often work on large canvases due to the deterioration of his 
       eyesight and by 1920 he admitted that he had grown too accustomed to broad painting to return to small canvases. The influence of his cataracts on his output
        has been a topic of discussion among academics; Lane et al. (1997) argues the occurrence of a deterioration from the late 1860s onwards led to a diminishing of sharp lines.
        Gardens were a focus throughout his art, becoming prominent in his later work, especially during the last decade of his life.Daniel Wildenstein noted a 
        "seamless" continuity in his paintings that was "enriched by innovation". From the 1880s onwards—and particularly in the 1890s—Monet's series of paintings of 
        specific subjects sought to document the different conditions of light and weather. As light and weather changed throughout the day, he switched between 
        canvases—sometimes working on as many as eight at one time—usually spending an hour on each. In 1895, he exhibited 20 paintings of Rouen Cathedral, showcasing the 
        façade in different conditions of light, weather and atmosphere. The paintings do not focus on the grand Medieval building, but on the play of light and shade across 
        its surface, transforming the solid masonry.For this series, he experimented with creating his own frames. His first series exhibited was of haystacks, 
        painted from different points of view and at different times of the day. Fifteen of the paintings were exhibited at the Galerie Durand-Ruel in 1891. 
        In 1892 he produced twenty-six views of Rouen Cathedral. Between 1883 and 1908, Monet travelled to the Mediterranean, where he painted landmarks, landscapes, 
        and seascapes, including a series of paintings in Venice. In London he painted four series: the Houses of Parliament, London, Charing Cross Bridge, Waterloo Bridge, 
        and Views of Westminster Bridge. Helen Gardner writes: Monet, with a scientific precision, has given us an unparalleled and unexcelled record of the passing 
        of time as seen in the movement of light over identical forms. Monet died of lung cancer on 5 December 1926 at the age of 86 and is buried in the Giverny church cemetery. 
        Monet had insisted that the occasion be simple; thus, only about fifty people attended the ceremony. At his funeral, Clemenceau removed the black cloth draped over 
        the coffin, stating: "No black for Monet!" and replaced it with a flower-patterned cloth. At the time of his death, Waterlilies was "technically unfinished".
        Monet's home, garden, and water lily pond were bequeathed by Michel to the French Academy of Fine Arts (part of the Institut de France) in 1966. 
        Through the Fondation Claude Monet, the house and gardens were opened for visits in 1980, following restoration. In addition to souvenirs of Monet and other 
        objects of his life, the house contains his collection of Japanese woodcut prints, which had a pronounced influence on his art. The house and garden, 
        along with the Museum of Impressionism, are major attractions in Giverny, which hosts tourists from all over the world.</p>

        </div>
    `,
    "landscapes": `

      <div class="text">
        <h2>Landscapes</h2>
          <h3>Impression, Sunrise</h3>
          <div class="paintings">
            <img src="/images/sunrise.jpg" alt="impression of sunrise">
          </div>

      <p>This famous painting, Impression, Sunrise, was created from a scene in the port of Le Havre. Monet depicts a mist, which provides a hazy background to 
      the piece set in the French harbor. The orange and yellow hues contrast brilliantly with the dark vessels, where little, if any detail is immediately visible 
      to the audience. It is a striking and candid work that shows the smaller boats in the foreground almost being propelled along by the movement of the water. 
      This has, once again, been achieved by separate brushstrokes that also show various colors "sparkling" on the sea.</p>

        <h3>Autumn on the Seine, Argenteuil</h3>
          <div class="paintings">
            <img src="/images/autumn.jpg" alt="impression of sunrise">
          </div>

      <p>Claude Monet painted this view of the Seine near the town of Argenteuil, northwest of Paris, shortly after his arrival there in 1871—likely from the small boat 
      he had converted into a floating studio. He included the Château Michelet and other recognizable architectural landmarks. The small, delicate brushstrokes identify 
      this work as belonging to the “high” phase of Impressionism. The brilliant colors of Monet’s landscape are mirrored in the water below, resulting in a remarkable symmetry 
      that makes it difficult to distinguish between the reflections and their sources.</p>


      <h3>Haystack at Giverny 1886</h3>
          <div class="paintings">
            <img src="/images/haystack.jpg" alt="impression of sunrise">
          </div>

      <p>Haystack at Giverny, 1866, with the brilliant use of color suggestive of the rolling fields of poppies and the strand horizontal planes with vertical accents, 
      typifies Monet's treatment of his landscape subjects at this time. The scenery of Giverny was to provide him with the perfect quality of light and the topographical 
      framework to evolve his continuing treatment of light and atmosphere. It gave him a subject that he was to return to in the 1890s with his famous haystack series,
       dedicated to the visualization of reflective light through different periods of the day. The main focus of Monet's Haystacks paintings was to alternate between 
       different seasons and positions to give different color balances on the same object, which intrigued artist Monet. Perhaps the choice of Haystacks as an object for
        this sort of experimentation was done because Claude required something that was relatively three-dimensional and did not have too much external detail that might
         complicate the findings of his studies of light and season. Haystacks in just one of several exciting topics that Claude Monet experimented with great length during 
         his career.</p>


         <h3>Poplars at Giverny</h3>
          <div class="paintings">
            <img src="/images/poplars.jpg" alt="impression of sunrise">
          </div>

          <p>Another of Monet’s series of paintings, the Poplar paintings were painted in the summer and fall of 1891. The poplars trees were located on the banks of 
          a river a few miles up the river from Monet’s home in Giverny, France, in a marsh. Monet had to reach his painting studio, which was floating outside along 
          the bank of the trees, by going upriver in a small boat. The trees that were the subject of the paintings were actually put up for sale by the city of Limetz,
           who owned them, and Monet actually bought the trees so he could continue his paintings of them. After his series was finished, he sold the trees to a lumber 
           company who wanted them for harvest.</p>


           <h3>Irises in Monet's garden</h3>
          <div class="paintings">
            <img src="/images/irises.jpg" alt="impression of sunrise">
          </div>

          <p>Irises, among Monet's favorite flowers, lined the pathways leading up to the house and Japanese bridge on the artist's property at Giverny. 
          This bird's-eye view of a garden path belongs to a series of monumental works painted during the First World War that capture the vital essence of these 
          flowers with intensity and breadth of vision. Late in life, as his eyesight faltered, he dispensed with subtlety and "took in the motif in large masses," waiting "
          until the idea took shape, until the arrangement and composition inscribed themselves on the brain."</p>

      </div>
    `,
    "water-lilies": `

    <div class="text">

      <h2>Water Lilies</h2>
      
      <p>Water Lilies (French: Nymphéas) is a series of approximately 250 oil paintings by French Impressionist Claude Monet (1840–1926). The paintings depict his 
      flower garden at his home in Giverny, and were the main focus of his artistic production during the last thirty years of his life. Many of the works were painted 
      while Monet suffered from cataracts.</p>


      <h3>The Water Lilies – Setting Sun</h3>
      <div class="paintings">
            <img src="/images/water-lilies-sun.jpg" alt="impression of sunrise">
          </div>

          <h3>The Water Lilies – The Clouds</h3>
      <div class="paintings">
            <img src="/images/water-lilies-cloud.jpg" alt="impression of sunrise">
          </div>


          <p>On 19 June 2007, one of Monet's Water Lily paintings sold for £18.5 million at a Sotheby's auction in London.
          On 24 June 2008 another of his Water Lily paintings, Le Bassin Aux Nymphéas, sold for almost £41 million at Christie's in London, almost double the estimate 
          of £18 to £24 million.</p>


          <h3>Le Bassin Aux Nymphéas</h3>
      <div class="paintings">
            <img src="/images/Le Bassin Aux Nymphéas.jpg" alt="impression of sunrise">
          </div>


          <p>In June 2014, one of the Water Lilies, Nymphéas, sold for US$54 million at a Sotheby's auction in London. This piece was auctioned to an anonymous buyer, 
          but the piece went on to be part of the exhibition "Painting the Modern Garden: From Monet to Matisse" at the Cleveland Museum of Art and the Royal Academy of Arts, 
          London, starting in 2015. The co-chairman of Sotheby's modern and impressionist art department, Helena Newman, claims that the result is at the top of the original 
          estimated selling price. This price was between 34 and 51 million USD.</p>

          <h3>Nymphéas</h3>
      <div class="paintings">
            <img src="/images/Nymphéas.jpg" alt="impression of sunrise">
          </div>


          <p>While many of Monet's masterpieces have sold, there are still an estimated 250 oil paintings from this series. The collection is widely popular, 
          with many of these pieces residing in exhibits. The paintings have been catalogued by Daniel Wildenstein in his Monet: Catalogue Raisonné.</p>


          <h2>Some notable Water Lily paintings</h2>

          <h3>Water Lilies (1897–1899, private collection)</h3>
      <div class="paintings">
            <img src="/images/wl1.jpg" alt="impression of sunrise">
          </div>

          <h3>Water Lilies (1903, private collection)</h3>
      <div class="paintings">
            <img src="/images/wl2.jpg" alt="impression of sunrise">
          </div>

          <h3>Water Lilies (1905, private collection)</h3>
      <div class="paintings">
            <img src="/images/wl3.jpg" alt="impression of sunrise">
          </div>

          <h3>Water Lilies (1914–1917, private collection)</h3>
      <div class="paintings">
            <img src="/images/wl4.jpg" alt="impression of sunrise">
          </div>

          <h3>Nympheas en fleur (1914–1917, private collection)</h3>
      <div class="paintings">
            <img src="/images/Nympheas-en-fleur.jpg" alt="impression of sunrise">
          </div>

      </div>
    `,
    "other-works": `

    <div class="text">

      <h2>Other Works</h2>

      <p>Claude Monet, best known for his landscapes and water lilies, also created notable works in other subjects that showcase his artistic versatility. 
      These works highlight Monet's range, exploring themes of modernity, domesticity, and light in various contexts beyond his famed gardens and landscapes.
      Here are some examples:</p>

      <h2>Portraits and Figurative Works</h2>

      <h3>Camille Monet in Japanese Costume (1876)</h3>
      <div class="paintings">
            <img src="/images/japonais.jpg" alt="impression of sunrise">
          </div>

          <p>his wife, Camille, in a red kimono, reflecting the influence of Japanese art on Monet and the Impressionists.</p>

          <h3>Woman with a Parasol – Madame Monet and Her Son</h3>
      <div class="paintings">
            <img src="/images/Madame_Monet_and_Her_Son.jpg" alt="impression of sunrise">
          </div>

          <p>A vibrant and dynamic painting of his wife and son outdoors, capturing the movement of the wind and the play of light.</p>

          <h3>The Luncheon</h3>
      <div class="paintings">
            <img src="/images/luncheon.jpg" alt="impression of sunrise">
          </div>

          <p>It shows his family, a guest and a maidservant during luncheon. The liberal brushwork that Monet will apply in ‘La Grenouillère’ a few months later 
          is not yet visible. This is a private scene from everyday life, but the nearly monumental format chosen by the artist raises its status to that of history painting.</p>


          <h2>Urban Scenes and Architecture</h2>

          <p>A collection of paintings of the Saint-Lazare train station in Paris, showcasing modern industrial life with dramatic interplay of steam and light.</p>

          <h3>La Gare Saint-Lazare (1877)</h3>
      <div class="paintings">
            <img src="/images/La Gare Saint-Lazare.jpg" alt="impression of sunrise">
          </div>

          <h3>La Gare Saint-Lazare, le train de Normandie (1877)</h3>
      <div class="paintings">
            <img src="/images/le train de Normandie.jpg" alt="impression of sunrise">
          </div>

          <h3>The Houses of Parliament, London (1899–1901)</h3>
      <div class="paintings">
            <img src="/images/Houses of Parliament.jpg" alt="impression of sunrise">
          </div>

          <p>Depicts the iconic British landmark shrouded in mist and glowing with the interplay of light.</p>

      </div>
    `,
  };

 // Submenu links with data-target
 const submenuLinks = document.querySelectorAll(".submenu a[data-target]");
 const contentArea = document.getElementById("content-area");

 submenuLinks.forEach((link) => {
   link.addEventListener("click", (event) => {
     event.preventDefault();
     const target = link.getAttribute("data-target");

     // Check if it's one of our normal content mappings
     if (content[target]) {
       contentArea.innerHTML = content[target];
     }
     // or if it's exhibitions or links
     else if (target === "exhibitions-current") {
       showPublicExhibitions("current");
     } else if (target === "exhibitions-past") {
       showPublicExhibitions("past");
     } else if (target === "links-web") {
       showPublicLinks("web");
     } else if (target === "links-books") {
       showPublicLinks("books");
     } else {
       contentArea.innerHTML = "<p>Content not found.</p>";
     }
     hideAllSubmenus();
   });
 });

 // Διαχείρηση Εκθέσεων και Συν΄δέσμων
 const manageExhibitionsLink = document.getElementById("manageExhibitionsLink");
 const manageLinksLink       = document.getElementById("manageLinksLink");

 manageExhibitionsLink.addEventListener("click", (event) => {
   event.preventDefault();
   showManageExhibitions();
   hideAllSubmenus();
 });

 manageLinksLink.addEventListener("click", (event) => {
   event.preventDefault();
   showManageLinks();
   hideAllSubmenus();
 });

 function getAuthHeader() {
   const token = localStorage.getItem("monetToken");
   if (!token) return {};
   return {
     "Authorization": "Bearer " + token,
     "Content-Type": "application/json"
   };
 }

 // ================================
 //  UI ΓΙΑ ΔΙΑΧΕΙΡΗΣΗ ΕΚΘΕΣΕΩΝ
 // ================================
 async function showManageExhibitions() {
   contentArea.innerHTML = `
     <div class="text">
       <h2>Manage Exhibitions</h2>
       <div>
         <h3>Add New Exhibition</h3>
         <input type="text" id="exTitle" placeholder="Title" />
         <input type="text" id="exDate" placeholder="Date" />
         <input type="text" id="exDesc" placeholder="Description" />
         <!-- NEW: category input (current or past) -->
         <input type="text" id="exCategory" placeholder="Category (current or past)" />

         <button id="createExBtn">Add Exhibition</button>
       </div>
       <hr/>
       <h3>Current Exhibitions</h3>
       <ul id="exhibitionsList"></ul>
     </div>
   `;

   const exTitle = document.getElementById("exTitle");
   const exDate = document.getElementById("exDate");
   const exDesc = document.getElementById("exDesc");
   const exCategory = document.getElementById("exCategory");
   const createExBtn = document.getElementById("createExBtn");
   const exhibitionsList = document.getElementById("exhibitionsList");

   // Προσθήκη
   createExBtn.addEventListener("click", async () => {
     if (!exTitle.value.trim()) {
       alert("Title is required!");
       return;
     }
     const body = {
       title: exTitle.value.trim(),
       date: exDate.value.trim(),
       description: exDesc.value.trim(),
       category: exCategory.value.trim() 
     };
     try {
       const res = await fetch("http://localhost:5000/api/exhibitions", {
         method: "POST",
         headers: getAuthHeader(),
         body: JSON.stringify(body)
       });
       if (res.ok) {
         exTitle.value = "";
         exDate.value  = "";
         exDesc.value  = "";
         exCategory.value = "";
         alert("Exhibition added!");
         loadExhibitions();
       } else {
         const data = await res.json();
         alert(data.error || "Error creating exhibition.");
       }
     } catch (err) {
       console.error(err);
       alert("Server error.");
     }
   });

   async function loadExhibitions() {
     exhibitionsList.innerHTML = "Loading...";
     try {
       const res = await fetch("http://localhost:5000/api/exhibitions");
       const data = await res.json();
       if (res.ok) {
         renderExhibitions(data);
       } else {
         alert("Error loading exhibitions.");
       }
     } catch (err) {
       console.error(err);
       exhibitionsList.innerHTML = "Error.";
     }
   }

   function renderExhibitions(exhibitions) {
     if (!exhibitions.length) {
       exhibitionsList.innerHTML = "<li>No Exhibitions found.</li>";
       return;
     }
     exhibitionsList.innerHTML = "";
     exhibitions.forEach((ex) => {
       const li = document.createElement("li");
       li.innerHTML = `
         <b>${ex.title}</b> (${ex.date || "No date"}) - ${ex.description || ""}
         <br/>Category: <i>${ex.category || "none"}</i>
         <button data-id="${ex._id}" class="editExBtn">Edit</button>
         <button data-id="${ex._id}" class="delExBtn">Delete</button>
       `;
       exhibitionsList.appendChild(li);
     });

     // Διαγραφή / Επεξεργασία
     const delButtons  = document.querySelectorAll(".delExBtn");
     const editButtons = document.querySelectorAll(".editExBtn");

     delButtons.forEach((btn) => {
       btn.addEventListener("click", async () => {
         const id = btn.getAttribute("data-id");
         if (!confirm("Are you sure you want to delete this exhibition?")) return;
         try {
           const res = await fetch(`http://localhost:5000/api/exhibitions/${id}`, {
             method: "DELETE",
             headers: getAuthHeader()
           });
           if (res.ok) {
             alert("Exhibition deleted!");
             loadExhibitions();
           } else {
             alert("Error deleting exhibition.");
           }
         } catch (err) {
           console.error(err);
           alert("Server error deleting exhibition.");
         }
       });
     });

     editButtons.forEach((btn) => {
       btn.addEventListener("click", async () => {
         const id = btn.getAttribute("data-id");
         const newTitle = prompt("New Title?");
         if (!newTitle) return;
         const newDate = prompt("New Date? (optional)") || "";
         const newDesc = prompt("New Description? (optional)") || "";
         const newCat  = prompt("New Category? (current/past)") || "";
         try {
           const res = await fetch(`http://localhost:5000/api/exhibitions/${id}`, {
             method: "PUT",
             headers: getAuthHeader(),
             body: JSON.stringify({
               title: newTitle,
               date: newDate,
               description: newDesc,
               category: newCat
             })
           });
           if (res.ok) {
             alert("Exhibition updated!");
             loadExhibitions();
           } else {
             alert("Error updating exhibition.");
           }
         } catch (err) {
           console.error(err);
           alert("Server error updating exhibition.");
         }
       });
     });
   }

   loadExhibitions();
 }

 // ================================
 //  UI ΓΙΑ ΔΙΑΧΕΙΡΗΣΗ ΣΥΝΔΕΣΜΩΝ
 // ================================
 async function showManageLinks() {
   contentArea.innerHTML = `
     <div class="text">
       <h2>Manage Links</h2>
       <div>
         <h3>Add New Link</h3>
         <input type="text" id="linkTitle" placeholder="Title" />
         <input type="text" id="linkUrl"   placeholder="URL" />
         <input type="text" id="linkDesc"  placeholder="Description" />
         <!-- NEW: category input (web or books) -->
         <input type="text" id="linkCategory" placeholder="Category (web or books)" />

         <button id="createLinkBtn">Add Link</button>
       </div>
       <hr/>
       <h3>Current Links</h3>
       <ul id="linksList"></ul>
     </div>
   `;

   const linkTitle = document.getElementById("linkTitle");
   const linkUrl   = document.getElementById("linkUrl");
   const linkDesc  = document.getElementById("linkDesc");
   const linkCategory = document.getElementById("linkCategory");
   const createLinkBtn = document.getElementById("createLinkBtn");
   const linksList = document.getElementById("linksList");

   // πΡΟΣΘΉΚΗ ΝΕΟΥ LINK
   createLinkBtn.addEventListener("click", async () => {
     if (!linkTitle.value.trim() || !linkUrl.value.trim()) {
       alert("Title and URL are required!");
       return;
     }
     const body = {
       title: linkTitle.value.trim(),
       url: linkUrl.value.trim(),
       description: linkDesc.value.trim(),
       category: linkCategory.value.trim() 
     };
     try {
       const res = await fetch("http://localhost:5000/api/links", {
         method: "POST",
         headers: getAuthHeader(),
         body: JSON.stringify(body)
       });
       if (res.ok) {
         linkTitle.value = "";
         linkUrl.value   = "";
         linkDesc.value  = "";
         linkCategory.value = "";
         alert("Link added!");
         loadLinks();
       } else {
         const data = await res.json();
         alert(data.error || "Error creating link.");
       }
     } catch (err) {
       console.error(err);
       alert("Server error.");
     }
   });

   async function loadLinks() {
     linksList.innerHTML = "Loading...";
     try {
       const res = await fetch("http://localhost:5000/api/links");
       const data = await res.json();
       if (res.ok) {
         renderLinks(data);
       } else {
         alert("Error loading links.");
       }
     } catch (err) {
       console.error(err);
       linksList.innerHTML = "Error.";
     }
   }

   function renderLinks(links) {
     if (!links.length) {
       linksList.innerHTML = "<li>No links found.</li>";
       return;
     }
     linksList.innerHTML = "";
     links.forEach((ln) => {
       const li = document.createElement("li");
       li.innerHTML = `
         <b>${ln.title}</b> [${ln.url}] - ${ln.description || ""}
         <br/>Category: <i>${ln.category || "none"}</i>
         <button data-id="${ln._id}" class="editLinkBtn">Edit</button>
         <button data-id="${ln._id}" class="delLinkBtn">Delete</button>
       `;
       linksList.appendChild(li);
     });

     const delButtons  = document.querySelectorAll(".delLinkBtn");
     const editButtons = document.querySelectorAll(".editLinkBtn");

     delButtons.forEach((btn) => {
       btn.addEventListener("click", async () => {
         const id = btn.getAttribute("data-id");
         if (!confirm("Are you sure you want to delete this link?")) return;
         try {
           const res = await fetch(`http://localhost:5000/api/links/${id}`, {
             method: "DELETE",
             headers: getAuthHeader()
           });
           if (res.ok) {
             alert("Link deleted!");
             loadLinks();
           } else {
             alert("Error deleting link.");
           }
         } catch (err) {
           console.error(err);
           alert("Server error deleting link.");
         }
       });
     });

     editButtons.forEach((btn) => {
       btn.addEventListener("click", async () => {
         const id = btn.getAttribute("data-id");
         const newTitle = prompt("New Title?");
         if (!newTitle) return;
         const newUrl = prompt("New URL?") || "";
         if (!newUrl) return;
         const newDesc = prompt("New Description?") || "";
         const newCat  = prompt("New Category? (web/books)") || "";
         try {
           const res = await fetch(`http://localhost:5000/api/links/${id}`, {
             method: "PUT",
             headers: getAuthHeader(),
             body: JSON.stringify({
               title: newTitle,
               url: newUrl,
               description: newDesc,
               category: newCat
             })
           });
           if (res.ok) {
             alert("Link updated!");
             loadLinks();
           } else {
             alert("Error updating link.");
           }
         } catch (err) {
           console.error(err);
           alert("Server error updating link.");
         }
       });
     });
   }

   loadLinks();
 }

 // ================================
 // ΕΚΘΕΣΕΙΣ
 // ================================
 function showPublicExhibitions(category) {
   contentArea.innerHTML = "<p>Loading Exhibitions...</p>";

   fetch("http://localhost:5000/api/exhibitions")
     .then(res => res.json())
     .then(exhibitions => {
       // ΦΙΛΤΡΑΡΙΣΜΑ ΜΕ ΒΑΣΗ ΤΗΝ ΚΑΤΗΓΟΡΙΑ ΤΗΣ ΕΚΘΕΣΗΣ
       const filtered = exhibitions.filter(e => e.category === category);

       if (!filtered.length) {
         contentArea.innerHTML = `<p>No ${category} exhibitions found.</p>`;
         return;
       }
       let html = `<h2>${category.toUpperCase()} Exhibitions</h2>`;
       filtered.forEach(ex => {
         html += `
           <div style="margin-bottom: 10px;">
             <strong>${ex.title}</strong><br/>
             <em>${ex.description || ''}</em><br/>
             ${ex.date || ''}<br/>
             <!-- If you store startDate / endDate, show them here -->
           </div>
         `;
       });
       contentArea.innerHTML = html;
     })
     .catch(err => {
       console.error(err);
       contentArea.innerHTML = "<p>Error loading exhibitions.</p>";
     });
 }

 // ================================
 // ΣΥΝΔΕΣΜΟΙ
 // ================================
 function showPublicLinks(category) {
   contentArea.innerHTML = "<p>Loading Links...</p>";

   fetch("http://localhost:5000/api/links")
     .then(res => res.json())
     .then(links => {
       const filtered = links.filter(l => l.category === category);

       if (!filtered.length) {
         contentArea.innerHTML = `<p>No links in category "${category}" found.</p>`;
         return;
       }
       let html = `<h2>${category.toUpperCase()} Links</h2>`;
       filtered.forEach(link => {
         html += `
           <div style="margin-bottom: 10px;">
             <strong>${link.title}</strong>
             - <a href="${link.url}" target="_blank">${link.url}</a><br/>
             <em>${link.description || ''}</em>
           </div>
         `;
       });
       contentArea.innerHTML = html;
     })
     .catch(err => {
       console.error(err);
       contentArea.innerHTML = "<p>Error loading links.</p>";
     });
 }
});

//-------------------------------ΕΜΦΑΝΙΣΗ Η ΟΧΙ ΚΟΥΜΠΙΩΝ ΜΕ ΒΑΣΗ ΤΟ ΑΝ Ο ΧΡΗΣΤΗΣ ΕΙΝΑΙ ΣΥΝΔΕΔΕΜΕΝΟΣ-------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const showSignInModal       = document.getElementById("showSignInModal");
  const showSignUpModal       = document.getElementById("showSignUpModal");
  const signOutLink           = document.getElementById("signOutLink");
  const manageExhibitionsLink = document.getElementById("manageExhibitionsLink");
  const manageLinksLink       = document.getElementById("manageLinksLink");

  const signInModal           = document.getElementById("signInModal");
  const closeSignInModal      = document.getElementById("closeSignInModal");
  const signUpModal           = document.getElementById("signUpModal");
  const closeSignUpModal      = document.getElementById("closeSignUpModal");

  const signInUsernameInput   = document.getElementById("signin-username");
  const signInPasswordInput   = document.getElementById("signin-password");
  const signInBtn             = document.getElementById("signInBtn");

  const signUpUsernameInput   = document.getElementById("signup-username");
  const signUpPasswordInput   = document.getElementById("signup-password");
  const signUpBtn             = document.getElementById("signUpBtn");

  showSignInModal.addEventListener("click", (event) => {
    event.preventDefault();
    signInModal.style.display = "block";
  });

  closeSignInModal.addEventListener("click", () => {
    signInModal.style.display = "none";
  });

  showSignUpModal.addEventListener("click", (event) => {
    event.preventDefault();
    signUpModal.style.display = "block";
  });

  closeSignUpModal.addEventListener("click", () => {
    signUpModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === signInModal) {
      signInModal.style.display = "none";
    }
    if (event.target === signUpModal) {
      signUpModal.style.display = "none";
    }
  });

  // ΕΛΕΓΧΩ ΑΝ Ο ΧΡΗΣΤΗΣ ΕΧΕΙ ΗΔΗ ΣΥΝΔΕΘΕΙ
  let isLoggedIn = false;
  if (localStorage.getItem("monetToken") && localStorage.getItem("monetUsername")) {
    isLoggedIn = true;
  }

  // ΕΜΦΑΝΙΣΕ ΤΙΣ ΕΠΙΛΟΓΕΣ ΤΟΥ ADMIN
  function updateMenuVisibility() {
    if (isLoggedIn) {
      showSignInModal.parentElement.style.display = "none";
      showSignUpModal.parentElement.style.display = "none";
      signOutLink.parentElement.style.display     = "block";
      manageExhibitionsLink.style.display         = "block";
      manageLinksLink.style.display               = "block";
    } else {
      showSignInModal.parentElement.style.display = "block";
      showSignUpModal.parentElement.style.display = "block";
      signOutLink.parentElement.style.display     = "none";
      manageExhibitionsLink.style.display         = "none";
      manageLinksLink.style.display               = "none";
    }
  }

  updateMenuVisibility();

  // Sign Up
  signUpBtn.addEventListener("click", async () => {
    const username = signUpUsernameInput.value.trim();
    const password = signUpPasswordInput.value.trim();

    if (!username || !password) {
      alert("Please enter both username and password!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("monetToken", data.token);
        localStorage.setItem("monetUsername", data.username);
        isLoggedIn = true;
        updateMenuVisibility();
        alert("Signup successful! You are now logged in.");
        signUpModal.style.display = "none";
      } else {
        alert(data.error || "Error signing up.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
  });

  // Sign In
  signInBtn.addEventListener("click", async () => {
    const username = signInUsernameInput.value.trim();
    const password = signInPasswordInput.value.trim();

    if (!username || !password) {
      alert("Please enter both username and password!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("monetToken", data.token);
        localStorage.setItem("monetUsername", data.username);
        isLoggedIn = true;
        updateMenuVisibility();
        alert("Sign in successful!");
        signInModal.style.display = "none";
      } else {
        alert(data.error || "Error signing in.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
  });

 // signOut
signOutLink.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("monetToken");
  localStorage.removeItem("monetUsername");
  isLoggedIn = false;
  updateMenuVisibility();
  alert("You have signed out.");

  // RESET ΣΤΟ HOME
  const contentArea = document.getElementById("content-area");
  const defaultContent = `
    <h2>Welcome to this page on painter Claude Monet</h2>
    <p>Select any option from the menu to begin</p>
  `;
  contentArea.innerHTML = defaultContent;
});

});