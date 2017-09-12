import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5527Component } from './my-comp-5527.component';

describe('MyComp5527Component', () => {
  let component: MyComp5527Component;
  let fixture: ComponentFixture<MyComp5527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
