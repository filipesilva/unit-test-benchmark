import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2280Component } from './my-comp-2280.component';

describe('MyComp2280Component', () => {
  let component: MyComp2280Component;
  let fixture: ComponentFixture<MyComp2280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
