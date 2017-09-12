import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8491Component } from './my-comp-8491.component';

describe('MyComp8491Component', () => {
  let component: MyComp8491Component;
  let fixture: ComponentFixture<MyComp8491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
