import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4773Component } from './my-comp-4773.component';

describe('MyComp4773Component', () => {
  let component: MyComp4773Component;
  let fixture: ComponentFixture<MyComp4773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
