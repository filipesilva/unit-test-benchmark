import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4258Component } from './my-comp-4258.component';

describe('MyComp4258Component', () => {
  let component: MyComp4258Component;
  let fixture: ComponentFixture<MyComp4258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
