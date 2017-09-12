import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4263Component } from './my-comp-4263.component';

describe('MyComp4263Component', () => {
  let component: MyComp4263Component;
  let fixture: ComponentFixture<MyComp4263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
