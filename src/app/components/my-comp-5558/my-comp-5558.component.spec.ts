import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5558Component } from './my-comp-5558.component';

describe('MyComp5558Component', () => {
  let component: MyComp5558Component;
  let fixture: ComponentFixture<MyComp5558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
