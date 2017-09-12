import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2750Component } from './my-comp-2750.component';

describe('MyComp2750Component', () => {
  let component: MyComp2750Component;
  let fixture: ComponentFixture<MyComp2750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
