import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4139Component } from './my-comp-4139.component';

describe('MyComp4139Component', () => {
  let component: MyComp4139Component;
  let fixture: ComponentFixture<MyComp4139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
