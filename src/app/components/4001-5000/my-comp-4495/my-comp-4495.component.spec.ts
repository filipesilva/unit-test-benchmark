import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4495Component } from './my-comp-4495.component';

describe('MyComp4495Component', () => {
  let component: MyComp4495Component;
  let fixture: ComponentFixture<MyComp4495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
