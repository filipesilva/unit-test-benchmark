import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5346Component } from './my-comp-5346.component';

describe('MyComp5346Component', () => {
  let component: MyComp5346Component;
  let fixture: ComponentFixture<MyComp5346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
