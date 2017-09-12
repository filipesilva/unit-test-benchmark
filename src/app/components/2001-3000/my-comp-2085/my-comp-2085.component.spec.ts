import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2085Component } from './my-comp-2085.component';

describe('MyComp2085Component', () => {
  let component: MyComp2085Component;
  let fixture: ComponentFixture<MyComp2085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
