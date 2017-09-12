import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5896Component } from './my-comp-5896.component';

describe('MyComp5896Component', () => {
  let component: MyComp5896Component;
  let fixture: ComponentFixture<MyComp5896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
