import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2005Component } from './my-comp-2005.component';

describe('MyComp2005Component', () => {
  let component: MyComp2005Component;
  let fixture: ComponentFixture<MyComp2005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
