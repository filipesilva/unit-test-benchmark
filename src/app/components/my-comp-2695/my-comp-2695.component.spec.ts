import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2695Component } from './my-comp-2695.component';

describe('MyComp2695Component', () => {
  let component: MyComp2695Component;
  let fixture: ComponentFixture<MyComp2695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
