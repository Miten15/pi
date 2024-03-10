import { StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import HeightSpacer from "../Reusable/HeightSpacer";
import { SIZES } from "../../constants/theme";
import Country from "../Tiles/Country/Country";

const Places = () => {
  const state =  [
    {
      _id: "64c62bfc65af9f8c969a8d04",
      state: "Rajasthan",
      description:
        "Rajasthan, the land of kings, is a state in northwest India revered for its rich religious heritage. From the majestic temples of Khajuraho to the sacred city of Pushkar, Rajasthan is a spiritual haven for devotees. The state is home to several prominent Hindu and Jain pilgrimage sites, including the iconic Ranakpur Jain temples and the Sri Govind Dev Ji Temple in Jaipur. Rajasthan's vibrant festivals, such as the Gangaur and Teej, celebrate the divine with fervor and enthusiasm.",
      imageUrl:
        "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/rajasthan-famous.jpg",
      region: "Northwest India, Rajasthan",
    },
    {
      _id: "64cf2c565d14628d0ac0a2b7",
      state: "Kerala",
      description:
        "Kerala, known as 'God's Own Country,' is a state in southwest India renowned for its religious diversity and spiritual significance. The state is home to ancient Hindu temples, such as the Sri Padmanabhaswamy Temple and the Guruvayur Temple, as well as numerous churches and mosques, reflecting its rich cultural heritage. Kerala's backwaters and serene landscapes have been a haven for spiritual seekers and ascetics for centuries, offering a peaceful environment for meditation and self-discovery.",
      imageUrl:
        "https://media.istockphoto.com/id/1246366598/photo/a-scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-allepey-town-located-in.jpg?s=612x612&w=0&k=20&c=YBv_3nP-6YjvN9JRhaNsBmq8ke4azCgvGLS5h3r9jSk=",
      region: "Southwest India, Kerala",
    },
    {
      _id: "64cf2c935d14628d0ac0a2b9",
      state: "Goa",
      description:
        "Goa, a tiny state on the western coast of India, is not only a beach paradise but also a spiritual sanctuary. The state is renowned for its beautiful churches, reflecting its Portuguese colonial past and the strong influence of Catholicism. The Basilica of Bom Jesus, a UNESCO World Heritage Site, houses the remains of St. Francis Xavier, attracting pilgrims worldwide. Goa's temples, such as the Mangueshi and Shantadurga, offer a glimpse into the state's rich Hindu heritage.",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-55310626,width-748,height-499,resizemode=4,imgsize-175052/.jpg",
      region: "West India, Goa",
    },
    {
      _id: "64cf2d095d14628d0ac0a2bd",
      state: "Uttarakhand",
      description:
        "Uttarakhand, located in the northern Himalayan region of India, is a land steeped in Hindu mythology and spirituality. The state is home to the revered Char Dham (four main shrines) – Badrinath, Kedarnath, Gangotri, and Yamunotri – which are major Hindu pilgrimage sites. Rishikesh, known as the Yoga Capital of the World, attracts spiritual seekers and practitioners from around the globe. Uttarakhand's pristine natural beauty, including the holy River Ganga, adds to its spiritual allure.",
      imageUrl:
        "https://static.toiimg.com/thumb/103720915/Tapovan-Uttarakhand.jpg",
      region: "North India, Uttarakhand",
    },
    {
      _id: "64cf2d4d5d14628d0ac0a2bf",
      state: "West Bengal",
      description:
        "West Bengal, located in eastern India, is a state deeply rooted in spirituality and religious traditions. The state is home to the global headquarters of the Ramakrishna Mission, founded by Sri Ramakrishna Paramhansa, a prominent spiritual leader. Kolkata, the capital city, is renowned for its vibrant Durga Puja celebrations, which showcase the state's devotion to the Hindu goddess Durga. West Bengal's rich religious heritage also includes the sacred Dakshineswar Kali Temple and the Belur Math, a monastic order founded by Swami Vivekananda.",
      imageUrl:
        "https://www.holidify.com/images/bgImages/WEST-BENGAL.jpg",
      region: "East India, West Bengal",
    },
    {
      _id: "64cf2d4d5d14628d0ac0a2be",
      state: "Tamil Nadu",
      description:
        "Tamil Nadu, a state in southern India, is a hub of rich spiritual and religious traditions. The state is home to numerous ancient Hindu temples, including the Brihadeeswara Temple in Thanjavur, a UNESCO World Heritage Site, and the Sri Ranganathaswamy Temple in Srirangam. Tamil Nadu is also known for its historic monasteries, such as the Ramana Ashram in Tiruvannamalai, which attracted spiritual seekers from around the world. The state's vibrant festivals, like the Pongal and Thaipusam, celebrate the divine with devotion and grandeur.",
      imageUrl:
        "https://cdn.britannica.com/12/100812-050-27483D5E/Mamallapuram-Shore-Temple-Chennai-India-Tamil-Nadu.jpg",
      region: "South India, Tamil Nadu",
    },
    {
      _id: "64cf2d4d5d14628d0ac0a2c0",
      state: "Maharashtra",
      description:
        "Maharashtra, a state in western India, is a melting pot of diverse religious and spiritual traditions. The state is home to the revered Shirdi Sai Baba Temple, which attracts millions of devotees every year. Mumbai, the capital city, boasts iconic religious landmarks like the Haji Ali Dargah and the Siddhivinayak Temple. Maharashtra is also known for its rich Buddhist heritage, with the rock-cut caves of Ajanta and Ellora being UNESCO World Heritage Sites. The state's vibrant festivals, like Ganesh Chaturthi and Diwali, showcase its cultural and spiritual diversity.",
      imageUrl:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-image-of-Places-to-visit-in-Maharashtra-in-June_27th-jan.jpg",
      region: "West India, Maharashtra",
    },
]
  return (
    <View>
     <HeightSpacer height={20}/>

     <VirtualizedList 
     data={state}
     horizontal
     keyExtractor={(item) => item._id}
     showsHorizontalScrollIndicator={false}
     getItemCount={(data)=> data.length}
     getItem={(data, index)=> data[index]}
     renderItem={({item, index})=> (
        <View style={{marginRight: SIZES.medium}}>
          <Country item={item}/>
        </View>
     )}
     />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
