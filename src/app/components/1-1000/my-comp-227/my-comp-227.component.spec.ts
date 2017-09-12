import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp227Component } from './my-comp-227.component';

describe('MyComp227Component', () => {
  let component: MyComp227Component;
  let fixture: ComponentFixture<MyComp227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
