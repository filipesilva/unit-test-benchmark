import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2785Component } from './my-comp-2785.component';

describe('MyComp2785Component', () => {
  let component: MyComp2785Component;
  let fixture: ComponentFixture<MyComp2785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
