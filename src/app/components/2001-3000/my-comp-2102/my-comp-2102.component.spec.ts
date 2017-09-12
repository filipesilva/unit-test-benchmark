import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2102Component } from './my-comp-2102.component';

describe('MyComp2102Component', () => {
  let component: MyComp2102Component;
  let fixture: ComponentFixture<MyComp2102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
