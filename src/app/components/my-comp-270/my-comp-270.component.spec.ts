import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp270Component } from './my-comp-270.component';

describe('MyComp270Component', () => {
  let component: MyComp270Component;
  let fixture: ComponentFixture<MyComp270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
