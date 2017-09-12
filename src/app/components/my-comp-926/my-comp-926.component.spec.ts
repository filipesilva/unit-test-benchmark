import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp926Component } from './my-comp-926.component';

describe('MyComp926Component', () => {
  let component: MyComp926Component;
  let fixture: ComponentFixture<MyComp926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
