import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7261Component } from './my-comp-7261.component';

describe('MyComp7261Component', () => {
  let component: MyComp7261Component;
  let fixture: ComponentFixture<MyComp7261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
