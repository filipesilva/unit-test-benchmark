import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2758Component } from './my-comp-2758.component';

describe('MyComp2758Component', () => {
  let component: MyComp2758Component;
  let fixture: ComponentFixture<MyComp2758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
