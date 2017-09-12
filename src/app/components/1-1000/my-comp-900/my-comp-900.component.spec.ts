import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp900Component } from './my-comp-900.component';

describe('MyComp900Component', () => {
  let component: MyComp900Component;
  let fixture: ComponentFixture<MyComp900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
