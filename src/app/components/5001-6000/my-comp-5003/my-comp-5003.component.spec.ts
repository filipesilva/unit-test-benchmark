import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5003Component } from './my-comp-5003.component';

describe('MyComp5003Component', () => {
  let component: MyComp5003Component;
  let fixture: ComponentFixture<MyComp5003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
