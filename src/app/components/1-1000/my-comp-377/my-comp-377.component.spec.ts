import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp377Component } from './my-comp-377.component';

describe('MyComp377Component', () => {
  let component: MyComp377Component;
  let fixture: ComponentFixture<MyComp377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
