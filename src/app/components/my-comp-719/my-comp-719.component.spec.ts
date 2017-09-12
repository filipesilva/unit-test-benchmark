import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp719Component } from './my-comp-719.component';

describe('MyComp719Component', () => {
  let component: MyComp719Component;
  let fixture: ComponentFixture<MyComp719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
