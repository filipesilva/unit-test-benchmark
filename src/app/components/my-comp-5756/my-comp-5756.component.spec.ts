import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5756Component } from './my-comp-5756.component';

describe('MyComp5756Component', () => {
  let component: MyComp5756Component;
  let fixture: ComponentFixture<MyComp5756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
