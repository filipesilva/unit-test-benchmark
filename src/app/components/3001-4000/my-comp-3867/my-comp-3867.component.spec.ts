import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3867Component } from './my-comp-3867.component';

describe('MyComp3867Component', () => {
  let component: MyComp3867Component;
  let fixture: ComponentFixture<MyComp3867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
