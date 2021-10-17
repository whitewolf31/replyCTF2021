#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void) {
    FILE *in = fopen("circuit.in", "r");
    char *list = malloc(512 * sizeof(char));
    char *p = malloc(100 * sizeof(char));
    int k = 0;
    for (int i = 0; i < 32; i++) {
        fgets(list + i * 16, 100, in);
    }
    list[strlen(list) - 1] = '\0';
    int input = 0;
    short int * apparition = (short int *) calloc(512, sizeof(short int));
    for (int i = 0; i < 32; i++) {
        short int table[9];
        int copy = input;
        int idx = 0;
        while (idx < 9) {
            table[idx++] = copy % 2;
            copy /= 2;
        }
        short int sum = table[4] + table[3] + table[2];
        short int add_c_out = sum / 2;
        short int add_s = sum % 2;
        short int output[9];
        output[2] = add_c_out ^ table[6];
        output[6] = table[5] ^ table[0];
        output[3] = add_s;
        output[0] = output[2] ^ table[8];
        output[1] = table[5];
        output[4] = output[3] | table[0] | !table[5];
        output[5] = table[0];
        output[7] = table[7] & table[1];
        output[8] = output[6] ^ table[8];
        int result = 0;
        int pow_buffer = 1;
        for (int i = 0; i < 9; i++) {
            result = result + pow_buffer * output[i];
            pow_buffer *= 2;
        }
        if (apparition[result]) break;
        apparition[result] = 1;
        input = result;
        p[k++] = list[result];
    }
    printf("%s\n", p);
    return 0;
}