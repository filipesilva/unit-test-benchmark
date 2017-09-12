import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5191Component } from './my-comp-5191.component';

describe('MyComp5191Component', () => {
  let component: MyComp5191Component;
  let fixture: ComponentFixture<MyComp5191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
