import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp596Component } from './my-comp-596.component';

describe('MyComp596Component', () => {
  let component: MyComp596Component;
  let fixture: ComponentFixture<MyComp596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
