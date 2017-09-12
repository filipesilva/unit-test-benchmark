import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6122Component } from './my-comp-6122.component';

describe('MyComp6122Component', () => {
  let component: MyComp6122Component;
  let fixture: ComponentFixture<MyComp6122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
