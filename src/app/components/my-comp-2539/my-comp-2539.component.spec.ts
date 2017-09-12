import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2539Component } from './my-comp-2539.component';

describe('MyComp2539Component', () => {
  let component: MyComp2539Component;
  let fixture: ComponentFixture<MyComp2539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
