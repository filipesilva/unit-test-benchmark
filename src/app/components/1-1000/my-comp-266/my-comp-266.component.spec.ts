import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp266Component } from './my-comp-266.component';

describe('MyComp266Component', () => {
  let component: MyComp266Component;
  let fixture: ComponentFixture<MyComp266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
