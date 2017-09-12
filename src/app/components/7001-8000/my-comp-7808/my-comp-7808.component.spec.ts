import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7808Component } from './my-comp-7808.component';

describe('MyComp7808Component', () => {
  let component: MyComp7808Component;
  let fixture: ComponentFixture<MyComp7808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
