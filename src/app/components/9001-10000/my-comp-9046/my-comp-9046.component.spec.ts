import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9046Component } from './my-comp-9046.component';

describe('MyComp9046Component', () => {
  let component: MyComp9046Component;
  let fixture: ComponentFixture<MyComp9046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
