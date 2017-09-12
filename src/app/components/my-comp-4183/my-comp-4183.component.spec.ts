import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4183Component } from './my-comp-4183.component';

describe('MyComp4183Component', () => {
  let component: MyComp4183Component;
  let fixture: ComponentFixture<MyComp4183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
