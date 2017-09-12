import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp38Component } from './my-comp-38.component';

describe('MyComp38Component', () => {
  let component: MyComp38Component;
  let fixture: ComponentFixture<MyComp38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
