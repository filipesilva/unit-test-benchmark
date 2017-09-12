import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5393Component } from './my-comp-5393.component';

describe('MyComp5393Component', () => {
  let component: MyComp5393Component;
  let fixture: ComponentFixture<MyComp5393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
