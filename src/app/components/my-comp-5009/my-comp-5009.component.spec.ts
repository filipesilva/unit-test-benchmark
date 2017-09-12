import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5009Component } from './my-comp-5009.component';

describe('MyComp5009Component', () => {
  let component: MyComp5009Component;
  let fixture: ComponentFixture<MyComp5009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
