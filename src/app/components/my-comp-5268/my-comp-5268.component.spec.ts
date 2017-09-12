import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5268Component } from './my-comp-5268.component';

describe('MyComp5268Component', () => {
  let component: MyComp5268Component;
  let fixture: ComponentFixture<MyComp5268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
