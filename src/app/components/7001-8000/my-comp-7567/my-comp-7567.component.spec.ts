import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7567Component } from './my-comp-7567.component';

describe('MyComp7567Component', () => {
  let component: MyComp7567Component;
  let fixture: ComponentFixture<MyComp7567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
