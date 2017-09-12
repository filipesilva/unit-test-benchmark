import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5854Component } from './my-comp-5854.component';

describe('MyComp5854Component', () => {
  let component: MyComp5854Component;
  let fixture: ComponentFixture<MyComp5854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
