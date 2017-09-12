import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4582Component } from './my-comp-4582.component';

describe('MyComp4582Component', () => {
  let component: MyComp4582Component;
  let fixture: ComponentFixture<MyComp4582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
