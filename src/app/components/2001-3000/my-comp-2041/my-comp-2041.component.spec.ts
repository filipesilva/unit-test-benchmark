import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2041Component } from './my-comp-2041.component';

describe('MyComp2041Component', () => {
  let component: MyComp2041Component;
  let fixture: ComponentFixture<MyComp2041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
