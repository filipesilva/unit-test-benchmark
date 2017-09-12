import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5046Component } from './my-comp-5046.component';

describe('MyComp5046Component', () => {
  let component: MyComp5046Component;
  let fixture: ComponentFixture<MyComp5046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
