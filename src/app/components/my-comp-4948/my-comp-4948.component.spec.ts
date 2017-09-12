import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4948Component } from './my-comp-4948.component';

describe('MyComp4948Component', () => {
  let component: MyComp4948Component;
  let fixture: ComponentFixture<MyComp4948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
