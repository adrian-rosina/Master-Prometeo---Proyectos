
-- 1. Escribe una consulta que recupere los Vuelos (flights) y su identificador que figuren con status On Time.
SELECT
    flight_id,
    status
FROM flights
WHERE status = 'On Time';



-- 2. Escribe una consulta que extraiga todas las columnas de la tabla bookings y refleje todas las reservas que han supuesto una cantidad total mayor a 1.000.000 (Unidades monetarias).
SELECT *
FROM bookings
WHERE total_amount > 1000000;



-- 3. Escribe una consulta que extraiga todas las columnas de los datos de los modelos de aviones disponibles (aircraft_data). Puede que os aparezca en alguna actualización como "aircrafts_data", revisad las tablas y elegid la que corresponda.
SELECT *
FROM aircrafts_data;



-- 4. Con el resultado anterior visualizado previamente, escribe una consulta que extraiga los identificadores de vuelo que han volado con un Boeing 737. (Código Modelo Avión = 733)
SELECT
    flight_id
FROM flights
WHERE aircraft_code = '733';



-- 5. Escribe una consulta que te muestre la información detallada de los tickets que han comprado las personas que se llaman Irina.
SELECT *
FROM tickets
WHERE passenger_name ILIKE 'Irina%';


-- 6. Mostrar las ciudades con más de un aeropuerto.

SELECT
    city,
    COUNT(*) AS total_airports
FROM airports_data
GROUP BY city
HAVING COUNT(*) > 1
ORDER BY total_airports DESC;



-- 7. Mostrar el número de vuelos por modelo de avión.

SELECT
    aircraft_code,
    COUNT(*) AS total_flights
FROM flights
GROUP BY aircraft_code
ORDER BY total_flights DESC;



-- 8. Reservas con más de un billete (varios pasajeros).

SELECT
    b.book_ref,
    COUNT(t.ticket_no) AS total_tickets
FROM bookings b
JOIN tickets t
    ON b.book_ref = t.book_ref
GROUP BY b.book_ref
HAVING COUNT(t.ticket_no) > 1
ORDER BY total_tickets DESC;



-- 9. Vuelos con retraso de salida superior a una hora.

SELECT
    flight_id,
    flight_no,
    scheduled_departure,
    actual_departure,
    actual_departure - scheduled_departure AS delay
FROM flights
WHERE actual_departure IS NOT NULL
  AND actual_departure - scheduled_departure > INTERVAL '1 hour'
ORDER BY delay DESC;