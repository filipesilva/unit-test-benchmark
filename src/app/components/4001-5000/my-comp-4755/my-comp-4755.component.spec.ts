import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4755Component } from './my-comp-4755.component';

describe('MyComp4755Component', () => {
  let component: MyComp4755Component;
  let fixture: ComponentFixture<MyComp4755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
