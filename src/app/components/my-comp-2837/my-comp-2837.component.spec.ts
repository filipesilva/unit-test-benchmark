import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2837Component } from './my-comp-2837.component';

describe('MyComp2837Component', () => {
  let component: MyComp2837Component;
  let fixture: ComponentFixture<MyComp2837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
