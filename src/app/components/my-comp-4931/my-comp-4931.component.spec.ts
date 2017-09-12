import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4931Component } from './my-comp-4931.component';

describe('MyComp4931Component', () => {
  let component: MyComp4931Component;
  let fixture: ComponentFixture<MyComp4931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
