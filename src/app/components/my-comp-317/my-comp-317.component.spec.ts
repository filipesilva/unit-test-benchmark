import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp317Component } from './my-comp-317.component';

describe('MyComp317Component', () => {
  let component: MyComp317Component;
  let fixture: ComponentFixture<MyComp317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
