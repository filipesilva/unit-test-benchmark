import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8902Component } from './my-comp-8902.component';

describe('MyComp8902Component', () => {
  let component: MyComp8902Component;
  let fixture: ComponentFixture<MyComp8902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
