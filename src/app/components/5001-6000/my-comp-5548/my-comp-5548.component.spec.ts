import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5548Component } from './my-comp-5548.component';

describe('MyComp5548Component', () => {
  let component: MyComp5548Component;
  let fixture: ComponentFixture<MyComp5548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
