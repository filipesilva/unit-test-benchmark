import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7107Component } from './my-comp-7107.component';

describe('MyComp7107Component', () => {
  let component: MyComp7107Component;
  let fixture: ComponentFixture<MyComp7107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
