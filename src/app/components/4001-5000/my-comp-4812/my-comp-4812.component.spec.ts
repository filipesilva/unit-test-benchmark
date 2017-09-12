import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4812Component } from './my-comp-4812.component';

describe('MyComp4812Component', () => {
  let component: MyComp4812Component;
  let fixture: ComponentFixture<MyComp4812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
