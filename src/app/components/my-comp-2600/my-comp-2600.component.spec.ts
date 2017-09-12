import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2600Component } from './my-comp-2600.component';

describe('MyComp2600Component', () => {
  let component: MyComp2600Component;
  let fixture: ComponentFixture<MyComp2600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
