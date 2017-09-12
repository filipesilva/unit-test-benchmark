import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2808Component } from './my-comp-2808.component';

describe('MyComp2808Component', () => {
  let component: MyComp2808Component;
  let fixture: ComponentFixture<MyComp2808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
