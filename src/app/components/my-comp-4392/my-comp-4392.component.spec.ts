import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4392Component } from './my-comp-4392.component';

describe('MyComp4392Component', () => {
  let component: MyComp4392Component;
  let fixture: ComponentFixture<MyComp4392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
