import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2525Component } from './my-comp-2525.component';

describe('MyComp2525Component', () => {
  let component: MyComp2525Component;
  let fixture: ComponentFixture<MyComp2525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
