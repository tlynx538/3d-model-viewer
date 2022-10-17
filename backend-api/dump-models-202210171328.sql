--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2022-10-17 13:28:30 IST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE models;
--
-- TOC entry 3613 (class 1262 OID 16386)
-- Name: models; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE models WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';


ALTER DATABASE models OWNER TO postgres;

\connect models

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3614 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16388)
-- Name: file; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.file (
    file_id bigint NOT NULL,
    file_name character varying NOT NULL,
    file_serial character varying NOT NULL
);


ALTER TABLE public.file OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16387)
-- Name: file_file_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.file_file_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.file_file_id_seq OWNER TO postgres;

--
-- TOC entry 3615 (class 0 OID 0)
-- Dependencies: 214
-- Name: file_file_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.file_file_id_seq OWNED BY public.file.file_id;


--
-- TOC entry 3461 (class 2604 OID 16391)
-- Name: file file_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.file ALTER COLUMN file_id SET DEFAULT nextval('public.file_file_id_seq'::regclass);


--
-- TOC entry 3607 (class 0 OID 16388)
-- Dependencies: 215
-- Data for Name: file; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.file VALUES (5, 'scene.gltf', 'u2qyt');


--
-- TOC entry 3616 (class 0 OID 0)
-- Dependencies: 214
-- Name: file_file_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.file_file_id_seq', 5, true);


--
-- TOC entry 3463 (class 2606 OID 16395)
-- Name: file file_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.file
    ADD CONSTRAINT file_pk PRIMARY KEY (file_id);


-- Completed on 2022-10-17 13:28:30 IST

--
-- PostgreSQL database dump complete
--

