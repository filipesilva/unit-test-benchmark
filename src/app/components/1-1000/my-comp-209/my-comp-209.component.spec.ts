import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp209Component } from './my-comp-209.component';

describe('MyComp209Component', () => {
  let component: MyComp209Component;
  let fixture: ComponentFixture<MyComp209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
