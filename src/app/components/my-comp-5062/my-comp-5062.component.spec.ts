import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5062Component } from './my-comp-5062.component';

describe('MyComp5062Component', () => {
  let component: MyComp5062Component;
  let fixture: ComponentFixture<MyComp5062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
