import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp323Component } from './my-comp-323.component';

describe('MyComp323Component', () => {
  let component: MyComp323Component;
  let fixture: ComponentFixture<MyComp323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
