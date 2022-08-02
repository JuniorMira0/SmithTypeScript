import connection from './connection';

const getAllOrders = async () => {
  const result = await connection.execute(
    `SELECT
      Ord.id, Ord.userId, JSON_ARRAYAGG(Pr.id) as productsIds
    FROM Trybesmith.Products as Pr
    INNER JOIN Trybesmith.Orders as Ord
    ON Pr.orderId = Ord.id
    GROUP BY Ord.id
    ORDER BY Ord.userId`,
  );
  return result[0];
};

export = {
  getAllOrders,
};