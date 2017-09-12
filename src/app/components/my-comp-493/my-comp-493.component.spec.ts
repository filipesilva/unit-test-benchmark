import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp493Component } from './my-comp-493.component';

describe('MyComp493Component', () => {
  let component: MyComp493Component;
  let fixture: ComponentFixture<MyComp493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
