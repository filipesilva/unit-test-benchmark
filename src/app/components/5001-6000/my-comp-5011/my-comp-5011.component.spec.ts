import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5011Component } from './my-comp-5011.component';

describe('MyComp5011Component', () => {
  let component: MyComp5011Component;
  let fixture: ComponentFixture<MyComp5011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
