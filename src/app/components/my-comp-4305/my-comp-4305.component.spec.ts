import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4305Component } from './my-comp-4305.component';

describe('MyComp4305Component', () => {
  let component: MyComp4305Component;
  let fixture: ComponentFixture<MyComp4305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
