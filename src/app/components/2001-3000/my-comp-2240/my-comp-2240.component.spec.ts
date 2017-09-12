import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2240Component } from './my-comp-2240.component';

describe('MyComp2240Component', () => {
  let component: MyComp2240Component;
  let fixture: ComponentFixture<MyComp2240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
