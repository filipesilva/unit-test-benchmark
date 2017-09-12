import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2057Component } from './my-comp-2057.component';

describe('MyComp2057Component', () => {
  let component: MyComp2057Component;
  let fixture: ComponentFixture<MyComp2057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
