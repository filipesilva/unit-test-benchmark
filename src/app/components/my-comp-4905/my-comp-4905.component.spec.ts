import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4905Component } from './my-comp-4905.component';

describe('MyComp4905Component', () => {
  let component: MyComp4905Component;
  let fixture: ComponentFixture<MyComp4905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
