import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7637Component } from './my-comp-7637.component';

describe('MyComp7637Component', () => {
  let component: MyComp7637Component;
  let fixture: ComponentFixture<MyComp7637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
