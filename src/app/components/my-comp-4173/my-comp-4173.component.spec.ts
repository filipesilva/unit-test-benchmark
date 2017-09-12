import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4173Component } from './my-comp-4173.component';

describe('MyComp4173Component', () => {
  let component: MyComp4173Component;
  let fixture: ComponentFixture<MyComp4173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
