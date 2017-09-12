import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4836Component } from './my-comp-4836.component';

describe('MyComp4836Component', () => {
  let component: MyComp4836Component;
  let fixture: ComponentFixture<MyComp4836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
