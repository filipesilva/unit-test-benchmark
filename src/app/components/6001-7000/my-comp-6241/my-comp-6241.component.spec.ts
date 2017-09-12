import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6241Component } from './my-comp-6241.component';

describe('MyComp6241Component', () => {
  let component: MyComp6241Component;
  let fixture: ComponentFixture<MyComp6241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
