import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9218Component } from './my-comp-9218.component';

describe('MyComp9218Component', () => {
  let component: MyComp9218Component;
  let fixture: ComponentFixture<MyComp9218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
