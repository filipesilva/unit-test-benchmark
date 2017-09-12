import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2279Component } from './my-comp-2279.component';

describe('MyComp2279Component', () => {
  let component: MyComp2279Component;
  let fixture: ComponentFixture<MyComp2279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
