import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4732Component } from './my-comp-4732.component';

describe('MyComp4732Component', () => {
  let component: MyComp4732Component;
  let fixture: ComponentFixture<MyComp4732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
