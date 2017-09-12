import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5426Component } from './my-comp-5426.component';

describe('MyComp5426Component', () => {
  let component: MyComp5426Component;
  let fixture: ComponentFixture<MyComp5426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
