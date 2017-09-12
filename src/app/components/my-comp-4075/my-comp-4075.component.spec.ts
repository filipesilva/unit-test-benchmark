import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4075Component } from './my-comp-4075.component';

describe('MyComp4075Component', () => {
  let component: MyComp4075Component;
  let fixture: ComponentFixture<MyComp4075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
