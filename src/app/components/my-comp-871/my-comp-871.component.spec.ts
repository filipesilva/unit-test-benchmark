import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp871Component } from './my-comp-871.component';

describe('MyComp871Component', () => {
  let component: MyComp871Component;
  let fixture: ComponentFixture<MyComp871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
