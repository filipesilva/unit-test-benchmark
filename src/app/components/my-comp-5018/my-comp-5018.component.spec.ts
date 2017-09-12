import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5018Component } from './my-comp-5018.component';

describe('MyComp5018Component', () => {
  let component: MyComp5018Component;
  let fixture: ComponentFixture<MyComp5018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
