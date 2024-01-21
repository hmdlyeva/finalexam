import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { delData, getData, postData } from "../../redux/slice/slice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Input } from "@mui/material";
import "./add.scss";
import Navbar from "../../components/navbar/Navbar";
import {Helmet} from "react-helmet";
import Footer from "../../components/homepages/footer/Footer";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required("Required"),
  image: Yup.string().url().required("Required"),
});

const Add = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const [inp, setinp] = useState("");


  let searched = products.filter((p) => p.name.toLowerCase().includes(inp));
  return (
    <section id="add">
          <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="add">
        <Navbar />
        <div className="container">
          <div className="my">
            <div className="add">
              <Formik
                initialValues={{
                  name: "",
                  price: 0,
                  image: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log(values);
                  dispatch(postData(values));
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form className="formm">
                    <Field name="name" />
                    {errors.name && touched.name ? (
                      <p className="err">{errors.name}</p>
                    ) : null}
                    <Field name="price" type="number" />
                    {errors.price && touched.price ? (
                      <p className="err">{errors.price}</p>
                    ) : null}
                    <Field name="image" />
                    {errors.image && touched.image ? (
                      <p className="err">{errors.image}</p>
                    ) : null}
                    <Button type="submit">Add</Button>
                  </Form>
                )}
              </Formik>
            </div>

            <div className="table">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Price</TableCell>
                      <TableCell align="left">Delete</TableCell>
                      <TableCell align="left">
                        <Input
                          placeholder="Search"
                          onChange={(e) => {
                            setinp(e.target.value);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searched
                      ? searched.map((row) => (
                          <TableRow
                            key={row._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row._id}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>

                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">
                              <Button
                                onClick={() => {
                                  dispatch(delData(row._id));
                                }}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      : products.map((row) => (
                          <TableRow
                            key={row._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row._id}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>

                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">
                              <Button>Delete</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Add;
