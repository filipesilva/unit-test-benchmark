import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp509Component } from './my-comp-509.component';

describe('MyComp509Component', () => {
  let component: MyComp509Component;
  let fixture: ComponentFixture<MyComp509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
