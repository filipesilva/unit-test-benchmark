import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4579Component } from './my-comp-4579.component';

describe('MyComp4579Component', () => {
  let component: MyComp4579Component;
  let fixture: ComponentFixture<MyComp4579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
