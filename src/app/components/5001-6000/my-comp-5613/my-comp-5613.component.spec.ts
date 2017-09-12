import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5613Component } from './my-comp-5613.component';

describe('MyComp5613Component', () => {
  let component: MyComp5613Component;
  let fixture: ComponentFixture<MyComp5613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
