import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7503Component } from './my-comp-7503.component';

describe('MyComp7503Component', () => {
  let component: MyComp7503Component;
  let fixture: ComponentFixture<MyComp7503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
