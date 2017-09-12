import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9403Component } from './my-comp-9403.component';

describe('MyComp9403Component', () => {
  let component: MyComp9403Component;
  let fixture: ComponentFixture<MyComp9403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
