import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,
    models: {
      product: Model,
    },
    seeds(server) {
      server.create("product", {
        id: 1,
        name: "APPLE M1 Chip (8 GB RAM/256 GB SSD) ",
        price: 38990,
        image:
          "https://rukminim1.flixcart.com/image/416/416/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70",
      } as object);
      server.create("product", {
        id: 2,
        name: "DELL G15 Core i7 10th Gen - (16 GB RAM/512 GB SSD)",
        price: 78990,
        image:
          "https://rukminim1.flixcart.com/image/416/416/ku5ufm80/computer/4/u/k/na-gaming-laptop-dell-original-imag7csr9nqzcrkk.jpeg?q=70",
      } as object);
      server.create("product", {
        id: 3,
        name: "Lenovo IdeaPad 3 Core i3 10th Gen - (8 GB/1 TB HDD)",
        price: 48990,
        image:
          "https://rukminim1.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
      } as object);
    },
    routes() {
      this.namespace = "api";

      this.get("/products", (schema: any) => schema.products.all());

      /* let newId = 3;
      this.post("/add", (schema: any, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;

        return schema.products.create(attrs);
      }); */
    },
  });
}
