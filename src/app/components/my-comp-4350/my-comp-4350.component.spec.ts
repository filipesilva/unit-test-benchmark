import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4350Component } from './my-comp-4350.component';

describe('MyComp4350Component', () => {
  let component: MyComp4350Component;
  let fixture: ComponentFixture<MyComp4350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
