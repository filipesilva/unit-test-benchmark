import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp170Component } from './my-comp-170.component';

describe('MyComp170Component', () => {
  let component: MyComp170Component;
  let fixture: ComponentFixture<MyComp170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
