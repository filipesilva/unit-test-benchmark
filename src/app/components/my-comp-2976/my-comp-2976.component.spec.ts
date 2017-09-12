import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2976Component } from './my-comp-2976.component';

describe('MyComp2976Component', () => {
  let component: MyComp2976Component;
  let fixture: ComponentFixture<MyComp2976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
