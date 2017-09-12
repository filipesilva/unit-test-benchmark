import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5410Component } from './my-comp-5410.component';

describe('MyComp5410Component', () => {
  let component: MyComp5410Component;
  let fixture: ComponentFixture<MyComp5410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
