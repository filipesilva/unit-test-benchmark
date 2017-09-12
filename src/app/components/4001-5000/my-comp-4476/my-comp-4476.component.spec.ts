import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4476Component } from './my-comp-4476.component';

describe('MyComp4476Component', () => {
  let component: MyComp4476Component;
  let fixture: ComponentFixture<MyComp4476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
