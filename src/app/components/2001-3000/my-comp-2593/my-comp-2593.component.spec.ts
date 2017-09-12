import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2593Component } from './my-comp-2593.component';

describe('MyComp2593Component', () => {
  let component: MyComp2593Component;
  let fixture: ComponentFixture<MyComp2593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
