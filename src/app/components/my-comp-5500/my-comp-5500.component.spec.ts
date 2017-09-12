import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5500Component } from './my-comp-5500.component';

describe('MyComp5500Component', () => {
  let component: MyComp5500Component;
  let fixture: ComponentFixture<MyComp5500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
