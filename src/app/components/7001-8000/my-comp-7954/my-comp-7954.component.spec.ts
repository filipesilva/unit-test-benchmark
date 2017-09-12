import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7954Component } from './my-comp-7954.component';

describe('MyComp7954Component', () => {
  let component: MyComp7954Component;
  let fixture: ComponentFixture<MyComp7954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
