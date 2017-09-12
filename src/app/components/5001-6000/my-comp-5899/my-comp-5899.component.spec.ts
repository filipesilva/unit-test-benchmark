import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5899Component } from './my-comp-5899.component';

describe('MyComp5899Component', () => {
  let component: MyComp5899Component;
  let fixture: ComponentFixture<MyComp5899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
