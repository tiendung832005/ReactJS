import React, { useEffect } from 'react'

export default function Bai6() {
    useEffect(()=>{
        const handleChange = () => {
            const scroll = window.scrollY;
            document.title = `Vị trí cuộn: ${scroll}`
        }
        window.addEventListener("scroll", handleChange)

        return ()=>{
            window.removeEventListener("scroll", handleChange)
        }
    }, []);
  return (
    <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dolorem veritatis modi, ab repudiandae rerum, iure veniam est perferendis nihil aspernatur pariatur incidunt nostrum labore repellat quis expedita omnis accusantium.
        Esse expedita quidem perspiciatis nisi deleniti culpa, numquam asperiores vitae nulla. Officiis mollitia error quia magnam? Eaque officiis voluptate magni atque aut numquam suscipit, alias sed in temporibus maxime debitis!
        Itaque rerum labore vero velit vitae. Voluptatum odit magni, repudiandae amet quisquam ipsa aliquam est, nihil impedit alias, laborum veritatis tempore? Veritatis explicabo incidunt, quos quibusdam at exercitationem obcaecati sint?
        Obcaecati, deleniti. Nobis temporibus aspernatur deleniti consequatur hic modi voluptates architecto quo voluptatem possimus, ex vitae asperiores aliquid alias molestias labore debitis dolorum placeat impedit nam nisi? Dolores, maxime! Labore?
        Aperiam, eveniet veritatis ullam et facere eaque dolor magni? Voluptatem fugit consequatur nemo tempora! Quasi sed, perspiciatis totam est iste reprehenderit necessitatibus ea optio nihil sit similique saepe quo voluptas.
        Animi voluptate in quam ea possimus, tempore temporibus. Necessitatibus reiciendis porro, quos ut tempora sint rerum. Inventore tenetur consequatur cum iste repellendus voluptates quod, illum corrupti natus dignissimos sunt sint.
        Nemo itaque voluptate labore tempora reiciendis reprehenderit! Impedit commodi ipsam ad iusto eveniet nesciunt est sunt. Nisi quidem est maiores assumenda sed! Est consequatur, delectus nesciunt ad id quo omnis!
        Delectus officia quam nobis maiores magni, nisi beatae voluptatum voluptates omnis laborum animi maxime cum, harum amet. Dolore, veritatis facere! Reiciendis minus beatae dolorem accusamus suscipit non mollitia, at unde?
        Eveniet, voluptatibus repudiandae? Cum neque ea perferendis, maxime alias velit enim molestiae? Voluptates consequuntur cum animi laboriosam excepturi reiciendis aperiam ipsum distinctio ullam eos, dolores consectetur, adipisci, cumque fugit. Explicabo!
        Amet nostrum placeat veritatis rem tenetur! Nesciunt repudiandae quibusdam dolor quaerat neque, eaque distinctio soluta nihil in, adipisci minus dignissimos illum dolores fuga eligendi natus iure laboriosam, eum minima similique?
        Totam iure dolor et tempora quos officia repudiandae eius quia ipsum, illo mollitia minus sequi perspiciatis magnam aliquid quo eos nulla delectus voluptates adipisci! Perferendis eaque amet eius asperiores a.
        Aliquam minima asperiores omnis tempora rem autem sint temporibus inventore, voluptatibus repudiandae. Atque consequatur, itaque dolore molestiae in inventore veniam numquam praesentium? Perferendis asperiores nesciunt ipsum similique tempora expedita ducimus.
        Laboriosam perferendis iure, dolorum consectetur sed natus earum, id possimus eos aliquam reiciendis. Dicta, numquam. Iste ab inventore, nesciunt ipsum, reiciendis voluptas voluptates assumenda officia nobis pariatur accusantium amet. Quae?
        Maiores ea quas facere illum reiciendis hic ab quos itaque incidunt? Ipsum ipsam, officiis dolorem eaque nesciunt est nostrum alias consequuntur ut optio labore fugit reiciendis necessitatibus nam, aspernatur voluptatum.
        Velit placeat quis corporis ducimus repellat at tempora neque minima saepe ipsa magni ea vitae esse sequi alias possimus a id porro dolor aut expedita rem, sed quod. Maiores, provident?
        Commodi, accusantium. Dicta, voluptatem. Doloremque deleniti dignissimos asperiores quod facilis reiciendis, nam voluptatem accusamus ex. Cum vitae quam modi maiores eligendi beatae fuga tempore minus dolore minima, accusantium molestias ut?
        Magni vitae voluptatum exercitationem. Recusandae numquam, omnis sunt quia rerum distinctio accusantium eius dolor ipsum magni nam qui impedit optio incidunt! Dolorum ducimus perferendis nesciunt possimus labore harum dolorem voluptas.
        Eveniet incidunt dicta molestiae? Ex qui ipsa expedita dignissimos accusamus nihil libero mollitia quisquam quibusdam maxime iste nam pariatur vitae ducimus vel, voluptatum ut rem sapiente, natus rerum possimus dolores.
        Sapiente non doloremque iure rem, in facilis repellat necessitatibus dignissimos recusandae assumenda illum, quia et? Veniam placeat atque voluptatum aut maxime possimus numquam delectus. Fugit magni rem id quia officia.
        Adipisci provident earum neque illo deleniti, rerum dolorem recusandae nemo cupiditate, accusantium sequi autem qui quas quos fugit ex voluptatibus suscipit molestias enim repellat officia rem perspiciatis doloribus! Accusamus, ipsum.
        Accusantium mollitia placeat, delectus quae labore similique vero distinctio recusandae et consequatur odit repudiandae commodi deleniti a. Minus dicta magni voluptatum voluptates, deserunt perferendis, earum doloremque dolor ab vel quos.
        Sit esse sunt quisquam omnis, fugit dolorum eaque provident, facere quibusdam magni repellat, aspernatur voluptatibus. Sapiente excepturi perspiciatis blanditiis quisquam nostrum vitae! Libero inventore vero temporibus quidem corporis amet dolore.
        In consequatur fugit veniam harum deserunt doloribus perspiciatis repellendus? Ab consequatur molestias adipisci reprehenderit eveniet libero quia suscipit eos, recusandae quae, amet assumenda expedita, explicabo animi quisquam. Odio, quisquam voluptas.
        Excepturi aperiam ipsam ratione esse nostrum tenetur quisquam, itaque dolor culpa deserunt. Mollitia aperiam dignissimos minima in dolor accusamus error saepe optio? Praesentium accusamus ad doloremque culpa at quas ipsam!
        Delectus, sint atque unde exercitationem vitae ea. Quibusdam a id maiores laborum minima, possimus fugiat perspiciatis natus eaque excepturi velit eius veritatis praesentium quam eos aperiam molestias maxime delectus reprehenderit.
        Incidunt obcaecati magni libero rerum quibusdam perferendis est debitis soluta, assumenda, aliquid hic accusamus inventore, non natus fugit minima modi! Maxime nihil repellat autem placeat ipsum quasi tempora eos maiores?
        Exercitationem soluta reprehenderit quaerat dolores expedita quae nam labore. Quas dolore, officiis tempora beatae magni a mollitia quisquam amet voluptatibus facilis? Facere, inventore eos. Sint temporibus ab recusandae. Aperiam, minima?
        Ab aut optio, vero voluptates in pariatur eos consectetur dignissimos nobis facilis voluptatem obcaecati velit esse repudiandae cupiditate nisi voluptatum tempora placeat neque illum iste alias similique? Aperiam, adipisci consequatur!
        Illum sit tenetur, repudiandae veritatis perspiciatis ab ut natus quisquam praesentium ad placeat, sunt veniam nostrum quo iusto distinctio perferendis officia consequuntur enim laborum? Odio quasi inventore aliquam architecto atque.
        Illum omnis et aut temporibus nemo deserunt dolores vitae porro libero id sit soluta asperiores magni ex consequatur quasi neque consectetur quaerat amet, quod numquam quis odio! Magni, iure minima!
        Suscipit vitae ducimus corporis porro maiores nobis cumque amet at eos tempore accusantium dolor repudiandae molestiae officia vero in doloremque, id ipsa expedita sint officiis sit modi exercitationem quis. Officiis?
        Autem, voluptatum! Placeat odio libero, ad ullam sunt, eos assumenda adipisci, unde nemo expedita ratione excepturi odit magnam est consectetur. Sequi dignissimos corrupti ipsum facilis ipsam laboriosam nemo laudantium quas.
        Placeat illo unde iusto ipsum facilis dolorum ullam odit quia perferendis expedita ducimus libero, aliquid doloremque! Eum expedita consequuntur aliquam aliquid! Facere quae vel ipsum fugiat esse est ut ipsa!
        Temporibus eos eveniet suscipit dolor ab iusto, atque nulla consequuntur doloribus ipsam ad aperiam libero ducimus repellendus sapiente neque, molestias distinctio maiores. In iure adipisci et voluptates maxime omnis. Quae?
        Velit dolor rem nam. Velit sed quam iusto, voluptate rerum maiores modi expedita culpa nisi nesciunt nostrum consequatur nam dolores iste! Quibusdam totam ducimus odio modi eos recusandae rem harum.
        Repellat veniam ipsa eius earum, non tenetur excepturi sequi placeat alias assumenda, iusto reprehenderit adipisci iste? Ea itaque, minima placeat est culpa, dolorem sunt recusandae officia perferendis quos expedita! Consequatur!
        Repellendus rem quod ea deleniti, iste ratione voluptates? Repudiandae, eum quisquam amet quos maiores excepturi pariatur neque beatae consectetur laboriosam odio fugiat unde quibusdam perspiciatis harum facere eaque voluptatem maxime!
        Eligendi corrupti odio maxime ab deserunt autem dolorem suscipit veniam dicta, eos explicabo officia amet iusto provident cum unde aliquam. Sint sunt unde ea. Nobis corrupti numquam officiis velit harum.
        Porro minima, aliquam magni quis dolor excepturi! Ullam optio quod doloremque quidem aliquid! Perspiciatis dolore esse doloribus modi veniam eius totam. Provident vitae odit temporibus nulla officia, ratione culpa porro!
        Sint possimus ea consequuntur quae! Obcaecati est non accusamus quia dolores, aliquid in amet distinctio expedita, ipsam officiis autem aliquam rem molestiae odit harum iste repudiandae repellendus doloremque perferendis placeat?
        Distinctio, blanditiis voluptates recusandae iste placeat aut molestiae, libero, facere ea consectetur amet reprehenderit enim asperiores officiis illo. Porro magni enim quaerat animi, aliquid aspernatur doloribus tempora molestias vel saepe!
        Ipsum tempora distinctio, repellat sunt aliquam dolorem nam! Tempora iure, voluptate temporibus ea omnis ducimus obcaecati nemo error ullam officiis distinctio suscipit veniam autem! Veniam ut tempore quo corrupti quisquam.
        Nesciunt vero perspiciatis sed! Vel expedita tenetur est dicta aliquam nobis recusandae atque? Ratione temporibus fuga, reiciendis consequatur corporis nemo debitis earum aperiam obcaecati aliquid saepe? Deleniti rem libero aliquid.
        Nobis assumenda qui, dolore possimus quas nihil cum non asperiores iste magnam repellendus sed optio laboriosam mollitia nemo, expedita ut quod. Corrupti animi aspernatur voluptates iste eius dolor odit quos!
        Debitis adipisci aperiam eaque nobis? Delectus quasi quia excepturi ut dolores ipsum quam maxime incidunt modi obcaecati commodi molestiae vitae tempora error inventore voluptatibus nam quod, aliquam enim provident maiores.
        Autem iusto accusamus consectetur labore sed necessitatibus minima maxime fugiat at ducimus illo error suscipit ipsum dicta commodi obcaecati, velit et officiis quo nostrum quam quae! Aut, temporibus sed? Libero!
        Suscipit excepturi similique libero totam odio sapiente numquam ut itaque sit possimus nemo quo debitis, provident molestias et modi voluptate! Animi assumenda ut deleniti quia magni facilis tempora harum sunt?
        Debitis, impedit corrupti aliquid totam porro tenetur autem? Optio deserunt debitis tempore itaque velit numquam id ex, enim facilis eveniet placeat similique quia provident iusto voluptatibus eaque fugit qui dignissimos!
        Aliquam nisi aut repellat reiciendis. Corrupti adipisci dolores aspernatur impedit laborum molestiae sapiente veritatis non eaque corporis quod soluta, autem saepe magni blanditiis provident accusantium iusto beatae nihil dolorum! Harum.
        Pariatur natus sit ipsum placeat? Quidem aut sapiente autem, quos illo iusto fugiat dicta libero reiciendis iste amet maxime ex quia velit eius aliquid quasi corrupti consequuntur, culpa dignissimos reprehenderit!</p>
    </div>
  )
}
