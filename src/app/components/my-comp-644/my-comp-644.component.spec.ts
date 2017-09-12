import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp644Component } from './my-comp-644.component';

describe('MyComp644Component', () => {
  let component: MyComp644Component;
  let fixture: ComponentFixture<MyComp644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
