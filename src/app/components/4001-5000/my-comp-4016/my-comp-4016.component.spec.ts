import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4016Component } from './my-comp-4016.component';

describe('MyComp4016Component', () => {
  let component: MyComp4016Component;
  let fixture: ComponentFixture<MyComp4016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
