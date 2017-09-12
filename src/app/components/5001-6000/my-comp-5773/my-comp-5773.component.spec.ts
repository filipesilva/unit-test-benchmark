import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5773Component } from './my-comp-5773.component';

describe('MyComp5773Component', () => {
  let component: MyComp5773Component;
  let fixture: ComponentFixture<MyComp5773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
