import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1289Component } from './my-comp-1289.component';

describe('MyComp1289Component', () => {
  let component: MyComp1289Component;
  let fixture: ComponentFixture<MyComp1289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
