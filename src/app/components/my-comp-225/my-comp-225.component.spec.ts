import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp225Component } from './my-comp-225.component';

describe('MyComp225Component', () => {
  let component: MyComp225Component;
  let fixture: ComponentFixture<MyComp225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
