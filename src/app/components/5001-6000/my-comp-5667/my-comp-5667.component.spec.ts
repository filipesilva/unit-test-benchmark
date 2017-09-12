import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5667Component } from './my-comp-5667.component';

describe('MyComp5667Component', () => {
  let component: MyComp5667Component;
  let fixture: ComponentFixture<MyComp5667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
