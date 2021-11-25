pragma circom 2.0.0;

template test2(){
	log(2);
    signal input in1;
    signal input in2;
    assert(in1*in2);
}

template test(){
	log(1);
	signal input in1;
  	signal input in2;
  	signal output out;
	component t = test2();
	t.in1 <== in1;
	t.in2 <== in2;
	out <== in1*in2;
}


component main = test();