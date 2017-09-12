import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5148Component } from './my-comp-5148.component';

describe('MyComp5148Component', () => {
  let component: MyComp5148Component;
  let fixture: ComponentFixture<MyComp5148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
