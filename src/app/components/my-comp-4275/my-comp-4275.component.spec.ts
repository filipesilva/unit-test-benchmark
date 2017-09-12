import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4275Component } from './my-comp-4275.component';

describe('MyComp4275Component', () => {
  let component: MyComp4275Component;
  let fixture: ComponentFixture<MyComp4275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
