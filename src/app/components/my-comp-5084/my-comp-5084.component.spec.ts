import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5084Component } from './my-comp-5084.component';

describe('MyComp5084Component', () => {
  let component: MyComp5084Component;
  let fixture: ComponentFixture<MyComp5084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
