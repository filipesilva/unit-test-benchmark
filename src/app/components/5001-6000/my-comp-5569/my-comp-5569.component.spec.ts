import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5569Component } from './my-comp-5569.component';

describe('MyComp5569Component', () => {
  let component: MyComp5569Component;
  let fixture: ComponentFixture<MyComp5569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
