import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3042Component } from './my-comp-3042.component';

describe('MyComp3042Component', () => {
  let component: MyComp3042Component;
  let fixture: ComponentFixture<MyComp3042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
