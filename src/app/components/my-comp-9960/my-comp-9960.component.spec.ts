import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9960Component } from './my-comp-9960.component';

describe('MyComp9960Component', () => {
  let component: MyComp9960Component;
  let fixture: ComponentFixture<MyComp9960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
