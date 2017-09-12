import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5065Component } from './my-comp-5065.component';

describe('MyComp5065Component', () => {
  let component: MyComp5065Component;
  let fixture: ComponentFixture<MyComp5065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
