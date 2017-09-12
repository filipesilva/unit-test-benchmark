import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4720Component } from './my-comp-4720.component';

describe('MyComp4720Component', () => {
  let component: MyComp4720Component;
  let fixture: ComponentFixture<MyComp4720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
