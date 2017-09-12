import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5618Component } from './my-comp-5618.component';

describe('MyComp5618Component', () => {
  let component: MyComp5618Component;
  let fixture: ComponentFixture<MyComp5618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
