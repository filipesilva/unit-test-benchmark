import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5627Component } from './my-comp-5627.component';

describe('MyComp5627Component', () => {
  let component: MyComp5627Component;
  let fixture: ComponentFixture<MyComp5627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
