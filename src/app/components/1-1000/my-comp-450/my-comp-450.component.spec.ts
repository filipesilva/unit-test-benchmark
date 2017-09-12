import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp450Component } from './my-comp-450.component';

describe('MyComp450Component', () => {
  let component: MyComp450Component;
  let fixture: ComponentFixture<MyComp450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
