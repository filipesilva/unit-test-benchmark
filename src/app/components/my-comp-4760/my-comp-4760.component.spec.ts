import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4760Component } from './my-comp-4760.component';

describe('MyComp4760Component', () => {
  let component: MyComp4760Component;
  let fixture: ComponentFixture<MyComp4760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
