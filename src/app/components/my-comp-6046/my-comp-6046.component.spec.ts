import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6046Component } from './my-comp-6046.component';

describe('MyComp6046Component', () => {
  let component: MyComp6046Component;
  let fixture: ComponentFixture<MyComp6046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
