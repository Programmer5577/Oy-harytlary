import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Oturgyç",
          img: "Chair_grey.png",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "chairs",
          price: "550",
        },
        {
          id: 2,
          title: "Oturgyç-2",
          img: "Chair_white.png",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "chairs",
          price: "1200",
        },
        {
          id: 3,
          title: "Oturgyç-3",
          img: "Chair-2.jpg",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "chairs",
          price: "300",
        },
        {
          id: 4,
          title: "Oturgyç-4",
          img: "Chair-3.jpg",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "tables",
          price: "650",
        },
        {
          id: 5,
          title: "Oturgyç-5",
          img: "Chair-4.jpg",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "tables",
          price: "900",
        },
        {
          id: 6,
          title: "Krowat",
          img: "Sofa.jpeg",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "sofa",
          price: "4000",
        },
        {
          id: 7,
          title: "Krowat-2",
          img: "Sofa-2.jpeg",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "sofa",
          price: "5500",
        },
        {
          id: 8,
          title: "Stol",
          img: "Table.png",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "chairs",
          price: "300",
        },
        {
          id: 9,
          title: "Stol-2",
          img: "Table.png",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "chairs",
          price: "250",
        },
        {
          id: 10,
          title: "Lampa",
          img: "Wall_light.png",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "light",
          price: "700",
        },
        {
          id: 11,
          title: "Krowat-3",
          img: "Кровать-3.jpg",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "sofa",
          price: "6500",
        },
        {
          id: 12,
          title: "Krowat-4",
          img: "Кровать-4.jpg",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "sofa",
          price: "8000",
        },
        {
          id: 13,
          title: "Parta",
          img: "Парта-2.jpg",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "chairs",
          price: "400",
        },
        {
          id: 14,
          title: "Parta",
          img: "Парта.jpg",
          desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          category: "chairs",
          price: "300",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header order={this.state.order} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ order: this.state.order.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.order.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ order: [...this.state.order, item] });
    }
  }
}

export default App;
