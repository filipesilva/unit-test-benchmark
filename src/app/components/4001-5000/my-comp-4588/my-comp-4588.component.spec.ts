import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4588Component } from './my-comp-4588.component';

describe('MyComp4588Component', () => {
  let component: MyComp4588Component;
  let fixture: ComponentFixture<MyComp4588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
