import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5871Component } from './my-comp-5871.component';

describe('MyComp5871Component', () => {
  let component: MyComp5871Component;
  let fixture: ComponentFixture<MyComp5871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
