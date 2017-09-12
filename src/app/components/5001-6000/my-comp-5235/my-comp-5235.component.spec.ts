import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5235Component } from './my-comp-5235.component';

describe('MyComp5235Component', () => {
  let component: MyComp5235Component;
  let fixture: ComponentFixture<MyComp5235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
