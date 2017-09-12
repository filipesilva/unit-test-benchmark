import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp817Component } from './my-comp-817.component';

describe('MyComp817Component', () => {
  let component: MyComp817Component;
  let fixture: ComponentFixture<MyComp817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
