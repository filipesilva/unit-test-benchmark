import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5946Component } from './my-comp-5946.component';

describe('MyComp5946Component', () => {
  let component: MyComp5946Component;
  let fixture: ComponentFixture<MyComp5946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
