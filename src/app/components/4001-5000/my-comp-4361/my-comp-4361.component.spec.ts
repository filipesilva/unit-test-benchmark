import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4361Component } from './my-comp-4361.component';

describe('MyComp4361Component', () => {
  let component: MyComp4361Component;
  let fixture: ComponentFixture<MyComp4361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
