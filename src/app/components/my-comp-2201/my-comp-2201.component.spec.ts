import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2201Component } from './my-comp-2201.component';

describe('MyComp2201Component', () => {
  let component: MyComp2201Component;
  let fixture: ComponentFixture<MyComp2201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
