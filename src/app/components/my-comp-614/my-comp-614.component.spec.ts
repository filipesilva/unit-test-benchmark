import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp614Component } from './my-comp-614.component';

describe('MyComp614Component', () => {
  let component: MyComp614Component;
  let fixture: ComponentFixture<MyComp614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
