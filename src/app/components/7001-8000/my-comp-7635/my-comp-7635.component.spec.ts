import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7635Component } from './my-comp-7635.component';

describe('MyComp7635Component', () => {
  let component: MyComp7635Component;
  let fixture: ComponentFixture<MyComp7635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
