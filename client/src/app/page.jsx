"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className="py-lg-5">
            <div className="d-flex h-100 align-items-center py-lg-5">
              <div className="my-5">
                <h1 className="fs-1 text-light fw-light mb-3">FORGE<span className="small text-warning fw-normal">db</span></h1>
                <hr className="border-white" />
                <p className="lead text-light">Explore candidate functional variants</p>

                <Form action="explore">
                  <InputGroup className="border-white">
                    <Form.Control className="search-control-transparent fw-light" type="search"  placeholder="Enter RSID" aria-label="Enter RSID" name="rsid" required />
                    <Button variant="outline-secondary" className="search-control-transparent-button position-absolute" style={{right: 0, zIndex: 9999}} type="submit">
                      <i className="bi bi-search"></i>
                      <span className="visually-hidden">Search</span>
                    </Button>
                  </InputGroup>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="bg-light py-5 flex-grow-1">
        <Container>
          <Row>
            <Col>
              <p>FORGEdb is an online tool designed to interpret genetic variants associated with diseases, focusing on variants found in genome-wide association studies (GWAS). Its purpose is to annotate the regulatory genome to identify relevant variants and target genes.</p>
              <p>The platform provides integrated data on individual genetic variants, including associated regulatory elements, transcription factor binding sites, and target genes. This information is derived from a wide range of biological samples to present a thorough regulatory context of each variant at the cellular level. Data forms include Combined Annotation Dependent Depletion (CADD) scores, expression quantitative trait loci (eQTLs), activity-by-contact (ABC) interactions, and transcription factor (TF) motifs.</p>
              <p>Notably, FORGEdb introduces a unique scoring system, the FORGEdb score. This score evaluates the functional importance of genetic variants, aiding researchers in prioritizing variants for functional validation. It uses extensive datasets, including those from ENCODE, Roadmap Epigenomics, and BLUEPRINT consortia. With FORGEdb, researchers can expedite their analysis of genetic loci, potentially accelerating discoveries in disease-associated genetic variants.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
