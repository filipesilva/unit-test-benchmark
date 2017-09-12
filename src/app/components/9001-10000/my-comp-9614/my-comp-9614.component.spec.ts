import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9614Component } from './my-comp-9614.component';

describe('MyComp9614Component', () => {
  let component: MyComp9614Component;
  let fixture: ComponentFixture<MyComp9614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
