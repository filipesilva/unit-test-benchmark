import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2008Component } from './my-comp-2008.component';

describe('MyComp2008Component', () => {
  let component: MyComp2008Component;
  let fixture: ComponentFixture<MyComp2008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
