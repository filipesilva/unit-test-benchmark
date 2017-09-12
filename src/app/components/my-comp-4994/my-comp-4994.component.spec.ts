import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4994Component } from './my-comp-4994.component';

describe('MyComp4994Component', () => {
  let component: MyComp4994Component;
  let fixture: ComponentFixture<MyComp4994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
