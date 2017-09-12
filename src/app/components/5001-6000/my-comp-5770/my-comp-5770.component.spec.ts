import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5770Component } from './my-comp-5770.component';

describe('MyComp5770Component', () => {
  let component: MyComp5770Component;
  let fixture: ComponentFixture<MyComp5770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
