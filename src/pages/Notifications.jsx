import BackButton from "../ui/BackButton";
import SearchComponent from "../ui/SearchComponent";
import BarHeader from "../ui/BarHeader";
import Navbar from "../ui/Navbar";
import Layout from "../ui/Layout";
import Display from "../ui/Display";
import NotificationItem from "../ui/NotificationItem";
import { getUserId } from "../utils/helpers";
import { getUserOrders } from "../services/apiOrders";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const userId = getUserId();

  if (!userId) return;

  const orders = await getUserOrders(userId);
  return { orders };
}

export default function Notifications() {
  const { orders } = useLoaderData();
  // console.log(orders);

  return (
    <section>
      <Layout>
        <BarHeader>
          <BackButton />
          <h4>Notifications</h4>
          <SearchComponent />
        </BarHeader>

        <Display>
          {!orders && (
            <p>you have no orders yet. Login to see your notifications or Create an account</p>
          )}

          {orders.map((item) => (
            <NotificationItem orderId={item.order_id} key={item.id} orderDate={item.created_at} />
          ))}
        </Display>
        <Navbar />
      </Layout>
    </section>
  );
}
