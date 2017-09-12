import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2507Component } from './my-comp-2507.component';

describe('MyComp2507Component', () => {
  let component: MyComp2507Component;
  let fixture: ComponentFixture<MyComp2507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
