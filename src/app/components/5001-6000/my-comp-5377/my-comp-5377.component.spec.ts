import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5377Component } from './my-comp-5377.component';

describe('MyComp5377Component', () => {
  let component: MyComp5377Component;
  let fixture: ComponentFixture<MyComp5377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
