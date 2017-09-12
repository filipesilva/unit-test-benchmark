import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2367Component } from './my-comp-2367.component';

describe('MyComp2367Component', () => {
  let component: MyComp2367Component;
  let fixture: ComponentFixture<MyComp2367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
