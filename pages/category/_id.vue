<template>	
    <category-display />
</template>

<script>
import axios from 'axios';
import CategoryDisplay from '../../components/contents/CategoryDisplay.vue';
export default {
    components: {
		'category-display': CategoryDisplay
	},
  	// asyncData(context) {	  	
	// 	return axios.get('http://0.0.0.0:51574/api/categories')
	// 		.then((response) => {          
	// 			let categories = response.data;				
	// 			return { categories };
	// 		});
  	// },
  	created() {		
		if(this.$store.getters.categories.length == 0) {
            this.$store.dispatch('setCategories', [
    {
      "name": "Phones Tablets",
      "subcategories": [
        {
          "name": "Smart Phone"
        },
        {
          "name": "Feature Phone"
        },
        {
          "name": "Tablet"
        },
        {
          "name": "Smart Watch"
        },
        {
          "name": "Accessories",
          "subcategories": [
            {
              "name": "Headphones",
              "subcategories": [
                {
                  "name": "Bluetooth"
                },
                {
                  "name": "Regular"
                }
              ]
            },
            {
              "name": "Speakers",
              "subcategories": [
                {
                  "name": "Bluetooth"
                },
                {
                  "name": "Regular"
                }
              ]
            },
            {
              "name": "Memory cards"
            }
          ]
        }
      ]
    },
    {
      "name": "Computers Accessories",
      "subcategories": [
        {
          "name": "Desktop",
          "subcategories": []
        },
        {
          "name": "Laptops Notebook",
          "subcategories": []
        },
        {
          "name": "Speakers",
          "subcategories": []
        },
        {
          "name": "Accessories",
          "subcategories": []
        }
      ]
    },
    {
      "name": "Electronics",
      "subcategories": [
        {
          "name": "TV",
          "subcategories": [
            {
              "name": "LED TV",
              "subcategories": []
            },
            {
              "name": "Smart TV",
              "subcategories": []
            },
            {
              "name": "CRT TV",
              "subcategories": []
            }
          ]
        },
        {
          "name": "Camera",
          "subcategories": [
            {
              "name": "DSLR",
              "subcategories": []
            },
            {
              "name": "Digital Camera",
              "subcategories": []
            },
            {
              "name": "Accessories",
              "subcategories": []
            }
          ]
        },
        {
          "name": "Audio",
          "subcategories": [
            {
              "name": "Home Theatre System",
              "subcategories": []
            }
          ]
        },
        {
          "name": "Home Appliances",
          "subcategories": [
            {
              "name": "Washing Machine",
              "subcategories": []
            },
            {
              "name": "Fridge",
              "subcategories": []
            },
            {
              "name": "Vaccum Cleaner",
              "subcategories": []
            },
            {
              "name": "Iron",
              "subcategories": [
                {
                  "name": "Dry Iron",
                  "subcategories": []
                },
                {
                  "name": "Steam Iron",
                  "subcategories": []
                }
              ]
            }
          ]
        },
        {
          "name": "Kitchen Appliances",
          "subcategories": [
            {
              "name": "Blender Mixer",
              "subcategories": []
            },
            {
              "name": "Rice Cooker",
              "subcategories": []
            },
            {
              "name": "Toaster",
              "subcategories": []
            },
            {
              "name": "Microwave Oven",
              "subcategories": []
            },
            {
              "name": "Mini Oven",
              "subcategories": []
            },
            {
              "name": "Grill Oven",
              "subcategories": []
            },
            {
              "name": "Electric Cooker",
              "subcategories": []
            }
          ]
        },
        {
          "name": "Other",
          "subcategories": []
        }
      ]
    },
    {
      "name": "Men's Fashion",
      "subcategories": [
        {
          "name": "Clothing",
          "subcategories": [
            {
              "name": "Polo T-Shirts",
              "subcategories": []
            },
            {
              "name": "T-Shirts",
              "subcategories": []
            },
            {
              "name": "Shirt",
              "subcategories": []
            },
            {
              "name": "Full Sleeve",
              "subcategories": []
            },
            {
              "name": "Half Sleeve",
              "subcategories": []
            },
            {
              "name": "Pants Trouser",
              "subcategories": []
            },
            {
              "name": "Jeans",
              "subcategories": []
            },
            {
              "name": "Casual",
              "subcategories": []
            },
            {
              "name": "Formal",
              "subcategories": []
            },
            {
              "name": "Shorts",
              "subcategories": []
            },
            {
              "name": "Panjabi Pajama",
              "subcategories": []
            },
            {
              "name": "Active Wear",
              "subcategories": []
            },
            {
              "name": "Undergarments",
              "subcategories": []
            }
          ]
        },
        {
          "name": "Footwear",
          "subcategories": [
            {
              "name": "Casual",
              "subcategories": []
            },
            {
              "name": "Formal",
              "subcategories": []
            },
            {
              "name": "Sports",
              "subcategories": []
            },
            {
              "name": "Sandals",
              "subcategories": []
            },
            {
              "name": "Boot",
              "subcategories": []
            }
          ]
        },
        {
          "name": "Accessories",
          "subcategories": [
            {
              "name": "Ties",
              "subcategories": []
            },
            {
              "name": "Pocket Square",
              "subcategories": []
            },
            {
              "name": "Cufflinks",
              "subcategories": []
            }
          ]
        }
      ]
    },
    {
      "name": "Women's Fashion",
      "subcategories": [
        {
          "name": "Clothing",
          "subcategories": [
            {
              "name": "Salwar Kameez",
              "subcategories": []
            },
            {
              "name": "Saree",
              "subcategories": []
            },
            {
              "name": "Tops",
              "subcategories": []
            },
            {
              "name": "Bottoms",
              "subcategories": []
            },
            {
              "name": "Skirt",
              "subcategories": []
            },
            {
              "name": "Palazzo",
              "subcategories": []
            },
            {
              "name": "Leggings",
              "subcategories": []
            },
            {
              "name": "Hijabs Scarves",
              "subcategories": []
            },
            {
              "name": "Modest Clothing",
              "subcategories": []
            },
            {
              "name": "Abaya",
              "subcategories": []
            },
            {
              "name": "Shrug",
              "subcategories": []
            },
            {
              "name": "Cape",
              "subcategories": []
            },
            {
              "name": "Gown",
              "subcategories": []
            }
          ]
        },
        {
          "name": "Shoes",
          "subcategories": [
            {
              "name": "Casual",
              "subcategories": []
            },
            {
              "name": "Heels",
              "subcategories": []
            },
            {
              "name": "Sandals",
              "subcategories": []
            }
          ]
        },
        {
          "name": "Jewelry",
          "subcategories": [
            {
              "name": "Earings",
              "subcategories": []
            },
            {
              "name": "Necklace",
              "subcategories": []
            },
            {
              "name": "Pendant",
              "subcategories": []
            },
            {
              "name": "Rings",
              "subcategories": []
            },
            {
              "name": "Bracelet Bangles",
              "subcategories": []
            },
            {
              "name": "Handbags Wallets",
              "subcategories": []
            },
            {
              "name": "Accessories",
              "subcategories": []
            }
          ]
        }
      ]
    },
    {
      "name": "Beauty Health",
      "subcategories": [
        {
          "name": "Make-up",
          "subcategories": [
            {
              "name": "Face",
              "subcategories": []
            },
            {
              "name": "Eyes",
              "subcategories": []
            },
            {
              "name": "Lips",
              "subcategories": []
            }
          ]
        },
        {
          "name": "Perfume Body Spray",
          "subcategories": [
            {
              "name": "Mens",
              "subcategories": [
                {
                  "name": "Perfume",
                  "subcategories": []
                },
                {
                  "name": "Deodrant",
                  "subcategories": []
                }
              ]
            },
            {
              "name": "Womens",
              "subcategories": [
                {
                  "name": "Perfume",
                  "subcategories": []
                },
                {
                  "name": "Deodrant",
                  "subcategories": []
                }
              ]
            }
          ]
        },
        {
          "name": "Skin Care",
          "subcategories": []
        },
        {
          "name": "Hair Care",
          "subcategories": []
        },
        {
          "name": "Men's Grooming Care",
          "subcategories": []
        },
        {
          "name": "Personal Care",
          "subcategories": [
            {
              "name": "Sanitary Pads",
              "subcategories": []
            }
          ]
        }
      ]
    },
    {
      "name": "Baby Care",
      "subcategories": [
        {
          "name": "Diapers Wipes",
          "subcategories": []
        },
        {
          "name": "Baby Food",
          "subcategories": []
        },
        {
          "name": "Feeding Accessories",
          "subcategories": []
        }
      ]
    },
    {
      "name": "Without Children",
      "subcategories": []
    },
    {
      "name": "Sale",
      "subcategories": []
    }
]);            
            this.$store.dispatch('findAndSetContextByUrl', this.$route.params.id);
		}
  	}
}
</script>