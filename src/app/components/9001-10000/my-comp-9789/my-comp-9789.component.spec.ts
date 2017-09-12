import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9789Component } from './my-comp-9789.component';

describe('MyComp9789Component', () => {
  let component: MyComp9789Component;
  let fixture: ComponentFixture<MyComp9789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
