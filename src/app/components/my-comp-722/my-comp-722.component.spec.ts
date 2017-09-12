import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp722Component } from './my-comp-722.component';

describe('MyComp722Component', () => {
  let component: MyComp722Component;
  let fixture: ComponentFixture<MyComp722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
