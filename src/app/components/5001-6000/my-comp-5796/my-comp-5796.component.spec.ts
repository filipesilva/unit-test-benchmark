import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5796Component } from './my-comp-5796.component';

describe('MyComp5796Component', () => {
  let component: MyComp5796Component;
  let fixture: ComponentFixture<MyComp5796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
