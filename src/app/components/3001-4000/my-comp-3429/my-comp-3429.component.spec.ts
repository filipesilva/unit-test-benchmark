import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3429Component } from './my-comp-3429.component';

describe('MyComp3429Component', () => {
  let component: MyComp3429Component;
  let fixture: ComponentFixture<MyComp3429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
