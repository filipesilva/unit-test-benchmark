import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6591Component } from './my-comp-6591.component';

describe('MyComp6591Component', () => {
  let component: MyComp6591Component;
  let fixture: ComponentFixture<MyComp6591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
