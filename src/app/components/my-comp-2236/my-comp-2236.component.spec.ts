import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2236Component } from './my-comp-2236.component';

describe('MyComp2236Component', () => {
  let component: MyComp2236Component;
  let fixture: ComponentFixture<MyComp2236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
