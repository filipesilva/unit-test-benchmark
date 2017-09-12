import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2266Component } from './my-comp-2266.component';

describe('MyComp2266Component', () => {
  let component: MyComp2266Component;
  let fixture: ComponentFixture<MyComp2266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
