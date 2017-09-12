import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2873Component } from './my-comp-2873.component';

describe('MyComp2873Component', () => {
  let component: MyComp2873Component;
  let fixture: ComponentFixture<MyComp2873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
