import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp829Component } from './my-comp-829.component';

describe('MyComp829Component', () => {
  let component: MyComp829Component;
  let fixture: ComponentFixture<MyComp829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
