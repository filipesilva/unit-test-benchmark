import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5090Component } from './my-comp-5090.component';

describe('MyComp5090Component', () => {
  let component: MyComp5090Component;
  let fixture: ComponentFixture<MyComp5090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
